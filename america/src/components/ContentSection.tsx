
const ContentSection = () => {
  return (
    <div className="rounded-3xl  p-6 ">
      <blockquote className="border-l-4 border-indigo-500 pl-4 lg:text-3xl font-medium  italic text-[#2B3674]">
        “Americana Foods is navigating a 'perfect storm' of rising cold-chain costs and e-commerce expansion, yet the frozen category remains a resilient pillar of growth..”
      </blockquote>

      <div className="mt-5 space-y-4 text-[15px] leading-8  text-[#2B3674]">
        <p className="first-letter:text-2xl text-xl font-medium first-letter:font-bold first-letter:text-[#2B3674]">
          Our latest analysis of Americana's 247 SKUs reveals a stark divergence in performance across the portfolio.   
        </p>

        <p className="first-letter:text-2xl text-xl font-medium first-letter:font-bold first-letter:text-[#2B3674]">
         While Frozen Meat remains the primary volume driver, the hidden costs of returns and last-mile delivery in E-commerce are eroding the gains made in premium categories.
         </p>
  <p className=" text-xl font-medium ">

The data suggests that the current logistics infrastructure is struggling to keep pace with the 24% year-on-year growth in direct-to- consumer channels. This has led to an unprecedented spike in 'Cost to Serve', which now accounts for nearly 18% of gross revenue in some high-volume segments.
  </p>
  <p className=" text-xl font-medium ">
Executives are being urged to re-evaluate their channel mix, as the traditional van sales model shows surprising resilience, maintaining a steady 12.4% EBIT margin despite the broader market volatility.
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
