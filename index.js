const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const _ = require("lodash");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const homeStartingContent =
  "With new tech trends being introduced every quarter and information becoming obsolete as technology evolves, it’s now an obligation to stay relevant and learn about the newest technologies, digital industry, social media, and the web in general!. These technology blogs not only embrace high-tech discoveries but also help readers in staying consistently ahead of the curve by determining modern-day tech trends!";

const aboutSection =
  "A blog (a truncation of 'weblog') is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page.";

const contactContent =
  "They explain why a visitor should contact you and describe how you can help to solve your visitors' problems. They include an email and phone number so that the visitors could quickly find the required information. They include a short form that uses fill that will help you understand who's contacting you.";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//array that stores all the posts
let posts = [];

//root route
app.get("/", (req, res) => {
  res.render("home");
});

//blogs route
app.get("/blogs", (req, res) => {
  res.render("blogs", { homeStartingContent, posts });
});

//parameter routing to get specific blog

app.get("/posts/:postId", (req, res) => {
  // console.log("Testing");
  const requestedTitle = _.lowerCase(req.params.postId);

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("show", {
        title: post.title,
        content: post.content,
      });
    }
  });
});



app.get("/about", (req, res) => {
  res.render("about", { aboutSection });
});


//contact us route

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent });
});

//route to add blog

app.get("/compose", (req, res) => {
  res.render("compose");
});

//post request on change in compose route

app.post("/compose", (req, res) => {
  let { newTitle, newBlog } = req.body;
  //object storing all the blogs
  const post = {
    id: uuid(),
    title: newTitle,
    content: newBlog,
  };
  posts.push(post);
  //send user back to root route
  res.redirect("/blogs");
});

app.listen(3000, () => {
  console.log("Server connected at port 3000");
});
