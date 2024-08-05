const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the article
const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL or path to the image
    default: ''   // Default to an empty string if no image is provided
  },
  published_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['published', 'draft', 'archived'],
    default: 'draft'
  }
});

// Create the model from the schema
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
