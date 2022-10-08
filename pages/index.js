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
    <div className={styles.container}>
      <Head>
        <title>Varun Raghu Portfolio</title>
        <meta
          name="portfolio"
          content="Portfolio website created by Varun Raghu"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="back px-10 font-burtons">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Varun Raghu</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="about text-center p-8">
            <h2 className="text-4xl py-3 text-[#596e79] font-medium">
              Varun Raghu
            </h2>
            <h3 className="text-2xl py-2 text-[#235784]">Developer</h3>
            <p className="text-md pt-5 leading-7 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              id consequuntur sapiente aperiam hic? Quidem eligendi repellat
              provident illum consequatur hic illo reiciendis officia id.
              Libero, reprehenderit architecto! Quod, natus?
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-20 pb-3 text-gray-800">
            <a
              href="https://www.linkedin.com/in/varun-raghu/"
              target={"_blank"}
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Varun710" target={"_blank"}>
              <AiFillGithub />
            </a>
            <a href="mailto: varunraghu710@gmail.com" target={"_blank"}>
              <MdAlternateEmail />
            </a>
          </div>
          <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-5 md:h-60 md:w-60">
            <Image src={Varun} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="resu pb-10">
            <ul>
              <li>
                <a
                  className="res_buton bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md text-lg"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="pro">
            <h2 className="project text-2xl flex justify-center pb-10 text-[#95790c]">
              Projects
            </h2>
            <div className="App pb-20">
              <motion.div
                layout
                transition={{ layout: { duration: 2, type: "spring" } }}
                onClick={() => setIsOpen(!isOpen)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2 className="title text-md pb-3" layout="position">
                  Fake news classification
                </motion.h2>

                {isOpen && (
                  <motion.div className="content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Alias laudantium saepe eius facilis magni veritatis
                      libero, sit quas obcaecati, modi voluptatem repellendus,
                      pariatur quo ipsam repudiandae fuga quasi sequi soluta?
                    </p>
                    <a href="https://github.com/" target="_blank">
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
                <motion.h2 className="title text-md pb-3" layout="position">
                  Twitter Friendship Network Analysis
                </motion.h2>

                {isOpen2 && (
                  <motion.div className="content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Alias laudantium saepe eius facilis magni veritatis
                      libero, sit quas obcaecati, modi voluptatem repellendus,
                      pariatur quo ipsam repudiandae fuga quasi sequi soluta?
                    </p>
                    <a href="https://github.com/" target="_blank">
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
                onClick={() => setIsOpen3(!isOpen3)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <motion.h2 className="title text-md pb-3" layout="position">
                  Personal portfolio
                </motion.h2>

                {isOpen3 && (
                  <motion.div className="content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Alias laudantium saepe eius facilis magni veritatis
                      libero, sit quas obcaecati, modi voluptatem repellendus,
                      pariatur quo ipsam repudiandae fuga quasi sequi soluta?
                    </p>
                    <a href="https://github.com/" target="_blank">
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
                <motion.h2 className="title text-md pb-3" layout="position">
                  Student assist app{" "}
                </motion.h2>

                {isOpen4 && (
                  <motion.div className="content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Alias laudantium saepe eius facilis magni veritatis
                      libero, sit quas obcaecati, modi voluptatem repellendus,
                      pariatur quo ipsam repudiandae fuga quasi sequi soluta?
                    </p>
                    <a href="https://github.com/" target="_blank">
                      Github
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="ski">
          <div>
            <h2 className="text-2xl flex justify-center pb-10 text-[#95790c]">
              Skills
            </h2>

            <div className="languages">
              <div className="lan">
                <h3>Languages</h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div className="frameworks">
              <h3>Frameworks</h3>
              <ul>
                <li>React js</li>
                <li>Next js</li>
                <li>Flutter</li>
              </ul>
            </div>
            <div className="tools bg-gradient-to-r from-blue-500 to-blue-700 text-black">
              <h3>Tools and Technologies</h3>
              <ul>
                <li>Amazon Web Services</li>
                <li>Git</li>
                <li>Firebase</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="foot pt-8"></footer>
      </main>
    </div>
  );
}
