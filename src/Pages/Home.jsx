import React, { useEffect, useState } from "react";
import { HomeDataCard } from "../Components/HomeDataCard";
import { HomeData, slider as images } from "../Redux/HomeData";
import "../Styles/Home.css";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'
// import { LoginOrSignUp } from './Pages/LoginOrSignUp';

const Home = () => {
  const [OmgDeals, setOmgDeals] = useState([]);
  const [HoliDeals, setHoliDeals] = useState([]);
  const [BrandsToBag, setBrandsToBag] = useState([]);
  const [ShopByCategory, setShopByCategory] = useState([]);
  const [GrandBrand, setGrandBrand] = useState([]);
  const [BudgetToBuys, setBudgetToBuys] = useState([]);

  useEffect(() => {
    HomeData().then((res) => {
      setOmgDeals(res.HomePageOmgDeals);
      setHoliDeals(res.HoliDeals);
      setBrandsToBag(res.HomePageBrandsToBag);
      setShopByCategory(res.HomePageShopByCategory);
      setGrandBrand(res.HomePageGrandBrands);
      setBudgetToBuys(res.HomePageBudgetToBuys);
    });
  }, []);

  return (
    <div className="grandFather">
      <Navbar />
      <SimpleImageSlider
        width="100%"
        height="400px"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />

      <div className="OmgDealsFather">
        {/* <h1 className="imgh1">Omg Deals</h1> */}
        {/* <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/23/deb37d26-3686-447f-a3c2-b9db546e04c41677161708006-Crazy-Deal--3-.gif" alt="Crazy-Deal" /> */}
        <div className="OmgDeals">
          {OmgDeals.length > 0 &&
            OmgDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="BrandsToBagFather">
        {/* <h1 className="imgh1">Holi Deals</h1> */}
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/e6f16109-5957-4397-a990-89645ff067bb1677051268935-Pick-Your-Holi-Look.gif" alt="Pick-Your-Holi-Look" padding="0" marginBottom="0px" />
        <div className="HoliDeals">
          {HoliDeals.length > 0 &&
            HoliDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="BrandsToBagFather">
        {/* <h1 className="imgh1">Brand to bag</h1> */}
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/05bae013-eb04-4ffb-abe5-374ce442ce451677057222226-Brands-On-The-Way-Up.gif" alt="Brands-On-The-Way-Up" padding="0" marginBottom="0px" />
        <div className="BrandsToBag">
          {BrandsToBag.length > 0 &&
            BrandsToBag.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="ShopByCategoryFather">
        {/* <h1 className="imgh1">Shop By Category</h1> */}
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/21/66491508-9d0a-4306-82dd-ceb264d0f74d1676999339669-Featured-Favourites.gif" alt="Featured-Favourites" />
        <div className="ShopByCategory">
          {ShopByCategory.length > 0 &&
            ShopByCategory.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="GrandBrandFather">
        {/* <h1 className="imgh1">Grand Brand</h1> */}
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/21/fb150811-a572-4c6f-b380-10f2e52fe4fa1676999339539-Best-loved-Brands.gif" alt="Best-loved-Brands" />
        <div className="GrandBrand">
          {GrandBrand.length > 0 &&
            GrandBrand.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="BudgetToBuysFather">
        {/* <h1 className="imgh1">Budget To Buys</h1> */}
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/b5423f93-3dff-4f31-833a-8323249e19871677046260062-Summer-Bargains.gif" alt="Summer-Bargains" />
        <div className="BudgetToBuys">
          {BudgetToBuys.length > 0 &&
            BudgetToBuys.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      {/* 3 days-delivery */}
      <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/17/32b8f01e-4b71-446b-b103-668ed70873c71676653509048-M-Express-3-Days.gif" alt="Delivery-Express-3-Days" />
      {/* Payment */}
      <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/22/6d1c4d3d-6fd9-4b52-8dc0-4c8b7e2453e61677061466410-RTB--4-.jpg" alt="order & payment" />
      <Footer />
    </div>
  );
};

export default Home;
