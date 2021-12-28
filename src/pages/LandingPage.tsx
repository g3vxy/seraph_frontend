import { motion } from "framer-motion";
import Dropzone from "../components/Dropzone";
import Header from "../components/Header";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-col justify-center items-center'>
        <motion.div
          className='flex flex-col w-3/4 mx-auto'
          key='landingPageTitle'
          transition={{
            type: "spring"
          }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}>
          <h1 className='text-center text-black dark:text-white font-semibold'>
            Upload and find duplicate in your pictures!
          </h1>
        </motion.div>
        <Dropzone></Dropzone>
      </div>
    </>
  );
}

export default LandingPage;
