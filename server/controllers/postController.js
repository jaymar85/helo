module.exports = {
    getPosts: async (req, res) => {
        const {user_id} = req.session.user;
        const db = req.app.get('db');
        const userPosts = await db.posts.get_Posts(user_id)
        res.status(200).send(userPosts);
    },
    getPostsByTitle: async (req, res) => {
        const {title} = req.query;
        const db = req.app.get('db');
        const postsTitles = await db.posts.get_Posts_ByTitle(`${title}%`)
        res.status(200).send(postsTitles);
    },
    addPost: async (req, res) => {
        const {title, post_image, content} = req.body; 
        const {user_id} = req.session.user; 
        const db = req.app.get('db');
        const newPost = await db.posts.add_Post(user_id, title, post_image, content)  
            .then(posts => {
                res.status(200).send(newPost);
            })
            .catch(err => {
                res.status(409).send('Please provide a title or content')
            });
    }
}