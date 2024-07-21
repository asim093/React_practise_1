import React, { useContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { publicroute } from './routes/router';
import { MyContext } from './pages/context.jsx'; 

function App() {
  // Consume context
  const { dark, setDark } = useContext(MyContext);
  const [name, Setname] = useState("");


  return (
    <div data-theme={dark ? 'dark' : 'light'}>
      <RouterProvider router={publicroute}></RouterProvider>
      
    </div>
  );
}

export default App;
