function compute(){
    capital = document.getElementById("principal").value;
    interest_rate = document.getElementById("rate").value;
	investment_duration = document.getElementById("years").value;
	
	
	if (capital == ""){
    alert("Please enter the amount of capital you want to invest");
    principal.focus();
    return false
    }
	else if (investment_duration == ""){
    alert("Please choose the No. of Years you want to invest");
    years.focus();
    return false
    }
	else{
	result = Math.round(capital * Math.pow((1 + interest_rate * 0.01), investment_duration));
	current_date = new Date();
	current_year = current_date.getFullYear();
	
	output = "If you deposit <span class='highlighted'>" + capital + "</span>, <br>" + 
			"at an interest rate of <span class='highlighted'>" + interest_rate + "%</span>. <br>" +
			"You will receive an amount of <span class='highlighted'>" + result + "</span>, <br>" +
			"in the year <span class='highlighted'>" + (current_year + parseInt(investment_duration)) + "</span>";
	
	document.getElementById("result").innerHTML = output;
	}
}

function update_range_value(){
	interest_rate = document.getElementById("rate").value;
	output = interest_rate + "%";
	document.getElementById("range_value").value = output;
}