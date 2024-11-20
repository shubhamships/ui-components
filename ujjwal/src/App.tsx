import { useState } from "react";
import FormInput from "./componets/FormInput";

// input basic components
// floating input
// submit type
// hidden
//Types

function App() {
  const [data, setData] = useState();

  return (
    <div className="bg-gray-200 h-full">
      {/* Submit  */}
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 p-8 pr-8  gap-6 justify-evenly items-center">
        <FormInput type="text" value={data} label="First Name" variant="default" size="sm">
          Submit
        </FormInput>
        <FormInput type="text" value={data} label="Last name" variant="default" size="md">
          Submit
        </FormInput>{" "}
        <FormInput type="text" value={data} label="Company" variant="default" size="lg">
          Submit
        </FormInput>{" "}
        <FormInput type="text" value={data} label="Team" variant="default" size="xl">
          Submit
        </FormInput>{" "}
      </div>

      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 md:grid-cols-2 p-8 pr-8  gap-6 justify-evenly items-center">
        <FormInput
          type="email"
          value={data}
          label="email"
          placeholder="example@gmail.com"
          variant="red"
          size="sm"
          icon="mail"
        >
          button
        </FormInput>
        <FormInput
          type="email"
          value={data}
          label="email"
          placeholder="example@gmail.com"
          variant="red"
          size="md"
          icon="mail"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="email"
          value={data}
          label="email"
          placeholder="example@gmail.com"
          variant="red"
          size="lg"
          icon="mail"
        >
          button
        </FormInput>
        <FormInput
          type="email"
          value={data}
          label="email"
          placeholder="example@gmail.com"
          variant="red"
          size="xl"
          icon="mail"
        >
          button
        </FormInput>
      </div>
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 md:grid-cols-2 p-8 pr-8  gap-6 justify-evenly items-center">
        <FormInput
          type="number"
          value={data}
          label="number"
          placeholder="123-456-7890"
          variant="green"
          size="sm"
          icon="number"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="number"
          value={data}
          label="number"
          placeholder="123-456-7890"
          variant="green"
          size="md"
          icon="number"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="number"
          value={data}
          label="number"
          placeholder="123-456-7890"
          variant="green"
          size="lg"
          icon="number"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="number"
          value={data}
          label="number"
          placeholder="123-456-7890"
          variant="green"
          size="xl"
          icon="number"
        >
          button
        </FormInput>
      </div>
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 md:grid-cols-2 p-8 pr-8  gap-6 justify-evenly items-center">
        <FormInput
          type="search"
          value={data}
          label="search"
          placeholder="Choose File"
          variant="blue"
          size="sm"
          icon="mail"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="search"
          value={data}
          label="search"
          placeholder="Choose File"
          variant="blue"
          size="md"
          icon="mail"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="search"
          value={data}
          label="search"
          placeholder="Choose File"
          variant="blue"
          size="lg"
          icon="location"
        >
          button
        </FormInput>{" "}
        <FormInput
          type="search"
          value={data}
          label="search"
          placeholder="Search"
          variant="blue"
          size="xl"
          icon="search"
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
