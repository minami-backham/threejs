// ページの読み込みを待つ
// window.addEventListener("load", init);

// let points = [
//   { x: -30, y: -30, z: 0 },
//   { x: 30, y: -30, z: 0 },
//   { x: 30, y: 30, z: 0 },
//   { x: -30, y: 30, z: 0 }
// ];

let points = [
  { x: 0.13437755405902863, y: 0.3129425048828125 },
  { x: 0.14638324081897738, y: 0.42032894492149364 },
  { x: 0.16851358115673065, y: 0.5250778794288635 },
  { x: 0.18687663972377777, y: 0.6212825775146485 },
  { x: 0.2197662442922592, y: 0.7253165245056152 },
  { x: 0.2780871987342834, y: 0.7981808781623843 },
  { x: 0.33709192276000977, y: 0.8442610502243042 },
  { x: 0.413508266210556, y: 0.8817465305328368 },
  { x: 0.5328189730644226, y: 0.8999959230422976 },
  { x: 0.6456092596054076, y: 0.8734532594680785 },
  { x: 0.7266902327537534, y: 0.8320153355598451 },
  { x: 0.7844605445861816, y: 0.7831814885139463 },
  { x: 0.8392581343650817, y: 0.7003546357154846 },
  { x: 0.8670057654380798, y: 0.5984102487564086 },
  { x: 0.878786027431488, y: 0.502060532569885 },
  { x: 0.8951016068458555, y: 0.3929495811462404 },
  { x: 0.9013853073120116, y: 0.28280681371688854 },
  { x: 0.19871485233306888, y: 0.19233807921409599 },
  { x: 0.24025344848632815, y: 0.14655700325965876 },
  { x: 0.3001800179481507, y: 0.13060723245143896 },
  { x: 0.3584748506546021, y: 0.1306752115488053 },
  { x: 0.4105319678783417, y: 0.14853057265281683 },
  { x: 0.6064394116401672, y: 0.13583758473396304 },
  { x: 0.6557369232177733, y: 0.11556893587112418 },
  { x: 0.712969183921814, y: 0.10618662089109426 },
  { x: 0.7727635502815244, y: 0.11924052238464357 },
  { x: 0.8209589123725891, y: 0.15769253671169292 },
  { x: 0.5115528702735901, y: 0.25497856736183183 },
  { x: 0.5141451954841614, y: 0.3182253241539 },
  { x: 0.5129066705703735, y: 0.3771293461322785 },
  { x: 0.513541281223297, y: 0.43228465318679815 },
  { x: 0.45096939802169794, y: 0.5014737248420714 },
  { x: 0.48067334294319153, y: 0.5059398412704469 },
  { x: 0.5144654512405396, y: 0.5109612941741943 },
  { x: 0.5521602034568787, y: 0.502761483192444 },
  { x: 0.5818657279014589, y: 0.49781343340873724 },
  { x: 0.2733183503150941, y: 0.27508062124252314 },
  { x: 0.31027927994728083, y: 0.2518585920333862 },
  { x: 0.3571393191814422, y: 0.2481277883052825 },
  { x: 0.40590634942054743, y: 0.276014119386673 },
  { x: 0.3642688393592834, y: 0.2935861349105834 },
  { x: 0.31281557679176336, y: 0.29061040282249445 },
  { x: 0.6149995326995848, y: 0.2619099915027618 },
  { x: 0.6652048826217651, y: 0.23026262223720545 },
  { x: 0.7100648283958435, y: 0.22666254639625544 },
  { x: 0.7498992681503295, y: 0.25067397952079784 },
  { x: 0.7125479578971862, y: 0.2722621262073517 },
  { x: 0.6609773039817808, y: 0.27378493547439586 },
  { x: 0.3945102393627167, y: 0.6711078286170957 },
  { x: 0.43794187903404236, y: 0.625588357448578 },
  { x: 0.4901694357395172, y: 0.5970218181610106 },
  { x: 0.5173471570014954, y: 0.6046814322471619 },
  { x: 0.5453800559043883, y: 0.5977147221565247 },
  { x: 0.6010618805885315, y: 0.6209913492202759 },
  { x: 0.6458584666252134, y: 0.6605892777442931 },
  { x: 0.6060618162155151, y: 0.6841660141944885 },
  { x: 0.5639937520027161, y: 0.702979862689972 },
  { x: 0.5224505662918091, y: 0.7072352170944215 },
  { x: 0.48016706109046925, y: 0.7073352932929993 },
  { x: 0.4387857019901275, y: 0.6966908574104307 },
  { x: 0.40641912817955017, y: 0.6695500612258911 },
  { x: 0.48223188519477844, y: 0.6403744220733644 },
  { x: 0.5162925124168396, y: 0.6370552778244019 },
  { x: 0.554622769355774, y: 0.6363157629966736 },
  { x: 0.638907253742218, y: 0.6552342176437378 },
  { x: 0.555062472820282, y: 0.6545767188072206 },
  { x: 0.5197068452835084, y: 0.6568280458450318 },
  { x: 0.4837984144687653, y: 0.6579113602638245 }
];

//中点を求める
const getMidPoint = (startPoint, endPoint) => {
  let newPoint = {};
  newPoint.x = (startPoint.x + endPoint.x) / 2;
  newPoint.y = (startPoint.y + endPoint.y) / 2;
  return newPoint;
};
//鼻の右端から目の下側、輪郭への中点をpointsに追加
points.push(getMidPoint(points[31], points[27]));
points.push(getMidPoint(points[31], points[39]));
points.push(getMidPoint(points[31], points[40]));
points.push(getMidPoint(points[31], points[41]));
points.push(getMidPoint(points[31], points[36]));
points.push(getMidPoint(points[31], points[0]));
points.push(getMidPoint(points[31], points[1]));
points.push(getMidPoint(points[31], points[2]));
points.push(getMidPoint(points[31], points[3]));
//鼻の左端から目の下側、輪郭への中点をpointsに追加
points.push(getMidPoint(points[35], points[27]));
points.push(getMidPoint(points[35], points[42]));
points.push(getMidPoint(points[35], points[47]));
points.push(getMidPoint(points[35], points[46]));
points.push(getMidPoint(points[35], points[45]));
points.push(getMidPoint(points[35], points[16]));
points.push(getMidPoint(points[35], points[15]));
points.push(getMidPoint(points[35], points[14]));
points.push(getMidPoint(points[35], points[13]));

for (let i = 0; i < points.length; i++) {
  points[i].z = 0;
}

console.log(points);

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
  const w = window.innerWidth;
  const h = window.innerHeight;

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
  camera.position.set(0, 0, +2);
  camera.lookAt(scene.position);

  //軸オブジェクトの生成
  axis = new THREE.AxesHelper(100);
  //軸オブジェクトのシーンへの追加
  scene.add(axis);
  //軸オブジェクトの位置座標を設定
  axis.position.set(0, 0, 0);

  let n = 128; //三角形の数
  let v = 86; //頂点数
  let indexes = new Uint32Array(n * 3); //インデックス配列
  let positions = new Float32Array(v * 3); //頂点座標
  let colors = new Float32Array(v * 3); //頂点色
  let normals = new Float32Array(v * 3); //頂点法線
  var uvs = new Float32Array(n * 2 * 4); //uv座標

  for (let i = 0; i < points.length; i++) {
    positions[i * 3] = points[i].x;
    positions[i * 3 + 1] = -points[i].y;
    positions[i * 3 + 2] = points[i].z;

    colors[i * 3] = 1.0;
    colors[i * 3 + 1] = 1.0;
    colors[i * 3 + 2] = 1.0;

    normals[i * 3] = 0.0;
    normals[i * 3 + 1] = 0.0;
    normals[i * 3 + 2] = 1.0;
  }

  //三角形１
  indexes[0] = 0;
  indexes[1] = 36;
  indexes[2] = 17;
  //三角形２
  indexes[3] = 17;
  indexes[4] = 36;
  indexes[5] = 18;

  // indexes[6] = 18;
  // indexes[7] = 36;
  // indexes[8] = 37;

  // indexes[9] = 18;
  // indexes[10] = 37;
  // indexes[11] = 19;

  // indexes[12] = 19;
  // indexes[13] = 37;
  // indexes[14] = 38;

  // indexes[15] = 19;
  // indexes[16] = 38;
  // indexes[17] = 20;

  // indexes[18] = 20;
  // indexes[19] = 38;
  // indexes[20] = 39;

  // indexes[21] = 20;
  // indexes[22] = 39;
  // indexes[23] = 21;

  // indexes[24] = 21;
  // indexes[25] = 39;
  // indexes[26] = 27;

  // indexes[27] = 21;
  // indexes[28] = 27;
  // indexes[29] = 22;

  // indexes[30] = 22;
  // indexes[31] = 27;
  // indexes[32] = 42;

  // indexes[33] = 22;
  // indexes[34] = 42;
  // indexes[35] = 23;

  // indexes[33] = 22;
  // indexes[34] = 42;
  // indexes[35] = 23;

  // indexes[36] = 23;
  // indexes[37] = 42;
  // indexes[38] = 43;

  // indexes[39] = 23;
  // indexes[40] = 43;
  // indexes[41] = 24;

  // indexes[42] = 24;
  // indexes[43] = 43;
  // indexes[44] = 44;

  // indexes[45] = 24;
  // indexes[46] = 44;
  // indexes[47] = 25;

  // indexes[48] = 25;
  // indexes[49] = 44;
  // indexes[50] = 45;

  // indexes[51] = 25;
  // indexes[52] = 45;
  // indexes[53] = 26;

  // indexes[54] = 26;
  // indexes[55] = 45;
  // indexes[56] = 16;

  // 頂点１のテクスチャ座標
  // uvs[0] = 0.0;
  // uvs[1] = 0.0;
  //頂点２のテクスチャ座標
  // uvs[2] = 0.1;
  // uvs[3] = 0.0;
  //頂点３のテクスチャ座標
  // uvs[4] = 0.1;
  // uvs[5] = 0.1;
  //頂点４のテクスチャ座標
  // uvs[6] = 0.0;
  // uvs[7] = 0.1;

  // console.log(positions);
  // console.log(colors);
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
