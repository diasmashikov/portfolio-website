// app/components/ThemeSwitcher.tsx

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  // const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  useEffect(() => {
    // Set the theme to 'system' on initial load
    setTheme("system");
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-3xl"
    >
      {resolvedTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
