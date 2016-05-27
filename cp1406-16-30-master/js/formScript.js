// JavaScript Document

function checkContactForm() {
	var d = document.getElementById('contactForm');
	var errors = false;
	var errorMessage = "";
	if (d.name.value == "") {
		errorMessage += "Please Enter Your Name. \n";
		errors = true;
		}
	if (d.email.value == "") {
		errorMessage += "Please Enter Your Email. \n";
		errors = true;
		}
	if (d.comments.value == "") {
		errorMessage += "Please Enter Your Comment. \n";
		errors = true;
		}
	if (errors) {
		alert(errorMessage);
		}
	return !errors;
	}
	
function checkBenefactorForm() {
	var d = document.getElementById('benefactorForm');
	var errors = false;
	var errorMessage = "";
	if (d.fullName.value == "") {
		errorMessage += "Please Enter Your Name. \n";
		errors = true;
		}
	if (d.address.value == "") {
		errorMessage += "Please Enter Your Postal Address. \n";
		errors = true;
		}
	if (d.postcode.value == "") {
		errorMessage += "Please Enter Your Postcode. \n";
		errors = true;
		}
	if (d.eMail.value == "") {
		errorMessage += "Please Enter Your Email. \n";
		errors = true;
		}
	if (d.cardHolder.value == "") {
		errorMessage += "Please Enter The Card Holder's Name. \n";
		errors = true;
		}
	if (d.cardNumber.value == "") {
		errorMessage += "Please Enter Card Number. \n";
		errors = true;
		}
	if (d.CSV.value == "") {
		errorMessage += "Please Enter CSV. \n";
		errors = true;
		}
	if (d.donationAmount.value == "") {
		errorMessage += "Please Enter Donation Amount. \n";
		errors = true;
		}
	if (errors) {
		alert(errorMessage);
		}
	return !errors;
	}
	
	function checkMembershipForm() {
	var d = document.getElementById('membershipForm');
	var errors = false;
	var errorMessage = "";
	var checkedMembershipApplication = false;
	var checkedMembershipType = false;
	var checkedMembershipRole = false;
	
    if (d.newMemberShip.checked) {
        checkedMembershipApplication = true;
    }
	if (d.renewMemberShip.checked) {
        checkedMembershipApplication = true;
    }
    if (!checkedMembershipApplication) {
        errorMessage += "Please Select An Application Type.\n";
        errors = true;
    }
	
 	if (d.typeAdult.checked) {
        checkedMembershipType = true;
    }
	if (d.typeFamily.checked) {
        checkedMembershipType = true;
    }
	if (d.typeStudent.checked) {
        checkedMembershipType = true;
    }
	if (d.typeConsession.checked) {
        checkedMembershipType = true;
    }
    if (!checkedMembershipType) {
        errorMessage += "Please Select An Membership Type.\n";
        errors = true;
    }
	
	if (d.familyName.value == "") {
		errorMessage += "Please Enter Family Name. \n";
		errors = true;
		}
	if (d.givenName.value == "") {
		errorMessage += "Please Enter Given Name. \n";
		errors = true;
		}
	
	if (d.address.value == "") {
		errorMessage += "Please Enter An Address. \n";
		errors = true;
		}
	if (d.postcode.value == "") {
		errorMessage += "Please Enter An Postcode. \n";
		errors = true;
		}
	if (d.eMail.value == "") {
		errorMessage += "Please Enter An Email Address. \n";
		errors = true;
		}
		
	if (d.rolePlayer.checked) {
        checkedMembershipRole = true;
		}
	if (d.roleManagement.checked) {
        checkedMembershipRole = true;
		}
	if (d.roleSupport.checked) {
        checkedMembershipRole = true;
		}
	if (d.roleFundraising.checked) {
        checkedMembershipRole = true;
		}
	if (d.rolePromotion.checked) {
        checkedMembershipRole = true;
		}
	if (d.roleSponsorship.checked) {
        checkedMembershipRole = true;
		}
	if (d.roleDesktopPublishing.checked) {
        checkedMembershipRole = true;
		}
	if (!checkedMembershipRole) {
        errorMessage += "Please Select An Membership Role.\n";
        errors = true;
    	}
	
		
	if (d.cardHolder.value == "") {
		errorMessage += "Please Enter Card Holder's Name. \n";
		errors = true;
		}
	if (d.cardNumber.value == "") {
		errorMessage += "Please Enter Card Number. \n";
		errors = true;
		}
	if (d.CSV.value == "") {
		errorMessage += "Please Enter CSV. \n";
		errors = true;
		}
	
	if (errors) {
		alert(errorMessage);
		}
	return !errors;
	}
	
	function resetForm() {
    var resetChoice = confirm('Reset all fields?');
    if (resetChoice) {
        console.log("Resetting form modifications.");
		}
	}