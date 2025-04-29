import dallerIcon from "@/assets/icons/dallerIcon.png";
import userIcon from "@/assets/icons/userIcon.png";
import Image from "next/image";
const Statistic = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center xl:gap-3 gap-2 flex-wrap text-text-color ">
      {/* ====================================== Total Revenue ========================================== */}

      <div className="flex w-full items-center xl:gap-x-4 gap-x-2  p-4 h-[145px] flex-1 bg-section-bg rounded-xl">
        <div>
          <Image
            src={dallerIcon}
            alt="daller"
            width={1200}
            height={40}
            className="w-auto h-auto size-20"
          ></Image>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className=" xl:text-2xl text-xl font-medium truncate">
              Total Revenue
            </h3>
          </div>
          <p className="xl:text-xl text-lg font-medium text-primary-gray truncate ">
            $200.00
          </p>
        </div>
      </div>

      {/* ====================================== Total Revenue ========================================== */}
      <div className="flex w-full items-center xl:gap-x-4 gap-x-2  p-4 h-[145px] flex-1 bg-section-bg rounded-xl">
        <div>
          <Image
            src={userIcon}
            alt="daller"
            width={1200}
            height={40}
            className="w-auto h-auto size-20"
          ></Image>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className=" xl:text-2xl text-xl font-medium truncate">
              Total User
            </h3>
          </div>
          <p className="xl:text-xl text-lg font-medium text-primary-gray truncate ">
            250
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
