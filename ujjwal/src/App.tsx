import { useState } from "react";
import FormInput from "./componets/FormInput";

// input basic components
// floating input
// submit type
// hidden

function App() {
  const [data, setData] = useState({
    name: "",
    name2: "",
    name3: "",
    name4: "",
    email: "",
    email2: "",
    email3: "",
    email4: "",
    location: "",
    location2: "",
    location3: "",
    location4: "",
    number: "",
    number2: "",
    number3: "",
    number4: "",
    search: "",
    search2: "",
    search3: "",
    search4: "",
  });

  function handleChange(e: any) {
    setData(e.target.value);
  }
  console.log(data);

  return (
    <div className="bg-gray-950 h-full">
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Submit</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput
          type="text"
          value={data.name}
          placeholder="Enter First Name ...."
          variant="default"
          size="sm"
          icon="person"
          onChange={handleChange}
        >
          Submit
        </FormInput>
        <FormInput
          type="text"
          value={data.name2}
          placeholder="Enter Last Name ...."
          variant="default"
          size="md"
          icon="person"
          onChange={handleChange}
        >
          Submit
        </FormInput>
        <FormInput
          type="text"
          value={data.name3}
          placeholder="Enter Company ...."
          variant="default"
          size="lg"
          icon="person"
          onChange={handleChange}
        >
          Submit
        </FormInput>
        <FormInput
          type="text"
          value={data.name4}
          label="Team"
          variant="default"
          size="xl"
          icon="person"
          onChange={handleChange}
        >
          Submit
        </FormInput>
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Email</p>
      <div className="flex flex-col space-y-6 p-8">
        <FormInput
          type="email"
          value={data.email}
          placeholder="example@gmail.com"
          variant="red"
          size="sm"
          icon="mail"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="email"
          value={data.email2}
          placeholder="example@gmail.com"
          variant="red"
          size="md"
          icon="mail"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="email"
          value={data.email3}
          placeholder="example@gmail.com"
          variant="red"
          size="lg"
          icon="mail"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="email"
          value={data.email4}
          label="email"
          variant="red"
          size="xl"
          icon="mail"
          onChange={handleChange}
        >
          button
        </FormInput>
      </div>
      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline">Number</p>

      <div className="flex flex-col space-y-6 p-8">
        <FormInput
          type="number"
          value={data.number}
          placeholder="123-456-7890"
          variant="green"
          size="sm"
          icon="number"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="number"
          value={data.number2}
          placeholder="123-456-7890"
          variant="green"
          size="md"
          icon="number"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="number"
          value={data.number3}
          placeholder="123-456-7890"
          variant="green"
          size="lg"
          icon="number"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="number"
          value={data.number4}
          label="number"
          variant="green"
          size="xl"
          icon="number"
          onChange={handleChange}
        >
          button
        </FormInput>
      </div>

      <p className="px-10 text-2xl text-white font-bold hover:text-gray-300 underline" onChange={handleChange}>
        Search
      </p>

      {/* Section for Search inputs */}
      <div className="flex flex-col space-y-6 p-8">
        <FormInput
          type="search"
          value={data.search}
          placeholder="Search Person"
          variant="blue"
          size="sm"
          icon="person"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="search"
          value={data.search2}
          placeholder="Search Mail"
          variant="blue"
          size="md"
          icon="mail"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="search"
          value={data.search3}
          placeholder="Search Location"
          variant="blue"
          size="lg"
          icon="location"
          onChange={handleChange}
        >
          button
        </FormInput>
        <FormInput
          type="search"
          value={data.search4}
          label="search"
          variant="blue"
          size="xl"
          icon="search"
          onChange={handleChange}
        >
          button
        </FormInput>
      </div>

      {/* <form className="grid grid-cols-1 mt-10 lg:grid-cols-4 md:grid-cols-2 p-8 pr-8  gap-6 justify-evenly items-center">
        <FormInput type="hidden" value={"Hello"} label="hidden" placeholder="Enter value" variant="default">
          Select
        </FormInput>{" "}
        <FormInput type="hidden" value={"Hello"} label="hidden" placeholder="Enter value" variant="default">
          Select
        </FormInput>{" "}
        <FormInput type="hidden" value={"Hello"} label="hidden" placeholder="Enter value" variant="default">
          Select
        </FormInput>{" "}
        <FormInput type="hidden" value={"Hello"} label="hidden" placeholder="Enter value" variant="default">
          Select
        </FormInput>
      </form> */}

      {/* 
     
      <FormInput type="submit" value={data} label="submit" placeholder="Choose File">
        button
      </FormInput>
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
