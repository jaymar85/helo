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
        const postsTitles = await db.posts.getPostsByTitle(`${title}`)
        res.status(200).send(postsTitles);
    }
}