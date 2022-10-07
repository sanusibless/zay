$(document).ready(function(){
    $.ajax({
        url: "./prod_details.php",
        success: function (response) {
            let result = JSON.parse(response);
            console.log(result);
        },
        error: function (error) {
            console.log(error)
        }
    })
})

