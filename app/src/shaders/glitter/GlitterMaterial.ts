import { shaderMaterial } from "@react-three/drei";
import { Color, Matrix4 } from "three";
import glitteringFragmentShader from "./fragment.glsl";
import glitteringVertexShader from "./vertex.glsl";

export const GlitterMaterial = shaderMaterial(
  {
    uTime: 0,
    uBaseColor: new Color(0xffffff),
    uGlitterColor: new Color(0x009bff),
    uGlitterSize: 2,
    uLightColor: new Color(0xffffff),
    uLightPosition: [10, 10, 10],
    uCameraPosition: [0, 0, 5],
    shadowMap: null,
    lightMatrix: new Matrix4(),
  },
  // Vertex shader
  glitteringVertexShader,
  // Fragment shader
  glitteringFragmentShader
);
