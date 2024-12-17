interface LoginProps {
  label: string;
  label2: string;
  buttonClass: string;
  placeholder: string;
  button: string;
  heading: string;
}
const LoginFormCard = ({ label, label2, buttonClass, placeholder, button, heading }: LoginProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">{heading}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              {label}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              {label2}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
            />
          </div>

          <button
            type="submit"
            className={` py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${buttonClass}`}
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormCard;
