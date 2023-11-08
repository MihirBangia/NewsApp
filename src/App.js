import { useEffect, useState } from "react";
import "./App.css";
import DrawerAppBar from "./categories/categories";
import urls from "./urls/url";
import axios from "axios";
import ActionAreaCard from './card/card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
  let [allnewsdata, setallnewsdata] = useState([]);
  let [loading,setloading] = useState(true);
  let[theme,createTheme] = useState()


  function setTheme(event){
    if(event.target.checked===true){
      createTheme(true)
    }
    else{
      createTheme(false)
    }
  }

  const getallnewsdata = async () => {
    setloading(true)
    let { data } = await axios.get(`${urls.everything}/cnn.json`);
    setallnewsdata(data);
    setTimeout(() => {
      setloading(false);
    }, 600);
  };

  const getTopHeadlines = async (category, country) =>{
    setloading(true);
    let { data } = await axios.get(`${urls.top}${category}/${country}.json`);
    setallnewsdata(data);
    setTimeout(() => {
      setloading(false);
    }, 600);
  }

  useEffect(() => {
    getallnewsdata();
  }, []);


  return (
    <ThemeProvider theme={theme? darkTheme:lightTheme}>
        <CssBaseline />
    <div className="App">
     <DrawerAppBar getTopHeadlines={getTopHeadlines} getallnewsdata={getallnewsdata} setTheme={setTheme}/>
      <ActionAreaCard allnewsdata={allnewsdata} loading={loading}/>
    </div>
      </ThemeProvider>
  );
}

export default App
