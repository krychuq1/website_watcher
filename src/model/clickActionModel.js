import db from '../database/databaseConnection';

class ClickActionModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.clickActionModel = this.mongoose.model('clickAction', this.clickActionSchema);
    }

    createSchema(){
        this.clickActionSchema = new this.Schema({
            action_name: {
                type: String
            },
            mysql_eventId: {
                type: String
            },
            startTime: {
                type: String
            },
            user:{ type: this.Schema.Types.ObjectId, ref: 'user' , index: true} //reference to the actual collection in db

        }, {versionKey: false})
    }

}

const clickActionModel =  new ClickActionModel().clickActionModel;
export default clickActionModel;