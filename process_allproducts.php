<?php
include("./php_func/db_func.php");

$allproduct_query = "SELECT * FROM all_products";

$result_allproducts = mysqli_query($db, $allproduct_query);

$resultArray = array();
while ($row = mysqli_fetch_array($result_allproducts)) {

    $rowArray = array();
    $rowArray['id'] = $row['id'];
    $rowArray["name"] = $row['name'];
    $rowArray["color"] = $row['color'];
    $rowArray["photo"] = $row['photo'];
    $rowArray["price"] = $row['price'];
    $rowArray["size"] = $row['size_id'];
    $rowArray["gender"] = $row['gender_id'];
    $rowArray["stock"] = $row['stock'];
    $rowArray["rank"] = $row['rank'];

    //
    $resultArray[] = $rowArray;
}

echo json_encode($resultArray);
?>