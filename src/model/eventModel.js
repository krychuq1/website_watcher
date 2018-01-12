import db from '../database/databaseConnection';
import GeoJSON from 'mongoose-geojson-schema';


class EventModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.userModel = this.mongoose.model('event', this.eventSchema);
    }

    createSchema(){
        this.eventSchema = new this.Schema({
            eventId: {
                type: Number
            },
            location: {
                type: this.Schema.Types.Point,
                coordinates: []
            }

        }, {versionKey: false})
    }

}

const eventModel =  new EventModel().userModel;

export default eventModel;