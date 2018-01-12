import db from '../database/databaseConnection';


class ClickActionModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.clickActionModel = this.mongoose.model('event', this.clickActionSchema);
    }

    createSchema(){
        this.clickActionSchema = new this.Schema({
            id: {
                type: String
            },
            startTime: {
                type: String
            }
           /* location:{
                type: [Number],  // [<longitude>, <latitude>]
                index: '2d'      // create the geospatial index
            }*/

        }, {versionKey: false})
    }

}

const clickActionModel =  new ClickActionModel().clickActionModel;
export default clickActionModel;