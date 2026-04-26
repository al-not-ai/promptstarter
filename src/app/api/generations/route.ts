import { createClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const url = new URL(req.url);
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "20", 10), 200);
  const profileId = url.searchParams.get("profileId");

  let query = supabase
    .from("generations")
    .select("id, tool_id, variable_values, created_at, profile_id")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (profileId) {
    query = query.eq("profile_id", profileId);
  }

  const toolId = url.searchParams.get("toolId");
  if (toolId) {
    query = query.eq("tool_id", toolId);
  }

  const { data, error } = await query;
  if (error) return new Response("Error", { status: 500 });
  return Response.json(data ?? []);
}

export async function DELETE(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  let ids: unknown;
  try {
    ({ ids } = await req.json());
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  if (!Array.isArray(ids) || ids.length === 0) {
    return new Response("Bad request: ids must be a non-empty array", { status: 400 });
  }

  const stringIds = ids.filter((id): id is string => typeof id === "string");
  if (stringIds.length !== ids.length) {
    return new Response("Bad request: all ids must be strings", { status: 400 });
  }

  // The user_id = user.id check in the where clause ensures users can only
  // delete their own rows even without an exhaustive pre-check.
  const { error } = await supabase
    .from("generations")
    .delete()
    .in("id", stringIds)
    .eq("user_id", user.id);

  if (error) return new Response("Error", { status: 500 });
  return new Response(null, { status: 204 });
}
