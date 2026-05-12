import { BsBookmarkFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      

      <h1 className="max-w-4xl text-2xl font-bold leading-tight lg:text-4xl text-[#2B3674]">
        AMERICANA FOODS: MARGINS STABILISE AS FROZEN CATEGORY SURGES
      </h1>

      
            <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
         

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-4xl bg-[#4318FF] text-xl font-bold text-white shadow-md">
              A
            </div>

            <div>
              <h2 className="text-sm font-semibold leading-none text-slate-900">
              Americana Intelligence Team
              </h2>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                FINANCIAL ANALYSIS UNIT
              </p>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="hidden items-center gap-5 md:flex">
          

          <h1 className="text-sm  text-slate-500">
           Updated April 2, 2026 · 4 min read
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center  text-[#4318FF] gap-3 text-lg fs-medium">
          <div className="border border-slate-500 rounded-lg p-2 hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
      <FaShareAlt />

          </div>
 <div className="border border-slate-500 rounded-lg p-2 hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
  
       <BsBookmarkFill  />
 </div>
        </div>
      </div>
    </div>
  );
};

export default Header;