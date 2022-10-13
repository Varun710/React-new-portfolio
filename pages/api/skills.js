import React from "react";

function Skills() {
  return (
    <div>
      <h2 className="text-3xl flex justify-center pb-10 text-[#95790c]">
        Skills
      </h2>

      <div className="languages">
        <div className="lan">
          <h3>Languages</h3>
          <ul>
            <li className="skill_hover">Java</li>
            <li className="skill_hover">Python</li>
            <li className="skill_hover">HTML</li>
            <li className="skill_hover">CSS</li>
            <li className="skill_hover">Javascript</li>
            <li className="skill_hover">SQL</li>
          </ul>
        </div>
      </div>
      <div className="frameworks">
        <h3>Frameworks</h3>
        <ul>
          <li className="skill_hover">React js</li>
          <li className="skill_hover">Next js</li>
          <li className="skill_hover">Flutter</li>
        </ul>
      </div>
      <div className="tools bg-gradient-to-r from-blue-500 to-blue-700 text-black">
        <h3>Tools and Technologies</h3>
        <ul>
          <li className="skill_hover">Amazon Web Services</li>
          <li className="skill_hover">Git</li>
          <li className="skill_hover">Firebase</li>
          <li className="skill_hover">NumPy</li>
          <li className="skill_hover">Pandas</li>
          <li className="skill_hover">Matplotlib</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
