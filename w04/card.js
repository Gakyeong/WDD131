function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234';
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg;
}
function isFutureDate(month, year){
    const currentDate = new Date();
    if(year.length===2){
        year = '20'+year; 
    }
    const inputDate = new Date(year, month -1);
    return inputDate > currentDate;
}

function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';
	console.log(this.cardnumber.value);
	// clear any previous errors
	displayError('');
	// check credit card number
	if (isNaN(this.cardnumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(this.cardnumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n';
	}
    const expMonth = this.expirationmonth.value;
    const expYear = this.expirationyear.value;
    if (!isFutureDate(expMonth, expYear)){
        errorMsg +='Expiration date must be in the future';
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg);
		return false;
	}
    displayError('Form submitted successfully!'); 
	return true;
}

document.querySelector('#cardinfront').addEventListener('submit', submitHandler);
