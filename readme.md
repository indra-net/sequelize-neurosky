A Sequelize model for storing readings from the Neurosky MindWave headset

```
SequelizeNeurosky = require('sequelize-neurosky')

my_database = new Sequelize('postgres://user:pass@domain.com:5432/db_name')
NeuroskyReadingModel = SequelizeNeurosky.define(my_database)
NeuroskyReadingModel.sync()
````
