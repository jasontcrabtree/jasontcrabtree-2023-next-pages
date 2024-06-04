-- Enable the uuid-ossp extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE remoteblogpost (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    slug VARCHAR(64) NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    title VARCHAR(64) NOT NULL,
    published_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(500),
    content TEXT
);

INSERT INTO "remoteblogpost" ( slug,
                               published,
                               title,
                               description,
                               content)
VALUES ( 'hello-world',
         TRUE,
         'hello world',
         'this is my first remote blog post',
         '#hello world with markdown') RETURNING *;

