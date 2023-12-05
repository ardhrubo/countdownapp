const countdownDisplay = document.getElementById("countdown-display")


const christmas = "25 December 2023  11:59 PM";

function renderCountdown() {
const enddate = new Date(christmas);
const startdate = new Date();

const remaining = (enddate - startdate)/1000;

if(remaining<0) return;

const remaindays = Math.floor(remaining/86400);

const remainhour = Math.floor((remaining/3600)%24);

const remainmin = Math.floor(((remaining/60) % 60))

const remainsec = Math.floor(remaining%60);
 
happycristmas = ` ${remaindays} days 
                    ${remainhour} hours ${remainmin} min ${remainsec} sec `

return countdownDisplay.innerHTML = happycristmas


}

setInterval(
    () => {
        renderCountdown()
},1000)
    



