import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Main from "./Components/Main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Main />}</>;
}

export default App;
