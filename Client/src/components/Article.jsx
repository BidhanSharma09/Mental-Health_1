import React from 'react';

const StaticArticle = () => {
  const articles = [
    {
      title: "The Importance of  Health Awareness",
      author: "John Doe",
      date: "July 20, 2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXXQf_8eoi-__qCpAHiVys1qRD1XMqu0WJA&s",

      
      content: `
        Mental health is an essential part of overall well-being. It encompasses a range of conditions such as depression, anxiety, and stress, affecting how we think, feel, and act.

        In today's fast-paced world, it is crucial to raise awareness about mental health issues. By understanding and recognizing the signs, we can help ourselves and others seek appropriate support and treatment.

        Promoting mental health awareness reduces stigma and encourages people to talk openly about their experiences. Together, we can create a supportive community where everyone feels valued and understood.
      `,
    },
    {
      title: "Understanding Nutrition and Wellness",
      author: "Jane Smith",
      date: "July 19, 2024",
      image: "data:image/jpeg;base64,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",

      content: `
        Nutrition plays a vital role in maintaining good health and preventing diseases. A balanced diet provides essential nutrients that our bodies need to function properly.

        By making informed dietary choices, we can improve our overall health and well-being. It is important to incorporate a variety of foods and maintain a healthy lifestyle.

        Understanding nutrition and wellness helps us make better decisions about our health, leading to a more active and fulfilling life.
      `,
    },
    {
      title: "Exercise and Mental Health Benefits",
      author: "Emily Johnson",
      date: "July 18, 2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsqSbzz7ZX6k_VLrDaEMQcECVgGdBvZc_cQ&s",
      content: `
        Regular exercise is not only good for physical health but also has significant benefits for mental health. It can help reduce symptoms of depression and anxiety and improve overall mood.

        Engaging in physical activity releases endorphins, which are natural mood lifters. Incorporating exercise into our daily routine can lead to improved mental and emotional well-being.

        Whether it's a walk in the park or a full workout session, staying active is a key component of a healthy lifestyle.
      `,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      {articles.map((article, index) => (
        <article key={index} className="bg-white shadow-lg rounded-lg mb-8 p-4">
          <header className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <div className="text-gray-600 text-sm">
              <span>By {article.author}</span> | <span>{article.date}</span>
            </div>
          </header>
          {article.image && (
            <figure className="mb-4">
              <img src={article.image} alt={article.title} className="w-full h-auto rounded" />
            </figure>
          )}
          <section className="text-lg leading-relaxed text-gray-800">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </section>
        </article>
      ))}
    </div>
  );
};

export default StaticArticle;