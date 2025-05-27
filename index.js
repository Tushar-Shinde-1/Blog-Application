import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid"; 
const app=express();
const port=3001;
let posts=[];
app.use(bodyParser.urlencoded(
    {
        extended:true
    }
));
app.use(express.static("public"));
app.get("/",(req,res)=>
{
res.render("index.ejs");
});



app.post("/submitt",(req,res)=>
{   const blog  = req.body.blog;
    const heading=req.body.title;
     
    console.log("Received Content:", blog);
    console.log("Received Content:", heading);
    if(blog&&heading){
       const id=uuidv4();
        
       posts.push({id,title:heading,content:blog});
       res.redirect("/submitt");

    }
    else
    {
        res.render("index.ejs");
    }
});
app.get("/submitt",(req,res)=>
{
    res.render("submit.ejs", { posts});
});

app.post("/delete",(req,res)=>
{
    const id=req.body.id;
    console.log("Deleting post with id:", id);
    posts=posts.filter(post=>post.id!==id);
    res.redirect("/submitt");
});
app.get("/edit",(req,res)=>
{  const edit=req.query.id;
    console.log("Deleting post with id:", edit);
    const post=posts.find(post=>post.id==edit);
    if(post)
    {
        res.render("edit.ejs",{post});
    }
    else
    {
        res.redirect("/submitt");
    }
});
app.post("/update",(req,res)=>
{
    const id=req.body.id;
    const title=req.body.title;
    const content=req.body.content;
    console.log("Updating post with id:", id);
    const post=posts.find(post=>post.id==id);
    if(post)
    {
        post.title=title;
        post.content=content;
        res.redirect("/submitt");
    }
    
})
app.listen(port,()=>
{
    console.log(`server is running on port ${port}`)
});