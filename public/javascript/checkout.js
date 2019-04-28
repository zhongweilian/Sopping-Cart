var stripe = Stripe('pk_test_b18DubrYt2rY1JYKh1mbQZxR00r7QeGtUp');

var $form = $('#checkout-form');

$form.submit(function(event){
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled',true);
    stripe.createToken({
        number:$('.card-number').val(),
        cvc:$('.card-cvc').val(),
        exp_month:$('.card-expiry-month').val(),
        exp_year:$('.card-expiry-year').val(),
        name:$('.address.zip').val(),
    }).then(function(result) {
        if(result.error){
            $('#charge-error').text(result.error.message);
            $('#charge-error').removeClass('hidden');
            $form.find('button').prop('disable',false);
        }else{
            $form.append($('<input type="hidden" name = "stripeToken"/>').val(result.token));
            $form.get(0).submit();
        }
        // Handle result.error or result.token
      });
})