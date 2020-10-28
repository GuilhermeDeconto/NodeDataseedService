const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
  // application instance information
  filename: 'config',
  cwd: __dirname,
});

// client.logger.level('debug');

client.on('started', () => console.log(`started in: ${Date().toString()}`))
client.on('registered', () => console.log(`registered in: ${Date().toString()}`))
client.on('deregistered', () => console.log(`deregistered in: ${Date().toString()}`))
client.on('heartbeat', () => console.log(`heartbeat in: ${Date().toString()}`))
client.on('registryUpdated', () => console.log(`registryUpdated in: ${Date().toString()}`))

// Comment to stop and uncomment to stop
exports.client = client