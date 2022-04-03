const Appointment = require("./level2");
const Calendar = require("./level4");
/**
 * it is for test
 */
 (()=>{
    try{
        var dt = new Date();
        dt.setHours(4);
        dt.setMinutes(35);
        var dt2 = new Date();
        dt2.setHours(4);
        dt2.setMinutes(38);

        var dt3 = new Date();
        dt3.setHours(4);
        dt3.setMinutes(23);
        var dt4 = new Date();
        dt4.setHours(4);
        dt4.setMinutes(28);

        var dt_t = new Date();
        dt_t.setHours(4);
        dt_t.setMinutes(1);
        var dt_t1 = new Date();
        dt_t1.setHours(5);
        dt_t1.setMinutes(1);

        var appointment0 = new Appointment(dt,dt2);
        var appointment1 = new Appointment(dt3,dt4);
        var i=0;
        while(i<11){
            appointment0.addAttendee("caoyuan","yuan.cao@utbm.fr");
            i++;
        }

        var calendar0 = new Calendar(0);
        calendar0.saveAppointment(appointment0);
        calendar0.saveAppointment(appointment1);
        console.log(calendar0.availableSlotsBetweenDates(dt_t,dt_t1,10))
    }catch(err){
        console.log(err);
    }
})()

 