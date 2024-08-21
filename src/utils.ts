import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { cva } from "class-variance-authority";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const useStorage = (
  key: string,
  defaultValue = ""
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;

export const buttonStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black dark:text-white dark:bg-black dark:border dark:border-gray-700",
        destructive: "bg-red-500 text-white dark:text-white",
        outline:
          "border border-tahiti-600 bg-transparent text-tahiti-600 dark:text-white dark:border-blue-500",
        xyz: "hover:bg-metal hover:text-silver dark:text-white dark:border-orange-500 dark:border",
        link: "text-midnight underline-offset-4 hover:underline bg-transparent dark:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "xyz",
      size: "default",
    },
  }
);
