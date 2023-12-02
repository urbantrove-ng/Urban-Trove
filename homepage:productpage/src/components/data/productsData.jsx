import handbag from "../../assets/handbag.png";
import heel from "../../assets/heel.jpeg";
import skincare from "../../assets/skincare.webp";
import headphone from "../../assets/headphones.png";
import sneaker from "../../assets/sneaker.png";
import dress from "../../assets/dress.png";
import polo from "../../assets/polo.jpg";
import sunglass from "../../assets/sunglass.webp";

const productData = [
  {
    id: 1,
    mainImage: handbag, 
    otherImage1: handbag,
    otherImage2: handbag,
    header: "Bags",
    details: "Cute Leather Bag For Women",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "9900",
      discountPrice: "11000",
      discount: "-10%",
    },
    seller: "Urban Trove",
    description:
      "Cute Leather Bag For Women, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 2,
    mainImage: heel,
    otherImage1: heel,
    otherImage2: heel,
    otherImage3: heel,
    otherImage4: heel,
    header: "Shoes",
    details: "Nude Heels",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "18750",
      discountPrice: "25000",
      discount: "-20%",
    },
    seller: "Urban Trove",
    description:
      "Nude Heels, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 3,
    mainImage: skincare,
    otherImage1: skincare,
    otherImage2: skincare,
    otherImage3: skincare,
    header: "Skincare Products",
    details: "Urban Trove Skincare Package",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "13050",
      discountPrice: "15000",
      discount: "-13%",
    },
    seller: "Urban Trove",
    description:
      "Urban Trove Skincare Package, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 4,
    mainImage: headphone,
    otherImage1: headphone,
    otherImage2: headphone,
    otherImage3: headphone,
    header: "Headphones",
    details: "JBL Heaphones 360pmw",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "19240",
      discountPrice: "26000",
      discount: "-20%",
    },
    seller: "Urban Trove",
    description:
      "JBL Heaphones 360pmw, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 5,
    mainImage: sneaker,
    otherImage1: sneaker,
    otherImage2: sneaker,
    header: "Sneakers",
    details: "Addidas Men's White Forum 84 Low Sneakers",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "32680",
      discountPrice: "43000",
      discount: "-24%",
    },
    seller: "Urban Trove",
    description:
      "Addidas Men's White Forum 84 Low Sneakers, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 6,
    mainImage: dress,
    otherImage1: dress,
    otherImage2: dress,
    otherImage3: dress,
    header: "Dresses",
    details: "BALMAIN Pastel-Print Tulle Dress",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "7200",
      discountPrice: "8000",
      discount: "-10%",
    },
    seller: "Urban Trove",
    description:
      "BALMAIN Pastel-Print Tulle Dress, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 7,
    mainImage: polo,
    otherImage1: polo,
    otherImage2: polo,
    otherImage3: polo,
    header: "Shirts",
    details: "Polo Ralph Lauren Active Bear Collar T-Shirt White",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "18000",
      discountPrice: "20000",
      discount: "-11%",
    },
    seller: "Urban Trove",
    description:
      "Polo Ralph Lauren Active Bear Collar T-Shirt White, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
  {
    id: 8,
    mainImage: sunglass,
    otherImage1: sunglass,
    otherImage2: sunglass,
    header: "Sunglasses",
    details: "Ray-Bans Meta Smart Glasses",
    link: {
      text: "Begin Shopping",
      url: "/products",
    },
    price: {
      actualPrice: "301000",
      discountPrice: "350000",
      discount: "-14%",
    },
    seller: "Urban Trove",
    description:
      "Ray-Bans Meta Smart Glasses, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugitquod expedita maxime, quidem minus et? Expedita temporibus porrodolore deleniti exercitationem rem? Necessitatibus aspernaturtemporibus, repudiandae dolore pariatur ad. ",
  },
];

export default productData;
