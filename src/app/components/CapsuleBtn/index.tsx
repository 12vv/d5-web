import type { NextPage } from "next";
import "./index.css";

export type RootType = {
  className?: string;
};

const CapsuleBtn: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div>
      <div className="overlap-capsule-button">
        <button className="primary">
          <img className="mr-36" src="/images/icons/icon-3.png" />
        </button>
        <button className="secondary">免费注册</button>
      </div>
    </div>
  );
};

export default CapsuleBtn;
