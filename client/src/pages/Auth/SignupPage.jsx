import Footer from "../../components/Account/Footer";
import Header from "../../components/Account/Header";
import Signup from "../../components/Account/SignupForm";

export default function SignupPage() {
  return (
    <>
      <Header heading="Uncover Urban Gems with Urban Trove" />
      <Signup />
      <Footer
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
    </>
  );
}
