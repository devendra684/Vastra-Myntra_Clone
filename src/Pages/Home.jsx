import React, { useEffect, useState } from "react";
import { HomeDataCard } from "../Components/HomeDataCard";
import { HomeData, slider as images } from "../Redux/HomeData";
import SimpleImageSlider from "react-simple-image-slider";

import "../css/Home.css";

const Home = () => {
  const [BrandsToBag, setBrandsToBag] = useState([]);
  const [ShopByCategory, setShopByCategory] = useState([]);
  const [OmgDeals, setOmgDeals] = useState([]);
  const [GrandBrand, setGrandBrand] = useState([]);
  const [BudgetToBuys, setBudgetToBuys] = useState([]);


  useEffect(() => {
    // setInterval(() => {}, 1000);

    HomeData().then((res) => {
      setBrandsToBag(res.HomePageBrandsToBag);
      setShopByCategory(res.HomePageShopByCategory);
      setOmgDeals(res.HomePageOmgDeals);
      setGrandBrand(res.HomePageGrandBrands);
      setBudgetToBuys(res.HomePageBudgetToBuys);
    });
  }, []);

  return (
    <div className="grandFather">
      <SimpleImageSlider
        width="100%"
        height="400px"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      <div className="BrandsToBagFather">
        <h1 className="imgh1">Brand to bag</h1>
        <div className="BrandsToBag">
          {BrandsToBag.length > 0 &&
            BrandsToBag.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="ShopByCategoryFather">
        <h1 className="imgh1">Shop By Category</h1>
        <div className="ShopByCategory">
          {ShopByCategory.length > 0 &&
            ShopByCategory.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="OmgDealsFather">
        <h1 className="imgh1">Omg Deals</h1>
        <div className="OmgDeals">
          {OmgDeals.length > 0 &&
            OmgDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="GrandBrandFather">
        <h1 className="imgh1">Grand Brand</h1>
        <div className="GrandBrand">
          {GrandBrand.length > 0 &&
            GrandBrand.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>

      <div className="BudgetToBuysFather">
        <h1 className="imgh1">Budget To Buys</h1>
        <div className="BudgetToBuys">
          {BudgetToBuys.length > 0 &&
            BudgetToBuys.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
