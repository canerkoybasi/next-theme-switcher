import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-defaultBackground">
      <div className="flex text-5xl p-5 text-secondBrandColor ">Home</div>
      <div className="flex text-5xl p-5 "><ThemeSwitch /></div>
    </div>
  );
}
