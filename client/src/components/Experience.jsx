import { Environment, OrbitControls } from "@react-three/drei";

import { Bishop } from "./Bishop";
import { Li } from "./Li";
import { Gwen } from "./Gwen";

export const Experience = () => {
  return (
    <>
   
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <axesHelper args={[15]} />
      <OrbitControls />
      {/* <Bishop /> */}
      {/* <Li /> */}
      <Gwen />
    </>
  );
};
