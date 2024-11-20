
import { useState } from "react";
import FormInput from "./componets/FormInput";
function App() {
  const [data,setData] = useState()
  return <div>
    <FormInput type="email" value={data} onChange={()=>alert("Hello")} label="email">Submit</FormInput>
  </div>
}

export default App;
