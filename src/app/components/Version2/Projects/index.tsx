import Image from "next/image";
import LinkBtn from "../../LinkBtn";

const projectList = [
  {
    id: 1,
    title: "資訊科技咨詢和服務",
    description:
      "涵蓋了各種IT相關的咨詢和服務，包括系統設計、數據管理、網絡安全等。企業和組織需要專業的IT咨詢來確保客戶的技術基礎運作良好。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/1.jpg?imageView2/1/w/468/h/268/q/85",
  },
  {
    id: 2,
    title: "餐飲管理系統",
    description: "多元點餐方式，流程自動化，一人也能應付開枱至結帳。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/2.jpg?imageView2/1/w/468/h/268/q/85",
  },
  {
    id: 3,
    title: "互聯網金融、電子支付、數字貨幣等相關業務",
    description:
      "包括在線支付、區塊鏈技術、加密貨幣等。隨著數字支付的普及，這些領域變得越來越重要。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/3.jpg?imageView2/1/w/468/h/268/q/85",
  },
];

export default function About() {
  return (
    <>
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 sm:grid-cols-12">
            <div className="col-span-7 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
              <h1 className=" mb-4 text-2xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold  ">
                <span>多维度数据质量评估</span>
                <br></br>
              </h1>
              <p className="text-[#ADB7BE] text-2xl sm:text-sm mb-6">
                多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估多维度数据质量评估
              </p>
              <div>
                <LinkBtn title={"立即使用"} url={""} />
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className="2xl:w-[550px] 2xl:h-[550px] relative w-[350px] h-[350px]">
                <Image
                  src="/images/place.png"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 sm:grid-cols-12">
            <div className="col-span-4 place-self-center mt-4 lg:mt-0 lg:mr-32">
              <div className="lg:w-[450px] lg:h-[450px] relative w-[250px] h-[250px]">
                <Image
                  src="/images/logo.png"
                  alt="hero image"
                  priority={true}
                  unoptimized
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
