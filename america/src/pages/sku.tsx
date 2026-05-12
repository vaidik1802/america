// App.tsx

import { useState } from "react";
import CategoryPerformance from "../components/CategoryPerformance";
import PortfolioPage from "../components/PortfolioPage";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f6fb] p-4 md:p-6">
      {selectedCategory ? (
        <PortfolioPage
          category={selectedCategory}
          onBack={() => setSelectedCategory("")}
        />
      ) : (
        <CategoryPerformance onCardClick={setSelectedCategory} />
      )}
    </div>
  );
}