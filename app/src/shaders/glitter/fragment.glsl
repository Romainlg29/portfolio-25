// fragmentShader.glsl
uniform float uTime;
uniform vec3 uBaseColor;
uniform vec3 uGlitterColor;
uniform float uGlitterSize;

uniform vec3 uLightColor;
uniform vec3 uLightPosition;
uniform vec3 uCameraPosition;

varying vec2 vUV;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D shadowMap;
uniform mat4 lightMatrix;

// Blocky noise function with animated blinking over time
float blockyNoise(vec2 uv) {
    uv *= uGlitterSize;
    vec2 iUV = floor(uv);
    vec2 fUV = fract(uv);
    float randomVal = fract(sin(dot(iUV + uTime, vec2(12.9898, 78.233))) * 43758.5453);

    return randomVal; // Simple random noise
}

// Glittering effect with blinking and pulsing
float glitterEffect(vec2 uv, float time, float glitterSize) {
    // Use blocky noise with animated time for bigger, chunkier glitter blocks
    float noise = blockyNoise(uv * 10.0 + time * 2.0) * .12;

    // Blinking effect using sin(time) to pulse the brightness of the glitter
    float blink = abs(sin(time * 5.0 + noise * 6.283)); // Sinusoidal blink pattern for each block
    return blink;
}

// Calculate shadow
float calculateShadow(vec4 lightSpacePosition) {
    vec3 shadowCoord = lightSpacePosition.xyz / lightSpacePosition.w;
    shadowCoord = shadowCoord * 0.5 + 0.5;

    float closestDepth = texture2D(shadowMap, shadowCoord.xy).r;
    float currentDepth = shadowCoord.z;

    float shadow = currentDepth > closestDepth + 0.005 ? 0.5 : 1.0;
    return shadow;
}

// Basic Phong shading function
vec3 phongLighting(vec3 lightColor, vec3 lightDirection, vec3 viewDirection, vec3 normal) {
    float diff = max(dot(normal, lightDirection), 0.0);
    vec3 diffuse = diff * lightColor;

    vec3 halfwayDir = normalize(lightDirection + viewDirection);
    float spec = pow(max(dot(normal, halfwayDir), 0.0), 16.0);
    vec3 specular = spec * lightColor;

    return diffuse + specular;
}

void main() {
    // Calculate the glitter effect with blinking over time
    float glitter = glitterEffect(vUV, uTime, uGlitterSize);

    // Stronger glow effect, scaling the glitter intensity significantly
    float glowIntensity = pow(glitter, 3.0); // Increase the exponent for a brighter glow

    // Compute the lighting
    vec3 lightDir = normalize(uLightPosition - vWorldPosition);
    vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);

    // Apply Phong lighting model
    vec3 lighting = phongLighting(uLightColor, lightDir, viewDir, normal);

    // Calculate shadow
    vec4 lightSpacePosition = lightMatrix * vec4(vWorldPosition, 1.0);
    float shadow = calculateShadow(lightSpacePosition);

    // Mix base color with a very strong glitter color, scaling the glitter as emissive glow
    vec3 emissiveGlow = uGlitterColor * glowIntensity * 5.0; // Scale emissiveness by 5.0 for a strong glow

    // Final glitter + shadow effect: adding the emissive color on top of the base lighting
    vec3 color = mix(uBaseColor, uGlitterColor * glowIntensity, glitter) * lighting * shadow;

    // Add the emissive glow on top of the final color (independent of shadows)
    color += emissiveGlow;

    gl_FragColor = vec4(color, 1.0);
}
