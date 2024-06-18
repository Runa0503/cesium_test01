// Cesium ionのアクセストークン
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGRjMjZmOS1hZGExLTRmM2ItOTAwOS03YmIwY2JkN2M3YWEiLCJpZCI6MjIzMDQzLCJpYXQiOjE3MTg3NDQ3NDN9.gK9QtNS5q_7sCTiAt_bQf4d-w31GtZFsu3nZpKrRdgs';

// Cesium ViewerをcesiumContainerというIDのHTML要素に初期化
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
});
// 初期表示時のカメラ位置
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(138, 29, 25000000),
});