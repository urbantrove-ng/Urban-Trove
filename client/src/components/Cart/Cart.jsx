import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import Spinner from "../Spinner";
import axios from "../../Api/axios";
import { useEffect, useState } from "react";
import { useUrban } from "../../context/UrbanContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const relatedProducts = [
  {
    id: 1,
    name: "Billfold Wallet",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg",
    imageAlt: "Front of Billfold Wallet in natural leather.",
    price: " ₦11,800",
    color: "Natural",
  },
  // More products...
];

export default function Cart() {
  const {
    addToCart,
    data,
    setData,
    removeItemfromCart,
    totalSum,
    auth,
    isClickedAdd,
    isClickedRemoved,
  } = useUrban();
  const [checkingout, setCheckingout] = useState(false);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [loadingItems, setLoadingItems] = useState({});

  const onHandleAddItems = async (id) => {
    setLoadingItems((prev) => ({ ...prev, [id]: true }));
    await addToCart(id);
    setLoadingItems((prev) => ({ ...prev, [id]: false }));
  };

  const onHandleRemoveItems = async (id) => {
    setLoadingItems((prev) => ({ ...prev, [id]: true }));
    await removeItemfromCart(id);
    setLoadingItems((prev) => ({ ...prev, [id]: false }));
  };

  const fetchCart = async () => {
    const response = await axios.get("/cart", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const data = response?.data?.data?.cart;
    setData(data);
  };
  useEffect(() => {
    fetchCart();
  }, [setData]);

  const onhandleCheckOut = async () => {
    setCheckingout(true);
    const res = await axiosPrivate.post("/user/checkout", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const ordeerid = res?.data?.data?.order?._id;
    if (res.status === 200) {
      setCheckingout(false);
      const response = await axiosPrivate.post(
        "/payment",
        JSON.stringify({ id: ordeerid }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        const authorizationUrl =
          response?.data?.data?.response?.data?.authorization_url;
        window.location.href = authorizationUrl; // Redirect to the payment authorization URL
      }
    }
  };
  console.log(data);
  return (
    <div className="bg-white pt-20">
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {data?.length > 1 && (
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
        )}
        {data?.length === 0 && (
          <div className=" flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-[100px] h-[100px] text-primaryOne"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p className=" text-[18px]">Your cart is empty!</p>

            <button className=" bg-primaryOne text-white p-2 rounded-md">
              Start Your Shopping Spree!!!
            </button>
          </div>
        )}
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {data?.map((product, productIdx) => (
                <li key={product.product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      alt={product.product.productName}
                      src={product.product.imageUrl}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {product.product.productName}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.size}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ₦ {Number(product.total).toLocaleString()}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantity, {product.quantity}
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={loadingItems[product.product.id]}
                            onClick={(e) => {
                              e.preventDefault();
                              onHandleRemoveItems(product.product.id);
                            }}
                            className={
                              !loadingItems[product.product.id]
                                ? "w-[40px] h-[30px] bg-primaryOne font-bold text-white"
                                : "grayscale w-[40px] h-[30px] bg-primaryOne opacity-[50%]"
                            }
                          >
                            -
                          </button>
                          {loadingItems[product.product.id] ? (
                            <Spinner />
                          ) : (
                            <p className="w-[24px] h-[24px] flex justify-center items-center">
                              {product.quantity}
                            </p>
                          )}
                          <button
                            disabled={loadingItems[product.product.id]}
                            onClick={(e) => {
                              e.preventDefault();
                              onHandleAddItems(product.product.id);
                            }}
                            className={
                              !loadingItems[product.product.id]
                                ? "w-[40px] h-[30px] bg-primaryTwo font-bold text-white"
                                : "grayscale w-[40px] h-[30px] bg-primaryTwo opacity-[50%]"
                            }
                          >
                            +
                          </button>
                        </div>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini
                              aria-hidden="true"
                              className="h-5 w-5"
                              onClick={(e) => {
                                e.preventDefault();
                                removeItemfromCart(product.id);
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        />
                      ) : (
                        <ClockIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "In stock"
                          : `Ships in 1- 5 working days`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          {data?.length > 0 && (
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 sticky top-24  lg:pt-16"
              style={{ maxHeight: "calc(100vh - 40px)", overflowY: "auto" }}
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₦{totalSum.toLocaleString()}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900"> ₦5,000</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {" "}
                    ₦{totalSum * 0.75}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₦{(totalSum + 5000 + totalSum * 0.75).toLocaleString()}{" "}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                {auth?.fullname && (
                  <button
                    disabled={checkingout}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      onhandleCheckOut();
                    }}
                    className={
                      !checkingout
                        ? "w-full rounded-md border border-transparent h-[49.5px] flex justify-center items-center bg-primaryOne  text-base font-medium text-white shadow-sm hover:bg-primaryTwo focus:outline-none focus:ring-2 focus:ring-primaryOne focus:ring-offset-2 focus:ring-offset-gray-50"
                        : "w-full rounded-md border border-transparent h-[49.5px] flex justify-center items-center  text-base font-medium text-white shadow-sm  cursor-not-allowed grayscale-0"
                    }
                  >
                    {!checkingout ? "Checkout" : <Spinner />}
                  </button>
                )}
                {!auth?.accessToken && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/Login");
                    }}
                    className="w-full rounded-md border border-transparent bg-primaryOne px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryTwo  focus:outline-none focus:ring-2 focus:ring-primaryOne focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                )}{" "}
                {!auth?.fullname && auth?.accessToken && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/customer/account");
                    }}
                    className="w-full rounded-md border border-transparent bg-primaryOne px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryTwo  focus:outline-none focus:ring-2 focus:ring-primaryOne focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                )}
              </div>
            </section>
          )}
        </form>

        {/* Related products */}
        <section aria-labelledby="related-heading" className="mt-24">
          <h2
            id="related-heading"
            className="text-lg font-medium text-gray-900"
          >
            You may also like&hellip;
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={relatedProduct.imageAlt}
                    src={relatedProduct.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {relatedProduct.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
