import { BrowserRouter as Router } from "react-router-dom";



import "./styleFolder/App.scss";

import Header from "./Header";
import RenderPage from "./RenderPage";


function App() {
	return (
		<Router>
			<Header/>
			<RenderPage />
		</Router>
	);
}

export default App;
