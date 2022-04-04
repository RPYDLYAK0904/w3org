const dotenvPlugin = require('cypress-dotenv')

module.exports = (on, config) => {
  config = dotenvPlugin(config)
  return config
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
