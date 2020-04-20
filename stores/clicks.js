module.exports = store

function store (state, emitter) {
  state.totalTask = 0

  emitter.on('DOMContentLoaded', function () {
    emitter.on('clicks:add', function (count) {
      state.totalTask += count
      emitter.emit(state.events.RENDER)
    })
  })
}
