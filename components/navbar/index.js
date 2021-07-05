import CollegeLogo from "./CollegeLogo";
import NavProfileIcon from "./NavProfileIcon";

const NavBar = ({ className }) => {
  return (
    <nav
      className={
        "flex justify-between items-center bg-gray-900 w-full h-14 " + className
      }
    >
      <CollegeLogo name="iter" />
      <div className="w-full flex items-center justify-end m-3">
        <div className={"hidden md:block lg:block xl:block"}>
          <div className="flex items-center">
            <div className="pr-6">
              <input
                className="justify-items-center font-light text-sm bg-gray-600 text-white w-48 h-8 outline-none rounded-3xl px-4"
                placeholder="search"
              />
            </div>
            <div className="pr-6">
              <img className="w-6" src="/bell-3-128.png"></img>
            </div>
            <div className="pr-6">
              <img className="w-6" src="/chat-4-256.png"></img>
            </div>
          </div>
        </div>
        <NavProfileIcon />
      </div>
    </nav>
  );
};

export default NavBar;
