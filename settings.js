module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    // Environment-dependent settings
    development: {
        db: {
            dialect: 'sqlite',
            storage: 'db/notes.db',
            operatorsAliases: false,
        },
    },
    production: {
        db: {
            dialect: 'sqlite',
            storage: 'db/database.sqlite',
            operatorsAliases: false,
        },
    },
};