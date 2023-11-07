import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import urls from "../urls/url"

export default function Routes(){
return(
    <Router>
        <Routes>
            <Route path ={`${urls.api_url}`} element = {<App/>} />
        </Routes>
    </Router>
)
}