// Imports
import Sequelize from 'sequelize'

// App Imports
import connection from '../setup/connection'

const models = {
    Thought: connection.import('./thought')
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = connection;
models.Sequelize = Sequelize;

export default models;
