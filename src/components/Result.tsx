import { motion } from "framer-motion";
import uniqid from "uniqid";

type ResultProps = {
  preview: string;
  hash: Uint8Array;
};

function Result({ preview, hash }: ResultProps) {
  return (
    <div className='w-full md:w-1/3 xl:w-1/4 h-16 flex flex-row justify-center items-center gap-2'>
      <img src={preview} className='h-16 w-16 object-cover'></img>
      <input
        disabled={true}
        value={hash.join("")}
        className='rounded h-2/4 pl-2 text-black dark:text-white'></input>
    </div>
  );
}

export default Result;
