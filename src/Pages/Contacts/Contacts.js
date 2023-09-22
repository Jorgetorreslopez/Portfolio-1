import React from 'react';
import styles from './Contacts.module.css';
import Header from "@/components/Header/Header";

const Contacts = () => {
  return (
    <div className={styles.contactsPage}>
    <Header />
    <div className="bg-space-theme text-white min-h-screen py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Contact Me</h1>
        <p className="text-lg mb-8">
          Feel free to get in touch with me using the contact form or through the provided contact information below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">Email: jorgetorreslopezdev@gmail.com</p>
            <p className="mb-2">Phone: (770) 639-5225</p>
            <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/jorgeeduardotorreslopez/" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
            <p className="mb-2">GitHub: <a href="https://github.com/Jorgetorreslopez" className="text-blue-400 hover:underline">GitHub Profile</a></p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contacts;
