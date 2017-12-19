import express from 'express';
import bodyParser from 'body-parser';
import {viewRouter} from './routing/index.routing';

let app = express();
let port = process.env.PORT || 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/view', viewRouter);

app.listen(port);

console.log('App listen on: ' + port);
