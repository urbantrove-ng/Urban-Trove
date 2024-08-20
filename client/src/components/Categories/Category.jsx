import { useState } from "react";

export default function Category() {
  const [fashion, setFashion] = useState(false);
  const [electronic, setElectronics] = useState(false);
  const [home, setHome] = useState(false);
  const [health, setHealth] = useState(false);
  const [Sports, setSports] = useState(false);
  const [Books, setBooks] = useState(false);
  const [Food, setFood] = useState(false);
  const [Electrical, setElectrical] = useState(false);
  const [automMobile, setAutomobile] = useState(false);

  return (
    <div className="  h-[480px] shadow-md lg:flex hidden">
      <div className=" w-[300px] h-full bg-[#eff1e6] flex justify-center items-center ">
        <ul className=" w-full  ">
          <li
            className={
              !fashion
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setFashion(true)}
            onMouseLeave={() => setFashion(false)}
          >
            Fashion & Accessories
          </li>
          <li
            className={
              !electronic
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setElectronics(true)}
            onMouseLeave={() => setElectronics(false)}
          >
            Electronics & Gadgets
          </li>
          <li
            className={
              !home
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setHome(true)}
            onMouseLeave={() => setHome(false)}
          >
            Home & Garden
          </li>
          <li
            className={
              !health
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setHealth(true)}
            onMouseLeave={() => setHealth(false)}
          >
            Health & Beauty
          </li>

          <li
            className={
              !Sports
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setSports(true)}
            onMouseLeave={() => setSports(false)}
          >
            Sports & Outdoors
          </li>
          <li
            className={
              !Books
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setBooks(true)}
            onMouseLeave={() => setBooks(false)}
          >
            Books & Stationery
          </li>
          <li
            className={
              !Food
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setFood(true)}
            onMouseLeave={() => setFood(false)}
          >
            Food & Beverages
          </li>
          <li
            className={
              !Electrical
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setElectrical(true)}
            onMouseLeave={() => setElectrical(false)}
          >
            Electrical & Home Appliances
          </li>
          <li
            className={
              !automMobile
                ? " h-[48px] hover:bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
                : "h-[48px] bg-white flex justify-start items-center w-full pl-4 cursor-pointer"
            }
            onMouseEnter={() => setAutomobile(true)}
            onMouseLeave={() => setAutomobile(false)}
          >
            Automotive & Accessories
          </li>
        </ul>
      </div>
      <div className="  ">
        {fashion && (
          <div>
            <ul
              onMouseEnter={() => setFashion(true)}
              onMouseLeave={() => setFashion(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px] "
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Clothing (Men&apos;s, Women&apos;s, Children&apos;s)
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Shoes & Footwear
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Handbags & Accessories
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Jewelry & Watches
              </li>
            </ul>
          </div>
        )}
        {electronic && (
          <div>
            <ul
              onMouseEnter={() => setElectronics(true)}
              onMouseLeave={() => setElectronics(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Smartphones & Tablets
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Computers & Laptops
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Cameras & Photography Equipment
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Audio & Video Devices
              </li>
            </ul>
          </div>
        )}
        {Sports && (
          <div>
            <ul
              onMouseEnter={() => setSports(true)}
              onMouseLeave={() => setSports(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px] "
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Athletic Apparel & Footwear{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Sports Equipment (e.g., yoga mats, weights, bicycles){" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Camping & Hiking Gear{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Outdoor Recreation Accessories{" "}
              </li>
            </ul>
          </div>
        )}
        {home && (
          <div>
            <ul
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => setHome(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Furniture & Decor
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Kitchenware & Cooking Utensils
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Home Appliances
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Gardening Supplies
              </li>
            </ul>
          </div>
        )}
        {health && (
          <div>
            <ul
              onMouseEnter={() => setHealth(true)}
              onMouseLeave={() => setHealth(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Skincare Products{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Haircare Products{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Makeup & Cosmetics{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Personal Care Appliances{" "}
              </li>
            </ul>
          </div>
        )}
        {Books && (
          <div>
            <ul
              onMouseEnter={() => setBooks(true)}
              onMouseLeave={() => setBooks(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Fiction & Non-fiction Books{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Office Supplies{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Writing Instruments{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Art Supplies{" "}
              </li>
            </ul>
          </div>
        )}
        {Food && (
          <div>
            <ul
              onMouseEnter={() => setFood(true)}
              onMouseLeave={() => setFood(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Gourmet Foods & Snacks{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Beverages (e.g., coffee, tea, wine){" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Specialty Ingredients{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Cooking & Baking Supplies{" "}
              </li>
            </ul>
          </div>
        )}
        {Electrical && (
          <div>
            <ul
              onMouseEnter={() => setElectrical(true)}
              onMouseLeave={() => setElectrical(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Kitchen Appliances ( blenders, toasters, coffee makers){" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Laundry Appliances{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Vacuum Cleaners{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Air Conditioners & Fans{" "}
              </li>
            </ul>
          </div>
        )}
        {automMobile && (
          <div>
            <ul
              onMouseEnter={() => setAutomobile(true)}
              onMouseLeave={() => setAutomobile(false)}
              className=" flex flex-col p-8 h-[480px] w-[500px]"
            >
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Car Parts & Accessories{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Car Care Products{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Automotive Electronics{" "}
              </li>
              <li className="h-[48px] hover:cursor-pointer hover:text-red-500">
                Vehicle Maintenance Tools{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
