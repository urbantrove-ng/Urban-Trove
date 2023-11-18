import Footer from "../../components/Account/FormFooter";
import Header from "../../components/Account/FormHeader";
import Signup from "../../components/Account/SignupForm";
import SocialLogin from "../../components/Account/SocialLogin";

export default function SignupPage() {
  return (
    <>
      <Header />
      <Signup />
      <SocialLogin />
      <Footer
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
    </>
  );
}
