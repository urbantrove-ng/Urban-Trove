import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const PaymentOption = ({ icon, label, additionalContent, onSelect }) => (
  <div className="flex gap-5 justify-between items-start px-11 pt-1.5 mt-5 max-w-full bg-white border border-solid border-zinc-100 rounded-[100px] w-[650px] max-md:flex-wrap max-md:px-5">
    <div className="flex gap-2 self-start">
      <img loading="lazy" src={icon} alt={`${label} icon`} className="shrink-0 my-auto aspect-[1.02] w-[53px]" />
      {additionalContent}
    </div>
    <button
      onClick={onSelect}
      className="shrink-0 my-auto bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 h-[37px] w-[43px]"
      aria-label={`Select ${label}`}
    />
  </div>
);

function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleAddCard = () => {
    navigate("./CardPage");
  };


  const handleConfirmPayment = () => {
    navigate("./SuccessPage")
  };

  return (
    <main className="flex flex-col items-center pt-10 pr-20 pb-20 pl-9 bg-white max-md:px-5">
      <header className="flex gap-5 w-full text-3xl font-medium text-center max-w-[1030px] text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d174aadbb7a92fdf6681467e4c46a97d0df60aa3753c024337e48e28f12e92da?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="Payment method icon" className="shrink-0 aspect-[1.02] fill-white w-[60px]" />
        <h1 className="flex-auto self-end mt-7 max-md:max-w-full">Payment Method</h1>
      </header>
      <section>
        <h2 className="mt-11 text-2xl font-bold text-black max-md:mt-10">Credit & Debit Card</h2>
        <button
          onClick={handleAddCard}
          className="flex gap-5 justify-between px-11 py-7 mt-9 max-w-full text-2xl font-bold bg-white border border-solid border-zinc-100 rounded-[100px] text-stone-300 w-[650px] max-md:flex-wrap max-md:px-5"
        >
          <div className="flex gap-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c615988751c50b5c277686c49b06eb99df01b87f9f16753f67a29d38641e1a8?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="Add card icon" className="shrink-0 aspect-[1.43] fill-lime-700 w-[53px]" />
            <div className="flex-auto my-auto">Add Card</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ae7c23e284b65d0a41da35234cefd9f0ec549c920de692900c49de798d6d0e?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="" className="shrink-0 self-start aspect-[0.68] w-[19px]" />
        </button>
      </section>
      <section>
        <h2 className="mt-12 text-2xl font-bold text-black max-md:mt-10">More Payment Options</h2>
        <PaymentOption
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebd035c38fc78aef18659017bde648608647657fde4fac1bd0fc208cb5e47e6?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
          label="Payment option 1"
          additionalContent={<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf42d449bf02cbdf8b96f741be8fe706a5ca322586cbf4c1da479560b1da1e24?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="Payment option 1 logo" className="shrink-0 w-32 max-w-full aspect-[1.39]" />}
          onSelect={() => setSelectedPayment("option1")}
        />
        <PaymentOption
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2148bcc19470ec5a25e8da20c470f61307b9f4783aa0a2ae862c1a992ecc00?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
          label="Payment option 2"
          additionalContent={<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2148bcc19470ec5a25e8da20c470f61307b9f4783aa0a2ae862c1a992ecc00?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="Payment option 2 logo" className="shrink-0 max-w-full aspect-[2.33] w-[106px]" />}
          onSelect={() => setSelectedPayment("option2")}
        />
        <PaymentOption
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8841b2f690bb8c4f04bbe2bf33e44bc2aff7ae3072ff45c6114647012f16480e?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
          label="Payment option 3"
          additionalContent={<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8841b2f690bb8c4f04bbe2bf33e44bc2aff7ae3072ff45c6114647012f16480e?apiKey=7b5e2482ca0b4f478aab41d134efc02a&" alt="Payment option 3 logo" className="shrink-0 self-start max-w-full aspect-[1.43] w-[106px]" />}
          onSelect={() => setSelectedPayment("option3")}
        />
      </section>
      <button
        onClick={handleConfirmPayment}
        className="justify-center items-center px-16 py-6 mt-24 max-w-full text-2xl font-bold tracking-wide leading-5 text-white bg-lime-700 rounded-3xl shadow-lg w-[362px] max-md:px-5 max-md:mt-10"
      >
        Confirm Payment
      </button>
    </main>
  );
}

export default PaymentMethod;
