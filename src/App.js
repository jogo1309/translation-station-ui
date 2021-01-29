//import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./Home/SnackbarUtils";

export default function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT);
  return (
    <div>
      <CssBaseline />
      <SnackbarProvider>
        <SnackbarUtilsConfigurator />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}
