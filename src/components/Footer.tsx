const Footer = () => {
  return (
    <div className="mt-20 px-4 sm:px-0  pb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col justify-start items-start">
        <p className="text-lg font-bold text-slate-600">IndiaTechSalaries</p>
        <p className="text-md text-slate-600">Home</p>
        <p className="text-md text-slate-600">Playground</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-lg font-bold text-slate-600">Get Hired</p>
        <p className="text-md  text-slate-600">TopHire</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-lg font-bold text-slate-600">Careers</p>
        <p className="text-md text-slate-600">Work @ TopHire</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <img
          src="./images/logo.png"
          alt="tophire"
          className="h-auto w-[70%] max-w-[300px]"
        />
      </div>
    </div>
  );
};

export default Footer;
