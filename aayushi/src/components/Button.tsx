
import { Mail, CircleArrowRight } from 'lucide-react';

interface ButtonComponentProps {
  googleText?: string;
  signUpText?: string;
  learnMoreText?: string;
}

export const Button = ({ googleText, signUpText, learnMoreText }:ButtonComponentProps) => {
  const googleIcon = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png";

  return (
    <div className="grid grid-cols-2 md:grid md:grid-cols-3 ">
      <button className="text-xs lg:text-sm md:text-sm bg-white text-black py-1 border-2 border-white rounded inline-flex items-center justify-center sm:pl-4 md:pl-8 object-cover">
        {googleText || 'Sign in with Google'}
        <img
          src={googleIcon}
          className="w-4 h-4 ml-0.5 mr-2 sm:mr-4 md:mr-6"
          alt="Google Icon"
        />
      </button>

      <button className="text-xs lg:text-sm md:text-sm border-2 bg-amber-400 border-amber-400 rounded px-1 py-1/2 mx-1 inline-flex items-center justify-center sm:mx-3 md:mx-5 lg:px-2 lg:py-1">
        {signUpText || 'Sign up'}
        <Mail className="ml-2" />
      </button>

      <button className="hidden max-w-max md:text-sm text-xs lg:text-sm md:inline-flex md:border-2 border-white rounded px-2 py-1 mx-2">
        {learnMoreText || 'Learn More'}
        <CircleArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Button;
