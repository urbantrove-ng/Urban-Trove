import LoginPage from "./pages/Auth/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Auth/SignupPage";
import ForgotPage from "./pages/Auth/ForgotPage";

function App() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgotpass" element={<ForgotPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
