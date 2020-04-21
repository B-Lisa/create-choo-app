
module.exports = store

function store (state, emitter) {
  state.taskCount = 0 
  //state.tasks = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('task:add', function (_text) {
      if(_text != ""){
        state.taskCount += 1
        var newTask = {type: 'task', text: _text, id: state.taskCount}
        state.tasks.push(newTask)
        emitter.emit(state.events.RENDER)
            }      
        })
    })
}