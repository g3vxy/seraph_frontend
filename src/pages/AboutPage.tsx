import { motion } from "framer-motion";
import { cloneElement } from "react";
import Header from "../components/Header";
import uniqid from "uniqid";
import { ICONS } from "../etc/constants";

function AboutPage() {
  return (
    <>
      <Header></Header>
      <motion.div
        className='container h-full flex flex-col justify-start items-center'
        key='aboutPage'
        transition={{
          type: "spring"
        }}
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}>
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
          <p className='text-black dark:text-white'>
            This project aims to produce hashes of images with perceptual
            hashing algorithms and find the similarity level with a simple float
            value.
          </p>
          <p className='text-black dark:text-white'>
            I'm Anıl Berke Sağlam 👨🏻‍💻. I'm the author of this project. I started
            this project as my graduation project.
          </p>
          <p className='text-black dark:text-white'>
            Since i have work as a frontend developer
          </p>
        </div>
        <div className='w-5/6 p-4 mt-8 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-xl flex flex-row justify-between items-center'>
          {ICONS.map(item => {
            return cloneElement(item.icon, {
              onClick: () => {
                window.open(item.link, "_blank");
              },
              key: uniqid()
            });
          })}
        </div>
      </motion.div>
    </>
  );
}

export default AboutPage;
