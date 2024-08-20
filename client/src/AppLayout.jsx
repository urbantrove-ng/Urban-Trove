import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
