import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  </>
);
