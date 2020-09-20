import React from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import { TabProduct, Navigations } from "../navigations/Navigations";
import { BrowserRouter, Route } from "react-router-dom";
import HomeProfile from "./HomeProfile/HomeProfile";

export default function Dashboard() {
  return (
    <div>
      <BrowserRouter>
        <Navigations></Navigations>
        <main className="main">
          <Route path="/productList" component={TabProduct} />
          <Route path="/productList/:id" component={ProductDetail} />
          <Route path="/" component={HomeProfile} />
        </main>
      </BrowserRouter>
    </div>
  );
}
