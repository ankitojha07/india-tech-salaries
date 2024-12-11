import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8 px-4 md:px-0">
      <img
        src="./images/logo.png"
        alt="Tophire"
        className="h-auto w-[50%] max-w-[200px]"
      />
      <Link to="/" className="text-slate-400 text-sm pointer">
        Playground
      </Link>
    </div>
  );
};

export default Navbar;
