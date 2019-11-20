// ページの読み込みを待つ
// window.addEventListener("load", init);

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
  // 初期化
  onResize();
  // リサイズイベント発生時に実行
  window.addEventListener("resize", onResize);

  function onResize() {
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    const bgImage = document.querySelector("#image");
    const bgAspectRatio = bgImage.width / bgImage.height;
    bgImage.width = width;
    bgImage.height = bgImage.width / bgAspectRatio;

    //window幅が変わってもアスペクト比を維持する
    let w = bgImage.width;
    let h = bgImage.height;

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#myCanvas")
      //描画背景を透明にする
      // alpha: true
    });
    // レンダラーのサイズを調整する
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);

    // シーンを作成
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
    camera.updateProjectionMatrix();
    camera.position.set(0, 0, +3);
    camera.lookAt(scene.position);

    let geo = new THREE.Geometry();
    let vertices = [];

    //39:右目、42:左目、30:鼻先の点が描く三角形の重心
    const center = {};
    center.x = (points[39].x + points[42].x + points[30].x) / 3;
    center.y = (points[39].y + points[42].y + points[30].y) / 3;

    for (let i = 0; i < points.length; i++) {
      points[i].y = -(points[i].y - center.y);
      points[i].x = points[i].x - center.x;
      vertices.push(new THREE.Vector3(points[i].x, points[i].y, 0));
    }

    //鼻の高さ
    vertices[28].z = 0.04;
    vertices[29].z = 0.075;
    vertices[30].z = 0.1;

    //口元の高さ
    vertices[50].z = 0.04;
    vertices[51].z = 0.04;
    vertices[52].z = 0.04;
    vertices[49].z = 0.02;
    vertices[53].z = 0.02;
    vertices[58].z = 0.038;
    vertices[57].z = 0.038;
    vertices[56].z = 0.038;

    //輪郭
    vertices[0].z = -0.1;
    vertices[16].z = -0.1;
    vertices[1].z = -0.08;
    vertices[2].z = -0.08;
    vertices[15].z = -0.08;
    vertices[14].z = -0.08;
    vertices[3].z = -0.07;
    vertices[13].z = -0.07;
    vertices[4].z = -0.06;
    vertices[5].z = -0.06;
    vertices[6].z = -0.06;
    vertices[12].z = -0.06;
    vertices[11].z = -0.06;
    vertices[10].z = -0.06;
    vertices[7].z = -0.05;
    vertices[9].z = -0.05;

    let faces = [
      // 右目の上
      new THREE.Face3(39, 27, 21),
      new THREE.Face3(39, 21, 20),
      new THREE.Face3(39, 20, 38),
      new THREE.Face3(38, 20, 19),
      new THREE.Face3(38, 19, 37),
      new THREE.Face3(37, 19, 18),
      new THREE.Face3(37, 18, 36),
      new THREE.Face3(36, 18, 17),
      new THREE.Face3(36, 17, 0),
      // 左目の上
      new THREE.Face3(42, 22, 27),
      new THREE.Face3(42, 23, 22),
      new THREE.Face3(42, 43, 23),
      new THREE.Face3(43, 24, 23),
      new THREE.Face3(43, 44, 24),
      new THREE.Face3(44, 25, 24),
      new THREE.Face3(44, 45, 25),
      new THREE.Face3(45, 26, 25),
      new THREE.Face3(45, 16, 26),
      // 眉間
      new THREE.Face3(27, 22, 21),
      // 右頬上半分
      new THREE.Face3(39, 68, 27),
      new THREE.Face3(39, 69, 68),
      new THREE.Face3(39, 70, 69),
      new THREE.Face3(39, 40, 70),
      new THREE.Face3(40, 71, 70),
      new THREE.Face3(40, 72, 71),
      new THREE.Face3(40, 41, 72),
      new THREE.Face3(41, 73, 72),
      new THREE.Face3(41, 36, 73),
      new THREE.Face3(36, 0, 73),
      new THREE.Face3(0, 1, 73),
      //右頬下半分
      new THREE.Face3(68, 69, 31),
      new THREE.Face3(69, 70, 31),
      new THREE.Face3(70, 71, 31),
      new THREE.Face3(71, 72, 31),
      new THREE.Face3(72, 73, 31),
      new THREE.Face3(73, 74, 31),
      new THREE.Face3(74, 75, 31),
      new THREE.Face3(75, 76, 31),
      new THREE.Face3(76, 48, 31),
      new THREE.Face3(73, 1, 74),
      new THREE.Face3(1, 2, 74),
      new THREE.Face3(74, 2, 75),
      new THREE.Face3(2, 3, 75),
      new THREE.Face3(75, 3, 76),
      new THREE.Face3(76, 3, 48),
      // 左頬上半分
      new THREE.Face3(42, 27, 77),
      new THREE.Face3(42, 77, 78),
      new THREE.Face3(42, 78, 79),
      new THREE.Face3(42, 79, 47),
      new THREE.Face3(47, 79, 80),
      new THREE.Face3(47, 80, 81),
      new THREE.Face3(47, 81, 46),
      new THREE.Face3(46, 81, 82),
      new THREE.Face3(46, 82, 45),
      new THREE.Face3(45, 82, 16),
      new THREE.Face3(16, 82, 15),
      // 左頬下半分
      new THREE.Face3(35, 54, 85),
      new THREE.Face3(35, 85, 84),
      new THREE.Face3(35, 84, 83),
      new THREE.Face3(35, 83, 82),
      new THREE.Face3(35, 82, 81),
      new THREE.Face3(35, 81, 80),
      new THREE.Face3(35, 80, 79),
      new THREE.Face3(35, 79, 78),
      new THREE.Face3(35, 78, 77),
      new THREE.Face3(54, 13, 85),
      new THREE.Face3(85, 13, 84),
      new THREE.Face3(84, 13, 14),
      new THREE.Face3(84, 14, 83),
      new THREE.Face3(83, 14, 15),
      new THREE.Face3(83, 15, 82),
      // 鼻
      new THREE.Face3(27, 68, 28),
      new THREE.Face3(27, 28, 77),
      new THREE.Face3(28, 68, 29),
      new THREE.Face3(28, 29, 77),
      new THREE.Face3(29, 68, 31),
      new THREE.Face3(29, 35, 77),
      new THREE.Face3(29, 31, 30),
      new THREE.Face3(29, 30, 35),
      new THREE.Face3(30, 31, 32),
      new THREE.Face3(30, 32, 33),
      new THREE.Face3(30, 33, 34),
      new THREE.Face3(30, 34, 35),
      // 鼻下
      new THREE.Face3(31, 48, 49),
      new THREE.Face3(31, 49, 32),
      new THREE.Face3(32, 49, 50),
      new THREE.Face3(32, 50, 33),
      new THREE.Face3(33, 50, 51),
      new THREE.Face3(33, 51, 52),
      new THREE.Face3(33, 52, 34),
      new THREE.Face3(34, 52, 53),
      new THREE.Face3(34, 53, 35),
      new THREE.Face3(35, 53, 54),
      // 上唇
      new THREE.Face3(48, 61, 49),
      new THREE.Face3(49, 61, 50),
      new THREE.Face3(50, 61, 62),
      new THREE.Face3(50, 62, 51),
      new THREE.Face3(51, 62, 63),
      new THREE.Face3(51, 63, 52),
      new THREE.Face3(52, 63, 64),
      new THREE.Face3(52, 64, 53),
      new THREE.Face3(53, 64, 54),
      //下唇
      new THREE.Face3(48, 60, 67),
      new THREE.Face3(67, 60, 59),
      new THREE.Face3(67, 59, 58),
      new THREE.Face3(67, 58, 66),
      new THREE.Face3(66, 58, 57),
      new THREE.Face3(66, 57, 65),
      new THREE.Face3(65, 57, 56),
      new THREE.Face3(65, 56, 55),
      new THREE.Face3(54, 65, 55),
      //口から顎
      new THREE.Face3(48, 3, 4),
      new THREE.Face3(48, 4, 5),
      new THREE.Face3(48, 5, 60),
      new THREE.Face3(60, 5, 6),
      new THREE.Face3(60, 6, 59),
      new THREE.Face3(59, 6, 7),
      new THREE.Face3(59, 7, 58),
      new THREE.Face3(58, 7, 8),
      new THREE.Face3(58, 8, 57),
      new THREE.Face3(57, 8, 9),
      new THREE.Face3(57, 9, 10),
      new THREE.Face3(57, 10, 56),
      new THREE.Face3(56, 10, 11),
      new THREE.Face3(56, 11, 55),
      new THREE.Face3(55, 11, 54),
      new THREE.Face3(54, 11, 12),
      new THREE.Face3(54, 12, 13)
    ]; // 点を結ぶ順番で面の向きを指定

    geo.vertices = vertices;
    geo.faces = faces;

    //カスタムシェーダーを使う　ShaderMaterial
    const material = new THREE.ShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      wireframe: true
    });
    const shape = new THREE.Mesh(geo, material);
    shape.position.set(0, 0, 0.1);
    scene.add(shape);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      // shape.rotation.y += 0.05;
      renderer.render(scene, camera); // レンダリング
      const sec = performance.now() / 1000;
      requestAnimationFrame(tick);
    }
  }

  // 頂点をダンプ
  // for (let i = 0; i < geo.vertices.length; i++) {
  //   let vertex = geo.vertices[i];
  //   console.log(i + ":" + vertex.x + " " + vertex.y + " " + vertex.z);
  // }
}
