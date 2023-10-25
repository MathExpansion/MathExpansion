function calculateMoment() {
  // 力の情報
  var force1 = 10; // 力1 (N)
  var force2 = 20; // 力2 (N)

  // 力の位置情報
  var position1 = 2; // 力1の位置 (m)
  var position2 = 5; // 力2の位置 (m)

  // モーメント計算
  var moment1 = force1 * position1;
  var moment2 = force2 * position2;

  // 総モーメント計算
  var totalMoment = moment1 + moment2;

  Logger.log("モーメント1: " + moment1 + " Nm");
  Logger.log("モーメント2: " + moment2 + " Nm");
  Logger.log("総モーメント: " + totalMoment + " Nm");
}
