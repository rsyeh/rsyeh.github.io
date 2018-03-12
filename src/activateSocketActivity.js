import config from './config'
import mastermind from './mastermind'
import io from 'socket.io-client'

const socket = (config.socketUrl)

export default () => {

  socket.on('connect', () => {

    console.log('SOCKET CONNECTED')

    socket.on('disconnect', () => {

    })

  })

}
