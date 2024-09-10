import Image from "next/image";
import LinkBtn from "../../LinkBtn";
import RoundedButton2 from "../../RoundedBtn2";
import RectButton from "../../RectBtn";

export default function About() {
  return (
    <>
      <div className="container mt-24 mx-auto  py-4">
        <div className="container mx-auto ">
          <div className="grid grid-cols-4 sm:grid-cols-12">
            <div className="col-span-6 2xl:col-span-5 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
              <h1 className="mb-2  text-[30px] 2xl:text-[40px]  font-extrabold ">
                <span>多维度数据质量评估</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">相关产品 - DataGPT</div>
              <div className="text-[#ADB7BE] text-[14px] 2xl:text-[18px]  mb-6 leading-[22px] 2xl:leading-[30px]">
                多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {}}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px] mr-[10px] 2xl:mr-[40px]"
                />
              </div>
            </div>
            <div className="col-span-5 2xl:col-span-7 place-self-center mt-4 lg:mt-0">
              <div className="2xl:w-[850px] 2xl:h-[850px] relative w-[550px] h-[550px]">
                <Image
                  src="/images/intro1.gif"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="rounded-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex">
          <div className="grid grid-cols-4 sm:grid-cols-12">
            <div className="col-span-5 2xl:col-span-7 mt-4 lg:mt-0">
              <div className="2xl:w-[850px] 2xl:h-[850px] relative w-[550px] h-[550px]">
                <Image
                  src="/images/intro2.gif"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="rounded-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col-span-6 2xl:col-span-4  ml-[200px] 2xl:ml-[110px]  place-self-center text-center sm:text-left justify-self-end items-end flex flex-col">
              <h1 className="mb-2  text-[30px] 2xl:text-[40px]  font-extrabold">
                <span>数据清理系统</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">
                相关产品—dataLabingPlantform
              </div>
              <div className="text-[#ADB7BE] text-[14px] 2xl:text-[18px]  mb-6 leading-[22px] 2xl:leading-[30px] text-end">
                多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {}}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-12">
          <div className="grid grid-cols-4 sm:grid-cols-12">
            <div className="col-span-6 2xl:col-span-5 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
              <h1 className="mb-2  text-[30px] 2xl:text-[40px]  font-extrabold ">
                <span>多维度数据质量评估</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">相关产品 - DataGPT</div>
              <div className="text-[#ADB7BE] text-[14px] 2xl:text-[18px]  mb-6 leading-[22px] 2xl:leading-[30px]">
                多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {}}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px] mr-[10px] 2xl:mr-[40px]"
                />
              </div>
            </div>
            <div className="col-span-5 2xl:col-span-7 place-self-center mt-4 lg:mt-0">
              <div className="2xl:w-[850px] 2xl:h-[850px] relative w-[550px] h-[550px]">
                <Image
                  src="/images/intro3.gif"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="rounded-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex">
          <div className="grid grid-cols-4 sm:grid-cols-12">
            <div className="col-span-5 2xl:col-span-7 mt-4 lg:mt-0">
              <div className="2xl:w-[850px] 2xl:h-[850px] relative w-[550px] h-[550px]">
                <Image
                  src="/images/intro4.gif"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="rounded-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col-span-6 2xl:col-span-4 ml-[200px] 2xl:ml-[110px]  place-self-center text-center sm:text-left justify-self-end items-end flex flex-col">
              <h1 className="mb-2  text-[30px] 2xl:text-[40px]  font-extrabold">
                <span>AI 标注平台</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">
                相关产品 — dataLabingPlantform
              </div>
              <div className="text-[#ADB7BE] text-[14px] 2xl:text-[18px]  mb-6 leading-[22px] 2xl:leading-[30px] text-end">
                多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {}}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
