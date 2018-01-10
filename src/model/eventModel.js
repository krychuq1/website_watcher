import db from '../database/databaseConnection';


class EventModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.eventModel = this.mongoose.model('event', this.eventSchema);
    }

    createSchema(){
        this.eventSchema = new this.Schema({
            id: {
                type: String
            },
            location:{
                type: [Number],  // [<longitude>, <latitude>]
                index: '2d'      // create the geospatial index
            }

        }, {versionKey: false})
    }

}

const eventModel =  new EventModel().eventModel;
export default eventModel;