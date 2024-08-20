import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navigation = [
  {
    name: "My Account",
    href: "/customer/details",
    icon: HomeIcon,
    title: "Account Details",
    current: true,
  },
  {
    name: "My orders",
    href: "/customer/orders",
    icon: LuPackageOpen,
    title: "My Orders",
    current: false,
  },
  {
    name: "My inbox",
    href: "/customer/inbox",
    icon: FolderIcon,
    title: "Inbox",
    current: false,
  },
  {
    name: "Account Management",
    href: "/customer/account",
    icon: MdOutlineManageAccounts,
    title: "Account Management",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Account() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const [user, setUser] = useState();
  const axiosPrivate = useAxiosPrivate();
  const getUserDetails = async () => {
    const response = await axiosPrivate.get("/user/details", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setUser(response?.data?.data?.user);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  const currentTitle =
    updatedNavigation.find((item) => item.current)?.title || "Account";
  return (
    <div className="lg:pt-[7.5rem] pt-[10rem] lg:flex lg:items-start gap-2 ">
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden "
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#eff1e6] px-6 pb-2 pt-24 ring-1 ring-white/10">
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {updatedNavigation.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            to={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 shrink-0"
                            />
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden h-[85vh] lg:sticky left-0  lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#eff1e6] px-6">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {updatedNavigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-black "
                >
                  <img
                    alt=""
                    src={user?.image}
                    className="h-8 w-8 rounded-full bg-gray-800"
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">{user?.fullname}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className=" top-[5.6rem] w-full z-40 flex items-center gap-x-6 bg-[#eff1e6] fixed px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-black">
          {currentTitle}
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src={user?.image}
            className="h-8 w-8 rounded-full bg-gray-800"
          />
        </a>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
