var html = require('choo/html')

var TITLE = 'ToDoList - main'

var tasks = require('../components/tasks.js')

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body align="center">
    <div id="title">
        <h1>ToDo List</h1>
    </div>

    <div id="input">
      <input type="text" id="task_input" placeholder="Add your tasks here">
      <button type="button" id="add" onclick=${handleClick}>Add</button>
    </div>

    <div id="output">
        <p>${state.tasks.map(tasks)}</p>
    </div>

    </body>
  `

  function handleClick () {
    var task = document.getElementById("task_input").value
    emit('task:add', task)
  }
}
