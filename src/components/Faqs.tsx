const Faqs = () => {
  const faqData = [
    {
      faq: "What is the main goal of IndiaTechSalaries?",
      response:
        "IndiaTechSalaries is dedicated to providing transparent data on tech salaries in India. We focus on delivering industry-level insights, making it the go-to platform crafted by techies for techies.",
    },
    {
      faq: "Is your data skewed towards any specific category?",
      response:
        "The salaries you see are aggregated from candidates who've signed up on TopHire. Something to point out here would be that TopHire sees a disproportionately high number of candidates signing up from product companies which may slightly skew the salaries towards the higher end of the spectrum.",
    },
    {
      faq: "How do you ensure the accuracy of the salary information?",
      response:
        "We prioritize data accuracy by regularly conducting staleness checks at TopHire and by exclusively sourcing information from candidates who have been verified and approved on the platform.",
    },
    {
      faq: "How confident are you of your data?",
      response:
        "To maintain transparency, for all of the charts you see above we've added the number of datapoints the information is based on and for each chart we've kept a minimum threshold to aggregate information for that specific chart.",
    },
    {
      faq: "Is there any cost associated with accessing the data or reports?",
      response: "Access to this data is absolutely free.",
    },
    {
      faq: "Is the data limited to certain roles within the tech industry, or does it cover a wide range?",
      response:
        "We've done our best to share data on most tech roles, spanning from entry level to executive positions.Additionally, we've tried adding insightful interpretations from the data. For example. Check out this chart which compares the median salary of graduates from various institutes based on degree.",
    },
    {
      faq: "How to interpret “percentile”?",
      response:
        "Percentiles help in understanding the relative standing of a value within a dataset. Imagine we have a dataset of 100 candidates' salaries, ordered from least to most. If you see a salary is at the 90th percentile, it means the salary is greater than 90% of other salaries in the dataset.",
    },
    {
      faq: "What components does our underlying salary data include?",
      response:
        "We're looking at total salaries that candidates input into their TopHire profile when signing up. This often includes the base salary, any variable pay and in some cases, even stock options.",
    },
  ];
  return (
    <div className="mt-20 px-4 md:px-0">
      <div className="flex flex-col justify-start md:justify-center items-start md:items-center gap-4">
        <p className="text-xl md:text-3xl font-bold text-start md:text-center bg-yellow-500 px-6 rounded-2xl py-2 text-black">
          FAQ
        </p>
        <p className=" text-3xl font-bold">Understanding IndiaTechSalaries</p>
        <p className="text-zinc-400">
          Discover more about why we started IndiaTechSalaries, and what our end
          goal is.
        </p>
      </div>
      {/* all faqs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {faqData.map((data, key) => (
          <div key={key} className="flex flex-col justify-start gap-3">
            <h1 className="text-lg font-bold text-zinc-300">{data.faq}</h1>
            <p className="text-md text-zinc-500">{data.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
