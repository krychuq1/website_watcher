let swaggerConfig = {
    swaggerDefinition: {
        info: {
            title: 'Translation Json',
                version: '1.0.0',
                description: 'Node service which provides content for White Labels'
        },
        basePath: '/',
            host: '',
            schemes: ['https', 'http'],
            produces: ['application/json'],
            consumes: ['application/json'],
    },
    apis: ['./src/routing/*.js'], // Path to the API docs
};

export default swaggerConfig;