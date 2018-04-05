import WebServer from './web.server'
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server 9000 started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server 9000!')
  });
