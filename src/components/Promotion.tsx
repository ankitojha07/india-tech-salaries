import ButtonComponent from "./ButtonComponent";
import { IoHeart } from "react-icons/io5";

const Promotion = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-10 px-4 sm:px-0 pb-8">
      <IoHeart className="text-white text-6xl bg-red-500 rounded-full p-4" />
      <h1 className="text-2xl md:text-4xl font-bold">
        Looking for a Tech Job?
      </h1>
      <p className="w-full sm:w-10/12 text-center">
        TopHire is the go to platform for techies to find their next job. We're
        entrusted with handling end to end recruitment for some of the biggest
        names in Indian tech.
      </p>
      <ButtonComponent
        title="Take me to Tophire"
        bgClass="bg-blue-500"
        hoverClass="bg-blue-600"
        marginPadding="px-4 py-2"
      />
    </div>
  );
};

export default Promotion;
