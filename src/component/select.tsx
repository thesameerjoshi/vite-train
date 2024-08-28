import { useTheme } from "./theme-provider";
import { Theme } from "./theme-provider";

const SelectTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Select Theme</p>
      <div>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="nord">Nord</option>
        </select>
      </div>
    </div>
  );
};

export default SelectTheme;
