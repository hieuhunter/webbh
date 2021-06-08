import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import shopgird from './page/shop-gird';
import shopdetails from './page/shop-details';
import shoppingcart from './page/shoping-cart';
import blogdetails from './page/blog-details';
import checkout from './page/checkout';
import Login from './page/Login';
import Register from './page/Register';
import React from 'react';
import Thongtin from './page/thongtin';
import paytc from 'page/thanhtoantc';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/shop-gird/:id" component={shopgird} />
				<Route exact path="/shop-details/:id" component={shopdetails} />
				<Route exact path="/shoping-cart" component={shoppingcart} />
				<Route exact path="/checkout" component={checkout} />
				<Route exact path="/blog-details" component={blogdetails} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/thongtin" component={Thongtin} />
				<Route exact path="/paytc" component={paytc} />
			</Switch>
		</Router>
	);
};
export default Routes;
