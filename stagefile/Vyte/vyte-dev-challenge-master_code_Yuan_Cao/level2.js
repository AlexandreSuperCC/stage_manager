const getEmailIndex = require("./appointmentUtil"); 

class Appointment{
    constructor(start,end){
        this.start = start;
        this.end = end;   
        this.maxAttendees = 10;
        this.attendees = [];
    }
    
    setId(id){
        this.id = id;
    }

    addAttendee(name, email){
        let today = new Date();
        if(this.isAvailable() && today <= this.start){
            this.attendees.push({name,email});
        }else{
            console.log("Sorry, you should not be able to add an attendee after the appointment `start` datetime or the spot is full");
        }
    }
    removeAttendee(email){
            let index = getEmailIndex(this.attendees, email);
            if(index != -1){//email is correct
                this.attendees.splice(index, 1);
            }else{
                console.log("Sorry, the email doesn't exist.")
            }
            
    }
    remainingSpots(){
        return this.maxAttendees-this.attendees.length;
    }
    isAvailable(){
        let today = new Date();
        if(this.remainingSpots()>=1 && today <= this.start){
            return true;
        }else{
            return false;
        }
    }
    isConfirmed(){
        if(this.attendees.length>=1){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Appointment





















































































































