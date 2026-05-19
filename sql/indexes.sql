CREATE INDEX idx_sessions_user_created
ON sessions(user_id, created_at DESC);

CREATE INDEX idx_mock_user_created
ON mock_tests(user_id, created_at DESC);

CREATE INDEX idx_presence_tick
ON live_presence(last_active_tick DESC);
