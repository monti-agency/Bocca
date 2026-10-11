-- Bocca: run this once in Supabase > SQL Editor > New query > Run

create table if not exists public.site_data (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_data enable row level security;

drop policy if exists "anyone can read site data" on public.site_data;
drop policy if exists "admin can insert site data" on public.site_data;
drop policy if exists "admin can update site data" on public.site_data;

create policy "anyone can read site data" on public.site_data
  for select to anon, authenticated using (true);
create policy "admin can insert site data" on public.site_data
  for insert to authenticated with check (true);
create policy "admin can update site data" on public.site_data
  for update to authenticated using (true) with check (true);

-- Public bucket for menu photos (anyone can view, only the admin can upload or delete)
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do nothing;

drop policy if exists "admin can upload menu images" on storage.objects;
drop policy if exists "admin can replace menu images" on storage.objects;
drop policy if exists "admin can delete menu images" on storage.objects;

create policy "admin can upload menu images" on storage.objects
  for insert to authenticated with check (bucket_id = 'menu-images');
create policy "admin can replace menu images" on storage.objects
  for update to authenticated using (bucket_id = 'menu-images');
create policy "admin can delete menu images" on storage.objects
  for delete to authenticated using (bucket_id = 'menu-images');

-- IMPORTANT after running this:
-- 1) Authentication > Users > Add user: create the owner's email + password (this is the admin login).
-- 2) Authentication > Sign In / Providers > turn OFF "Allow new users to sign up",
--    otherwise anyone could register and edit the menu.
