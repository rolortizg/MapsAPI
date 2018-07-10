const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restSchema = new Schema({
    name:String,
    location:{
        type:{
            type:String,
            default:'Point',
        },
        address:String,
        coordinates:[{
            type:Number
        }]
    }
})


module.exports = mongoose.model("Restaurant", restSchema);