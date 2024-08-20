import { format } from "date-fns";
import { LuPackageOpen } from "react-icons/lu";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function OrdersList() {
  const [orders, setOrders] = useState();
  const axiosPrivate = useAxiosPrivate();
  const getUserOrders = async () => {
    const response = await axiosPrivate.get("/user/orders", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setOrders(response?.data?.data?.orders);
  };
  useEffect(() => {
    getUserOrders();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy");
  };

  return (
    <div className="   flex justify-center items-center  ">
      {orders?.length === 0 ? (
        <div className=" flex justify-center items-center pt-40 ">
          <div className=" flex flex-col items-center">
            <LuPackageOpen className=" w-[10rem] h-[10rem]" />
            <p>There are no orders yet!!!</p>
          </div>
        </div>
      ) : (
        <div className="bg-white py-8 w-full  ">
          <div className="p">
            <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
              <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Order history
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  Check the status of recent orders, manage returns, and
                  discover similar products.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Recent orders</h2>
              <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-4 sm:px-4 lg:max-w-4xl lg:px-0">
                  {orders?.map((order) => (
                    <div
                      key={order._id}
                      className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                    >
                      <h3 className="sr-only">
                        Order placed on{" "}
                        <time dateTime={order.createdDatetime}>
                          {order.createdDate}
                        </time>
                      </h3>

                      <div className="flex items-center border-b border-gray-200 p-4 w-full sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                        <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                          <div>
                            <dt className="font-medium text-gray-900">
                              Order number
                            </dt>
                            <dd className="mt-1 text-gray-500">
                              {order.orderNo}
                            </dd>
                          </div>
                          <div className="hidden sm:block">
                            <dt className="font-medium text-gray-900">
                              Date placed
                            </dt>
                            <dd className="mt-1 text-gray-500">
                              <time dateTime={order.createdAt}>
                                {formatDate(order.createdAt)}
                              </time>
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium text-gray-900">
                              Total amount
                            </dt>
                            <dd className="mt-1 font-medium text-gray-900">
                              ₦ {order.total.toLocaleString()}
                            </dd>
                          </div>
                        </dl>

                        <Menu
                          as="div"
                          className="relative flex justify-end lg:hidden"
                        >
                          <div className="flex items-center">
                            <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                              <span className="sr-only">
                                Options for order {order.orderNo}
                              </span>
                              <EllipsisVerticalIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <NavLink
                                  to={order._id}
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                  View
                                </NavLink>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href={order.invoiceHref}
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                  Invoice
                                </a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </Menu>

                        <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                          <NavLink
                            to={`/customer/orders/${order?._id}`}
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span>View Order</span>
                            <span className="sr-only">{order.orderNo}</span>
                          </NavLink>
                          <a
                            href={order.invoiceHref}
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span>View Invoice</span>
                            <span className="sr-only">
                              for order {order.orderNo}
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Products */}
                      <h4 className="sr-only">Items</h4>
                      <ul role="list" className="divide-y divide-gray-200">
                        {order?.items?.map((item) => (
                          <li key={item._id} className="p-4 sm:p-6">
                            <div className="flex items-center sm:items-start">
                              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                                <img
                                  alt={item?.product?.productName}
                                  src={item?.product?.images[1]?.url} // Correctly access the image URL
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-6 flex-1 text-sm">
                                <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                  <h5 className="text-black">
                                    {item.quantity} x{" "}
                                    {item.product?.productName}{" "}
                                    {/* Access the product name and quantity */}
                                  </h5>
                                  <p className="mt-2 sm:mt-0">
                                    ₦
                                    {Intl.NumberFormat("en-US").format(
                                      item?.product?.prices?.actualPrice
                                    )}{" "}
                                    {/* Access the product price */}
                                  </p>
                                </div>
                                <p className="hidden text-gray-500 sm:mt-2 sm:block">
                                  {item.product?.description.toLocaleString()}{" "}
                                  {/* Access the product description */}
                                </p>
                              </div>
                            </div>

                            <div className="mt-6 sm:flex sm:justify-between">
                              {order.status === "completed" && (
                                <div className="flex items-center">
                                  <CheckCircleIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-green-500"
                                  />
                                  <p className="ml-2 text-sm font-medium text-gray-500">
                                    Delivered on{" "}
                                    <time dateTime={order.deliveredDatetime}>
                                      {order.deliveredDate}
                                    </time>
                                  </p>
                                </div>
                              )}
                              {order.status === "pending" && (
                                <div className="flex items-center gap-2">
                                  <CheckCircleIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-orange-600"
                                  />
                                  <p className=" text-md font-medium text-gray-500">
                                    {order.status}
                                  </p>
                                </div>
                              )}

                              <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                                <div className="flex flex-1 justify-center">
                                  <a
                                    href={item.product?.href}
                                    className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                  >
                                    View product
                                  </a>
                                </div>
                                <div className="flex flex-1 justify-center pl-4">
                                  <a
                                    href="#"
                                    className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                  >
                                    Buy again
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersList;
