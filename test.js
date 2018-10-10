const snooze = require('./index');

const tmpTime = ['2018-10-10T14:35:08.366Z','2018-10-10T14:34:08.366Z']
snooze.watch( tmpTime, (error, data) => { 
    if (error) { 
        snooze.cancel();
        throw new error;
    } 
    console.log("Callback Trigger with param", data) 
   
});