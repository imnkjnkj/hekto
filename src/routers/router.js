import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogListPage from "../features/user/pages/BlogListPage";
import ContactPage from "../features/user/pages/ContactPage";
import HomePage from "../features/user/pages/Homepage";
import ShopListPage from "../features/user/pages/ShopListPage";

export const Routes = () => {
  return (
    <div>
      <Suspense>
        <BrowserRouter>
          <Switch>
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/shop-list" component={ShopListPage} />
            <Route exact path="/blog-list" component={BlogListPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
