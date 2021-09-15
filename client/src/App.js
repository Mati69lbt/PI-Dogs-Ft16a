import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LandinPage from "./components/LandingPage";
import DogCreate from "./components/dogCreate";
import Detail from "./components/Detalles";

function App() {
  return (
    <BrowserRouter>
     <div className="App" key="app">
      <Switch>
        <Route exact path="/" component={LandinPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:id" component={Detail} />
        <Route path="/dog" component={DogCreate} />        
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
