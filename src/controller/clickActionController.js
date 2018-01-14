import ClickActionModel from '../model/clickActionModel';
import UserModel from "../model/userModel";
class ClickActionController{
    constructor(){}

    addAction(clickActionEvent){
        console.log('ClickActionEvent var is: ', clickActionEvent);
            let clickActionObj = new ClickActionModel(clickActionEvent);
            clickActionObj.user = clickActionEvent.userId;
            return clickActionObj.save(clickActionEvent).then(saved => {
                return saved;
            });
    }
    getAction() {
        return ClickActionModel.find();
    }
    getUsersWithActions(){
        return ClickActionModel.find()
            .populate('user')
            .exec()
            .then(e => {
                return e
            })
    }
    deleteAllActions(){
        return ClickActionModel.remove();
    }
    deleteAction(userId){
        return ClickActionModel.remove({user: {$in: userId}});
    }
}
const  clickActionController = new ClickActionController();
export default clickActionController;