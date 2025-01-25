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
            <div className="col-span-6 min-[1701px]:col-span-5 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
              <h1 className="mb-2  text-[30px] min-[1701px]:text-[40px]  font-extrabold ">
                <span>多维度数据质量评估</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">相关产品 - DataGPT</div>
              <div className="text-[#ADB7BE] text-[14px] min-[1701px]:text-[18px]  mb-6 leading-[22px] min-[1701px]:leading-[30px]">
                通过自研算法从多个维度评估数据质量从数据标注准确性、数据集重复性、数据集覆盖的信息广泛度、数据用于主流大模型训练的适用性等方面进行质量评估
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {
                    window.location.href = "https://app.docta.ai/";
                  }}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px] mr-[10px] min-[1701px]:mr-[40px]"
                />
              </div>
            </div>
            <div className="col-span-5 min-[1701px]:col-span-7 place-self-center mt-4 lg:mt-0">
              <div className="min-[1701px]:w-[850px] min-[1701px]:h-[850px] relative w-[550px] h-[550px]">
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
            <div className="col-span-5 min-[1701px]:col-span-7 mt-4 lg:mt-0">
              <div className="min-[1701px]:w-[850px] min-[1701px]:h-[850px] relative w-[550px] h-[550px]">
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

            <div className="col-span-6 min-[1701px]:col-span-4  ml-[200px] min-[1701px]:ml-[110px]  place-self-center text-center sm:text-left justify-self-end items-end flex flex-col">
              <h1 className="mb-2  text-[30px] min-[1701px]:text-[40px]  font-extrabold">
                <span>数据清理系统</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">
                相关产品—dataLabingPlantform
              </div>
              <div className="text-[#ADB7BE] text-[14px] min-[1701px]:text-[18px]  mb-6 leading-[22px] min-[1701px]:leading-[30px] text-end">
                根据用户通过自然语言提出的要求和上传的数据，自动清除过于重复的数据，对不完整数据通进行补充与补足，并对缺少标识、标注错误的数据进行补充与纠错
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {
                    window.location.href = "https://app.docta.ai/";
                  }}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-12">
          <div className="grid grid-cols-4 sm:grid-cols-12">
            <div className="col-span-6 min-[1701px]:col-span-5 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
              <h1 className="mb-2  text-[30px] min-[1701px]:text-[40px]  font-extrabold ">
                <span>多维度数据质量评估</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">相关产品 - DataGPT</div>
              <div className="text-[#ADB7BE] text-[14px] min-[1701px]:text-[18px]  mb-6 leading-[22px] min-[1701px]:leading-[30px]">
                第五维度在不断清洗并标注最新的数据，使用者仅需通过简单的自然语言即可调阅并下载指定格式和内容的数据集，以便模型训练者、科研工作者和广大用户的使用。
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {
                    window.location.href = "https://app.docta.ai/";
                  }}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[16px] mr-[10px] min-[1701px]:mr-[40px]"
                />
              </div>
            </div>
            <div className="col-span-5 min-[1701px]:col-span-7 place-self-center mt-4 lg:mt-0">
              <div className="min-[1701px]:w-[850px] min-[1701px]:h-[850px] relative w-[550px] h-[550px]">
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
            <div className="col-span-5 min-[1701px]:col-span-7 mt-4 lg:mt-0">
              <div className="min-[1701px]:w-[850px] min-[1701px]:h-[850px] relative w-[550px] h-[550px]">
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

            <div className="col-span-6 min-[1701px]:col-span-4 ml-[200px] min-[1701px]:ml-[110px]  place-self-center text-center sm:text-left justify-self-end items-end flex flex-col">
              <h1 className="mb-2  text-[30px] min-[1701px]:text-[40px]  font-extrabold">
                <span>AI 标注平台</span>
              </h1>
              <div className="text-[#ADB7BE] mb-4">
                相关产品 — dataLabingPlantform
              </div>
              <div className="text-[#ADB7BE] text-[14px] min-[1701px]:text-[18px]  mb-6 leading-[22px] min-[1701px]:leading-[30px] text-end">
                根据用户通过自然语言提出的要求和上传的数据，使用人机结合的方法对数据进行标注大幅减少人工工作量，在提升标注准确性的前提下，大幅缩短标注所需时间
              </div>
              <div>
                <RectButton
                  text="立即试用"
                  onClick={() => {
                    window.location.href = "http://test.docta.ai:3001/";
                  }}
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
