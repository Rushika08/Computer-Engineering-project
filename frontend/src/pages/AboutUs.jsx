import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const AboutUs = () => {
  return (
    <div>
      <Header activeHeading={6} />
      <About />
      <Footer />
    </div>
  );
};

const About = () => {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
      <div className="mx-auto space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Our Story</h3>
          <p className="text-base text-gray-500">
            EcoSmart was founded with a commitment to making a positive impact on the environment and communities. Our journey began with a shared passion for sustainable waste management and a vision to create a cleaner and greener future for all.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Mission</h3>
          <p className="text-base text-gray-500">
            Our mission at EcoSmart is to provide innovative, eco-friendly waste management solutions that reduce environmental impact and promote a sustainable future. We are dedicated to helping businesses and individuals minimize waste and maximize recycling efforts.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Team</h3>
          <p className="text-base text-gray-500">
            At EcoSmart, we have a passionate and experienced team that shares a common goal – to create a cleaner, healthier planet. Our team includes waste management experts, environmentalists, and dedicated professionals who work tirelessly to make a difference.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          <p className="text-base text-gray-500">
            Feel free to reach out to us through the following contact methods:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: support@ecosmart.lk</li>
            <li>Phone: +94 775 000 838</li>
            <li>Address: Colombo</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Follow Us on Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ecosmart" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Facebook
            </a>
            <a href="https://www.twitter.com/ecosmart" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Twitter
            </a>
            <a href="https://www.instagram.com/ecosmart" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Instagram
            </a>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Visit Our Location</h3>
          <p className="text-base text-gray-500">
            EcoSmart is located at the following address:
          </p>
          <div className="mb-4">
            <iframe
              title="Company Location"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.803921881605!2d79.81500561238633!3d6.921922085314849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1697547974442!5m2!1sen!2slk"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
