import logo from "../../assets/image/logo.png";

export default function FormHeader({ heading }) {
  return (
    <div className="mb-1">
      <div className="items-center justify-center">
        <img alt="logo" className="h-90 w-30" src={logo} />
      </div>
    </div>
  );
}
