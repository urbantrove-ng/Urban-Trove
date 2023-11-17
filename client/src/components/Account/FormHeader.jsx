export default function Header({ heading }) {
  return (
    <div className="mb-1">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
    </div>
  );
}
