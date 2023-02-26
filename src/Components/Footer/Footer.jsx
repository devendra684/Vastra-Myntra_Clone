import React from "react";
import "./Footer.css";

const Footer = () => {
  const footer1 = [
    {
      title: "ONLINE-SHOPPING",
      sub: [
        "Men",
        "Women",
        "Kids",
        "Home & Living",
        "Beauty",
        "Gift Cards",
        "Myntra Insider",
      ],
    },
    {
      title: "CUSTOMER POLICIES",
      sub: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Terms of Use",
        "Track Order",
        "Shipping",
        "Cancellation",
        "Returns",
        "Privacy policy",
      ],
    },
    {
      title: "USEFUL LINKS",
      sub: ["Blog", "Careers", "Site Map", "Corporate Infomation", "Whitehat"],
    },
  ];

  return (
    <div className="Footerbody">
      <hr></hr>
      <div className="Footerclass">
        {footer1.map((item, j) => (
          <div key={j} className="Footerclassdiv1">
            <h5 className="colorblack">{item.title}</h5>
            {item.sub.map((el, z) => (
              <p key={z}>{el}</p>
            ))}
          </div>
        ))}
        <div className="Footerclassdiv2">
          <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
          <div>
            <img className="footericon1" src="/googlePlay.png" alt="" />
            <img className="footericon2" src="/AppStore.png" alt="" />
          </div>
          <h5>KEEP IN TOUCH</h5>
          <div style={{ display: "flex", gap: "10px" }}>
            <img className="socialIcon" src="/facebook.png" alt="" />
            <img className="socialIcon" src="/twitter.png" alt="" />
            <img className="socialIcon" src="/youtube.png" alt="" />
            <img className="socialIcon" src="/instagram-symbol.png" alt="" />
          </div>
        </div>
        <div>
          <img className="footer4" src="/Guarantee.png" alt="" />
        </div>
      </div>
      <div className="footer_popular">Popular Searches</div>
      <div className="footer_popular_details">
        Kurta Pajama | Leather Jackets | Sherwani | Shirts | T-Shirts |
        Waistcoat | Photo Frames | Denim Shirts | Blazers | Mirror | Bags |
        Jackets | Blouse Designs | Crop Tops | Mysore Silk Saree | Kids Lehenga
        | Suit Design | Lehenga | Girl Dungarees | Top for Girl | Top for Girl |
        Lingerie | Gowns | Saree | Kids Ethnic Wear | Sweaters | Boys Games |
        Barbie Doll | Shoes For Men | Cricket Shoes | Lipstick | Make Up Kit |
        Fastrack Watches | Casual Shoes | Online Shopping | Dresses | Babydolls
        | Eye Makeup | Car Games | Nike Shoes | Puma | United Colors of Benetton
        | Fastrack | Watches | Backpacks | Men Kurtas | Titan Watches
      </div>
      <div className="footer5">
        <p className="bottom">
          In case of any concern, <span className="footerspan">Contact Us</span>
        </p>
        <p className="bottom">© 2023 www.myntra.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
