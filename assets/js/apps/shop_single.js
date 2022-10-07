$(document).ready(function () {
    let stock = Number($("#stock").html());
    let value = stock;
    console.log("YES");
    $("#btn-plus").click(function(){
        let val = Number($("#var-value").html())
        val = val > stock ? stock: val++;
        $("#var-value").html(val)
        $("#product-quantity").val(val);
        $("#stock").html(value - val);
    })
})