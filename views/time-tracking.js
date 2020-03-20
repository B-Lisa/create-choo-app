var html = require('choo/html')

var TITLE = 'time tracking'
// var store = require('./getTime.js')
var store = function () {}

module.exports = view

function view (state, emit) {
  
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
      <body class="code lh-copy">
      <main class="pa3 cf center">
       <p> hi there </p>
       <p>
       now is ${store()}
       </p>
       <button onclick=${startTime}>Start tracking your time</button>
      </main>
    </body>

  `
  
  
  
  function startTime () {
    
  }
}
