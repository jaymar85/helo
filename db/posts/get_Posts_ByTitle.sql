SELECT p.title, p.post_image, p.content, p.user_id 
FROM posts p
INNER JOIN users u 
ON p.user_id = u.user_id
WHERE p.title ILIKE $1;