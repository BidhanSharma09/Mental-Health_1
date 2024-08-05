import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Healthyliving = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Healthy Living
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Introduction
          </h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGws7vSxJ7MrpiIMR40s3G7HvyKIilhV8XWA&s" // Replace with your image path
            alt="Introduction to Healthy Living"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Healthy living is all about making choices that promote physical, mental, and emotional well-being. It involves adopting habits that improve your overall health and help prevent diseases. This guide provides tips and strategies to help you live a healthier life.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Nutrition
          </h2>
          <img
            src="/images/nutrition.jpg" // Replace with your image path
            alt="Nutrition"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Eating a balanced diet is crucial for maintaining good health. Include a variety of fruits, vegetables, whole grains, and lean proteins in your meals. Limit the intake of processed foods, sugars, and unhealthy fats. Staying hydrated by drinking plenty of water is also essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Exercise
          </h2>
          <img
            src="/images/exercise.jpg" // Replace with your image path
            alt="Exercise"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Regular physical activity helps improve cardiovascular health, strengthen muscles, and boost mental health. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week, along with muscle-strengthening exercises on two or more days a week.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Mental Health
          </h2>
          <img
            src="/images/mental-health.jpg" // Replace with your image path
            alt="Mental Health"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Mental well-being is just as important as physical health. Practice stress management techniques such as meditation, deep breathing exercises, and mindfulness. Ensure you get adequate sleep and make time for hobbies and activities that bring you joy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Preventive Healthcare
          </h2>
          <img
            src="/images/preventive-healthcare.jpg" // Replace with your image path
            alt="Preventive Healthcare"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Regular check-ups and screenings can help detect potential health issues early. Follow your healthcare provider’s recommendations for vaccinations and screenings. Don't hesitate to seek medical advice if you have any concerns about your health.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Healthy Habits
          </h2>
          <img
            src="/images/healthy-habits.jpg" // Replace with your image path
            alt="Healthy Habits"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Avoid smoking, limit alcohol consumption, and stay away from recreational drugs. Practice good hygiene, such as washing your hands regularly and brushing your teeth twice a day. Building and maintaining healthy relationships also contributes to overall well-being.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Conclusion
          </h2>
          <img
            src="/images/conclusion.jpg" // Replace with your image path
            alt="Conclusion"
            className="w-full h-auto mb-4 rounded-lg object-cover"
          />
          <p className="text-lg text-gray-600">
            Healthy living is a lifelong commitment that involves making daily choices to improve your physical and mental health. By adopting a healthy lifestyle, you can increase your quality of life and reduce the risk of chronic diseases. Start small and gradually incorporate these tips into your routine for lasting benefits.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Healthyliving;
