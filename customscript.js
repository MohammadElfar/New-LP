$('.service-desc.ar').hide();
$('.service-name.ar').hide();
$('.service-title.ar').hide();
$('#cbutton.ar').hide();
$('.contact-msg.ar').hide();
$('br').remove();
checklang();
console.log(lang)

$('.dropdown-item').on("click", function(){
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
   var newtext =  $(this).html();
   $('.dropdown-toggle').html(''+newtext+'');
   var newval =  $(this).attr('value');
   $('.dropdown-toggle').attr('value',''+newval+'');
   changelangdropdown();
   checklang();
})

function checklang(){

    if (lang == 'ar') {
        $('.service-desc.ar').show();
        $('.service-desc.en').hide();
        $('.service-name.ar').show();
        $('.service-name.en').hide();
        $('.service-title.ar').show();
        $('.service-title.en').hide();
        $('#cbutton.ar').show();
        $('#cbutton.en').hide();
        $('body').addClass('ar');
        $('#footer').addClass('rtl');
        $('#head1 h4').addClass('ar');
        $('#OTPdiv').addClass('rtl');
        $('#otpinput').addClass('rtl');
        $('.ma-nav').addClass('rtl');
        $('#name').attr('placeholder','أدخل أسمك');
        $('#email').attr('placeholder','أدخل بريدك الإلكتروني');
        $('#phone').attr('placeholder','رقم الهاتف ');
        $('.contact-msg.ar').show();
        $('.contact-msg.en').hide();


    } else{
        $('body').removeClass('ar');
        $('.service-desc.ar').hide();
        $('.service-desc.en').show();
        $('.service-name.ar').hide();
        $('.service-name.en').show();
        $('.service-title.ar').hide();
        $('.service-title.en').show();
        $('#cbutton.ar').hide();
        $('#cbutton.en').show();
        $('#footer').removeClass('rtl');
        $('#head1 h4').removeClass('ar');
        $('#OTPdiv').removeClass('rtl');
        $('#otpinput').removeClass('rtl');
        $('.ma-nav').removeClass('rtl');
        $('#name').attr('placeholder','Enter your name');
        $('#email').attr('placeholder','Enter your email');
        $('#phone').attr('placeholder','Phone Number');
        $('.contact-msg.ar').hide();
        $('.contact-msg.en').show();
    
    
    
    }
}