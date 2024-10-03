const express = require("express");
const contact = require("../models/contact");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index")
});

routes.get("/contact",(req,res)=>{
  res.render("contact")
})

routes.get("/about",(req,res)=>{
  res.render("about")
})

routes.get("/history",(req,res)=>{
  res.render("history")
})
routes.get("/team",(req,res)=>{
  res.render("team")
})

routes.get("/gallery",(req,res)=>{
  res.render("gallery")
})

routes.get("/album1", (req, res) => {
    res.render("album1")
});


routes.get("/album2",(req,res)=>{
  res.render("album2")
})

routes.get("/album3",(req,res)=>{
  res.render("album3")
})

routes.get("/gallery",(req,res)=>{
  res.render("gallery")
})


routes.get("/count",(req,res)=>{
  res.render("count")
})


routes.get("/involvement",(req,res)=>{
  res.render("involvement")
})

routes.get("/mission",(req,res)=>{
  res.render("mission")
})



routes.post("/process-contact-form",async(req,res)=>{
  console.log("Form has been submitted")
  console.log(req.body)
  // saving data to database
  try{
     const data=contact.create(req.body)
     console.log(data)
     res.redirect("/")
  }
  catch(e)
  {
    console.log(e)
    res.redirect("/")
  }
})


module.exports = routes;
