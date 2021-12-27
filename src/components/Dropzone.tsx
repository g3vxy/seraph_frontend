import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import useImageStore from "../stores/ImageStore";

function Dropzone() {
  const [files, setFiles] = useState([]);
  const { setImages } = useImageStore();

  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
    const imageArrays: Array<Uint8Array> = [];
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => alert("file reading was aborted");
      reader.onerror = () => alert("file reading has failed");
      reader.onload = () => {
        const imageArray = new Uint8Array(reader.result as ArrayBuffer);
        imageArrays.push(imageArray);
      };
      reader.readAsArrayBuffer(file);
    });
    setImages(imageArrays);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*"
  });

  const thumbs = files.map((file: any) => (
    <img
      key={file.preview}
      src={file.preview}
      alt='thumbnail of uploaded file'
      className='w-16 h-16'
    />
  ));

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    // @ts-ignore
    <motion.div
      className='flex justify-center mt-4 w-full'
      transition={{
        type: "spring"
      }}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      whileHover={{ scale: 1.1 }}
      {...getRootProps({ onClick: evt => evt.preventDefault() })}>
      <div className='rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800 w-2/3'>
        <div className='m-4'>
          <div className='flex items-center justify-center w-full'>
            <label className='flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 cursor-pointer'>
              <div className='flex flex-col items-center justify-center pt-7'>
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
              </div>
              <input type='file' className='opacity-0' {...getInputProps()} />
            </label>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-4 px-8 pb-4'>
          {thumbs}
        </div>
      </div>
    </motion.div>
  );
}

export default Dropzone;
