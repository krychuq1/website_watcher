import ClickActionModel from '../model/clickActionModel'
class ClickActionController{
    constructor(){}

    addAction(event){
        let clickActionObj = new ClickActionModel(clickActionEvent);
        return clickActionObj.save().then(saved => {
            return saved;
        });
    }
    getAction() {
        return ClickActionModel.find();
    }
    updateCoordinates(id, coord){}
}
const  clickActionController = new ClickActionController();
export default clickActionController;