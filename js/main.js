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
  let camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +500);

  // 箱を作成
  // const geometry = new THREE.BoxGeometry(400, 400, 400);
  // const material = new THREE.MeshNormalMaterial();
  // const box = new THREE.Mesh(geometry, material);
  // scene.add(box);

  let uniforms = {
    uAspect: {
      value: width / height
    },
    uTime: {
      value: 0.0
    }
  };

  let geometry = new THREE.PlaneGeometry(720, 500, 1, 1);
  //カスタムシェーダーを使う　ShaderMaterial
  let material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs
    // wireframe: true
  });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // cube.rotation.y += 0.05;
    renderer.render(scene, camera); // レンダリング
    const sec = performance.now() / 1000;
    uniforms.uTime.value = sec; // シェーダーに渡す時間を更新
    requestAnimationFrame(tick);
  }
}
