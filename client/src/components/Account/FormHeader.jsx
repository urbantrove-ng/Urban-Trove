import logo from "../../assets/image/logo.png";

export default function Header({ heading }) {
  return (
    <div className="mb-1">
      <div className="flex justify-center">
        <img alt="logo" className="h-20 w-21" src={logo} />
      </div>
      {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2> */}
    </div>
  );
}
