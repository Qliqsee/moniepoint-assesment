import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Main from "./Components/Main";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return <SmoothScroll>{loading ? <Loader /> : <Main />}</SmoothScroll>;
}

export default App;
