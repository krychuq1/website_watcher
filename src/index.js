import express from 'express';
import bodyParser from 'body-parser';
import {usersRouter, clickActionRoute, swaggerRoute, eventRouter} from './routing/index.routing';
import Swagger from './services/swagger.service';
import cors from 'cors';

let swagger = new Swagger();
let app = express();
let port = process.env.PORT || 9991;

app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', usersRouter);
app.use('/actions', clickActionRoute);
app.use('/swagger', swaggerRoute);
app.use('/events', eventRouter);

// Swagger
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.listen(port);

console.log('App listen on: ' + port);
