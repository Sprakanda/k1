const express= require("express")
const hbs=require("hbs")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const Slider=require("./models/slider")

const app=express()


// for body parser
app.use(bodyParser.urlencoded({
  extended:true
}))

//for routes
const routes=require('./routes/main')
app.use('',routes)


//for static 
app.use('/static',express.static("public"))


//(template engine-hbs)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")// for common section like header footer

// db connection
async function connectDB() {
    try {
      await mongoose.connect('mongodb://localhost:27017/kin_nepal');
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }
connectDB();


// Slider.create([
//   {
//      title:'Kin Nepal',
//      subtitle:'for childrens',
//      imageUrl:"/static/images/1kin.jpg"
//   },
//   {
//     title:'Keln Nepal',
//     subtitle:'for womens',
//     imageUrl:"/static/images/gallery1.jpg"
//   },
//   {
//     title:'kon  Nepal',
//     subtitle:'for both',
//     imageUrl:"/static/images/1kin.jpg"
//   }
// ])

//db connection end
  


app.listen(process.env.PORT|5556,()=>
{
    console.log("server started");
})
