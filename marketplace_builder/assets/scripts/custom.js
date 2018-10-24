$(document).ready(function(){


	var memberzone = $('#membership').text();
	
if (memberzone == "Seller"){
	
$('.menu-nonmember').hide();
$('.menu-sellers').show();
$('.menu-buyers').hide();
$('.menu-intermediaries').hide();
$('.inter').hide();
	}
	
	if (memberzone == "Buyer"){
	
$('.menu-nonmember').hide();
$('.menu-sellers').hide();
$('.menu-buyers').show();
$('.menu-intermediaries').hide();
	}
	
	
	if (memberzone == "Intermediary"){
	
$('.menu-nonmember').hide();
$('.menu-sellers').hide();
$('.menu-buyers').hide();
$('.menu-intermediaries').show();
$('.inter').show();
	}

if (memberzone == "BuyerSellerIntermediary"){

$('.menu-nonmember').hide();
$('.menu-sellers').show();
$('.menu-buyers').show();
$('.menu-intermediaries').show();
$('.inter').show();
	}

if (memberzone == "BuyerSeller"){

$('.menu-nonmember').hide();
$('.menu-sellers').show();
$('.menu-buyers').show();
$('.menu-intermediaries').hide();
	}

if (memberzone == "BuyerIntermediary"){

$('.menu-nonmember').hide();
$('.menu-sellers').hide();
$('.menu-buyers').show();
$('.menu-intermediaries').show();
$('.inter').show();
	}
	
if (memberzone == "SellerIntermediary"){

$('.menu-nonmember').hide();
$('.menu-sellers').show();
$('.menu-buyers').hide();
$('.menu-intermediaries').show();
$('.inter').show();
	}

});
