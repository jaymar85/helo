-- User Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    hash TEXT NOT NULL
);

-- Get user session and check if username exist
SELECT * FROM users
WHERE username = $1;

-- Register
INSERT INTO users (username, hash)
VALUES ($1, $2)
RETURNING * ;


-- Post Table
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL
    post_image TEXT
    content VARCHAR(150) NOT NULL
    user_id INTEGER NOT NULL REFERENCES users(user_id)
);

-- Get posts
SELECT * FROM posts p
INNER JOIN users u
ON u.user_id = p.user_id;

-- Create a posts
INSERT INTO posts
(user_id, title, post_image, content)
VALUES
($1, $2, $3, $4)
RETURNING *;

-- Search for post by title
SELECT p.title, p.post_image, p.content, p.user_id 
FROM posts p
INNER JOIN users u 
ON p.user_id = u.user_id
WHERE p.title ILIKE $1;
