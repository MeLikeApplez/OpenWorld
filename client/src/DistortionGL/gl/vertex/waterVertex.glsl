#version 300 es

precision highp float;

// time
uniform float time;

// vertex
in vec3 vertexData;
in vec3 vertexOffset;

uniform vec2 vertexScale;

out vec3 vertexNormal;
out vec3 sunPosition;

// camera
uniform vec3 cameraPosition;
uniform mat4 cameraProjection;
uniform mat4 cameraRotation;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

// https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models
void main() {
    vec3 vertexPosition = vertexData * vec3(vertexScale.x, 1.0, vertexScale.y) + vertexOffset;

    vec3 direction = vec3(1.0, 0.0, 0.0);
    float amplitude[4] = float[](0.3, 2.0, 1.0, 0.7);
    float wavelength[4] = float[](0.4, 0.1, 0.3,0.7);
    float speed[4] = float[](1.0, 2.0, 1.0, 1.0);
    float y = 0.0;

    float dx = 0.0;
    float dz = 0.0;

    for(int i = 0; i < 4; i++) {
        float theta = dot(direction, vertexPosition) * wavelength[i] + time * speed[i];
        
        // switch to f(x) = e^(sin(x) - 1)
        y += amplitude[i] *  sin(theta);
        
        // df(x)/dx = cos(x) * e^(sin(x) - 1)
        dx += wavelength[i] * amplitude[i] * direction.x * cos(theta); 
        dz += wavelength[i] * amplitude[i] * direction.z * cos(theta); 
    }

    vertexPosition.y = y;

    vec4 finalPosition = vec4(vertexPosition - cameraPosition, 1.0) * cameraRotation * cameraProjection;

    vertexNormal = vec3(-dx, -dz, 1.0) * mat3(cameraProjection);
    sunPosition = vec3(25.0, 10.0, -25.0);

    gl_Position = finalPosition;
}
 
