INSERT INTO posts
(user_id, title, post_image, content)
VALUES
($1, $2, $3, $4)
RETURNING * ;