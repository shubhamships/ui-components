import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [data, setData] = useState({
    hidden1: "ShipGlobal",
    hidden2: "ID123",
    hidden3: "ID1234",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Form Submitted Data:", data);
  }

  return (
    <div className="bg-gray-950 h-full">
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Submit</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="text" placeholder="Enter First Name ...." variant="default" size="sm" icon="person" />
        <FormInput type="text" placeholder="Enter Last Name ...." variant="default" size="md" icon="person" />
        <FormInput type="text" placeholder="Enter Company ...." variant="default" size="lg" icon="person" />
        <FormInput type="text" label="Team" variant="default" size="xl" icon="person" />
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Email</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="sm" icon="mail" />
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="md" icon="mail" />
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="lg" icon="mail" />
        <FormInput type="email" label="email" variant="red" size="xl" icon="mail" />
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Number</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="sm" icon="number" />
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="md" icon="number" />
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="lg" icon="number" />
        <FormInput type="number" label="number" variant="green" size="xl" icon="number" />
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Search</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="search" placeholder="Search Person" variant="blue" size="sm" icon="person" />
        <FormInput type="search" placeholder="Search Mail" variant="blue" size="md" icon="mail" />
        <FormInput type="search" placeholder="Search Location" variant="blue" size="lg" icon="location" />
        <FormInput type="search" label="search" variant="blue" size="xl" icon="search" />
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Hidden</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-8">
        <FormInput type="hidden" value={data.hidden1} name="hidden1" placeholder="value" variant="default" />
        <FormInput type="hidden" value={data.hidden2} name="hidden2" placeholder="value" variant="default" />
        <FormInput type="hidden" value={data.hidden3} name="hidden3" placeholder="Enter value" variant="default" />
        <FormInput type="submit" name="Submit" placeholder="Tap" variant="default" />
      </form>
    </div>
  );
}

export default App;
