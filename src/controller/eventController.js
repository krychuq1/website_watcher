import EventModel from '../model/eventModel'
class EventController{
    constructor(){}

    addEvent(event){
        let eventObj = new EventModel(event);
        return eventObj.save().then(saved => {
            return saved;
        });
    }
    getEvents() {
        return EventModel.find();
    }
    updateCoordinates(id, coord){}
}
const  eventController = new EventController();
export default eventController;