import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUrban } from "../../context/UrbanContext";
import axios from "../../Api/axios";
import { ShimmerButton, ShimmerDiv } from "shimmer-effects-react";
import Spinner from "../../components/Spinner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProductData] = useState(null);
  const {
    addToCart,
    setData,
    removeItemfromCart,

    isClickedAdd,
    isClickedRemoved,
  } = useUrban();
  const [addMoreItem, setAddMoreItem] = useState(false);
  const [counter, setCounter] = useState(0);

  const getAllProducts = async () => {
    const data = await axios.get(`/product/${id}`);
    setProductData(data?.data?.data?.product);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get("/cart", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const data = response?.data?.data?.cart;
      setData(data);
    };
    fetchCart();
  }, [setData, addMoreItem]);

  const onHandleAddItems = (id) => {
    addToCart(id);
  };

  const onHandleRemoveItems = (id) => {
    removeItemfromCart(id);
  };

  return (
    <div className="bg-white pt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product &&
                  product?.images?.map((image) => (
                    <Tab
                      key={image._id}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          alt=""
                          src={image.url}
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                      />
                    </Tab>
                  ))}
                {product == null &&
                  Array.from({ length: 3 }, (_, i) => (
                    <div key={i}>
                      <ShimmerDiv mode="light" height={100} width={100} />
                    </div>
                  ))}
              </TabList>
            </div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
              {product &&
                product?.images?.map((image) => (
                  <TabPanel key={image._id}>
                    <img
                      alt={image.alt}
                      src={image.url}
                      className="xl:h-[60vh] xlw-full object-cover object-center sm:rounded-lg"
                    />
                  </TabPanel>
                ))}
              {product == null && (
                <ShimmerDiv mode="light" height={400} width={350} />
              )}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            {product && (
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product?.productName}
              </h1>
            )}
            {product === null && (
              <ShimmerButton size="md" mode="light" width={300} rounded={0.4} />
            )}

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              {product && (
                <p className="text-3xl tracking-tight text-gray-900">
                  ₦ {Number(product?.prices?.actualPrice).toLocaleString()}
                </p>
              )}
              {product === null && (
                <ShimmerButton
                  size="md"
                  mode="light"
                  width={200}
                  rounded={0.4}
                />
              )}
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        product?.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{1} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: product?.description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                {counter === 0 && (
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setCounter(1);
                      setAddMoreItem(true);
                      onHandleAddItems(product._id);
                    }}
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primaryTwo px-8 py-3 text-base font-medium text-white  hover:bg-primaryOne focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to bag
                  </button>
                )}
                {addMoreItem && counter >= 1 && (
                  <div className=" flex items-center gap-2">
                    <button
                      disabled={isClickedRemoved}
                      onClick={(e) => {
                        e.preventDefault();
                        if (counter >= 1) {
                          setCounter((prevCounter) => prevCounter - 1);
                          onHandleRemoveItems(product._id);
                        }
                      }}
                      className={
                        !isClickedRemoved
                          ? " w-[40px] h-[30px] bg-primaryOne font-bold text-white"
                          : " grayscale  w-[40px] h-[30px] bg-primaryOne disabled:bg-black opacity-[50%] "
                      }
                    >
                      -
                    </button>
                    {isClickedAdd||isClickedRemoved ? (
                      <Spinner />
                    ) : (
                      <p className=" w-[24px] h-[24px] flex justify-center items-center">
                        {counter}
                      </p>
                    )}
                    <button
                      disabled={isClickedAdd}
                      onClick={(e) => {
                        e.preventDefault();
                        setCounter((prevCounter) => prevCounter + 1);
                        onHandleAddItems(product._id);
                      }}
                      className={
                        !isClickedAdd
                          ? " w-[40px] h-[30px] bg-primaryTwo font-bold text-white"
                          : " grayscale  w-[40px] h-[30px] bg-primaryTwo disabled:bg-black opacity-[50%] "
                      }
                    >
                      +
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                        Shipping
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <ul role="list">
                      <li>Estimated delivery time: 1 - 7 days</li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                        Reviews
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="prose prose-sm pb-6">
                    <ul role="list">
                      <li>There are no reviews yet.</li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
