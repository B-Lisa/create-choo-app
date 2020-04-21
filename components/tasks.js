var html = require('choo/html')

module.exports = function (task) {
  var type = task.type
  var text = task.text
  var id = task.id

  return html`
    <li class="task_${id}"><span>${task.text}</span></li>
  `
}