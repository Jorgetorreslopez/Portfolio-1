import React from "react";
import styles from "./AboutMe.module.css";
import Header from "@/components/Header/Header";

export default function AboutMe() {
  return (
    <div className={styles.aboutMePage}>
    <Header />
      <div className="bg-space-theme text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-semibold mb-4">About Me</h1>
              <p className="text-lg mb-6">
              Hello (in Spanish), I’m a full-stack software engineer dedicated to enhancing software systems, with a steadfast commitment to crafting user experiences that are not only enjoyable and intuitive but also exceptionally efficient. My expertise lies in the creation of visually captivating web interfaces, achieved through scalable, well-structured code that starts with one question, “Would I use this?” Every technical challenge that comes my way is an opportunity to innovate, making the journey of problem-solving genuinely exhilarating.
              </p>
              <p className="text-lg">
                "You Decide Your Destiny. Your Habits Decide If You Get There Or Not"
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://i.imgur.com/wxHuHwN.jpg"
                alt="Your Name"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
