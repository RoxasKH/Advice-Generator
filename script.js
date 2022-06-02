const url = 'https://api.adviceslip.com/advice';

async function getAdvice() {

	try {
		const response = await fetch(url);
		const data = await response.json();
		document.getElementsByClassName("title")[0].innerHTML = 'ADVICE #' + data.slip.id;
		document.getElementById("advice").innerHTML = '“' + data.slip.advice + '”';
	}
	catch (error) {
		console.error('Something went wrong with retrieving data');
		console.error(error);
	}
	
}

getAdvice();