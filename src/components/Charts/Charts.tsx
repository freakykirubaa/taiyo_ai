import LeafLet from "./LeafLet";
import LineGraph from "./LineGraph";
import GlobalPieChart from "./PieChart";

export default function Charts() {
  return (
    <>
      <div className="p-4 md:pl-64 mx-auto">
        <div className="text-[28px] mt-6">Charts and Maps</div>
        <div className="w-full">
          <div className="flex justify-center gap-x-4">
            <div className="w-full md:h-[500px] bg-white rounded-[6px] flex justify-center sm:h-[400px]">
              <LineGraph />
            </div>
          </div>
          <div className=" bg-white rounded-[6px] w-full mt-20 md:h-[600px] h-full p-4 ">
            <LeafLet />
          </div>
          <div className=" bg-white rounded-[6px] w-full mt-20 md:h-[600px] h-full p-4">
          <GlobalPieChart/>
          </div>
        </div>
      </div>
    </>
  );
}
