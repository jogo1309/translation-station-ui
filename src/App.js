//import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";

export default function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT);
  return (
    <div>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
