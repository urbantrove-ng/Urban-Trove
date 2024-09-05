"use client";

import { format } from "date-fns";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UrbanContext} from "../../context/UrbanContext";

export default function OrderDetails() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
   const {auth} = useContext(UrbanContext);
  const axiosPrivate = useAxiosPrivate();
  const getSingleOrders = async () => {
    const response = await axiosPrivate.get(`/user/order/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setOrders([response?.data?.data?.order]);
  };
  useEffect(() => {
    getSingleOrders();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy");
  };
  return (
    <div className="bg-gray-50">
      {orders.map((order) => {
        return (
          <main
            className="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8"
            key={order._id}
          >
            <div className="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
              <div className="flex sm:items-baseline sm:space-x-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Order #{order.orderNo}
                </h1>
                <a
                  href="#"
                  className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
                >
                  View invoice
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                Order placed
                <time
                  dateTime="2021-03-22"
                  className="font-medium text-gray-900"
                >
                  {formatDate(order.createdAt)}
                </time>
              </p>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden"
              >
                View invoice
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            {/* Products */}
            <section aria-labelledby="products-heading" className="mt-6">
              <h2 id="products-heading" className="sr-only">
                Products purchased
              </h2>

              <div className="space-y-8">
                {orders[0]?.items?.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                    >
                      <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                        <div className="sm:flex lg:col-span-7">
                          <div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                            <img
                              alt={item.product.productName}
                              src={item.product.images[0]?.url} // Use the first image in the array
                              className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                            />
                          </div>

                          <div className="mt-6 sm:ml-6 sm:mt-0">
                            <h3 className="text-base font-medium text-gray-900">
                              <a href="#">{item.product.productName}</a>
                            </h3>
                            <p className="mt-2 text-sm font-medium text-gray-900">
                              ₦
                              {Number(
                                item.product.prices.actualPrice
                              ).toLocaleString()}
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                              {item.product.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 lg:col-span-5 lg:mt-0">
                          <dl className="grid grid-cols-2 gap-x-6 text-sm">
                            {orders.map((order) => {
                              return (
                                <div key={order._id}>
                                  <dt className="font-medium text-gray-900">
                                    Delivery address
                                  </dt>
                                  <dd className="mt-3 text-gray-500">
                                    <span className="block">
                                      {order.address.city}
                                    </span>
                                    <span className="block">
                                      {order.address.state}
                                    </span>
                                    <span className="block">
                                      {order.address.zipcode}
                                    </span>
                                  </dd>
                                </div>
                              );
                            })}
                            <div>
                              <dt className="font-medium text-gray-900">
                                Shipping updates
                              </dt>
                              <dd className="mt-3 space-y-3 text-gray-500">
                                <p>Email: {auth?.email}</p>
                                <p>Phone: {auth?.phone}</p>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
                        <h4 className="sr-only">Status</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Billing */}
            <section aria-labelledby="summary-heading" className="mt-16">
              <h2 id="summary-heading" className="sr-only">
                Billing Summary
              </h2>

              <div className="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
                <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                  <div>
                    <dt className="font-medium text-gray-900">
                      Billing address
                    </dt>
                    {orders.map((order) => {
                      return (
                        <dd className="mt-3 text-gray-500" key={order._id}>
                          <span className="block">{order.address.city}</span>
                          <span className="block">{order.address.state}</span>
                          <span className="block">{order.address.zipcode}</span>
                        </dd>
                      );
                    })}
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      Payment information
                    </dt>
                    <dd className="-ml-4 -mt-1 flex flex-wrap">
                      <div className="ml-4 mt-4 flex-shrink-0">
                        <svg
                          width={36}
                          height={24}
                          viewBox="0 0 36 24"
                          aria-hidden="true"
                          className="h-6 w-auto"
                        >
                          <rect rx={4} fill="#224DBA" width={36} height={24} />
                          <path
                            d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                            fill="#fff"
                          />
                        </svg>
                        <p className="sr-only">Visa</p>
                      </div>
                      <div className="ml-4 mt-4">
                        <p className="text-gray-900">Ending with 4242</p>
                        <p className="text-gray-600">Expires 02 / 24</p>
                      </div>
                    </dd>
                  </div>
                </dl>

                <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
                  <div className="flex items-center justify-between pb-4">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      ₦ {Number(orders[0]?.total).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">₦5000</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="font-medium text-gray-900">Order total</dt>
                    <dd className="font-medium text-indigo-600">
                      {" "}
                      ₦ {Number(orders[0]?.total + 5000).toLocaleString()}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </main>
        );
      })}
    </div>
  );
}
