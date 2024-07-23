import Navbar from "../components/Navbar";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import ProjectCard from "./projectCard";
import LinkBtn from "../components/LinkBtn";

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
    title: "雲計算、大數據、人工智能等技術研發和應用",
    description:
      "涉及到處理和分析大量數據的技術，以及開發智能系統和應用程序。雲計算使數據存儲和處理更加靈活，而人工智能則為我們帶來了自動化和智能化的解決方案。",
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
  {
    id: 4,
    title: "物聯網、智能硬件等相關產品的研發和生產",
    description:
      "物聯網（IoT）涉及到連接各種設備和物體到互聯網，使它們能夠收集和共享數據。智能硬件則是指具有智能功能的設備，例如智能手機、智能家居設備等。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/4.jpg?imageView2/1/w/468/h/268/q/85",
  },

  {
    id: 5,
    title: "區塊鏈技術研發",
    description:
      "透過區塊鏈技術將傳統業務和流程轉變為數字化形式，以提高效率、降低成本並改善客戶體驗。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/5.jpg?imageView2/1/w/468/h/268/q/85",
  },
  {
    id: 6,
    title: "數字化轉型服務",
    description:
      "我們協助企業實現數字化轉型，提高效率、降低成本並改善客戶體驗。",
    imgUrl:
      "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/6.jpg?imageView2/1/w/468/h/268/q/85",
  },
];

export default function About() {
  return (
    <>
      <ScrollToTopButton />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          {projectList?.map((item: any) => {
            return (
              <ProjectCard
                key={item.key}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
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
