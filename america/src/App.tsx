
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./components/Sidebar";

import ExecutiveOverview from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import SKUExplorer from "./pages/sku";
import MarginWaterfall from "./components/marginwaterfall";
import Channel from "./pages/channle";
// import MarginWaterfall from "./pages/MarginWaterfall";
// import ChannelAnalytics from "./pages/ChannelAnalytics";

import AlertsInbox from "./components/Alertsindex";
// import DataEcosystem from "./pages/DataEcosystem";
// import AgenticHierarchy from "./pages/AgenticHierarchy";
// import BoardPack from "./pages/BoardPack";

// import DataConnectors from "./pages/DataConnectors";
// import TeamBilling from "./pages/TeamBilling";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
        <Navbar setIsOpen={setIsOpen} />
      <div className="flex min-h-screen bg-slate-100">
        {/* Sidebar */}
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Mobile Header */}

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route
                path="/"
                element={<ExecutiveOverview />}
              />
              { <Route
                path="/sku-pl"
                element={<SKUExplorer />}
              />
}

{
              <Route
                path="/margin-waterfall"
                element={<MarginWaterfall />}
              />
}
{              <Route
                path="/channel-analytics"
                element={<Channel />}
              />
}
{
   <Route
                path="/alerts"
                element={<AlertsInbox />}
              />


/*
           

              <Route
                path="/alerts"
                element={<AlertsInbox />}
              />

              <Route
                path="/ecosystem"
                element={<DataEcosystem />}
              />

              <Route
                path="/hierarchy"
                element={<AgenticHierarchy />}
              />

              <Route
                path="/board-pack"
                element={<BoardPack />}
              />

              <Route
                path="/connectors"
                element={<DataConnectors />}
              />

              <Route
                path="/team-billing"
                element={<TeamBilling />}
              /> */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

