import { motion } from "framer-motion";
import { useEffect } from "react";
import Dropzone from "../components/Dropzone";
import Header from "../components/Header";
import useWasm from "../hooks/useWasm";
import useImageStore from "../stores/ImageStore";

function LandingPage() {
  const { error, loading, initialize, wasmInstance } = useWasm();
  const { images } = useImageStore();

  useEffect(() => {
    async function loadWasm() {
      await initialize();
    }
    loadWasm();
  }, []);

  if (loading) return <>"Loading..."</>;
  if (error) {
    return <>"An error has occurred"</>;
  }

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
          animate={{ opacity: 1, translateY: 0 }}>
          <h1 className='text-center text-black dark:text-white font-semibold'>
            Upload and find duplicate in your pictures!
          </h1>
        </motion.div>
        <Dropzone></Dropzone>
        <button
          className='mt-8 bg-gray-600 hover:bg-gray-800 dark:bg-gray-400 hover:dark:bg-gray-200 text-white dark:text-gray-100 hover:dark:text-gray-600 py-2 px-4 rounded'
          onClick={() => {
            try {
              wasmInstance?.read_images_web(images[0]);
            } catch (error) {
              console.error(error);
            }
          }}>
          Test
        </button>
      </div>
    </>
  );
}

export default LandingPage;
