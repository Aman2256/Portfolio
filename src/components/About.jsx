import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        👋 Hey there, I'm Aman Tiwari, a passionate full-stack developer. who believes in the power of hard work and smart strategies. 
         I'm all about crafting seamless digital  experiences from front-end finesse to back-end functionality. My code is a blend of innovation and efficiency,
         and I really enjoy making difficult problems into simple and smart solutions. 
        </p>

        <br />

        <p className="text-xl">
        Everyone makes mistakes; what truly matters is how you deal with them.
        Smooth teamwork and open communication are the cornerstones of success. 
        I focus on creating a supportive environment where ideas flow freely and everyone's input is valued.
        Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
