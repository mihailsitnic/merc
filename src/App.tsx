import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/home";
import Auth from "pages/auth";
import Station from "pages/station";
import Connection from "pages/connection";
import Vmeter from "pages/vmeter";
import Pmeter from "pages/pmeter";
import Details from "pages/details";
import Edit from "pages/edit";
import Search from "pages/search";
import Group from "pages/group";
import Lang from "pages/lang";
import Controllers from "./controllers";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/sign-in" component={Auth} />
				<Route path="/sign-up" component={Auth} />
				<Route path="/forgot-password" component={Auth} />
				<Route path="/check-email" component={Auth} />
				<Route path="/reset-password" component={Auth} />
				<Route path="/reset-password-success" component={Auth} />
				<Route path="/station" component={Station} />
				<Route path="/connection" component={Connection} />
				<Route path="/vmeters" component={Vmeter} />
				<Route path="/details/:id" component={Details} />
				<Route path="/pmeter" component={Pmeter} />
				<Route path="/edit/:id" component={Edit} />
				<Route path="/search" component={Search} />
				<Route path="/group/:id" component={Group} />
				<Route path="/lang" component={Lang} />
			</Switch>
			<Controllers />
		</Router>
	);
}

export default App;