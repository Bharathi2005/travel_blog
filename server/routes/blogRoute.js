const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

// Middleware to get blog by ID
async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Cannot find blog" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.blog = blog;
  next();
}

//get blog
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get blog by id
router.get("/:id", getBlog, (req, res) => {
  res.json(res.blog);
});

//Post blog
router.post("/", async (req, res) => {
  const { title, img, location, desc } = req.body;

  const blog = new Blog({
    title,
    img,
    location,
    desc,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(400).json({ message: error.message });
  }
});

//Update
router.put("/:id", getBlog, async (req, res) => {
  const { title, img, location, desc } = req.body;

  if (title) res.blog.title = title;
  if (img) res.blog.img = img;
  if (location) res.blog.location = location;
  if (desc) res.blog.desc = desc;

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(400).json({ message: error.message });
  }
});

//delete
router.delete("/:id", getBlog, async (req, res) => {
  try {
    await res.blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
