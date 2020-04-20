var html = require('choo/html')

var TITLE = 'my-choo-app - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <div id="title">
      <h1>ToDo List</h1>
    </div>

    <div id="input">
      <input type="text" id="tasks" placeholder="Add your tasks here">
      <button type="button" id="add" onclick=${tasklist}>Add</button>
    </div>

    <div id="output"></div>
    </body>
  `

  function tasklist() {
    let tasks = document.getElementById("tasks").value;
    document.getElementById("output").innerHTML = "<ul>" + "<li>" + tasks + "</li>" + "</ul>";
  }

  

}
