
var interest_rate;
	function interestValue(x){
	document.getElementById("interest").innerHTML = x+" %";
	}
	

function compute()
{
	var principal = document.getElementById("principal").value;
	var interest = document.getElementById("rate").value;
	
	if(principal === "" || principal == '0' || principal < 0){
	
		alert("Please enter a positive number");
		document.getElementById("principal").focus();
	}
	else{
		
		var e = document.getElementById("years");
		var years = e.options[e.selectedIndex].value;
		
		document.getElementById("result").style.display = "block";
		document.getElementById("error").style.display = "none";
		document.getElementById("res_principal").innerHTML = principal;
		document.getElementById("res_rate").innerHTML = interest;
		
			
		var date = new Date();
		var res_years = (date.getFullYear()) + parseInt(years,10);
		
		document.getElementById("res_years").innerHTML = res_years;
		var maturity_interest =  Math.floor(principal * interest * years/100);
		document.getElementById("cal_interest").innerHTML = maturity_interest;
		document.getElementById("principal").focus();
		reset();
	}
}

function reset(){

principal.value = null;
interest.value = 15;
years.value = 1;
}

        
