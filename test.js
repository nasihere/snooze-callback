const { watch, intervalTime, cancel } = require('./index');

intervalTime(1000);
const timeObj = {
        '2018-10-10T16:12:48.761Z': { context: this, data: "hello world"},
        '2018-10-10T16:14:46.761Z': { someFun: () => console.log('yay',timeObj), data: "hello world"}
}

watch( timeObj, function (error, data) { 
        if (error) return cancel() 
        console.log("Callback Trigger with param", data);
}, this);

