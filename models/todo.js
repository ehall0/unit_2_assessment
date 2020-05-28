const {Schema, model} =require('mongoose');

const todoSchema = new Schema ({
    item: String,
    done: {type:Boolean , default:false}
},)


module.exports = model('Todo', todoSchema)