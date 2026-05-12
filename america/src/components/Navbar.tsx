import { Menu } from "lucide-react";

type Props = {
  setIsOpen: (value: boolean) => void;
};

const Navbar = ({ setIsOpen }: Props) => {
  return (
    <nav className=" border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-23">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg border border-slate-200 p-2 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-md">
              A
            </div>

            <div>
              <h2 className="text-sm font-semibold leading-none text-slate-900">
                Americana
              </h2>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                Intelligence
              </p>
            </div>
          </div>

        <div className="hidden items-center gap-5 md:flex">
          <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
            Exclusive
          </span>

          <h1 className="text-sm font-medium tracking-[0.35em] text-indigo-900 lg:text-base">
            Americana Intelligence Report
          </h1>
        </div>
        </div>

        {/* Center */}

        {/* Right Side */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-900 sm:text-sm">
            VOL. 24 · NO. 04 · APRIL 2026
          </p>
        </div>
      </div>

      {/* Mobile Center Content */}
      <div className="mt-4 flex flex-col gap-3 md:hidden">
        <span className="w-fit rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
          Exclusive
        </span>

        <h1 className="text-sm font-medium tracking-[0.25em] text-indigo-900">
          Americana Intelligence Report
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;