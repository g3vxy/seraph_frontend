import { useEffect, useState } from "react";
import Header from "../components/Header";
import useImageStore from "../stores/ImageStore";
import useWasm from "../hooks/useWasm";
import LoadingPage from "./LoadingPage";
import Result from "../components/Result";
import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const { images } = useImageStore();
  const [files, setFiles] = useState([]);
  const { error, loading, initialize, wasmInstance } = useWasm();
  const navigate = useNavigate();

  useEffect(() => {
    if (images.length === 0) {
      navigate("/");
    }

    async function loadWasm() {
      await initialize();
    }
    loadWasm();
    const filesArray: Array<any> = [];
    images.forEach((image: any) => {
      const reader = new FileReader();

      reader.onabort = () => alert("file reading was aborted");
      reader.onerror = () => alert("file reading has failed");
      reader.onload = () => {
        const imageArray = new Uint8Array(reader.result as ArrayBuffer);
        filesArray.push(imageArray);
      };
      reader.readAsArrayBuffer(image);
    });
    setFiles(filesArray as any);
  }, []);

  useEffect(
    () => () => {
      images.forEach((image: any) => URL.revokeObjectURL(image.preview));
    },
    [images]
  );

  if (loading) return <LoadingPage />;
  if (error) {
    return <>"An error has occurred"</>;
  }

  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-col justify-center items-center mt-8'>
        <div className='flex flex-row flex-wrap justify-center items-center gap-4 overflow-auto h-full w-full no-scrollbar'>
          {images.map((image, index) => {
            console.log(`%c${index + 1}/${images.length}`, "color:lightblue");
            if (index + 1 === images.length) {
              console.log(
                "%cCalculations are done!",
                "color:lightgreen; font-size:14px;"
              );
              console.log(
                "%cLoading everything to memory.",
                "color:white; font-size:14px;"
              );
            }
            const hash = wasmInstance?.get_hash(files[index]);
            return (
              // @ts-ignore
              <Result preview={image.preview} hash={hash} key={uniqid()} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ResultPage;
