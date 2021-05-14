import "./App.css";
import Home from "./pages/Home"
import TableDetail from "./pages/TableDetail"
import { Switch, Route,BrowserRouter } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

    <Switch>
      <Route path="/details/:id" component ={TableDetail} />
      {/* <Route path="/details/:id" component ={MovieDetails} exact/> */}
      <Route path="/" component = {Home} />

    </Switch>

  </BrowserRouter>



// <Home 
// chartData={chart}
// tableData={table} 
// />

  );
}

export default App;
