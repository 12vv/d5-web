import Navbar from "../components/Navbar";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import ProjectCard from "./projectCard";
import LinkBtn from "../components/LinkBtn";
import Image from "next/image";

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

// export default function About() {
//   return (
//     <>
//       <ScrollToTopButton />
//       <main className="flex min-h-screen flex-col bg-[#121212]">
//         <Navbar />
//         <div className="container mt-24 mx-auto px-12 py-4">
//           {projectList?.map((item: any) => {
//             return (
//               <ProjectCard
//                 key={item.key}
//                 title={item.title}
//                 description={item.description}
//                 imgUrl={item.imgUrl}
//               />
//             );
//           })}
//         </div>
//         <div className="container mt-24 mx-auto px-12 py-4 flex flex-col content-center justify-center text-center">
//           這些領域都在不斷發展，為我們的生活和工作帶來了許多機遇和挑戰。如果您對其中某個領域有更具體的問題，歡迎隨時詢問！
//           <LinkBtn title={"聯絡我們"} url={"/#contact"} className="mt-10" />
//         </div>

//         <Footer />
//       </main>
//     </>
//   );
// }

export default function About() {
  return (
    <>
      <ScrollToTopButton />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-2 sm:grid-cols-12">
              <div className="col-span-7 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
                <h1 className=" mb-4 text-2xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold bg-gradient-to-b   from-[#9800ED] to-[#6456FE] text-transparent bg-clip-text ">
                  <span>電商及各類應用網站</span>
                  <br></br>
                </h1>
                <p className="text-[#ADB7BE] text-2xl sm:text-sm mb-6">
                  開發各種軟件應用程序，包括網站、手機應用和其他數字平台。這些技術不斷演進，為我們的日常生活提供了無數便利亦為企業提供無限機會。
                </p>
                <div>
                  <LinkBtn title={"更多業務"} url={"/#contact"} />
                </div>
              </div>
              <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
                  <Image
                    src="https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic2.png"
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
                    src="https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic4.jpg"
                    alt="hero image"
                    priority={true}
                    unoptimized
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              <div className="col-span-7 mr-0  place-self-center text-center sm:text-left justify-self-start">
                <h1 className=" mb-4 text-2xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold bg-gradient-to-b   from-[#9800ED] to-[#6456FE] text-transparent bg-clip-text ">
                  <span>餐飲管理系統</span>
                  <br></br>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
                  多元點餐方式，流程自動化，一人也能應付開枱至結帳。
                </p>
                <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
                  本餐飲 POS
                  系統結合自助點餐及外賣落單功能，助您輕鬆應付開枱、點餐、處理外賣訂單、廚房送單及結帳。
                  同時系統記錄所有餐廳數據，讓您分析菜式、時段、營業額等資訊，將餐廳生意最大化。
                </p>
                <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
                  有多種落單方式: QR code 自助落單、收銀端、侍應端、自助點餐端。
                  一般 POS
                  系統未能支援或需要額外收費才可使用自助點餐功能。該系統已包括自助點餐功能，毋需另外收費。
                  客人完成點餐後，訂單會即時傳送到廚房及水吧，加快整個落單及送餐過程。
                </p>
                <div>
                  {/* <LinkBtn title={"更多業務"} url={"/#contact"} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-12">
            <div className="grid grid-cols-2 sm:grid-cols-12">
              <div className="col-span-7 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
                <h1 className=" mb-4 text-2xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold bg-gradient-to-b   from-[#9800ED] to-[#6456FE] text-transparent bg-clip-text ">
                  <span>澳門財神酒店小程序</span>
                  <br></br>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
                  澳門財神酒店小程序是一款為財神酒店忠實消費者提供福利和便捷的應用。
                  用戶在財神酒店消費後後，掃描二維碼獲得積分，可在小程序內兌換各種實用禮品和參與有趣的小遊戲和抽獎活動。
                  小程序還提供實用功能，如積分查詢和獎品兌換記錄等，隨時掌握自己的積分情況。
                </p>
                <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
                  小程序包含餐廳內新品以及房型的推送，供用戶了解及選擇。
                </p>
                <div>
                  {/* <LinkBtn title={"更多業務"} url={"/#contact"} /> */}
                </div>
              </div>
              <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
                  <Image
                    src="https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic6.jpg"
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
        <div className="container mt-24 mx-auto px-12 py-4 flex flex-col content-center justify-center text-center">
          這些領域都在不斷發展，為我們的生活和工作帶來了許多機遇和挑戰。如果您對其中某個領域有更具體的問題，歡迎隨時詢問！
          <LinkBtn title={"聯絡我們"} url={"/#contact"} className="mt-10" />
        </div>

        <Footer />
      </main>
    </>
  );
}
