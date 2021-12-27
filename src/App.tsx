import createRoutes from "./etc/routes";

function App() {
  const routes = createRoutes();
  return (
    <div className='flex flex-col items-center w-screen h-screen bg-white dark:bg-gray-800 overflow-hidden'>
      {routes}
    </div>
  );
}

export default App;
