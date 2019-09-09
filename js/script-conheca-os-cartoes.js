jQuery(document).ready(function( $ ){

	$(document).on('click', '.bd-conheca-os-cartoes__content__filters__items label', function(){

		var content_filter = $(this).attr('data-filter-content');

		$('#'+content_filter+' .bd-conheca-os-cartoes__content__result').remove();

		var range_value = $('#'+content_filter+'_filters input[name='+content_filter+'_filter_range]:checked').val();
		var flag_value = ''; $('#'+content_filter+'_filters .filter_flag:checked').each(function(){ flag_value += $(this).val(); });
		var status_value = $('#'+content_filter+'_filters input[name='+content_filter+'_filter_status]:checked').val();

		var filters = '';

		if(range_value != '' && range_value != undefined) {
			filters += range_value;
		}
		if(flag_value != '' && flag_value != undefined) {
			filters += flag_value;
		}
		if(status_value != '' && status_value != undefined) {
			filters += status_value;
		}

		$('#'+content_filter+' .bd-conheca-os-cartoes__content__cards__card-cartao').each(function(){

			var atribute_card = '';

			if(range_value != '' && range_value != undefined) {
				atribute_card += $(this).attr('data-range') ;
			}
			if(flag_value != '' && flag_value != undefined) {
				atribute_card += $(this).attr('data-flag') ;
			}
			if(status_value != '' && status_value != undefined) {
				atribute_card += $(this).attr('data-status') ;
			}

			if (filters.match(atribute_card)) {
	      $(this).show();
	    } else {
	      $(this).hide();
	    }
			
		});

		var visivel = $('#'+content_filter+' .bd-conheca-os-cartoes__content__cards__card-cartao').is(':visible');
		if (!visivel) {
			$('#'+content_filter).append('<div class="bd-conheca-os-cartoes__content__result">Nenhum cartão foi encontrado.</div>');
		}

	});

});