import FormInput from "./FormInput";

export default function Card() {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center text-slate-100 text-sm">
      <a href="/card"></a>
      <div className="w-full max-w-xs sm:max-w-sm m-3 md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <p className="text-start text-2xl">Sign in to our platform</p>
          <div className="mt-8 space-y-2">
            <label>Your Email</label>
            <div>
              <FormInput
                type="text"
                placeholder="Enter Email ID ...."
                label=""
                variant="default"
                size="md"
                icon="mail"
              />
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <label>Your password</label>
            <FormInput
              type="password"
              placeholder="Enter Password ...."
              label=""
              variant="default"
              size="md"
              icon="password"
            />
          </div>
          <div className="mt-4 gap-2 flex justify-between">
            <div className="flex gap-2">
              <FormInput type="checkbox" variant="checkbox" className="mt-0.5 cursor-pointer" />
              <p className="text-slate-200 cursor-pointer">Remember me</p>
            </div>
            <p className="text-blue-600 cursor-pointer hover:underline">Lost Password?</p>
          </div>
          <div className="mt-8">
            <FormInput
              type="button"
              placeholder="Enter Password ...."
              label="Submit"
              variant="default"
              size="md"
              className="bg-blue-700 border-none appearance-none"
            />
          </div>
          <div className="text-slate-200 flex gap-1 mt-4">
            Not registered? <p className="text-blue-600 cursor-pointer hover:underline">Create account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
