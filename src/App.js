import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import WhyCrossFit from "./Components/whyCrossFit/WhyCrossFit";
import data from "./data";
import Swiper from "./Components/swiper/swiper";
import Wearecrossfit from "./Components/wearecrossfit/Wearecrossfit";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DietPlan from "./Components/DietPlan/DietPlan";
import FitBot from "./Components/FitBot/FitBot";
import Review from "./Components/Review/Review";
import Improve from "./Components/Improve/Improve";
import SocialNavbar from "./Components/SocialNavbar/SocialNavbar";
import SocialHome from "./Components/socialhome/Socialhome";
import SocialLanding from "./Components/SocialLanding/SocialLanding"
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import FitMart from "./Components/FitMart/FitMart";
import Profile from "./Components/Profile/Profile";
import SingleProduct from "./Components/FitMart/SingeProduct/SingleProduct";
import FitmartNavbar from "./Components/FitMart/FitMartNavbar/FitmartNavbar";
import Cart from "./Components/FitMart/Cart/Cart";
import CartHeading from "./Components/FitMart/Cart/CartHeading";
import ShopingItems from "./Components/FitMart/ShopingItems/ShopingItems";
import Gymplan from "./Components/gymplan/Gymplan";
import Socialhome from "./Components/socialhome/Socialhome";
import NewPost from "./Components/newPost/newPost";
import BeforeLoginLandingPage from "./Components/BeforeLoginLandingPage/BeforeLoginLandingPage";
import GymplanNavbar from "./Components/gymplan/gymplanNavbar";
import Otp from "./Components/Otp/Otp"
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Components/ForgetPassword/ResetPassword";
import { useSelector } from "react-redux";


function App() {

 
       
  const userInfo = useSelector((state) => state.users?.userAuth?.userInfo);
  const isLoggedIn = userInfo ? true: false;
  return (
    <BrowserRouter>
      <Routes>


      <Route path="unlogin" element={ <BeforeLoginLandingPage /> } />

        <Route
          path="/"
          element={
           !isLoggedIn ? <BeforeLoginLandingPage /> :    <>
           <Navbar />
           <LandingPage />
           <WhyCrossFit />
           <Swiper data={data} />
           <Wearecrossfit />
           <GetInTouch />
           <Footer />
         </>
          }
        />

        <Route path="/signin" element={
          isLoggedIn ? (  <>
            <Navbar />
            <LandingPage />
            <WhyCrossFit />
            <Swiper data={data} />
            <Wearecrossfit />
            <GetInTouch />
            <Footer />
          </>) : <SignIn />
        } />

        <Route path="/signup" element={ isLoggedIn ? (  <>
            <Navbar />
            <LandingPage />
            <WhyCrossFit />
            <Swiper data={data} />
            <Wearecrossfit />
            <GetInTouch />
            <Footer />
          </>) :<SignUp />} />

        <Route path="/otp" element={ isLoggedIn ? (  <>
            <Navbar />
            <LandingPage />
            <WhyCrossFit />
            <Swiper data={data} />
            <Wearecrossfit />
            <GetInTouch />
            <Footer />
          </>) : <Otp />} />
        <Route path='/forget/password' element ={<ForgetPassword />} />
        <Route path='/reset/password/:id' element ={<ResetPassword />} />

        <Route path="/dietplan" element={
          <>
          <GymplanNavbar />
          <DietPlan />
          <Footer />
          </>
               } />
        <Route
          path="/fitbot"
          element={
            <>
              <Navbar />
              <FitBot />
              <Footer />
            </>
          }
        />

        <Route
          path="/review"
          element={
            <>
              <Navbar />
              <Review />
              <Footer />
            </>
          }
        />

        <Route
          path="/improve"
          element={
            <>
              <Navbar />
              <Improve />
              <Footer />
            </>
          }
        />


       <Route path="/community" element ={
          
          <>
            <Socialhome />
          </>
        } />

<Route path="/newpost" element ={
          
          <>
            <NewPost />
          </>
        } />


       

        <Route path="/feedback" element ={
          <>
          <Navbar />
          <Improve />
          <Footer />
          </>
        } />

        <Route path="/shop" element ={
          <>
          <FitMart />
          </>
        }/>


        <Route path='/single-product' element={<>
          <FitmartNavbar />
          <SingleProduct />
          <Footer />
        </>} />

        <Route path="/cart" element={
          <>
            <FitmartNavbar />
          <CartHeading heading='My Cart' />

            <Cart />
            <Footer />

          </>
        } />

        <Route path='/orders' element ={
          <>
          <FitmartNavbar />
          <CartHeading heading='My Orders' />
          <ShopingItems/>
          <Footer />
          </>
        } />

        <Route path="/gymplan" element={  
          <>    
          <Gymplan />
          <Footer />
          </>
      } />

       

        

        <Route path="/profile" element={
          !isLoggedIn?<BeforeLoginLandingPage /> :<>
          <Navbar/>
          <Profile/>
          <Footer/>
          </>
        } />

        <Route path="*" element={<PageNotFound />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
