// Send effect and animation
$(".submit").on("mouseover", function() {
    // Check if icon doesn't already exist to prevent multiple icons
    if (!$(this).find('.fa-paper-plane').length) {
        $(this).append('<i class="fas fa-paper-plane"></i>');
    }
}).on("mouseleave", function() {
    // remove the icon on mouse leave
    $(this).find('.fa-paper-plane').remove();
}).on("click", function(){
    // add animation when clicked
    $(this).find('.fa-paper-plane').addClass('rotate')
    setTimeout( function(){
        $(this).remove('<i class="fas fa-paper-plane"></i>')
    }, 3000)
})
// password show/hide
$(".toggle").on("click", function() {
    // check if the password is hidden
    if($("#password").attr("type") === 'password'){
        $("#password").attr("type", "text");
        $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }else{
        $("#password").attr("type", "password")
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    }
})
// Confirm password toggle
$(".toggle1").on("click", function() {
    // check if the password is hidden
    if($("#confirm_password").attr("type") === 'password'){
        $("#confirm_password").attr("type", "text");
        $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }else{
        $("#confirm_password").attr("type", "password")
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    }
})

// validate email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// check if the email is valid
function validateEmail(emailValue){
    let isValid = emailRegex.test(emailValue);
    if(emailValue.length === 0){
        $("#email-message").text("Email is required").addClass("error").removeClass("valid");
        return 
    }else if(!isValid){
        $("#email-message").text("Invalid email address").addClass("error").removeClass("valid");
    }else{
        $("#email-message").text("Valid email address").removeClass("error").addClass("valid").fadeIn();
        setTimeout(() => {
            $("#email-message").text("");
        }, 3000);
    }
}
// event listener for email input
$("#email").on("input", function(){
    validateEmail($(this).val());
})

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function passwordChecker(){
    //store password and confirm password in variables
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    // check if the password is valid via the regex rules on confirm password input
    if (!passwordRegex.test(password)) {
        $(".p-message").text("Password must contain at least 8 characters, one letter and one number")
        setTimeout( function(){
            $(".p-message").text("")
        }, 3000)
            .addClass("error").removeClass("valid");
        return;
    }
    // check if the password equals confirm password
    if  (password === confirmPassword){
            $(".password-message").text("Password match").removeClass("error").addClass("valid");
            setTimeout(() => {
                $(".password-message").text("");
            }, 1500);
    }else{
        $(".password-message").text("Password do not match").addClass("error").removeClass("valid");
    }
}
// event listener for password input
$("#confirm_password").on("input", function(){
    passwordChecker();
})

// Form submission handler
$(".form").on("submit", function(event) {
    event.preventDefault();
    const isEmailValid = emailRegex.test($("#email").val());
    const isPasswordValid = passwordRegex.test($("#password").val());
    const doPasswordsMatch = $("#password").val() === $("#confirm_password").val();
    
    if (isEmailValid && isPasswordValid && doPasswordsMatch) {
        // Form is valid, proceed with submission
        console.log("submitted")
    }
});