# snooze-callback

Snooze Callback to call when time is up. It will help to avoid redundancy work such as hitting database query, or network call. We used this package to future schedule events.

# debug
set environment: DEBUG="snooze*"

# example
```
const snooze = require('./snooze.callback');

const { watch, intervalTime } = require('./index');

intervalTime(10000);
watch( ['2018-10-10T16:12:48.761Z','2018-10-10T16:14:46.761Z'], (error, data) => { 
        error && snooze.cancel() || 
        console.log("Callback Trigger with param", data);
});



```

