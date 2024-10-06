// routes/blogs.js

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

// @route   GET /api/blogs
// @desc    Get all blogs
// @access  Public
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/blogs/:id
// @desc    Get a single blog by ID
// @access  Public
router.get("/:id", getBlog, (req, res) => {
  res.json(res.blog);
});

// @route   POST /api/blogs
// @desc    Create a new blog
// @access  Public
router.post("/", async (req, res) => {
  const { title, img, location, content } = req.body;

  const blog = new Blog({
    title,
    img,
    location,
    content,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/blogs/:id
// @desc    Update a blog
// @access  Public
router.put("/:id", getBlog, async (req, res) => {
  const { title, img, location, content } = req.body;

  if (title) res.blog.title = title;
  if (img) res.blog.img = img;
  if (location) res.blog.location = location;
  if (content) res.blog.content = content;

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/blogs/:id
// @desc    Delete a blog
// @access  Public
router.delete("/:id", getBlog, async (req, res) => {
  try {
    await res.blog.remove();
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
