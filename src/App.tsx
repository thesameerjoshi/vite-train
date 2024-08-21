import "./App.css";
import Button from "./component/button";
import SelectTheme from "./component/select";
import { cn } from "./utils";

function App() {
  const isHeading = false;
  const isVisibel = true;
  return (
    <div className="bg-red-500 dark:bg-blue-500">
      <p className={`${isHeading ? "text-4xl" : "text-xl"} text-red-500`}>
        Hello,{" "}
      </p>
      <p
        className={cn(
          "text-red-500",
          isHeading ? "text-4xl" : "text-xl",
          isVisibel ? "text-transparent" : ""
        )}
      ></p>

      <button>Button</button>

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
      </button>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
        Button
      </button>

      <Button variant="xyz" className="">
        Click Me
      </Button>
      <Button variant="destructive">Destructive</Button>

      <SelectTheme />
    </div>
  );
}

export default App;
