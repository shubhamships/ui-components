import { useState } from "react";
import FormInput from "./componets/FormInput";

// input basic components
// floating input
// submit type
// hidden

function App() {
  const [data, setData] = useState({
    hidden1: "",
    hidden2: "",
    hidden3: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Form Submitted Data:", data);
  }

  return (
    <div className="bg-gray-950 h-full">
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Submit</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="text" placeholder="Enter First Name ...." variant="default" size="sm" icon="person">
          Submit
        </FormInput>
        <FormInput type="text" placeholder="Enter Last Name ...." variant="default" size="md" icon="person">
          Submit
        </FormInput>
        <FormInput type="text" placeholder="Enter Company ...." variant="default" size="lg" icon="person">
          Submit
        </FormInput>
        <FormInput type="text" label="Team" variant="default" size="xl" icon="person">
          Submit
        </FormInput>
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Email</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="sm" icon="mail">
          button
        </FormInput>
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="md" icon="mail">
          button
        </FormInput>
        <FormInput type="email" placeholder="example@gmail.com" variant="red" size="lg" icon="mail">
          button
        </FormInput>
        <FormInput type="email" label="email" variant="red" size="xl" icon="mail">
          button
        </FormInput>
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Number</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="sm" icon="number">
          button
        </FormInput>
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="md" icon="number">
          button
        </FormInput>
        <FormInput type="number" placeholder="123-456-7890" variant="green" size="lg" icon="number">
          button
        </FormInput>
        <FormInput type="number" label="number" variant="green" size="xl" icon="number">
          button
        </FormInput>
      </div>

      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Search</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput type="search" placeholder="Search Person" variant="blue" size="sm" icon="person">
          button
        </FormInput>
        <FormInput type="search" placeholder="Search Mail" variant="blue" size="md" icon="mail">
          button
        </FormInput>
        <FormInput type="search" placeholder="Search Location" variant="blue" size="lg" icon="location">
          button
        </FormInput>
        <FormInput type="search" label="search" variant="blue" size="xl" icon="search">
          button
        </FormInput>
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Hidden</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-8">
        <FormInput type="hidden" name="hidden1" placeholder="Enter value" variant="default" />
        <FormInput type="hidden" name="hidden2" placeholder="Enter value" variant="default" />
        <FormInput type="hidden" name="hidden3" placeholder="Enter value" variant="default" />
        <FormInput type="submit" name="Submit" variant="default">
          Submit
        </FormInput>
      </form>

      {/* 
      <FormInput type="button" value={data} label="button" placeholder="Choose File">
        button
      </FormInput>
      
      <FormInput type="number" value={data} label="number" placeholder="Choose File">
        button
      </FormInput>
      <FormInput type="password" value={data} label="password" placeholder="Choose File">
        button
      </FormInput>
      <FormInput type="search" value={data} label="search" placeholder="Choose File">
        button
      </FormInput> */}
    </div>
  );
}

export default App;
