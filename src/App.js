import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Blogs from './Pages/Blog/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Cart from './Pages/Shop/Cart/Cart';
import CheckOut from './Pages/Shop/CheckOut/CheckOut';
import OrderReceived from './Pages/Shop/OrderReceived/OrderReceived';
import ProductDetails from './Pages/Shop/ProductDetails/ProductDetails';
import ShopMainPage from './Pages/Shop/ShopMainPage/ShopMainPage';
import UpdateOrder from './Pages/Shop/UpdateOrder/UpdateOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/shop">
              <ShopMainPage></ShopMainPage>
            </Route>
            <PrivateRoute exact path="/product-details/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <PrivateRoute path="/check-out">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/order-received/:orderId">
              <OrderReceived></OrderReceived>
            </PrivateRoute>
            <PrivateRoute path="/update-order/:updateOrderId">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
