const mongoose = require("mongoose");
const schema = mongoose.Schema;

let recipeSchema = new schema({
    title: String,
    content: String,
    image: String,
    auther: String
})
module.exports = mongoose.model('recipes', recipeSchema);
