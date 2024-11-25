import CardComponet from "./cards/CardComponent";
import FormInput from "./FormInput";

export default function Card() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-slate-100 text-sm">
      <a href="/card"></a>
      <CardComponet dimension="primary" theme="defaultLight">
        <form>
          <p className="text-start text-2xl">Sign in to our platform</p>
          <div className="mt-8 space-y-2">
            <label>Your Email</label>
            <div>
              <FormInput
                type="text"
                placeholder="Enter Email ID ...."
                label=""
                variant="defaultWhite"
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
              variant="defaultWhite"
              size="md"
              icon="password"
            />
          </div>
          <div className="mt-4 gap-2 flex justify-between">
            <div className="flex gap-2">
              <FormInput type="checkbox" variant="checkbox" className="mt-0.5 cursor-pointer" />
              <p className="cursor-pointer">Remember me</p>
            </div>
            <p className="text-blue-600 cursor-pointer hover:underline">Lost Password?</p>
          </div>
          <div className="mt-8">
            <FormInput
              type="button"
              placeholder="Enter Password ...."
              label=""
              variant="focusBlue"
              size="md"
              className="bg-blue-700 border-none appearance-none"
            />
          </div>
          <div className="flex gap-1 mt-4">
            Not registered? <p className="text-blue-600 cursor-pointer hover:underline">Create account</p>
          </div>
        </form>
      </CardComponet>

      <CardComponet dimension="secondary" theme="defaultDark" className="mt-20">
        <div>
          <p>Ujjwal Tyagi</p>
          <p>December 9 at 11:43 AM</p>
          <div className="mt-2">
            <FormInput
              type="textarea"
              placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
              label=""
              variant="defaultDark"
              size="md"
              disabled
              className="h-44"
            />
          </div>
        </div>
      </CardComponet>

      <CardComponet dimension="secondary" theme="defaultDark" className="mt-20">
        <FormInput
        ></FormInput>
      </CardComponet>
    </div>
  );
}
