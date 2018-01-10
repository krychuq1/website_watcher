import db from '../database/databaseConnection';


class UserModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.userModel = this.mongoose.model('user', this.userSchema);
    }

    createSchema(){
        this.userSchema = new this.Schema({
            ip: {
                type: String
            },
            city: {
                type: String
            },
            location: {
                type: String
            },
            organization: {
                type: String
            },
            region: {
                type: String
            },
            //startTime (session_time) is index unique -- what if multiple users start session in the same time. should we make it unique?
            startTime: {
                type: Date, index: true
            },
            endTime: {
                type: Date
            }

        }, {versionKey: false})
    }

}

const userModel =  new UserModel().userModel;

export default userModel;