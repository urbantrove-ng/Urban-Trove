import FormFooter from "../../components/Account/FormFooter";
import FormHeader from "../../components/Account/FormHeader";
import Signup from "../../components/Account/SignupForm";
import SocialLogin from "../../components/Account/SocialLogin";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <FormHeader />
          <Signup />
          <SocialLogin />
          <FormFooter
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
        </div>
      </div>
    </>
  );
}
