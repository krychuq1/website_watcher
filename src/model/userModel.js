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
            startTime: {
                type: Date
            },
            endTime: {
                type: Date
            }

        }, {versionKey: false})
    }

}

const userModel =  new UserModel().userModel;

export default userModel;