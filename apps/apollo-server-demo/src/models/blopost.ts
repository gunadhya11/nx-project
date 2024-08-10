import mongoose from "mongoose";
const postschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        required: true
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postschema);
export default Post;
