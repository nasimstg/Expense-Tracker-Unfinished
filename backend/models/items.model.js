const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    description:{ type : String, required : true, unique : true },
    value:{ type : Number, required : true },
});

const Item = mongoose.model('Iteam', itemSchema);


module.exports = Item;