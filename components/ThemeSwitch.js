import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeSwitch = (props) => {
  const { theme, setTheme } = useTheme();

  const toogleThemeButton = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          toogleThemeButton();
        }}
        className={` text-secondBrandColor border-secondBrandColor flex justify-center items-center text-xl  rounded-md w-10 h-10 border-[1px]`}
      >
        {theme == "dark" ? <IoSunny /> : <IoMoon />}
      </button>  
    </div>
  );
};

export default ThemeSwitch;
