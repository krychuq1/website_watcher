import UserModel from '../model/userModel'
class UserController{
    constructor(){}

    addUser(user){
        let userObj = new UserModel(user);
        return userObj.save().then(saved => {
            return saved
        })
    }
    getAllUsers(){
        return UserModel.find();
    }
    addEndTime(id, time){
        return UserModel.update({_id: id}, {$set: {endTime: time}}).exec();
    }
}
const  userController = new UserController();
export default userController;