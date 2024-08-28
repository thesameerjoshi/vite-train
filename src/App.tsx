import "./App.css";

import SelectTheme from "./component/select";
import Button from "./component/button";
import { cn } from "./utils";
import { useTheme } from "./component/theme-provider";

function App() {
  const isHeading = false;
  const isVisibel = true;

  const { theme } = useTheme();
  return (
    <>
      <div className="bg-aurora-200 dark:bg-aurora-500">
        <p
          className={`${isHeading ? "text-4xl" : "text-xl"} dark:text-red-500`}
        >
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

      <div>
        <SelectTheme />
        <p>Currently the Slected Theme is : {theme}</p>
        <div className="h-96 w-96 flex items-center justify-center bg-primary">
          <p className="text-text-color">This is a custom theme</p>
        </div>
      </div>
    </>
  );
}

export default App;
