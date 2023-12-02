import restaurant from "../../assets/restaurant.jpeg"
import girlstore from "../../assets/varieties.jpeg"
import skincare from "../../assets/skincarestore.jpeg"
import sneakers from "../../assets/sneakers.avif"
import salon from "../../assets/mensalon.jpeg"

const sliderData = [
    {
      id: 1,
      image: restaurant,
      caption: {
        heading: "Hello.",
        subheading: "",
        break: "What are you looking for today?"
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
        break: "for the ladies."
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
        break: "for the gents."
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
  