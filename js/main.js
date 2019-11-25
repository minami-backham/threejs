// ページの読み込みを待つ
// window.addEventListener("load", init);

let points = [
  { x: -30, y: -30, z: 0 },
  { x: 30, y: -30, z: 0 },
  { x: 30, y: 30, z: 0 },
  { x: -30, y: 30, z: 0 }
];

//シェーダー
SHADER_LOADER.load(
  // ロード完了後
  function(data) {
    // 頂点シェーダー
    let vs = data.myShader.vertex;
    // フラグメントシェーダー
    let fs = data.myShader.fragment;
    init(vs, fs, points);
  }
);

function init(vs, fs, points) {
  // サイズを取得
  const w = 500;
  const h = 500;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
    antialias: true
    //描画背景を透明にする
    // alpha: true
  });
  // レンダラーのサイズを調整する
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
  camera.position.set(0, 0, +150);
  camera.lookAt(scene.position);

  //軸オブジェクトの生成
  axis = new THREE.AxesHelper(100);
  //軸オブジェクトのシーンへの追加
  scene.add(axis);
  //軸オブジェクトの位置座標を設定
  axis.position.set(0, 0, 0);

  let n = 1; //四角形の数
  let indexes = new Uint32Array(n * 3 * 2); //インデックス配列
  let positions = new Float32Array(n * 3 * 4); //頂点座標
  let colors = new Float32Array(n * 3 * 4); //頂点色
  let normals = new Float32Array(n * 3 * 4); //頂点法線
  var uvs = new Float32Array(n * 2 * 4); //uv座標

  positions[0] = points[0].x;
  positions[1] = points[0].y;
  positions[2] = points[0].z;

  positions[3] = points[1].x;
  positions[4] = points[1].y;
  positions[5] = points[1].z;

  positions[6] = points[2].x;
  positions[7] = points[2].y;
  positions[8] = points[2].z;

  positions[9] = points[3].x;
  positions[10] = points[3].y;
  positions[11] = points[3].z;

  colors[0] = 0.0;
  colors[1] = 0.0;
  colors[2] = 1.0;

  colors[3] = 1.0;
  colors[4] = 0.0;
  colors[5] = 0.0;

  colors[6] = 1.0;
  colors[7] = 1.0;
  colors[8] = 0.0;

  colors[9] = 0.0;
  colors[10] = 1.0;
  colors[11] = 0.0;

  //頂点１の法線ベクトルの設定
  normals[0] = 0.0;
  normals[1] = 0.0;
  normals[2] = 1.0;
  //頂点２の法線ベクトルの設定
  normals[3] = 0.0;
  normals[4] = 0.0;
  normals[5] = 1.0;
  //頂点３の法線ベクトルの設定
  normals[6] = 0.0;
  normals[7] = 0.0;
  normals[8] = 1.0;
  //頂点４の法線ベクトルの設定
  normals[9] = 0.0;
  normals[10] = 0.0;
  normals[11] = 1.0;

  //三角形１
  indexes[0] = 0;
  indexes[1] = 1;
  indexes[2] = 2;
  //三角形２
  indexes[3] = 0;
  indexes[4] = 2;
  indexes[5] = 3;

  //頂点１のテクスチャ座標
  uvs[0] = 0.0;
  uvs[1] = 0.0;
  //頂点２のテクスチャ座標
  uvs[2] = 1.0;
  uvs[3] = 0.0;
  //頂点３のテクスチャ座標
  uvs[4] = 1.0;
  uvs[5] = 1.0;
  //頂点４のテクスチャ座標
  uvs[6] = 0.0;
  uvs[7] = 1.0;

  console.log(positions);
  console.log(colors);
  const geometry = new THREE.BufferGeometry();
  //attribute変数に登録

  geometry.setIndex(new THREE.BufferAttribute(indexes, 1));

  geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.addAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.addAttribute("normal", new THREE.BufferAttribute(normals, 3));
  geometry.addAttribute("uv", new THREE.BufferAttribute(uvs, 2));

  //テクスチャの読み込み
  const loader = new THREE.TextureLoader();
  const texture = loader.load("../img/texture01.jpg");
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  //ユニフォーム型変数の定義
  uniforms = {
    texture: { type: "t", value: texture }
  };

  //マテリアルの生成
  const material = new THREE.ShaderMaterial({
    vertexShader: vs,
    fragmentShader: fs,
    uniforms: uniforms
  });

  //オブジェクト生成
  const plane = new THREE.Mesh(geometry, material);

  //オブジェクトをシーンへ追加
  scene.add(plane);

  tick();

  // 毎フレーム時に実行されるループイベント
  function tick() {
    // plane.rotation.y += 0.02;
    renderer.render(scene, camera); // レンダリング
    const sec = performance.now() / 1000;
    requestAnimationFrame(tick);
  }
}
