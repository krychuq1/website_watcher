import EventModel from '../model/eventModel'
import GeoJSON from 'mongoose-geojson-schema';

class EventController{
    constructor(){}

    addEvent(event){
        let eventObj = new EventModel({
            eventId: event.eventId,
            location: {
                type: "Point",
                coordinates: event.location
            }
        });
        // let eventObj = new EventModel(event);
        return eventObj.save().then(saved => {
            return saved
        })
    }
    getAllEvents(){
        return EventModel.find();
    }
    deleteAllEvents(){
        return EventModel.remove();
    }
    deleteEventByEventId(id){
        return EventModel.findOneAndRemove({eventId: id});
    }

}
const  eventController = new EventController();
export default eventController;