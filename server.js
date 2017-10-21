var AlexaAppServer = require("alexa-app-server");

AlexaAppServer.start({
  server_root: './',
  port: process.env.PORT || 3001,
  verify: false,
  debug: true
});
