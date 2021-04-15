var express =  require('express')
const bodyParser = require('body-parser')
var userRouter = require('./routers/UserRouter')


var app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//routers
userRouter.routeConfig(app)

var port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log("Server is up and running on 3000")
});