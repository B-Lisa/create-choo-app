module.exports = store

function store (state, emitter) {
  state.today = new Date();
  var h=state.today.getHours();
  var m=state.today.getMinutes();
  var s=state.today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  console.log("Now is" + h + ":" + m + ":" + s)
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
  emitter.on('DOMContentLoaded', function () {
    emitter.on('clicks:add', function (count) {
      state.totalClicks += count
      emitter.emit(state.events.RENDER)
    })
  })
}
