import Image from "next/image";
import IconTitle from "./iconTitle";

const LogoSection = () => {
  return (
    <div className="mt-24 py-4 bg-white">
      <section id="logo">
        <div className="pt-2 pb-2">
          <div className="flex overflow-hidden space-x-18 mt-4">
            <div className="flex space-x-20 animate-loop-scroll h-[70px]">
              <Image
                loading="lazy"
                src="/images/logos/logo-bytedance.png"
                width={300}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 1"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-google.png"
                height={50}
                width={220}
                unoptimized
                className="max-w-none"
                alt="Image 2"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-amazon.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 3"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-alibaba.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 4"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-tencent.png"
                width={300}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 5"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-neteast.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 6"
              />
            </div>
            <div className="flex space-x-20 animate-loop-scroll h-[70px]">
              <Image
                loading="lazy"
                src="/images/logos/logo-bytedance.png"
                width={300}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 1"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-google.png"
                height={50}
                width={220}
                unoptimized
                className="max-w-none"
                alt="Image 2"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-amazon.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 3"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-alibaba.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 4"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-tencent.png"
                width={300}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 5"
              />
              <Image
                loading="lazy"
                src="/images/logos/logo-neteast.png"
                width={220}
                height={50}
                unoptimized
                className="max-w-none"
                alt="Image 6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;
