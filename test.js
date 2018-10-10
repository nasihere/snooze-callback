const snooze = require('./index');

snooze.intervalTime(10000);
snooze.watch( ['2018-10-10T16:12:48.761Z','2018-10-10T16:14:46.761Z'], 
    (error, data) => 
        error && snooze.cancel() || 
        console.log("Callback Trigger with param", data));

