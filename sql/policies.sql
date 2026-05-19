ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE mock_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_presence ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select"
ON profiles
FOR SELECT
USING (true);

CREATE POLICY "profiles_insert"
ON profiles
FOR INSERT
WITH CHECK (true);

CREATE POLICY "sessions_select"
ON sessions
FOR SELECT
USING (true);

CREATE POLICY "sessions_insert"
ON sessions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "mock_select"
ON mock_tests
FOR SELECT
USING (true);

CREATE POLICY "mock_insert"
ON mock_tests
FOR INSERT
WITH CHECK (true);

CREATE POLICY "presence_select"
ON live_presence
FOR SELECT
USING (true);

CREATE POLICY "presence_insert"
ON live_presence
FOR INSERT
WITH CHECK (true);

CREATE POLICY "presence_update"
ON live_presence
FOR UPDATE
USING (true);
