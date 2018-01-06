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
            }
        }, {versionKey: false})
    }

}

const userModel =  new UserModel().userModel;

export default userModel;