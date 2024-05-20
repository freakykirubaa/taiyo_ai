import LeafLet from "./LeafLet";
import LineGraph from "./LineGraph";

export default function Charts() {
  return (
    <>
      <div className="p-4 pl-64 mx-auto">
        <div className="text-[28px] mt-6">Charts and Maps</div>
        <div className="w-full ">
          <div className="flex justify-center gap-x-4">
            <div className="w-full h-[500px] bg-white rounded-[6px] flex justify-center">
              <LineGraph />
            </div>
          </div>
          <div className=" bg-white rounded-[6px] w-full mt-20 h-[600px] p-4 relative bottom-5 ">
            <LeafLet />
          </div>
        </div>
      </div>
    </>
  );
}
