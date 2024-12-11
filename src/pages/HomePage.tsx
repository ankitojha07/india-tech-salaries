import { useState } from "react";
import Button from "../components/ButtonComponent";
import ChartComponent from "../components/charts/ChartComponent";
import MedianCalculator from "../components/MedianCalculator";
import Faqs from "../components/Faqs";
import Promotion from "../components/Promotion";

const HomePage = () => {
  const data = [7.4, 8.2, 10, 12, 15, 18, 28, 35];

  const [role, setRole] = useState("SoftwareEngineer");
  const [years, setYears] = useState("0");

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };
  const handleYearsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYears(event.target.value);
  };
  return (
    <div className="mt-32">
      {/* Optional: Add stars or particle effects */}
      <div className="absolute inset-0">
        <div className="bg-[url('https://example.com/stars-pattern.png')] bg-cover opacity-30"></div>
      </div>
      {/* content  */}
      <div className="h-full flex flex-col justify-center items-center px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-center sm:text-6xl lg:text-8xl ">
          Salary Insights for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
            Indian Techie
          </span>
        </h1>
        <p className="text-center mt-4 text-lg text-zinc-300">
          Benchmark your salary against lakhs of carefully curated data points.
        </p>
        <Button
          title="Benchmark Me!"
          bgClass="bg-blue-600"
          hoverClass="bg-blue-700"
          marginPadding="mt-12 px-4 py-2"
        />
      </div>

      {/* info-boxes  */}
      <div className="w-full grid grid-cols-1 mt-12 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-6 justify-center">
        <div className="border-2 border-dashed border-blue-600 px-4 py-3  rounded-lg shadow-all-sides hover:shadow-slate-800">
          <div className="flex flex-row justify-start items-center gap-4">
            <p className="bg-blue-500 rounded-full w-8 h-8 text-center flex justify-center items-center font-bold text-xl">
              1
            </p>
            <h2 className="text-xl font-bold text-blue-500">
              Is this credible?
            </h2>
          </div>
          <p className="mt-4 ">
            Our data comes from a database of hundreds of thousands of vetted
            candidates who were approved to interview on <span>TopHire</span>,
            an online job portal built especially for the best tech talent in
            India.
          </p>
        </div>
        <div className="border-2 border-dashed border-blue-600 px-4 py-3 rounded-lg shadow-all-sides hover:shadow-slate-800">
          <div className="flex flex-row justify-start items-center gap-4">
            <p className="bg-blue-500 rounded-full w-8 h-8 text-center flex justify-center items-center font-bold text-xl">
              2
            </p>
            <h2 className="text-xl font-bold text-blue-500">Why Build This?</h2>
          </div>
          <p className="mt-4 ">
            IndiaTechSalaries began as a weekend project to help techies
            benchmark their salaries. We eventually ended up spending 3+ weeks
            working on it because we wanted to just get it right.
          </p>
        </div>
        <div className="border-2 border-dashed border-blue-600 px-4 py-3  rounded-lg shadow-all-sides hover:shadow-slate-800">
          <div className="flex flex-row justify-start items-center gap-4">
            <p className="bg-blue-500 rounded-full w-8 h-8 text-center flex justify-center items-center font-bold text-xl">
              3
            </p>
            <h2 className="text-xl font-bold text-blue-500">
              What is Playground?
            </h2>
          </div>
          <p className="mt-4 ">
            We have an embedded <span>Metabase playground</span> for you to play
            around with. The goal for playground is to open-source interesting
            chart ideas and quickly add them to our page.
          </p>
        </div>
      </div>

      {/* charts start  */}
      <div className="mt-32 border p-8 rounded-3xl shadow-small-shadow shadow-blue-500 flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-2xl font-bold text-center md:text-4xl">
            🕵️‍♂️ Are you being paid fairly?
          </h1>
          <p className="mt-2 lg:md:text-lg leading-8 text-slate-400 mobile:text-sm mobile:leading-none text-center ">
            Input your details below and find out where you lie.
          </p>
          <div className="mt-4 flex gap-4">
            <div className="flex gap-2 items-center">
              <p className="hidden sm:block">I am a</p>
              <select
                id="role-dropdown"
                name="role"
                value={role}
                onChange={handleRoleChange}
                className="bg-transparent rounded-lg px-2 py-2 text-yellow-600"
              >
                <option value="Software Engineer" className="bg-black">
                  Software Engineer
                </option>
                <option value="Backend Developer" className="bg-black">
                  Backend Developer
                </option>
                <option value="Frontend Developer" className="bg-black">
                  Frontend Developer
                </option>
                <option value="Full-Stack Developer" className="bg-black">
                  Full-Stack Developer
                </option>
                <option value="Android Developer" className="bg-black">
                  Android Developer
                </option>
                <option value="Data Developer" className="bg-black">
                  Data Developer
                </option>
                <option value="QA/SDET" className="bg-black">
                  QA/SDET
                </option>
                <option value="Product Manager" className="bg-black">
                  Product Manager
                </option>
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <p className="hidden sm:block">with</p>
              <select
                id="years-dropdown"
                name="years"
                className="bg-transparent rounded-lg px-2 py-2 text-yellow-600"
                value={years}
                onChange={handleYearsChange}
              >
                <option value="0" className="bg-black">
                  0 Years
                </option>
                <option value="1" className="bg-black">
                  1 Years
                </option>
                <option value="2" className="bg-black">
                  2 Years
                </option>
                <option value="3" className="bg-black">
                  3 Years
                </option>
                <option value="4" className="bg-black">
                  4 Years
                </option>
                <option value="5" className="bg-black">
                  5 Years
                </option>
                <option value="6" className="bg-black">
                  6 Years
                </option>
                <option value="7" className="bg-black">
                  7 Years
                </option>
                <option value="8" className="bg-black">
                  8 Years
                </option>
                <option value="9" className="bg-black">
                  9 Years
                </option>
                <option value="10+" className="bg-black">
                  10+ Years
                </option>
              </select>
              <p className="hidden sm:block">of experience</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[200px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <ChartComponent />
        </div>
        <div className="bg-blue-500 p-4 rounded-2xl flex flex-col md:flex-row gap-2 justify-between">
          <div className="w-full md:w-8/12">
            <p className="text-2xl font-bold md:text-3xl ">
              Median Salary for a{" "}
              <span className="text-yellow-300">{role}</span> with{" "}
              <span className="text-pink-200">{years}</span> exp
            </p>
            <p className="font-bold">
              Based on <span className="text-blue-800 font-bold"></span> Total
              Profiles
            </p>
          </div>
          <p className=" text-2xl md:text-4xl font-bold h-full">
            <MedianCalculator data={data} />
            {""}
            ,00,000
            <span className="text-lg text-end">/yr</span>
          </p>
        </div>
      </div>

      <Faqs />
      <Promotion />
    </div>
  );
};

export default HomePage;
