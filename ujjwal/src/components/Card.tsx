import CardComponet from "./cards/CardComponent";
import FormInput from "./FormInput";

export default function Card() {
  return (
    <div className="bg-gray-900 h-full flex flex-col items-center justify-center text-slate-100 text-sm">
      <a href="/card"></a>
      <CardComponet dimension="primary" theme="defaultLight" className="mt-44">
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

      <CardComponet dimension="secondary" theme="defaultDark" className="mt-44">
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

      <CardComponet dimension="primary" theme="defaultDark" className="mt-44">
        <p className="text-xl">Connect wallet</p>
        <h4 className="text-gray-500 mt-3 mb-4">
          Connect with one of our available wallet providers or create a new one.
        </h4>
        <div className="flex flex-col gap-5">
          <FormInput
            type="text"
            label="MetaMask"
            variant="defaultDark"
            size="md"
            icon="dog"
            className="hover:bg-slate-300"
            disabled
          ></FormInput>
          <FormInput
            type="text"
            placeholder=""
            label="Coinbase Wallet"
            variant="defaultDark"
            size="md"
            icon="wallet"
            className="hover:bg-slate-300 "
            disabled
          ></FormInput>{" "}
          <FormInput
            type="text"
            placeholder=""
            label="Opera wallet"
            variant="defaultDark"
            size="md"
            icon="circle"
            disabled
            className="hover:bg-slate-300"
          ></FormInput>{" "}
          <FormInput
            type="text"
            placeholder=""
            label="FortMatic"
            variant="defaultDark"
            size="md"
            icon="castle"
            className="hover:bg-slate-300"
            disabled
          ></FormInput>
          <p className="text-gray-500 hover:underline">&#x2753; Why do I need to connect with my wallet?</p>
        </div>
      </CardComponet>
      <CardComponet dimension="secondary" theme="defaultDark" className="mt-44">
        <h1 className="text-2xl mb-4">Get more updates...</h1>
        <p className="text-gray-300">
          Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll
          be among the first to find out about new features, components, versions, and tools.
        </p>
        <div className="flex items-center gap-8 mt-5 justify">
          <FormInput
            type="text"
            placeholder="Your Email address ...."
            variant="defaultDark"
            size="md"
            icon="mail"
          ></FormInput>
          <button className="bg-blue-700 text-white p-3 rounded-lg px-6 hover:bg-blue-400">Subscribe</button>
        </div>
        <p className="mt-6">
          By subscribing, you agree with ConvertKit's{" "}
          <span className="text-blue-500 hover:underline">Terms of Service</span> and{" "}
          <span className="text-blue-500 hover:underline">Privacy Policy</span>.
        </p>
      </CardComponet>
      <CardComponet dimension="primary" theme="defaultDark" className="grid grid-cols-2 gap-2 mt-44">
        <CardComponet dimension="primaryTopleftBorder" theme="defaultDark">
          <div className="space-y-1">
            <p className="text-xl">Very easy this was to integrate</p>
            <p className="text-gray-400">
              Aesthetically, the well designed components are beautiful and will undoubtedly level up your next
              application."
            </p>
            <h1>Jese Leos</h1>
            <p className="text-gray-400">Software Engineer at Facebook</p>
          </div>
        </CardComponet>
        <CardComponet dimension="primaryTopRightBorder" theme="defaultDark">
          <div className="space-y-1">
            <p className="text-xl">Solid foundation for any project</p>
            <p className="text-gray-400">If you care for your time, I hands down would go with this."</p>
            <h1>Bonnie Green</h1>
            <p className="text-gray-400">Developer at Open AI</p>
          </div>
        </CardComponet>
        <CardComponet dimension="primaryBottomLeftBorder" theme="defaultDark">
          <div className="space-y-1">
            <p className="text-xl">Mindblowing workflow</p>
            <p className="text-gray-400">
              Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a
              huge timesaver!"
            </p>
            <h1>Roberta Casas</h1>
            <p className="text-gray-400">Lead designer at Dropbox</p>
          </div>
        </CardComponet>
        <CardComponet dimension="primaryBottomRightBorder" theme="defaultDark">
          <div className="space-y-1">
            <p className="text-xl">Efficient Collaborating</p>
            <p className="text-gray-400">
              You have many examples that can be used to create a fast prototype for your team.""
            </p>
            <h1>Joseph McFall</h1>
            <p className="text-gray-400">CTO at Google</p>
          </div>
        </CardComponet>
      </CardComponet>

      {/* <CardComponet>
        <img src={""} alt="" />
      </CardComponet> */}
    </div>
  );
}
