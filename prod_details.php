<?php
include("./php_func/db_func.php");
$id = $_GET['id'];
$product_sql = "SELECT * FROM all_products WHERE id ='$id'";
$prouct_query = mysqli_query($db, $product_sql);
$json_respArr = array();

while ($product_result = mysqli_fetch_array($prouct_query)) {
    $response = array();
    $response["id"] = $product_result['id'];
    $response["name"] = $product_result['name'];
    $response["photo"] = $product_result['photo'];
    $response["price"] = $product_result['price'];
    array_push($json_respArr, $response);
}

echo json_encode($json_respArr);
