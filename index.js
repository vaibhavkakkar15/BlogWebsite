const express = require("express");
const app = express();
const path = require("path");

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

app.listen(3000, () => {
  console.log("Server connected at port 3000");
});
