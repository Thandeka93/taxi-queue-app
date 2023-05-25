// write your DOM code here.

// DOM element references
const passenger_queue_count= document.querySelector(".passenger_queue_count");
const joinBtn = document.querySelector(".joinBtn");
const leaveBtn = document.querySelector(".leaveBtn");
const taxi_queue_count = document.querySelector(".taxi_queue_count");
const taxiJoinBtn = document.querySelector(".taxiJoinBtn");
const departBtn = document.querySelector(".departBtn");
const countElement = document.querySelector(".passenger_queue_count")

let passengers = 0;

function countPassenger() {
  if (passengers > 0) {
    passengers--;
  } else {
    passengers++;
  }
  
  countElement.innerHTML = passengers;
}

joinBtn.addEventListener('click', countPassenger);
leaveBtn.addEventListener('click', countPassenger);

function manageTaxiQueue(move, queue) {
    if (move === 'join') {
      queue++;
    } else if (move === 'leave' && queue >= 12) {
      queue--;
    }
    return queue;
  }
  
  



// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

