const socket = require('socket.io')
const state = { currentTime: 5 }
module.exports = function (server, rooms) {
  const io = socket(server)
  io.on('connection', function (socket) {
    // const id = 0
    // socket.emit('welcome', id)
    socket.emit('new-user', state)
    socket.broadcast.emit('new-user', state)
    socket.on('start-timer', function (id) {
      const timerId = setInterval(function () {
        state.currentTime -= 1
        if (state.currentTime <= 0) {
          socket.emit('time-ended', state)
          clearInterval(timerId)
        }
      }, 1000)
    })
  })
}
