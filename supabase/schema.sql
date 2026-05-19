create table if not exists notes (
id bigint generated always as identity primary key,
user_email text,
content text,
created_at timestamp default now()
);

create table if not exists goals (
id bigint generated always as identity primary key,
user_email text,
goal text,
created_at timestamp default now()
);

create table if not exists chat_messages (
id bigint generated always as identity primary key,
user_email text,
message text,
created_at timestamp default now()
);

create table if not exists mock_scores (
id bigint generated always as identity primary key,
user_email text,
mock_name text,
score int,
created_at timestamp default now()
);

alter table notes enable row level security;
alter table goals enable row level security;
alter table chat_messages enable row level security;
alter table mock_scores enable row level security;

create policy "notes_policy"
on notes
for all
using (true);

create policy "goals_policy"
on goals
for all
using (true);

create policy "chat_policy"
on chat_messages
for all
using (true);

create policy "mock_policy"
on mock_scores
for all
using (true);
