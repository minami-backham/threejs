precision mediump float; //precision 数値の精度指定 mediumpは中精度
varying vec2 vUv;
uniform sampler2D uTex;

void main() {
  gl_FragColor = texture2D(uTex,vUv);
}
