import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './layout/Layout';
import Home from "./pages/home";
import People from "./pages/people"

function App() {
  return (
    <BrowserRouter>   
      <Layout>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/character">
           <People />
         </Route>
       </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
