import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Varun from "../public/Varun.jpeg";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>
      <Head>
        <title>Varun Raghu Portfolio</title>
        <meta
          name="portfolio"
          content="Portfolio website created by Varun Raghu"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="back font-burtons">
        <section className="intro_section">
          <div className="intro">
            <h1>Hello, my name is Varun.</h1>
            <p class="subtitle">Welcome to my website!</p>
          </div>
        </section>

        {/* About section */}

        <section className="min-h-screen min-w-full" id="about">
          {/* Future idea : logo and dark mode */}

          {/* <nav className="py-10 mb-12 flex justify-between">
            <h1 className="pl-10 text-xl font-burtons text-[#070706]">LOGO</h1>
            <ul className="flex items-center">
              <li className="pr-10">
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
            </ul>
          </nav> */}

          <div className="about text-center">
            <h2 className="text-4xl pt-16 pb-2 text-[#a8540f] font-medium">
              Varun Raghu
            </h2>
            <h3 className="text-2xl text-[#055ca7]">Developer</h3>
            <p className="text-md px-10 pt-2 leading-7 text-gray-700">
              My journey with programming started back in 2018 with an
              artificial intelligence workshop. As an automobile engineer, I was
              always passionate about cars and autonomous driving. After
              attending the workshop, my interest in programming increased and I
              started learning Python.
            </p>
            <p className="text-md px-10 pb-3 leading-7 text-gray-700">
              This led me to learn more about other areas of computer science. I
              learnt languages like Java, Dart, HTML, CSS, JavaScript and
              started applying the concepts in minor projects. Later I decided
              to pursue master’s in computer science. During this program I
              implemented what I learnt for coursework and personal projects.
              Since then, I have been learning various languages and frameworks
              and have done multiple certifications to improve my skillset.
            </p>
          </div>

          {/* Social icons */}

          <div className="social text-5xl flex justify-center gap-20">
            <a
              className="text-[#323435]"
              href="https://www.linkedin.com/in/varun-raghu/"
              target={"_blank"}
            >
              <AiFillLinkedin />
            </a>
            <a
              className="text-[#323435]"
              href="https://github.com/Varun710"
              target={"_blank"}
            >
              <AiFillGithub />
            </a>
            <a
              className="text-[#323435]"
              href="mailto: varunraghu710@gmail.com"
              target={"_blank"}
            >
              <MdAlternateEmail />
            </a>
          </div>
          <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-5 md:h-60 md:w-60">
            <Image src={Varun} layout="fill" objectFit="cover"></Image>
          </div>

          {/* Resume section */}

          <div className="resume pb-16">
            <ul>
              <li>
                <a
                  className="res_button bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md text-lg"
                  href="https://drive.google.com/file/d/12WpuVbpmWPv0ujhglIsvsmBwYtsbXyW2/view?usp=sharing"
                  target={"_blank"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Project section */}

        <section>
          <div className="pro">
            <h2 className="project text-4xl flex justify-center pb-10 text-white">
              Projects
            </h2>

            <div className="App pb-20">
              <motion.div
                layout
                transition={{ layout: { duration: 2, type: "spring" } }}
                onClick={() => setIsOpen3(!isOpen3)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2
                  className="title text-md pb-3 text-xl"
                  layout="position"
                >
                  Personal portfolio
                </motion.h2>

                {isOpen3 && (
                  <motion.div className="content">
                    <p>
                      Built a responsive and interactive personal portfolio
                      using React JS. Created custom animations using framer
                      motion library. Integrated tailwind CSS for better
                      responsiveness and styling. Designed a minimalistic UI for
                      better user navigation. Built a contact form on the
                      website for ease of communication. Hosted the website on
                      Amazon web service (AWS).
                    </p>
                    <p>
                      Technologies used: React JS, Next JS, Framer motion, HTML,
                      CSS, JavaScript, S3 Bucket, Route 53, Certificate Manager,
                      and CloudFront
                    </p>
                    <a href="https://github.com/Varun710" target="_blank">
                      Github
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="App pb-20">
              <motion.div
                layout
                transition={{ layout: { duration: 2, type: "spring" } }}
                onClick={() => setIsOpen(!isOpen)}
                className="card "
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2
                  className="title text-md pb-3 text-xl"
                  layout="position"
                >
                  Fake news detection
                </motion.h2>

                {isOpen && (
                  <motion.div className="content">
                    <p>
                      Adopted NLTK technique to refine the data by implementing
                      various processes such as Tokenization, Lemmatization,
                      Stop words, etc. Extracted individual features from title1
                      and title2 using TF-IDF technique and combined them to get
                      the final feature. Developed predictive models using
                      Logistic regression, Naive Bayes, Multilayer Perceptron
                      Classifier. Predicted whether the data news
                      agree/disagree/unrelated with the fake data news. Enhanced
                      the accuracy of the model by increasing the number of
                      hidden layers. Achieved 99.8% accuracy using Multilayer
                      Perceptron Classifier
                    </p>
                    <p>
                      Technologies used: Python, NumPy, NLTK, Pandas,
                      Scikit-learn
                    </p>
                    <a
                      href="https://github.com/Varun710/Fake-news-detection"
                      target="_blank"
                    >
                      Github
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="App pb-20">
              <motion.div
                layout
                transition={{ layout: { duration: 2, type: "spring" } }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2
                  className="title text-md pb-3 text-xl"
                  layout="position"
                >
                  Twitter Friendship Network Analysis
                </motion.h2>

                {isOpen2 && (
                  <motion.div className="content">
                    <p>
                      Collected data using Twitter API. Created a friendship
                      network with over 500 nodes. Visualized graphs using
                      NetworkX. Compared various network measures and calculated
                      different measures such as degree distribution, clustering
                      coefficient, closeness, and betweenness centrality.
                    </p>
                    <p> Technologies used: Python, NetworkX, Matplotlib</p>
                    <a
                      href="https://github.com/Varun710/Twitter-Friendship-Network-Analysis"
                      target="_blank"
                    >
                      Github
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="App pb-20">
              <motion.div
                layout
                transition={{ layout: { duration: 2, type: "spring" } }}
                onClick={() => setIsOpen4(!isOpen4)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2
                  className="title text-md pb-3 text-xl"
                  layout="position"
                >
                  Student assist app{" "}
                </motion.h2>

                {isOpen4 && (
                  <motion.div className="content">
                    <p>
                      Devised the project using agile methodologies. Supported
                      the entire lifecycle. Gathered the requirements and
                      suggested solution. Coordinated a team of five student and
                      assigned role and responsibilities to each team member.
                      Responsible for design and development of the app. Created
                      both the frontend and backend of the app. Integrated
                      google firebase for authentication using email and
                      password. Deployed and tested the app on both Android and
                      iOS. Wrote project report and documentation. Delivered the
                      app on time.
                    </p>
                    <p>
                      Technologies used: Flutter, Dart, Google Firebase, Android
                      Studio, VSCode
                    </p>
                    <a href="https://github.com/Varun710" target="_blank">
                      Github
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills section */}

        <section className="ski">
          <div>
            <h2 className="text-4xl flex justify-center pb-10 text-[#95790c]">
              Skills
            </h2>

            <div className="skill_list">
              <div className="languages">
                <div className="lan">
                  <h3>Languages</h3>
                  <ul className="list pl-7">
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
                <ul className="list pl-7">
                  <li className="skill_hover">React js</li>
                  <li className="skill_hover">Next js</li>
                  <li className="skill_hover">Flutter</li>
                  <li className="skill_hover">Tailwind CSS</li>
                </ul>
              </div>
              <div className="tools text-black">
                <h3>Tools and Technologies</h3>
                <ul className="list pl-8">
                  <li className="skill_hover">Amazon Web Services</li>
                  <li className="skill_hover">Firebase</li>
                  <li className="skill_hover">NumPy</li>
                  <li className="skill_hover">Pandas</li>
                  <li className="skill_hover">Github</li>
                  <li className="skill_hover">VSCode</li>
                  <li className="skill_hover">Jupyter Notebook</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}

        <section className="contact section" id="contact">
          <div className="contact__div">
            <div className="contact__box">
              <h2 className="contact_title text-3xl pb-5">Let's Talk</h2>

              <form
                action="https://formsubmit.co/varunraghu710@gmail.com"
                method="POST"
                className="contact__form grid"
              >
                <div className="contact__inputs grid">
                  <div className="contact__content">
                    <input
                      type="text"
                      className="contact__input"
                      placeholder="First Name"
                      size="44px"
                      name="First name"
                    ></input>
                  </div>

                  <div className="contact__content">
                    <input
                      type="text"
                      className="contact__input"
                      placeholder="Last Name"
                      size="44px"
                      name="Last name"
                    ></input>
                  </div>

                  <div className="contact__content">
                    <input
                      type="email"
                      className="contact__input"
                      placeholder="Email"
                      size="44px"
                      name="Email"
                    ></input>
                  </div>

                  <div className="contact__content message">
                    <textarea
                      id=""
                      cols="0"
                      rows="3"
                      className="contact__input"
                      placeholder="Message"
                      size="40px"
                      name="Message"
                    ></textarea>
                  </div>
                </div>

                <div className="button_con">
                  <button className="send__button" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
