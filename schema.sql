
-- CREATE TABLE logbook_entry (
--     logbook_entry_id UUID PRIMARY KEY,
--     date DATE NOT NULL,
--     timeblock VARCHAR(255) CHECK (timeblock IN ('morning', 'afternoon', 'evening')),
--     dashboarduser_id UUID,
--     FOREIGN KEY (dashboarduser_id) REFERENCES dashboarduser(dashboarduser_id)
-- );

-- CREATE TABLE snippet (
--     snippet_id UUID PRIMARY KEY,
--     label VARCHAR(255) NOT NULL,
--     body VARCHAR(3000) NOT NULL,
--     dashboarduser_id UUID,
--     logbook_entry_id UUID,
--     FOREIGN KEY (dashboarduser_id) REFERENCES dashboarduser(dashboarduser_id),
--     FOREIGN KEY (logbook_entry_id) REFERENCES logbook_entry(logbook_entry_id) ON DELETE SET NULL
-- );

-- CREATE TABLE tag (
--     tag_id UUID PRIMARY KEY,
--     label VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE logbook_entry_tag (
--     logbook_entry_id UUID,
--     tag_id UUID,
--     PRIMARY KEY (logbook_entry_id, tag_id),
--     FOREIGN KEY (logbook_entry_id) REFERENCES logbook_entry(logbook_entry_id),
--     FOREIGN KEY (tag_id) REFERENCES tag(tag_id)
-- );

-- CREATE TABLE snippet_tag (
--     snippet_id UUID,
--     tag_id UUID,
--     PRIMARY KEY (snippet_id, tag_id),
--     FOREIGN KEY (snippet_id) REFERENCES snippet(snippet_id),
--     FOREIGN KEY (tag_id) REFERENCES tag(tag_id)
-- );
-- ABOVE RUN 19/6/2024

-- CREATE TABLE note (
--     note_id UUID PRIMARY KEY,
--     note_body TEXT NOT NULL
--     dashboarduser_id UUID,
--     FOREIGN KEY (dashboarduser_id) REFERENCES dashboarduser(dashboarduser_id),
-- )