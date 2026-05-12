
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { sidebarSections } from "../data/dashboardData";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[250px] transform border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-end border-b border-slate-200 p-3">
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8 overflow-y-auto px-5 py-3">
          {sidebarSections.map((section, index) => (
            <div key={index}>
              {/* Section Title */}
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
                {section.title}
              </h3>

              {/* Menu Items */}
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={itemIndex}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={() =>
                        `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-200 `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {/* Icon */}
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                              isActive
                                ? "border-white/20  bg-indigo-600 text-white"
                                : "border-slate-200 bg-white text-slate-600"
                            }`}
                          >
                            <Icon size={18} />
                          </div>

                          {/* Label */}
                          <span>{item.label}</span>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;