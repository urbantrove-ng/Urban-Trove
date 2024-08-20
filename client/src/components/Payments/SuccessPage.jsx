import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { axiosPrivate } from "../../Api/axios";
import { useEffect, useState } from "react";
import loader from "../../assets/image/logo.png";
function SuccessPage() {
  const location = useLocation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(10); 
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const reference = queryParams.get("reference");

  const getUserPayment = async () => {
    try {
      const response = await axiosPrivate.get(
        `/payment?reference=${reference}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setData(response?.data?.data);
      setLoading(false);
    } catch (err) {
      // console.error("Error fetching payment data:", err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserPayment();
  }, []);
  useEffect(() => {
    if (!loading && !error) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            navigate("/customer/orders");
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [loading, error, navigate]);
  if (loading) {
    return (
      <div className=" bg-white rounded-full flex justify-center items-center h-[100vh] w-full">
        <div className=" flex flex-col items-center">
          <img src={loader} className=" w-40 h-20  pulse " />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading payment data: {error.message}</p>;
  }

  return (
    <div className="flex justify-center items-center lg:pt-40 pt-24 text-3xl font-bold bg-white  lg:h-[80vh]">
      <div className=" flex flex-col items-center px-4">
        <div className="flex items-center gap-4 text-[18px]">
          <FaCheckCircle className="fill-green-500" />
          <p className="text-green-500">Payment Successful!</p>
        </div>
        <p className="text-[18px] text-center">
          Thank you! Your payment of ₦ {data?.order?.total.toLocaleString()} has
          been received.
        </p>
        <p className=" uppercase text-[18px] text-center">
          ORDER NO: {data?.order?.orderNo} | Reference No:{" "}
          {data?.payment?.reference}
        </p>
        <p className="text-[18px]">
          Redirecting in <span className=" text-blue-600 ">{countdown}s</span>
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
