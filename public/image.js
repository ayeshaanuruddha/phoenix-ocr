$(document).ready(function (e){

    let $uploadFile = $('#file input[type="file"]');

    $uploadFile.change(function (){
        imgsrc(this);
    });


    // $("#click").click(function(event){
    //     let $password = $("#pass");
    //     let $confirm_password = $("#conf-pass");
    //     let $confirm_error = $("#error");

    // if($password.val() === $confirm_password.val()){
    //     return true;
    // }
    // else{
    //     $confirm_error.text("Password not match");
    //     event.preventDefault();
    // }
    // });


     });

    function imgsrc(input){
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload = function(e){
        $("#file .image").attr('src',e.target.result); 
        }

    reader.readAsDataURL(input.files[0]);

    }
 }