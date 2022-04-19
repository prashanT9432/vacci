const PostModel = require("../model/posts.model")

const getPosts = async (req, res) => {
    try{
        return res.render("Home")
    }catch(err){
        return res.render("not-found", { err })
    }
}

const onSave = (req, res) => res.render("Home")

module.exports = { 
    getPosts, onSave
}