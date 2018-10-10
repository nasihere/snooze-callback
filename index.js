const moment = require("moment");
const debug = require('debug')('snooze');

function Snooze() {
    let scheduleTime= [];    
    let clock = null;
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
        watch: (listOfTime, callBack) => {
            scheduleTime = listOfTime;
            clock = setInterval(() => {
               const wakeup = alarm()
               for (const time of wakeup) {    
                scheduleTime = scheduleTime.filter(x => x !== time);
                try {
                    logs({ status:'Callback', wakeupTime: time })
                    callBack(null, time)
                }
                catch(ex) {
                    logs({ status:'Failure', wakeupTime: time })
                    callBack(ex, null)
                }
            }
            }, 1000);
            
            
            
        },
        cancel() {
            clearInterval(clock)
        }
    }
    
}
module.exports = new Snooze()