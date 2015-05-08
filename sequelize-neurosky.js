Sequelize = require('sequelize')

// model we're interested in querying
// sequel model 
function define (db) {
  var NeuroskyReading = db.define('NeuroskyReading', {
    id: Sequelize.STRING
    , indra_time: Sequelize.DATE
    , browser_latency: Sequelize.INTEGER
    , reading_time: Sequelize.DATE
    , attention_esense: Sequelize.INTEGER
    , meditation_esense: Sequelize.INTEGER
    , eeg_power: Sequelize.ARRAY(Sequelize.INTEGER)
    , raw_values: Sequelize.ARRAY(Sequelize.INTEGER)
    , signal_quality: Sequelize.INTEGER
  })
  return NeuroskyReading
}

exports.define = define