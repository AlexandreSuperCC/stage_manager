const getEmailIndex = require("./appointmentUtil"); 

class Appointment{
    constructor(start,end){
        this.start = start;
        this.end = end;
        this.attendees = [];
    }
    
    setId(id){
        this.id = id;
    }

    addAttendee(name, email){
        let today = new Date();
        if(today <= this.start){
            this.attendees.push({name,email});
        }else{
            console.log("Sorry, you should not be able to add an attendee after the appointment `start` datetime");
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
}

module.exports = Appointment

























































































































