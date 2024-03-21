//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lo = require("lodash")
const mongoose = require("mongoose")

const homeStartingContent = "Welcome to The Daily Journal! I believe in the power of sharing, reflecting, and connecting with others through the simple yet profound act of journaling. Whether it's a thought that crossed your mind, a beautiful moment you experienced, or a challenge you're navigating through, your stories deserve a space to be voiced, and what better way to do so than through the written word? On this platform, every story matters, and every voice is heard. Start your journaling journey today and see where it takes you. Happy journaling!";

const app = express();
mongoose.connect("mongodb://localhost:27017/newsArticles")

const postSchema = {
  title: String,
  body: String
}

const Post = mongoose.model("Post", postSchema)

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let allPosts = []

app.get("/", function (req, res) {
  Post.find({}).then(allPosts => {
    res.render("home", { startingContent: homeStartingContent, postsToSend: allPosts })
  })
})

app.get("/posts/:whichPost", function (req, res) {
  let check = lo.lowerCase(req.params.whichPost);
  console.log(check)
  Post.findOne({ title: check }).then(async function (foundPost) {
    if (foundPost) {
      console.log(foundPost.title);
      console.log(foundPost.body);
      const words = foundPost.title.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      const sendTitle = words.join(" ");
      res.render("post", { Title: sendTitle, startingContent: foundPost.body });
    } else {
      console.log("No post found with that title.");
      res.status(404).send("Post not found");
    }
  }).catch(function (err) {
    console.log("error occured")
  })
})

app.get("/contact", function (req, res) {
  res.render("contact", { contactInfo: contactContent })
})

app.get("/about", function (req, res) {
  res.render("about", { aboutInfo: aboutContent })
})

app.get("/compose", function (req, res) {
  res.render("compose")
})

app.post("/compose", async function (req, res) {
  const post = new Post({
    title: req.body.newPost.trim().toLowerCase(),
    body: req.body.postBody
  })
  await post.save()
  console.log("saved")
  res.redirect("/")
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
