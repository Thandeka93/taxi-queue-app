function TaxiQueue() {
	let queue = [];
	let taxiQueue = [];

	function joinQueue() {
		queue.push(1);
	}

	function leaveQueue() {
	 queue.pop();
	}

	function joinTaxiQueue() {
		taxiQueue.push(1);
	}

	function queueLength() {

	 return queue.length;


	}

	function taxiQueueLength() {
		return taxiQueue.length;
	}

	function taxiDepart() {
		if (taxiQueue.length > 0 && queue.length >= 4) {
			for (let i = 0; i < 4; i++) {
			  queue.shift();
			}
			taxiQueue.pop();
		  }
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}