<?php


include("./php_func/db_func.php");
if (isset($_POST['addCart'])) {
    $name = $_POST['product_name'];
    $product_id = $_POST['id'];
    $result = "SELECT * FROM all_products WHERE id = '$product_id'";
    $res = mysqli_query($db, $result);
    $row = mysqli_fetch_array($res);
    $price = $row['price'];
    $photo = $row['photo'];

    $size = $_POST['product-size'];
    $product_quantity = $_POST['product-quantity'];

    $cart_query = "INSERT INTO orders(user_id,name,product_id,price,order_quantity,photo) VALUES('','$name','$product_id','$price','$product_quantity','$photo')";
    mysqli_query($db, $cart_query);
    
    header("location: ./shop.php");
}
