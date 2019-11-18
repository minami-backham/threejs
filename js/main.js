// ページの読み込みを待つ
// window.addEventListener("load", init);

SHADER_LOADER.load(
  // ロード完了後
  function(data) {
    // 頂点シェーダー
    let vs = data.myShader.vertex;
    // フラグメントシェーダー
    let fs = data.myShader.fragment;
    init(vs, fs);
  }
);

function init(vs, fs) {
  // サイズを指定
  const width = 720;
  const height = 540;

  // レンダラーを作成
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  let scene = new THREE.Scene();

  // カメラを作成
  let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(30, 30, +30);
  camera.lookAt(scene.position);

  let geo = new THREE.CubeGeometry(30, 10, 10, 2, 2, 2);
  // 頂点をダンプ
  for (var i = 0; i < geo.vertices.length; i++) {
    var vertex = geo.vertices[i];
    console.log(i + ":" + vertex.x + " " + vertex.y + " " + vertex.z);
  }

  geo.vertices[4].x += 10;

  //カスタムシェーダーを使う　ShaderMaterial
  let material = new THREE.ShaderMaterial({
    vertexShader: vs,
    fragmentShader: fs,
    wireframe: true
  });
  let cube = new THREE.Mesh(geo, material);
  scene.add(cube);

  tick();

  // 毎フレーム時に実行されるループイベント
  function tick() {
    // cube.rotation.y += 0.05;
    renderer.render(scene, camera); // レンダリング
    const sec = performance.now() / 1000;
    requestAnimationFrame(tick);
  }
}
