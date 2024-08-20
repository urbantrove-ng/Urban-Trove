import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
function Accountdetails() {
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
  return (
    <div className="  lg:w-[919px]  pt-4">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Account Overview{" "}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Customer Information
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.fullname}
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Phone number
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.phone}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.location?.address}, {user?.location?.city},{" "}
              {user?.location?.state}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Zip code
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.location?.zipcode}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Accountdetails;
