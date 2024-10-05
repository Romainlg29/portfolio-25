// vertexShader.glsl
varying vec2 vUV;
varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
    vUV = uv;
    vNormal = normalize(normalMatrix * normal); // Transform normal to world space
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
