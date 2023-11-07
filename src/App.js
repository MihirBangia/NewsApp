import { useEffect, useState } from "react";
import "./App.css";
import DrawerAppBar from "./categories/categories";
import urls from "./urls/url";
import axios from "axios";
import ActionAreaCard from './card/card'
function App() {
  let [allnewsdata, setallnewsdata] = useState([]);

  const getallnewsdata = async () => {
    let { data } = await axios.get(`${urls.everything}/cnn.json`);
    setallnewsdata(data);
  };

  const getTopHeadlines = async (category, country) =>{
    let { data } = await axios.get(`${urls.top}${category}/${country}.json`);
    setallnewsdata(data);
  }

  useEffect(() => {
    getallnewsdata();
  }, []);


  return (
    <div className="App">
     <DrawerAppBar getTopHeadlines={getTopHeadlines} getallnewsdata={getallnewsdata}/>
      <ActionAreaCard allnewsdata={allnewsdata}/>
    </div>
  );
}

export default App
