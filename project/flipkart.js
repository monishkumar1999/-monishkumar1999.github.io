

var n_email='sdokm';   //for dummy log-in
var su_pass ='dijn';   

function sign_up_fun() {

    
        $("#login-msg").css('display', 'none')

     n_email = $("#su-email-in").val()
    var customer = $("#cu-nm").val()
    var su_phone = $("#su-ph").val()
    var su_address = $("#su-adrs").val()
    var su_state = $("#su-state option:selected").val()
    var su_gender = $("#su-gender:checked").val()    
         su_pass = $("#su-pass").val()
    var su_c_pass = $("#su-c-pass").val()

    var c_c_op = [];

    $(".su-c-c:checked").each(function () {
        c_c_op.push($(this).val());
    })

    //   regax code 

    var mailReg = /^[\w\.-]+@gmail\.com$/
    var nameReg = /^[A-Za-z\s]+$/
    var phoneReg = /^[6-9]\d{9}$/
    var Passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (n_email == '') {
        $("#su-email").css('display', 'block').text("* Please Enter Your Email")
    }

    else if (!mailReg.test(n_email)) {
        $("#su-email").css('display', 'block').text("* Please Enter Valid Email")
    }
    else {
        $("#su-email").css('display', 'none')

        //  user name
        if (customer == '') {
            $("#c-name-msg").css('display', 'block').text("* Please Enter Your Name")
        }

        else if (!nameReg.test(customer)) {
            $("#c-name-msg").css('display', 'block').text("* Invalid Name")
        }

        else {
            $("#c-name-msg").css('display', 'none')

            // phone number 

            if (su_phone == '') {
                $("#su-ph-msg").css('display', 'block').text("* Enter Phone number")
            }
            else if (!phoneReg.test(su_phone)) {
                $("#su-ph-msg").css('display', 'block').text("* Invalid Number")
            }

            else {
                $("#su-ph-msg").css('display', 'none')


                //address

                if (su_address == '') {
                    $("#su-adrs-msg").css('display', 'block').text("* Enter your Address")
                }
                else {
                    $("#su-adrs-msg").css('display', 'none')

                    //  state 

                    if (su_state === 'Select State') {
                        $("#su-state-msg").css('display', 'block').text("* Please selecrt your state")
                    }
                    else {
                        $("#su-state-msg").css('display', 'none')

                        // gender

                        if (su_gender == null) {
                            $("#su-gender-msg").css('display', 'block').text("* Please select your Gender")
                        }

                        else {
                            $("#su-gender-msg").css('display', 'none')


                            //Customer choice 

                            if (c_c_op.length == 0) {
                                $("#c-c-msg").css('display', 'block').text("* Please select one")
                            }
                            else {
                                $("#c-c-msg").css('display', 'none')

                                if (su_pass == '') {
                                    $("#su-pass-msg").css('display', 'block').text("* Please Enter password")
                                }
                                else if (!Passreg.test(su_pass)) {
                                    $("#su-pass-msg").css('display', 'block').text("* Please Enter Strong Password")
                                }
                                else {
                                    $("#su-pass-msg").css('display', 'none')

                                    if (su_pass != su_c_pass) {
                                        $("#su-pass-c-msg").css('display', 'block').text("* Password must be same")
                                    }
                                    else {
                                        $("#su-pass-c-msg").css('display', 'none')

                                        //    validation completed  

                                        $('#register').modal('hide');   //hide new register form

                                        $('#login_modal').modal('show');  //show login page


                                        $("#log-user").val(n_email) // log_in

                                        $("#log-in-pass").val(su_pass)


                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

  


    $("#log_in-model").click(function () {
        
       

        var log_email = $("#log-user").val()
        var log_pas = $("#log-in-pass").val()

       
        if(log_email==''){
            $("#login-msg").css('display', 'block').text("*Enter mail")
        }
        else{

            if (log_email != n_email) {

                $("#login-msg").css('display', 'block').text("*Invalid mail")
            }
            else {
                $("#login-msg").css('display', 'none')
    
                if (log_pas==''){
                    $("#login-pass-msg").css('display', 'block').text("*Enter password")
                }
               else if (log_pas != su_pass) {
    
                    $("#login-pass-msg").css('display', 'block').text("*Invalid password")
                }
                else {
                    $("#login-pass-msg").css('display', 'none')
                    $('#login_modal').modal('hide');     // after valid user and password close the login model
                    
                    $("#log-home").css('display', 'none');
    
                    $("#drop-user").css('display', 'block');
    
                  
                    
                   

                    
                    $("#log-out").click(function () {   // log-out
                        $('#confrim-log-out').modal('show');
                    });
    
                      $("#log-o-reload").click(function(){    
                        location.reload(true);
                      })
    
                }
            }
        }

        $("#acct-details").click(function(){
            userData()
    
        })


        function userData(){
        
            $("#ac-name").text(customer)
            $("#ac-mail").text(n_email)
            $("#ac-ph").text(su_phone)
            $("#ac-adrs").text(su_address)
            $("#ac-gender").text(su_gender)
           $("#ac-state").text(su_state)
           $("#ac-choice").text(c_c_op)
           $("#account").modal('show');
           
        }


    
    
    })

   

 
    

    $("#user-edit").click(function(){
        
        $('#register').modal('show');
        $("#update-user-data").css('display','block')
        $("#user-input-footer").css('display','none')  
        $("#user-sign-up").css('display','none')
    })

   

}






// dummy login
$("#log_in-model").click(function () {
    var log_email = $("#log-user").val()
    var log_pas = $("#log-in-pass").val()
    

    if(log_email=='sdokm'||log_email==''){
        $("#login-msg").css('display', 'block').text("*Enter mail")
    }
    else{
        if (log_email != n_email) {
            $("#login-msg").css('display', 'block').text("*Please Check your account")
        }
        else {
            $("#login-msg").css('display', 'none')
    
            if(log_pas=='dijn'){
                $("#login-pass-msg").css('display', 'block').text("*Enter password")
            }
            else if (log_pas != su_pass) {
    
                $("#login-pass-msg").css('display', 'block').text("*Invalid password")
            }
            else {
                $("#login-pass-msg").css('display', 'none')
    
            }
        }
    }

  
})

$("#log-home").click(function(){
    $("#login-msg").css('display', 'none')

})









