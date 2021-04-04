import React from "react";
import { Route } from "react-router-dom";

// Page
import { FrontPage, AddStockForm, ReduceStockForm } from "./page";

// Component
import NavigationBar from "./components/NavigationBar/NavigationBar";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

  return (
    <>
      <NavigationBar />

      <Route exact path="/" component={FrontPage} />
      <Route exact path="/add_stock" component={AddStockForm} />
      <Route exact path="/reduce_stock" component={ReduceStockForm} />
    </>
  );
};

export default Home;
