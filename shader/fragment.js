varying vec2 vUv;
uniform float uAspect; //画面のアスペクト比
uniform float uTime; //時間

void main() {
  vec2 uv = vec2(vUv.x * uAspect, vUv.y); // xをアスペクト補正したテクスチャ座標
  vec2 center = vec2(.5 * uAspect, .5); // xをアスペクト補正した画面の中心
  float radius = 0.05 + sin(uTime * 2.0) * 0.025; //半径を時間で変化させる
  float lightness = radius / length(uv - center);// 中心から現在のピクセルへの距離を取得、半径を距離で割る
  // lightness = clamp(lightness, 0.0, 1.0); // 値の範囲を 0.0 ~ 1.0 に制限
  vec4 color = vec4(vec3(lightness), 1.0);// 距離を rgb に変換
  color *= vec4(1.0, 0.5, 0.6, 1.0);// 着色する

  gl_FragColor = color;
}
