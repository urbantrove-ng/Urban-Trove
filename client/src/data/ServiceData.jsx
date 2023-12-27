import restaurant from "../assets/image/restaurant.jpeg";
import ladies from "../assets/image/ladiessalon.webp";
import spa from "../assets/image/spa.jpeg";
import men from "../assets/image/mensalon.jpeg";
import menu from "../assets/image/menu.png";
import food1 from "../assets/image/food1.webp";
import food2 from "../assets/image/food2.webp";
import food3 from "../assets/image/food3.jpeg";
import food4 from "../assets/image/food4.webp";
import food5 from "../assets/image/food5.webp";
import food6 from "../assets/image/food6.jpeg";
import food7 from "../assets/image/food7.jpeg";
import food8 from "../assets/image/food8.jpeg";
import food9 from "../assets/image/food9.jpg";
import food10 from "../assets/image/food10.jpeg";
import pricelistmen from "../assets/image/pricelistmen.jpeg";
import mencut1 from "../assets/image/mencut1.jpeg";
import mencut2 from "../assets/image/mencut2.jpeg";
import mencut3 from "../assets/image/mencut3.jpeg";
import mencut4 from "../assets/image/mencut4.webp";
import mencut5 from "../assets/image/mencut5.jpeg";
import mencut6 from "../assets/image/mencut6.jpeg";
import mencut7 from "../assets/image/mencut7.jpeg";
import mencut8 from "../assets/image/mencut8.jpeg";
import mencut9 from "../assets/image/mencut9.jpeg";
import mencut10 from "../assets/image/mencut10.jpeg";
import spapricelist from "../assets/image/spapricelist.jpeg";
import spa1 from "../assets/image/spa1.jpg";
import spa2 from "../assets/image/spa2.jpg";
import spa3 from "../assets/image/spa3.webp";
import spa4 from "../assets/image/spa4.jpeg";
import spa5 from "../assets/image/spa5.avif";
import spa6 from "../assets/image/spa6.avif";
import spa7 from "../assets/image/spa7.jpeg";
import spa8 from "../assets/image/spa8.webp";
import spa9 from "../assets/image/spa9.jpeg";
import spa10 from "../assets/image/spa10.jpeg";
import womenspricelist from "../assets/image/womenspricelist.jpeg";
import salon1 from "../assets/image/salon1.jpeg";
import salon2 from "../assets/image/salon2.jpeg";
import salon3 from "../assets/image/salon3.jpeg";
import salon4 from "../assets/image/salon4.avif";
import salon5 from "../assets/image/salon5.jpeg";
import salon6 from "../assets/image/salon6.webp";
import salon7 from "../assets/image/salon7.jpeg";
import salon8 from "../assets/image/salon8.jpeg";
import salon9 from "../assets/image/salon1.jpeg";
import salon10 from "../assets/image/salon10.jpeg";

const servicesData = [
  {
    id: 1,
    category: "restaurant",
    image: restaurant,
    header: "Restaurants",
    name: "Urban Trove Dining", 
    startingPrice: 2000,
    services: "International, African and Fast Food Dishes.",
    address:
      "1 Aguiyi Ironsi Street Maitama 1 Aguiyi Ironsi Street, Maitama, Abuja, Nigeria",
    phoneNumber: "09011223344",
    website: "urbantrovedining.com",
    about:
      "Urban Trove Dining, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laboriosam nisi eaque? Repudiandae commodi unde pariatur ad aut? Ducimus ab rerum accusantium perspiciatis saepe sunt maxime quia alias rem numquam.",
    pricelist: menu,
    sampleimages: [
      food1,
      food2,
      food3,
      food4,
      food5,
      food6,
      food7,
      food8,
      food9,
      food10,
    ],
    link: {
      text: "View now",
      url: "/services",
    },
  },
  {
    id: 2,
    category: "salon",
    image: ladies,
    header: "Hair Salon",
    name: "Urban Trove Ladies Salon",
    startingPrice: 5000,
    services: "Braids, Natural Hair Treatment, Conditioning and more.",
    address: "Maitama Ave, Abuja Nigeria",
    phoneNumber: "09066641969",
    website: "urbantrovesalon.com",
    about:
      "Urban Trove Salon, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laboriosam nisi eaque? Repudiandae commodi unde pariatur ad aut? Ducimus ab rerum accusantium perspiciatis saepe sunt maxime quia alias rem numquam.",
    pricelist: womenspricelist,
    sampleimages: [
      salon1,
      salon2,
      salon3,
      salon4,
      salon5,
      salon6,
      salon7,
      salon8,
      salon9,
      salon10,
    ],
    link: {
      text: "View now",
      url: "/services",
    },
  },
  {
    id: 3,
    image: spa,
    category: "spa",
    header: "Spa",
    name: "Urban Trove Spa",
    startingPrice: 10000,
    services: "Massages, Facials, Therapy and more.",
    address:
      "Plot 1061 Herbert Macaulay Way Leadway House, Near Nnpc Towers, Abuja Nigeria",
    phoneNumber: "09069696969",
    website: "urbantrovespas.com",
    about:
      "Urban Trove Spa, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laboriosam nisi eaque? Repudiandae commodi unde pariatur ad aut? Ducimus ab rerum accusantium perspiciatis saepe sunt maxime quia alias rem numquam.",
    pricelist: spapricelist,
    sampleimages: [spa1, spa2, spa3, spa4, spa5, spa6, spa7, spa8, spa9, spa10],
    link: {
      text: "View now",
      url: "/services",
    },
  },
  {
    id: 4,
    category: "salon",
    image: men,
    header: "Barbing Salon",
    name: "Urban Trove Men's Salon",
    startingPrice: 2000,
    services: "Cut and Style, Corrective Color, Scalp Treament and more.",
    address:
      "264 Tafawa Balewa Rd Ceddi Plaza, Central Business District, Abuja Nigeria",
    phoneNumber: "08017381738",
    website: "",
    about:
      "Urban Trove Men's Salon, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laboriosam nisi eaque? Repudiandae commodi unde pariatur ad aut? Ducimus ab rerum accusantium perspiciatis saepe sunt maxime quia alias rem numquam.",
    pricelist: pricelistmen,
    sampleimages: [
      mencut1,
      mencut2,
      mencut3,
      mencut4,
      mencut5,
      mencut6,
      mencut7,
      mencut8,
      mencut9,
      mencut10,
    ],
    link: {
      text: "View now",
      url: "/services",
    },
  },
];
const ServiceMiniheader = ['Restaurants', 'Salons', 'Spas'];


export {servicesData, ServiceMiniheader};
