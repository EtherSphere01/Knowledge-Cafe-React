import { Suspense, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs></Blogs>
      </Suspense>
    </>
  );
}

export default App;
