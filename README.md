# snooze-callback

Snooze Callback to call when time is up. It will help to avoid redundancy work such as hitting database query, or network call. We used this package to future schedule events.

# debug
set environment: DEBUG="snooze*"

# example
```
const snooze = require('./snooze.callback');

snooze.intervalTime(10000); // set time interval delay

snooze.watch( ['2018-10-10T14:35:08.366Z','2018-10-10T14:34:08.366Z'], (error, data) => { 
    if (error) { 
        snooze.cancel();
        throw new error;
    } 
    console.log("Callback Trigger with datetime param", data) 
});
```

