import ReactDOM from "react-dom";

import Topbar from "./components/Topbar";
import Page from "./components/Page";



function App (){
    return (
        <div>
            <Topbar />
            <Page />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));