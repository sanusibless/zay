<?php
include("./php_func/db_func.php");

$cart_sql = "SELECT * FROM orders";
$cart_query = mysqli_query($db, $cart_sql);
while ($row = mysqli_fetch_array($cart_query)) {
    $rowArray = array();
    $rowArray['id'] = $row['id'];
    $rowArray['product_id'] = $row['product_id'];
    $rowArray["name"] = $row['name'];
    $rowArray["photo"] = $row['photo'];
    $rowArray["price"] = $row['price'];
    $rowArray["order_quantity"] = $row['order_quantity'];

    //
    $resultArray[] = $rowArray;
}

echo json_encode($resultArray);
