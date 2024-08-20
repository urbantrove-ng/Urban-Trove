import restaurant from "../assets/image/restaurant.webp";
import girlstore from "../assets/image/varieties.webp";
import skincare from "../assets/image/skincarestore.webp";
import sneakers from "../assets/image/sneakers.webp";
import salon from "../assets/image/mensalon.webp";

const sliderData = [
  {
    id: 1,
    image: restaurant,
    caption: {
      heading: "Hello.",
      subheading: "",
      break: "What are you looking for today?",
    },
    link: {
      text: "Begin shopping",
      url: "/drinks",
    },
  },
  {
    id: 2,
    image: girlstore,
    caption: {
      heading: "We have a wide range of products",
      subheading: "",
      break: "for the ladies.",
    },
    link: {
      text: "Begin shopping",
      url: "/drinks",
    },
  },
  // Add more items as needed
  {
    id: 3,
    image: sneakers,
    caption: {
      heading: "We also have a wide range of products",
      subheading: "",
      break: "for the gents.",
    },
    link: {
      text: "Begin shopping",
      url: "/drinks",
    },
  },
  {
    id: 4,
    image: salon,
    caption: {
      heading: "Amongst others, we provide a",
      break: "wide range of services.",
      subheading: "",
    },
    link: {
      text: "Begin shopping",
      url: "/drinks",
    },
  },
  {
    id: 5,
    image: skincare,
    caption: {
      heading: "Trust us to always provide the best",
      subheading: "",
      break: "just for you.",
    },
    link: {
      text: "Begin shopping",
      url: "/drinks",
    },
  },
];

export default sliderData;
