const Appointment = require("./level2");
const Calendar = require("./level3");
/**
 * it is for test
 */
 (()=>{
    try{
        var dt = new Date();
        dt.setFullYear(2022,0,1);
        var dt2 = new Date();
        dt2.setFullYear(2022,0,4);
        
        var dt3 = new Date();
        dt3.setFullYear(2022,10,5);  
        var dt4 = new Date();
        dt2.setFullYear(2022,10,5);
        
        var appointment0 = new Appointment(dt,dt2);
        var appointment1 = new Appointment(dt3,dt4);
        appointment0.addAttendee("caoyuan","yuan.cao@utbm.fr");
        appointment0.addAttendee("huamao","hua.mao@utbm.fr");
        appointment0.addAttendee("keran","ke.ran@utbm.fr");
 
        var calendar0 = new Calendar(0);
        appointment0 = calendar0.saveAppointment(appointment0);
        appointment1 = calendar0.saveAppointment(appointment1);
        
        console.log(calendar0);
        calendar0.deleteAppointmentById(0);
        console.log(calendar0);
        
        var dt_t = new Date();
        dt_t.setFullYear(2020,10,4);
        var dt_t1 = new Date();
        dt_t1.setFullYear(2022,10,5);
        console.log(calendar0.getAppointmentsBetweenDates(dt_t,dt_t1));
    }catch(err){
        console.log(err);
    }
})()

 