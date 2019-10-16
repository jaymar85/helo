const bcrypt = require("bcryptjs");

module.exports = {
    getSession: (req, res) => {
        if(req.session.user) {
            res.status(200).json(req.session.user);
        } else {
            res.sendStatus(200);
        }
    },
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const existingUser = await db.auth.getUser(username); 
        if(existingUser[0]) {
            return res.status(409).send("Username taken");
        } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registerUser = await db.auth.registerUser(username, hash)
        const user = registerUser[0]; 
        req.session.user = { 
            user_id: user.user_id,
            username: user.username,
            user_image: registerUser[0].user_image
        }
        res.status(200).json(req.session.user); 
        };    
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const findUser = await req.app.get('db').auth.getUser(username);
        const user = findUser[0];
        if(!user) {
            return res.status(401).json("Username incorrect");
        } else {
            const authorized = bcrypt.compareSync(password, user.hash);
            if(!authorized) {
                return res.status(403).json("Password incorrect");
            } else {
                req.session.user = {
                    user_id: user.user_id,
                    username: user.username,
                    user_image: user[0].user_image
                }
                return res.status(200).json(req.session.user);
            }   
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200).json("You have logged out!")
    }
}