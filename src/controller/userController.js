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
}
const  userController = new UserController();
export default userController;