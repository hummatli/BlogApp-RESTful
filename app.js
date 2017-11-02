var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express()
    
    
mongoose.connect("mongodb://localhost/blog_app_restful" , { useMongoClient: true })
mongoose.Promise = global.Promise

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Blog App is running...")
})