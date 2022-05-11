const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/dev_edu');
        console.log('success');
    }catch(e){
        console.log(e);
    }

}
module.exports = {connect};
