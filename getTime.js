module.exports = store

function store (state, emitter) {
    console.log('my state', state)
    
    state.today = new Date()

    setInterval(function () {
        state.today = new Date()
        var h=state.today.getHours();
        var m=state.today.getMinutes();
        var s=state.today.getSeconds();
        console.log(`Now is ( ${h} : ${m} : ${s} )`)
    }, 1000)
}
