function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


var step = 1;
var current_url = '';

function togglePswd(id){
	var check = $('#'+id).attr('type');
	if(check == 'password'){
		$('#'+id).attr('type','text');
	} else {
		$('#'+id).attr('type','password');
	}
}

$('#create-acc').on('click', function() {
	$('#register').submit();
	return false;
});
$('#login-now').on('click', function() {
	$('#login').submit();
	return false;
});	
$('#recover-now').on('click', function() {
	$('#recover').submit();
	return false;
});	
$('#register').submit(function(e) {
	var span = $('#regBtn').find('span');

	e.preventDefault();
	var findme = "Error";
	if(isEmpty($('#year').val()) || isEmpty($('#day').val()) || isEmpty($('#month').val())){
	    swal({
	        title: 'uhm...',
	        text: site_lang[182].text,
	        type: "error"
	    }, function(t) { 
	    })	
	return false;	
	}

	$(span[0]).hide();
	$(span[1]).show();

	$.ajax({
			data:  $(this).serialize(),
			url:   request_source()+'/user.php',
			type:  'post',
			beforeSend: function () {
				$("#create-acc").html(site_lang[275].text);
				$('#error').hide();
			},			
			success:  function (response) {  	
				if ( response.indexOf(findme) > -1 ) {
					response = response.replace('Error','');
			        swal({
			            title: site_config.name,
			            text: response,
			            type: "error"
			        }, function(t) { 
			        })
					$(span[0]).show();
					$(span[1]).hide();			        
					$("#create-acc").html(site_lang[8].text);
				} else {
					 window.location=site_config['site_url']+'meet';
				}
			}
	});					
});
$('#login').submit(function(e) {
	var span = $('#loginBtn').find('span');	
	e.preventDefault();
	var findme = "Error";
	$(span[0]).hide();
	$(span[1]).show();	
	$.ajax({
			data:  $(this).serialize(),
			url:   request_source()+'/user.php',
			type:  'post',
			beforeSend: function () {
				$("#login-now").html(site_lang[275].text);
				$('#login-error').hide();
			},			
			success:  function (response) {  	
				if ( response.indexOf(findme) > -1 ) {
					response = response.replace('Error','');
			        swal({
			            title: site_config.name,
			            text: response,
			            type: "error"
			        }, function(t) { 
			        })
					$(span[0]).show();
					$(span[1]).hide();			        
					$("#login-now").html(site_lang[13].text);
				} else {
					 window.location=site_config['site_url']+'meet';
				}
			}
	});					
});	
$('#recover').submit(function(e) {
	var span = $('#forgetBtn').find('span');	
	e.preventDefault();
	var findme = "Error";
	$(span[0]).hide();
	$(span[1]).show();	
	$.ajax({
			data:  $(this).serialize(),
			url:   request_source()+'/user.php',
			type:  'post',
			beforeSend: function () {
				$("#recover-now").html(site_lang[275].text);
				$('#recover-error').hide();
			},			
			success:  function (response) {  	
				if ( response.indexOf(findme) > -1 ) {
					response = response.replace('Error','');
			        swal({
			            title: 'uhm...',
			            text: response,
			            type: "error"
			        }, function(t) { 
			        })
					$(span[0]).show();
					$(span[1]).hide();				        
					$("#recover-now").html(site_lang[15].text);
				} else {
			        swal({
			            title: site_lang[28].text,
			            text: site_lang[341].text,
			            type: "success"
			        }, function(t) { 
			        })								
					$("#recover-now").hide();								
				}
			}
	});					
});				
function locInitialize() {
	TeleportAutocomplete.init('#loc').on('change', function(value) {
		var lat = value.latitude;
		var lng = value.longitude;
		var city = value.name;
		var country = value.country;
		var cityID = value.geonameId;
		$('#locality').val(city);
		$('#lat').val(lat);
		$('#lng').val(lng);
		$('#country').val(country);			
	});
}
locInitialize();