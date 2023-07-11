import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Tabs from "./components/Tabs";

function App() {
  // const [loader, setLoader] = useState(true);
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeList />
      {/* {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )} */}
    </div>
  );
}

export default App;
