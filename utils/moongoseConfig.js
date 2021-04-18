const mongoose = require('mongoose')

const options = {
    autoIndex: false, // Don't build indexes
   // reconnectTries: 30, // Retry up to 30 times
   // reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0, //geting rid off the depreciation errors
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    
};


const connect = () => {
 //   mongoose.connect('mongodb+srv://root:root@sriramdb2.ub7qg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options);
    mongoose.connect('mongodb+srv://arun1:testPass123@cluster0.zskuf.mongodb.net/tutorpoint?retryWrites=true&w=majority', options);
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
