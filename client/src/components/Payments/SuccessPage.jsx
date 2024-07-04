import * as React from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function SuccessPage() {
  const [showReceipt, setShowReceipt] = React.useState(false);

  const handleViewOrder = () => {
    console.log("View Order clicked");
  };

  const back =() => {
    navigate("./PaymentMethod")
  }

  const handleViewReceipt = () => {
    setShowReceipt(true);
  };

  return (
    <div className="flex flex-col items-center pt-10 pr-20 pb-20 pl-9 text-3xl font-bold bg-white max-md:px-5">
      <div className="flex gap-5 self-start max-w-full font-medium text-center whitespace-nowrap text-neutral-900 w-[914px] max-md:flex-wrap">
        <button>
            onClick={back}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d174aadbb7a92fdf6681467e4c46a97d0df60aa3753c024337e48e28f12e92da?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
          className="shrink-0 aspect-[1.02] fill-white w-[60px]"
          alt="Payment icon"
        />
        </button>
        <div className="flex-auto self-end mt-7 ml-auto max-sm:mx-auto">
          <p className="indent-[9em]">Payment</p>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e6606dea596c2c653a6c678e6d5fb408183e1a9ab10092696d1dbc2c68cee8?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
        className="mt-52 max-w-full aspect-[0.98] fill-lime-700 w-[155px] max-md:mt-10"
        alt="Success icon"
      />
      <div className="mt-10 text-4xl text-black">Payment Successful</div>
      <div className="mt-2.5 text-2xl text-stone-300">
        Thank you for your patronage
      </div>
      <button
        onClick={handleViewOrder}
        className="flex flex-col items-end px-20 pt-8 mt-52 max-w-full tracking-wide text-white bg-lime-700 rounded-3xl shadow-lg leading-[62.5%] w-[446px] max-md:px-5 max-md:mt-10"
      >
        <div className="mx-auto">View Order</div>
        <div className="z-10 shrink-0 mt-1.5 bg-black bg-opacity-0 h-[25px] w-[25px]" />
      </button>
      <button
        onClick={handleViewReceipt}
        className="mt-12 tracking-wide text-lime-700 leading-[62.5%] max-md:mt-10"
      >
        View E-Receipt
      </button>
      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4">E-Receipt</h2>
            <p>Receipt details go here...</p>
            <button
              onClick={() => setShowReceipt(false)}
              className="mt-4 bg-lime-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessPage;