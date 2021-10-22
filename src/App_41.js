import { Switch, Route } from 'react-router-dom';
import Homepage_41 from './pages/Homepage_41';
import ShopTwo_41 from './pages/ShopTwo_41';
import ContactPage_41 from './pages/ContactPage_41';
import SigninPage_41 from './pages/SigninPage_41';
import Header_41 from './components/Header_41';
import './App_41.scss';

const App_41 = () => {
  return (
    <div>
      <Header_41 />
      <Switch>
        <Route exact path="/" component={Homepage_41} />
        <Route exact path="/shop_41" component={ShopTwo_41} />
        <Route exact path="/contact_41" component={ContactPage_41} />
        <Route exact path="/signin_41" component={SigninPage_41} />
      </Switch>
    </div>
  );
};

export default App_41;
