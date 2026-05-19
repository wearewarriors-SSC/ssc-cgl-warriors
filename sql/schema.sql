CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =========================================================
-- PROFILES
-- =========================================================

CREATE TABLE IF NOT EXISTS profiles (

    id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    username TEXT UNIQUE NOT NULL,

    device_id TEXT UNIQUE NOT NULL,

    created_at TIMESTAMPTZ
    DEFAULT now()
);

-- =========================================================
-- SUBJECTS
-- =========================================================

CREATE TABLE IF NOT EXISTS subjects (

    id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    name TEXT UNIQUE NOT NULL,

    created_by UUID
    REFERENCES profiles(id)
    ON DELETE CASCADE,

    created_at TIMESTAMPTZ
    DEFAULT now()
);

-- =========================================================
-- DEFAULT SUBJECTS AUTO INSERT
-- =========================================================

INSERT INTO subjects (
    name
)
VALUES
('Mathematics'),
('Reasoning'),
('English'),
('General Awareness')

ON CONFLICT(name)
DO NOTHING;

-- =========================================================
-- SESSIONS
-- =========================================================

CREATE TABLE IF NOT EXISTS sessions (

    id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    user_id UUID
    REFERENCES profiles(id)
    ON DELETE CASCADE,

    subject_id UUID
    REFERENCES subjects(id)
    ON DELETE SET NULL,

    duration INTEGER NOT NULL

    CHECK(
        duration BETWEEN 1 AND 600
    ),

    note TEXT,

    created_at TIMESTAMPTZ
    DEFAULT now()
);

-- =========================================================
-- MOCK TESTS
-- =========================================================

CREATE TABLE IF NOT EXISTS mock_tests (

    id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    user_id UUID
    REFERENCES profiles(id)
    ON DELETE CASCADE,

    tier TEXT NOT NULL,

    score INTEGER NOT NULL

    CHECK(score >= 0),

    total INTEGER NOT NULL

    CHECK(total > 0),

    qa_score INTEGER DEFAULT 0,

    gi_score INTEGER DEFAULT 0,

    el_score INTEGER DEFAULT 0,

    ga_score INTEGER DEFAULT 0,

    cs_qualifying TEXT,

    created_at TIMESTAMPTZ
    DEFAULT now(),

    CHECK(score <= total)
);

-- =========================================================
-- LIVE PRESENCE
-- =========================================================

CREATE TABLE IF NOT EXISTS live_presence (

    user_id UUID PRIMARY KEY

    REFERENCES profiles(id)

    ON DELETE CASCADE,

    current_subject TEXT,

    last_active_tick TIMESTAMPTZ
    DEFAULT now()
);

-- =========================================================
-- INDEXES
-- =========================================================

CREATE INDEX IF NOT EXISTS
idx_sessions_user_created

ON sessions(
    user_id,
    created_at DESC
);

CREATE INDEX IF NOT EXISTS
idx_mock_user_created

ON mock_tests(
    user_id,
    created_at DESC
);

CREATE INDEX IF NOT EXISTS
idx_presence_tick

ON live_presence(
    last_active_tick DESC
);

-- =========================================================
-- RLS
-- =========================================================

ALTER TABLE profiles
ENABLE ROW LEVEL SECURITY;

ALTER TABLE subjects
ENABLE ROW LEVEL SECURITY;

ALTER TABLE sessions
ENABLE ROW LEVEL SECURITY;

ALTER TABLE mock_tests
ENABLE ROW LEVEL SECURITY;

ALTER TABLE live_presence
ENABLE ROW LEVEL SECURITY;

-- =========================================================
-- POLICIES
-- =========================================================

CREATE POLICY "profiles_select"

ON profiles

FOR SELECT

USING (true);

CREATE POLICY "profiles_insert"

ON profiles

FOR INSERT

WITH CHECK (true);

CREATE POLICY "subjects_select"

ON subjects

FOR SELECT

USING (true);

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
