import { useEffect, useState } from "react";
import "./App.css";
import DrawerAppBar from "./categories/categories";
import urls from "./urls/url";
import axios from "axios";
import ActionAreaCard from './card/card'
function App() {
  let [allnewsdata, setallnewsdata] = useState([]);
  let [loading,setloading] = useState(true);

  const getallnewsdata = async () => {
    let { data } = await axios.get(`${urls.everything}/cnn.json`);
    setallnewsdata(data);
    setTimeout(() => {
      setloading(false);
    }, 400);
  };

  const getTopHeadlines = async (category, country) =>{
    setloading(true);
    let { data } = await axios.get(`${urls.top}${category}/${country}.json`);
    setallnewsdata(data);
    setTimeout(() => {
      setloading(false);
    }, 400);
  }

  useEffect(() => {
    getallnewsdata();
  }, []);


  return (
    <div className="App">
     <DrawerAppBar getTopHeadlines={getTopHeadlines} getallnewsdata={getallnewsdata}/>
      <ActionAreaCard allnewsdata={allnewsdata} loading={loading}/>
    </div>
  );
}

export default App
