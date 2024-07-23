"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardBlock from "./cardblock";

const IconSection = () => {
  return (
    <section id="icon" className="lg:pt-16 lg:pb-0">
      <div className="container mt-18 mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_22.666666%)]  flex justify-center place-items-center w-full">
          <CardBlock
            content={"互聯網軟件開發、應用開發、移動應用開發"}
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon1.png?imageView2/1/w/224/h/221/q/85"
            }
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon2.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"資訊科技咨詢和服務"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon3.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"雲計算、大數據、人工智能等技術研發和應用"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon4.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"互聯網金融、電子支付、數字貨幣等相關業務"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_25.666666%)]  flex justify-center place-items-center w-full">
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon5.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"物聯網、智能硬件等相關產品的研發和生產"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon6.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"區塊鏈技術研發"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/icon7.png?imageView2/1/w/224/h/221/q/85"
            }
            content={"數字化轉型服務"}
          />
        </div>
      </div>
    </section>
  );
};

export default IconSection;
