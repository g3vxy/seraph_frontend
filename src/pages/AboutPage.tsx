import { motion } from "framer-motion";
import Header from "../components/Header";

function AboutPage() {
  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-col justify-center items-center'>
        <motion.div
          className='flex flex-col w-2/3 mx-auto'
          key='landingPageTitle'
          transition={{
            type: "spring"
          }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}></motion.div>
      </div>
    </>
  );
}

export default AboutPage;
