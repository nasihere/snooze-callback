const moment = require("moment");
const debug = require('debug')('snooze');

function Snooze() {
    let scheduleTime= [];    
    let clock = null;
    let interval = 1000;
        
    function logs ( obj ) {
        debug({tag: 'SnoozeLib', ...obj, time: new Date()})
    }
    function alarm() { 
        return scheduleTime.filter(wakeupTime => { 
            logs({status:'TickTock', wakeupTime: wakeupTime})
            return moment(wakeupTime).isBefore();
        })
    }
    return {
        intervalTime: (timeInterval) => {
            interval = timeInterval;
        },
        watch: (listOfTime, callBack, context = null) => {
            scheduleTime = Object.keys(listOfTime);
            clock = setInterval(() => {
               const wakeup = alarm()
               for (const time of wakeup) {    
                scheduleTime = scheduleTime.filter(x => x !== time);
                try {
                    logs({ status:'Callback', wakeupTime: time })
                    callBack.bind(context, null, listOfTime[time])()
                }
                catch(ex) {
                    logs({ status:'Failure', wakeupTime: time })
                    callBack.bind(context, ex, null)()
                }
            }
            }, interval);
            
            
            
        },
        cancel() {
            clearInterval(clock)
        }
    }
    
}
module.exports = new Snooze()