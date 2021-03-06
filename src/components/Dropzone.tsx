import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import useImageStore from "../stores/ImageStore";
import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";

function Dropzone() {
  const navigate = useNavigate();
  const { images, setImages, setLoading, loading } = useImageStore();

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true);
    setImages(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
    setLoading(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*"
  });

  const thumbs = images.map((image: any) => (
    <img
      key={uniqid()}
      src={image.preview}
      alt='thumbnail of uploaded file'
      className='w-16 h-16'
    />
  ));

  return (
    // @ts-ignore
    <>
      <div className='flex justify-center mt-4 w-full'>
        <div className='rounded-lg bg-white dark:bg-gray-800 w-2/3'>
          <div className='m-4'>
            <div className='flex items-center justify-center w-full'>
              <label
                className='flex flex-col w-full h-32 md:h-64 justify-center items-center border-4 border-dashed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 cursor-pointer'
                {...getRootProps({ onClick: evt => evt.preventDefault() })}>
                <motion.div
                  className='flex flex-col items-center justify-center pt-7'
                  transition={{
                    type: "spring"
                  }}
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  whileHover={{ scale: 1.1 }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12 text-gray-400 group-hover:text-gray-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>
                    Select a photo
                  </p>
                </motion.div>
                <input type='file' className='opacity-0' {...getInputProps()} />
              </label>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-4 px-8 pb-4 overflow-auto max-h-80 no-scrollbar'>
            {thumbs}
          </div>
        </div>
      </div>
      {
        <button
          disabled={loading || images.length === 0}
          className='bg-gray-600 hover:bg-gray-800 dark:bg-gray-400 hover:dark:bg-gray-200 text-white dark:text-gray-100 hover:dark:text-gray-600 py-2 px-4 rounded disabled:opacity-70 disabled:cursor-not-allowed'
          onClick={() => {
            navigate("/results", {
              state: {
                test: "hey"
              }
            });
          }}>
          Calculate Hash
        </button>
      }
    </>
  );
}

export default Dropzone;
