void main() {
  vec3 pos = position;

  pos.y = (pos.y * 0.5) + sin(pos.x * 100.0) * 100.0;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
