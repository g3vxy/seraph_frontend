import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const createRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='*'
          element={
            <div className='w-full h-full flex justify-center items-center'>
              <p>404 not found. 😞</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default createRoutes;
