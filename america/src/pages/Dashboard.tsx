
import Header from "../components/Header";
import Margin from "../components/margin";
import StatsCard from "../components/StatsCard";
import DeepResearchSection from "../components/DeepResearchSection"
import { stats } from "../data/dashboardData";
import ContentSection from "../components/ContentSection";
import AlertsPanel from "../components/AlertsPanel";
import FloatingButton from "../components/FloatingButton";

import Sku from "../components/sku";


const Dashboard = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f5f9] text-slate-800">
          {/* <Navbar setIsOpen={setIsOpen} /> */}
      <div className="flex bg-[#f3f5f9]">
        {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

        <main className="flex-1 ">
              <Header />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <StatsCard key={index} {...item} />
            ))}
          </div>

          <FloatingButton />
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.6fr]">
            <ContentSection />
            <AlertsPanel />
          </div>
          
          <div className="mt-6 grid gap-6 ">
            <Margin />
            {/* <AlertsPanel /> */}
          </div>
       
          <div className="mt-6 grid gap-6 ">
            <DeepResearchSection />
            {/* <AlertsPanel /> */}
          </div>
          <div>
            <Sku />
          </div>


        </main>
      </div>
    </div>
  ); 

};

export default Dashboard;
