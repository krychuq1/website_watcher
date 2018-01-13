import ClickActionModel from '../model/clickActionModel';
import User from '../model/userModel';
class ClickActionController{
    constructor(){}

    addAction(clickActionEvent){
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
}
const  clickActionController = new ClickActionController();
export default clickActionController;