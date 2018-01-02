import db from '../database/databaseConnection';


class UserModel{

    constructor(){
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.brandModel = this.mongoose.model('brand', this.brandSchema);
    }

    createSchema(){
        this.brandSchema = new this.Schema({
            id: '',
            starTime: {
                type: Data
            }
        }, {versionKey: false})
    }

}

const userModel =  new UserModel().brandModel;

export default userModel;