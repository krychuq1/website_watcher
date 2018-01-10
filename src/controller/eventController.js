import EventModel from '../model/eventModel'

class EventController{
    constructor(){
    }

    addEvent(id, coordinates){
       /* console.log('accessed controller!');
        console.log('Id is: ',id);
        console.log('Lat is: ',coordinates);

        let event = new EventModel();
        event.id = id;
        event.location = location;
        return event.save().then(saved => {
            return saved
        });*/
    }
    getAllEvents(){
        return EventModel.find();
    }
    updateCoordinates(id, coord){}
}
const  eventController = new EventController();
export default eventController;