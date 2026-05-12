import marginWaterfall from "../components/marginwaterfall";
export default function Margin() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Margin Waterfall</h2>
      <div className="w-full h-96">
        {marginWaterfall()}
      </div>
    </div>
  );
}