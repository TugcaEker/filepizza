import WebTorrent from 'webtorrent'
import socket from 'filepizza-socket'

export function getClient() {
  return new Promise((resolve, reject) => {
    socket.emit('rtcConfig', {}, (rtcConfig) => {
      const client = new WebTorrent({ rtcConfig: rtcConfig })
      resolve(client)
    })
  })
}
