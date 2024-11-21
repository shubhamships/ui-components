import Button from "./components/Button";

function App() {
  return <div className="text-3xl font-bold underline">Hello Gaurav!
  <Button title="Submit" onClick={() => alert("Button Clicked !")}/>
  <Button title="Button default"  variant="default"/>
  <Button title="Button destructive" variant="destructive"/>
  <Button title="Button ghost" variant="ghost"/>
  <Button title="Button black" variant="black"/>
  <Button title="Button disabled" variant="disabled"/>




  </div>;
}

export default App;
