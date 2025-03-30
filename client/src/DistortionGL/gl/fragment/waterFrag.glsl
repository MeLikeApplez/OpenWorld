#version 300 es

precision highp float;

// vertex
in vec3 vertexNormal;
in vec3 sunPosition;

// output
out vec4 outputColor;
    
void main() {
    float brightness = max(dot(normalize(vertexNormal), normalize(sunPosition)), 0.0);

    outputColor = vec4(0.2, 0.5, 1.0, 1.0);
    outputColor.rgb = (outputColor.rgb * 0.2) + (outputColor.rgb * brightness * 0.8);
}