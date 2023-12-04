import "./index.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import ExperienceApp from "./pages/ExperienceApp";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Canvas>
    <ExperienceApp />
    <axesHelper scale={1.2} position={[-7, -4, 0]} />
  </Canvas>
);
