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

app.listen(3000, ()=> {
    console.log("Server is up and running on 3000")
});