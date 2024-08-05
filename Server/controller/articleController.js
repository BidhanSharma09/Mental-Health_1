const Article = require("../model/articleModel.");

const createArticle = async (req, res) => {
    try {
        const { title, author, content, image } = req.body;

        // Validate input
        if (!title || !author || !author.name || !author.email || !content) {
            return res.status(400).json({
                message: 'Title, author name, author email, and content are required',
            });
        }

        // Create a new article
        const newArticle = new Article({
            title,
            author: {
                name: author.name,
                email: author.email,
            },
            content,
            image,
        });

        await newArticle.save();

        res.status(201).json({
            message: 'Article created successfully',
            article: newArticle,
        });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({
            message: 'Server error. Please try again later.',
        });
    }
};

// Export the controller functions
module.exports = {
    createArticle,
};
