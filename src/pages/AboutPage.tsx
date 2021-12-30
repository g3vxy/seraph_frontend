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
            hashing algorithms and find the similarity level while producing a
            simple float value.
          </p>
          <p className='text-black dark:text-white'>
            I'm Anıl Berke Sağlam 👨🏻‍💻. I'm the author of this project. This
            project has started as my graduation project. I'm really into
            frontend development (I work{" "}
            <span
              className='underline decoration-wavy decoration-purple-700 text-purple-700 dark:decoration-purple-300 dark:text-purple-300 cursor-pointer'
              onClick={() => {
                window.open("https://www.artistanbul.io/en/");
              }}>
              @artistanbul
            </span>{" "}
            as a frontend developer) and I always wanted to enter the scene of
            lower level, high performance application development.
          </p>
          <p className='text-black dark:text-white'>
            In this very project I wanted to combine those two elements. I'm
            using ReactJS as an UI library to manage all the tedious state
            management stuff, animations etc. Meantime Rust helps us on the
            expensive calculations side of things.
          </p>
        </div>
        <div className='w-5/6 lg:w-2/3 p-4 absolute bottom-16 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-xl flex flex-row justify-between items-center'>
          {ICONS.map(item => {
            return cloneElement(item.icon, {
              onClick: () => {
                window.open(item.link, "_blank");
              },
              key: uniqid(),
              label: item.label
            });
          })}
        </div>
      </motion.div>
    </>
  );
}

export default AboutPage;
