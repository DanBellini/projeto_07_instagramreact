import ReactDOM from "react-dom";

import Topbar from "./components/Topbar";
import Page from "./components/Page";
import MobileBar from "./components/Mobilebar";


function App (){
    return (
        <div>
            <Topbar />
            <Page />
            <MobileBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));