import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const modelRef = useRef<any>();

  // 使用 useFrame 钩子让模型每帧更新
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // 在 Y 轴上自转
    }
  });

  // 加载 glTF 模型
  const { scene } = useGLTF("/3d.gltf");

  return <primitive object={scene} ref={modelRef} />;
}

export default function App() {
  return (
    <>
      <div
        style={{
          width: "600px",
          height: "400px",
          margin: "0 auto",
          border: "2px solid black",
        }}
      >
        <Canvas>
          {/* 环境光 */}
          <ambientLight intensity={0.5} />
          {/* 方向光 */}
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* 自转的 3D 模型 */}
          <Model />
          {/* 允许用户手动控制相机 */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
  return (
    // <div
    //   style={{
    //     width: "600px",
    //     height: "400px",
    //     margin: "0 auto",
    //     border: "2px solid black",
    //   }}
    // >
    <Canvas style={{ height: "50vh" }}>
      {/* 添加光源 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* 3D 模型 */}
      <Model />
      {/* 控制相机旋转等 */}
      <OrbitControls
        enablePan={false} // 禁止平移
        minDistance={3} // 设置相机的最小距离
        maxDistance={10} // 设置相机的最大距离
        maxPolarAngle={Math.PI / 2} // 限制上下旋转范围
        minPolarAngle={Math.PI / 3} // 限制下方旋转范围
      />
    </Canvas>
    // </div>
  );
}
