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
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import ProductDetails from './Pages/Shop/ProductDetails/ProductDetails';
import ShopMainPage from './Pages/Shop/ShopMainPage/ShopMainPage';

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
            <PrivateRoute exact path="/product-details">
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
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
