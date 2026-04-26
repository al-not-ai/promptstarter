-- Allow users to delete their own generations
create policy "users can delete own generations"
  on public.generations for delete
  using (auth.uid() = user_id);
