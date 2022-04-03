const Appointment = require("./level1");
/**
 * it is for test
 */
(()=>{
    try{
        var dt = new Date();
        dt.setFullYear(2022,0,1);
        var dt2 = new Date();
        dt2.setFullYear(2022,0,4);
        var appointment0 = new Appointment(dt,dt2);
        appointment0.addAttendee("caoyuan","yuan.cao@utbm.fr");
        appointment0.addAttendee("huamao","hua.mao@utbm.fr");
        appointment0.addAttendee("keran","ke.ran@utbm.fr");
        console.log(appointment0);
        appointment0.removeAttendee("yuan.cao@utbm.fr");
        console.log(appointment0);
    }catch(err){
        console.log(err);
    }
})()

