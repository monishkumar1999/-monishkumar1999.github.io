

var n_email = 'sdokm';   //for dummy log-in
var su_pass = 'dijn';
var customer;
var su_phone;
var su_address;
var su_state;
var su_gender;
var su_c_pass;
var c_c_op


function sign_up_fun() {


    $("#login-msg").css('display', 'none')

    n_email = $("#su-email-in").val()
    customer = $("#cu-nm").val()
    su_phone = $("#su-ph").val()
    su_address = $("#su-adrs").val()
    su_state = $("#su-state option:selected").val()
    su_gender = $("#su-gender:checked").val()
    su_pass = $("#su-pass").val()
    su_c_pass = $("#su-c-pass").val()

    c_c_op = [];

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
        $("#su-email-in").focus()
    }

    else if (!mailReg.test(n_email)) {
        $("#su-email").css('display', 'block').text("* Please Enter Valid Email")
    }
    else {
        $("#su-email").css('display', 'none')

        //  user name
        if (customer == '') {
            $("#c-name-msg").css('display', 'block').text("* Please Enter Your Name")
            $("#cu-nm").focus()
        }

        else if (!nameReg.test(customer)) {
            $("#c-name-msg").css('display', 'block').text("* Invalid Name")
        }

        else {
            $("#c-name-msg").css('display', 'none')

            // phone number 

            if (su_phone == '') {
                $("#su-ph-msg").css('display', 'block').text("* Enter Phone number")
                $("#su-ph").focus()
            }
            else if (!phoneReg.test(su_phone)) {
                $("#su-ph-msg").css('display', 'block').text("* Invalid Number")
            }

            else {
                $("#su-ph-msg").css('display', 'none')


                //address

                if (su_address == '') {
                    $("#su-adrs-msg").css('display', 'block').text("* Enter your Address")
                    $("#su-adrs").focus()

                }
                else {
                    $("#su-adrs-msg").css('display', 'none')

                    //  state 

                    if (su_state === 'Select State') {
                        $("#su-state-msg").css('display', 'block').text("* Please selecrt your state")
                        $("#su-state ").focus()
                    }
                    else {
                        $("#su-state-msg").css('display', 'none')

                        // gender

                        if (su_gender == null) {
                            $("#su-gender-msg").css('display', 'block').text("* Please select your Gender")
                            $("#su-gender:checked").focus()
                        }

                        else {
                            $("#su-gender-msg").css('display', 'none')


                            //Customer choice 

                            if (c_c_op.length == 0) {
                                $("#c-c-msg").css('display', 'block').text("* Please select one")
                                $(".su-c-c").focus()
                            }
                            else {
                                $("#c-c-msg").css('display', 'none')

                                if (su_pass == '') {
                                    $("#su-pass-msg").css('display', 'block').text("* Please Enter password")
                                        ("#su-pass").focus
                                }
                                else if (!Passreg.test(su_pass)) {
                                    $("#su-pass-msg").css('display', 'block').text("* Please Enter Strong Password")
                                }
                                else {
                                    $("#su-pass-msg").css('display', 'none')

                                    if (su_pass != su_c_pass) {
                                        $("#su-pass-c-msg").css('display', 'block').text("* Password must be same")
                                        $("#su-c-pass").focus()
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


        if (log_email == '') {
            $("#login-msg").css('display', 'block').text("*Enter mail")
        }
        else {

            if (log_email != n_email) {

                $("#login-msg").css('display', 'block').text("*Invalid mail")
            }
            else {
                $("#login-msg").css('display', 'none')

                if (log_pas == '') {
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



                    $(".cart-nav").css('display', 'block')


                    $("#log-out").click(function () {   // log-out
                        $('#confrim-log-out').modal('show');
                    });

                    $("#log-o-reload").click(function () {
                        location.reload(true);
                    })

                }
            }
        }

        $("#acct-details").click(function () {
            userData()

        })

        $('.cart-a').click(function(){
            total_find()
        })

        function userData() {

            $("#ac-name").text(customer)
            $("#ac-mail").text(n_email)
            $("#ac-ph").text(su_phone)
            $("#ac-adrs").text(su_address)
            $("#ac-gender").text(su_gender)
            $("#ac-state").text(su_state)
            $("#ac-choice").text(c_c_op)
            $("#ac-pass").text(su_pass)
            $("#account").modal('show');

        }


        //    add cart section

        //    add cart section

        //    add cart section

        // $("#add-cart-detials").css('display','block')
        $("#add-cart-detials").css('display', 'inline-block')

        $("#pass_update").css('display', 'none')
        $("#cpass_update").css('display', 'none')



        $("#add-cart-qty").css('display', 'block')
    })








}
//   edit page 

$("#user-edit").click(function () {

    $('#register').modal('show');
    $("#update-user-data").css('display', 'block')
    $("#user-input-footer").css('display', 'none')
    $("#user-sign-up").css('display', 'none')

})


$("#update-user-data").click(function () {
    n_email = $("#su-email-in").val()
    customer = $("#cu-nm").val()
    su_phone = $("#su-ph").val()
    su_address = $("#su-adrs").val()
    su_state = $("#su-state option:selected").val()
    su_gender = $("#su-gender:checked").val()
    // su_pass = $("#su-pass").val()
    // su_c_pass = $("#su-c-pass").val()

    c_c_op = [];

    $(".su-c-c:checked").each(function () {
        c_c_op.push($(this).val());
    })

    //   regax code 

    var mailReg = /^[\w\.-]+@gmail\.com$/
    var nameReg = /^[A-Za-z\s]+$/
    var phoneReg = /^[6-9]\d{9}$/
    // var Passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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

                                $("#log-user").val(n_email) // log_in

                                $("#log-in-pass").val(su_pass)


                                // if (su_pass == '') {
                                //     $("#su-pass-msg").css('display', 'block').text("* Please Enter password")
                                // }
                                // else if (!Passreg.test(su_pass)) {
                                //     $("#su-pass-msg").css('display', 'block').text("* Please Enter Strong Password")
                                // }
                                // else {
                                //     $("#su-pass-msg").css('display', 'none')

                                //     if (su_pass != su_c_pass) {
                                //         $("#su-pass-c-msg").css('display', 'block').text("* Password must be same")
                                //     }
                                //     else {
                                //         $("#su-pass-c-msg").css('display', 'none')

                                //         //    validation completed  

                                //         $('#register').modal('hide');   //hide new register form

                                //         //show login page


                                //         $("#log-user").val(n_email) // log_in

                                //         $("#log-in-pass").val(su_pass)



                                //     }
                                // }
                            }

                            $('#register').modal('hide')
                            // $("#log-user").val(n_email)
                            // $("#log-in-pass").val(su_pass)
                        }
                    }
                }
            }
        }
    }
})





// dummy login
$("#log_in-model").click(function () {
    var log_email = $("#log-user").val()
    var log_pas = $("#log-in-pass").val()


    if (log_email == 'sdokm' || log_email == '') {
        $("#login-msg").css('display', 'block').text("*Enter mail")
        $("#log-user").focus()
    }
    else {
        if (log_email != n_email) {
            $("#login-msg").css('display', 'block').text("*Please Check your account")
        }
        else {
            $("#login-msg").css('display', 'none')

            if (log_pas == 'dijn') {
                $("#log-in-pass").focus
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

$("#log-home").click(function () {
    $("#login-msg").css('display', 'none')

})


// hide and show password 

const password = $("#log-in-pass");


$(".eye-show").click(function () {



    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash')
        password.attr('type', 'text')

    }
    else {
        $(this).removeClass('fa-eye-slash')
        password.attr('type', 'password')

    }
})





$(".eye-show-p-c1409").click(function () {

    const password = $("#su-pass");

    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash')
        password.attr('type', 'text')

    }
    else {
        $(this).removeClass('fa-eye-slash')
        password.attr('type', 'password')

    }
})


$(".eye-show-c-c1420").click(function () {

    const password = $("#su-c-pass");

    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash')
        password.attr('type', 'text')

    }
    else {
        $(this).removeClass('fa-eye-slash')
        password.attr('type', 'password')

    }
})

$(".eye-f-pass").click(function () {

    const password = $("#f-pass");

    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash')
        password.attr('type', 'text')

    }
    else {
        $(this).removeClass('fa-eye-slash')
        password.attr('type', 'password')

    }


})


$(".eye-f-con").click(function () {

    const password = $("#con-pass");

    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash')
        password.attr('type', 'text')

    }
    else {
        $(this).removeClass('fa-eye-slash')
        password.attr('type', 'password')

    }
})

// addcart section 


$(".cart-nav").click(function () {

    $("#addcard-details").modal('show')

   total_find()

})


function add_cart_fun(price, pro_name, id) {

    var qty = $("#" + id).val()

    var old = 0;
    $('#addcart-body   tr').each(function () {
        var name = $(this).find('td:nth-child(2)').text();
        if (name === pro_name) {
            old = 1;
        }
    });

    if (qty == 0) {

    }
    else if (old == 1) {
        $("." + price).val(qty)
        $("." + pro_name + price).text(qty * price)
        $(".addcart-modal").modal('hide')
        total_find()
    }

    else {
        add_in_table(pro_name, qty, price)
        $(".addcart-modal").modal('hide')
    }


    // total_find()



}


function add_in_table(pro_name, qty, price) {

    $(".data-table tbody").append("<tr><td></td><td>" + pro_name + "</td><td class='ip-val'><input min=0 class=' " + price + "'type='number'value = '" + qty + "' onclick=increment('" + pro_name + "','" + price + "') onkeyup=increment()></td><td>" + price + "</td> <td> <button class='remove-btn' style='display: block;' >remove</button></td> <td class='" + pro_name + price + "'>" + price * qty + "</td></tr>");


    $(".addcart-modal").modal('hide')
    total_find()
}



//find_total
function total_find() {

    var total = 0;
    $("#addcart-body tr").each(function () {
        var per_totalamount = $(this).find('td:nth-child(6)').text() * 1;

        total += per_totalamount;
        $("#total-add-amount").text(total)
    })

    product_id()
    
    totalqtyshow()

    if (total == 0) {
        $(".data-table").hide()      
        $("#discout-section").hide()
        $("#checkout-button").css('display','none')
    }
else{
    $(".data-table").show()
    $("#discout-section").show()
    $("#checkout-button").css('display','block')
}
    return total
}



//disocunt section 

function discount_fun() {
    var discount = 20;

    $("#discount").change(function () {
        var dis_total = total_find()

        if (this.checked) {
            var dicont_amt = dis_total * (100 - discount) / 100
            $("#total-add-amount").text(dicont_amt)

        }
        else {
            $("#total-add-amount").text(dis_total)
        }

       
    });
}



// remove
$('body').on('click', ' .remove-btn', function () {

    $(this).parents('tr').remove();
    $('#discount').prop('checked', false)
    total_find()
   
})


// increment and decrement 
function increment() {
    $('.data-table tbody tr').each(function () {
        $(this).find('td:nth-child(6)').text($(this).find('td:nth-child(3) input[type = "number"]').val() * $(this).find('td:nth-child(4)').text() * 1)
    })
    $('#discount').prop('checked', false)
    total_find()
}



// check-out section 


$("#checkout-button").click(function () {
    checkoutitem()
    $('#addcard-details').modal('hide')
    $('#checkout-table').modal('show')
    checkout_total()
 
})

function removedata() {
    $('.checkouttable tbody tr').remove()
}


// adding addcart products to checkout section
function checkoutitem() {
    var product;
    var product_qunty;
    var total_prodt_price;


    $('.data-table tbody tr').each(function () {
        product_qunty = $(this).find('td:nth-child(3) input[type = "number"]').val()
        product = $(this).find('td:nth-child(2)').text();
        total_prodt_price = $(this).find('td:nth-child(6)').text();


        var newrow = '<tr>' + '<td>' + product + '</td>' + '<td>' + product_qunty + '</td>' + '<td>' + total_prodt_price + '</td>' + '</tr>';

        $('.checkouttable tbody').append(newrow)

    })


}


// checkout details
function checkout_total() {

    var total = 0;
    $("#total-amountof-cart tr").each(function () {
        var totalamount = $(this).find('td:nth-child(2)').text() * 1;

        total += totalamount;
        $("#total-check-amount").text(total)
    })


}


// after buy delete add card details
function checkouted() {
    $('.checkouttable tbody tr').remove()
    $("#addcart-body tr").remove()
    total_find()
    checkout_total()
    $('#checkout-table').modal('hide')
}



//product id function 
function product_id() {
    var s_no = 1;
    $('#addcart-body   tr').each(function () {
        $(this).find('td:nth-child(1)').text(s_no)
        s_no++;
    })
}


function totalqtyshow() {

    var ttqqty = 0;
    var tt = 0
    $('#addcart-body   tr').each(function () {

        totalqty = $(this).find('td:nth-child(3) input[type = "number"]').val() * 1

        tt += totalqty * 1

    })
    // alert(tt) 

    $("#add-cart-qty").text(tt)
}


$(".cart-a").click(function (){
   
   $('#discount').prop('checked', false)
})



