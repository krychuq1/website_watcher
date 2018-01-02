import express from 'express';
import bodyParser from 'body-parser';
import {usersRouter, swaggerRoute} from './routing/index.routing';
import Swagger from './services/swagger.service';

let swagger = new Swagger();
let app = express();
let port = process.env.PORT || 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', usersRouter);
app.use('/swagger', swaggerRoute);
// Swagger
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.listen(port);

console.log('App listen on: ' + port);
