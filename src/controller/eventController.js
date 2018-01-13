import EventModel from '../model/eventModel'
import GeoJSON from 'mongoose-geojson-schema';
import GoogleDistance from 'google-distance';
import GeoPoint from 'geopoint';
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
    getDistance(location){

            // this.getGoogleDistance();

            return EventModel.find().then(allEvent => {
                return new Promise((resolve, reject) => {
                    let promises = [];
                    let eventsWithDistance = [];
                    allEvent.forEach(obj => {
                        let eventLocation = obj.location.coordinates[0] + ',' + obj.location.coordinates[1];
                        promises.push(this.getGoogleDistance(location, eventLocation, eventsWithDistance, obj))
                    });
                    Promise.all(promises).then(completed => {
                        console.log("we are done", eventsWithDistance);
                        resolve(eventsWithDistance)
                    })

                });


            });


    }
    //location, eventLocation, eventsWithDistance
    getGoogleDistance(location, eventLocation, eventsWithDistance, obj){
        return new Promise(function(resolve, reject){
            GoogleDistance.get(
                {
                    origin: location,
                    destination: eventLocation
                },
                function(err, data) {
                    if (err) return console.log(err);
                    let tempObj = {
                        eventId:  obj.eventId,
                        distance: data.distance
                    };
                    eventsWithDistance.push(tempObj);
                    resolve();
                });
        });
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