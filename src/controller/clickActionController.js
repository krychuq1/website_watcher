import ClickActionModel from '../model/clickActionModel'
class ClickActionController{
    constructor(){}

    addAction(clickActionEvent){
        let clickActionObj = new ClickActionModel(clickActionEvent);
        return clickActionObj.save().then(saved => {
            return saved;
        });
    }
    getAction() {
        return ClickActionModel.find();
    }
    getUsersWithActions(){
        return ClickActionModel.find().populate('users').exec(function (err, action) {
            if (err) return handleError(err);
        });
    }
}
const  clickActionController = new ClickActionController();
export default clickActionController;