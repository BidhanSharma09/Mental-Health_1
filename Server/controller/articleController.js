const Article = require("../model/articleModel.");

const createArticle = async (req, res) => {
    try {
        const { title, author, content, image } = req.body;

        if (!title || !author || !author.name || !author.email || !content) {
            return res.status(400).json({
                message: 'Title, author name, author email, and content are required',
            });
        }

        const newArticle = new Article({
            title,
            author: {
                name: author.name,
                email: author.email,
            },
            content,
            image,
            status: 'published' // Set the default status to 'draft'
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

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({ status: 'published' }); // Fetch only published articles
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({
            message: 'Server error. Please try again later.',
        });
    }
};

module.exports = {
    createArticle,
    getArticles,
};
