
// node js works in a very simple mannner like this 


/* 
                          node js server
client --->   server |
                     |  event queue (queues all requests)   - ->   event loop executes all requests 1 by 1 in fifo principle  ,          [pool]  [4 threads]    
                     |                                      <--
                                               result              request satisfied   [aysnc or non blocking code]                --->  blocking code get execute by pool's thread
                                                             <--                  

        // thats the reason if there is more than 4 block code execution is asked then request time will increase or server caan crash , thats the reason all code must be of async in nature


        // no of thread is by default of 4 and can be increse to total of threads of a machine that is hosting
*/

// here is how you can check about the machine
const os = require("os");

// Retrieve information about the CPUs
const cpuInfo = os.cpus();

// Print the CPU information to the console
console.log(cpuInfo.length);
