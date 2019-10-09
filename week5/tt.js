jQuery(document).ready(function(){
  jQuery('#determinant').onclick(function(){
  	var out;
  	out = jQuery('#s11').val()+jQuery('#s12').val()+jQuery('#s13').val()+jQuery('#s21').val()+jQuery('#s22').val()+jQuery('#s23').val()+jQuery('#s31').val()+jQuery('#s32').val()+jQuery('#s33').val();
    jQuery("#result").val(out);
  });
});