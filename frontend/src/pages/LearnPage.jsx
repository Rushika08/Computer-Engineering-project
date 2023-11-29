import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const LearnPage = () => {
  return (
    <div>
      <Header activeHeading={7} />
      <Learn />
      <Footer />
    </div>
  );
};

const Learn = () => {
    const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Learn with EcoSmart</h2>
      <div className="mx-auto space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">How to Use EcoSmart</h3>
          <p className="text-base text-gray-500">
            Welcome to EcoSmart! Here's a quick guide on how to use our website for effective waste management:
          </p>
          <ul className="list-disc pl-6">
            <li>Explore our waste collector advertisements to find reliable partners for waste disposal and recycling.</li>
            <li>Use the contact information or chat option to connect with waste collectors and discuss your requirements.</li>
            <li>Track your waste disposal orders through our easy-to-use tracking system.</li>
            <li>For any assistance, feel free to reach out to our customer support team.</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Services Offered</h3>
          <p className="text-base text-gray-500">
            EcoSmart provides a range of waste management services to meet your needs:
          </p>
          <ul className="list-disc pl-6">
            <li>Regular waste collection and disposal services.</li>
            <li>Recycling programs to promote environmental sustainability.</li>
            <li>Educational resources on waste reduction and responsible disposal.</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Waste Management Tips</h3>
          <p className="text-base text-gray-500">
            Follow these tips for effective waste management at home or your business:
          </p>
          <ul className="list-disc pl-6">
            <li>Separate recyclables from general waste to maximize recycling efforts.</li>
            <li>Reduce waste by opting for eco-friendly products and packaging.</li>
            <li>Properly dispose of hazardous materials at designated collection points.</li>
            <li>Stay informed about local waste regulations and guidelines.</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Learn More</h3>
          <p className="text-base text-gray-500">
            For in-depth knowledge on waste management practices, stay tuned to our blog and educational resources. Together, let's make a positive impact on the environment!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
