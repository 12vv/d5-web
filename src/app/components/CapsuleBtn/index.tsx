import type { NextPage } from "next";
import "./index.css";

export type RootType = {
  className?: string;
};

const CapsuleBtn: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div>
      <div className="overlap-capsule-button">
        <button className="primary">sss</button>
        <button className="secondary">免费注册</button>
      </div>
    </div>
  );
};

export default CapsuleBtn;
