const{Schema, model} = require("mongoose")
const schema=new Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    nick: {
        type:String
    },
    password:{
        type:String
    } ,
    authorsNick:{
        type:String
    },
    title:{
        type:String
    } ,
    link: {
        type:String
    },
    unixid:{
        type:String
    }

      
})
module.exports=model('Links',schema)