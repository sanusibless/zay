<?php
include("./php_func/db_func.php");

$prod_featuresQuery = "SELECT * FROM features_products";

$result_prodFeatures = mysqli_query($db, $prod_featuresQuery);

$resultArray = array();
while ($row = mysqli_fetch_array($result_prodFeatures)) {
    $rowArray = array();
    $rowArray["name"] = $row['name'];
    $rowArray["photo"] = $row['photo'];
    $rowArray["price"] = $row['price'];
    $rowArray["rank"] = $row['rank'];
    $rowArray['product_comment'] = $row['product_comment'];

    $resultArray[] = $rowArray;
}

echo json_encode($resultArray);
