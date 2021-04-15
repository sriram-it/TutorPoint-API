const mongoose = require('mongoose')


const connect = () => {
    mongoose.connect('mongodb+srv://root:root@sriramdb2.ub7qg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', function() {
        console.log("ERROR:: Error while Connecting Database")
        setTimeout(connect, 5000)
    })
    db.on('open', function(){
        console.log("INFO::Successfully connected to database")
    })
}

connect();


exports.mongoose = mongoose;
