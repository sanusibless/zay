$(document).ready(function() {
    $.ajax({
        url: "./retriv_cart.php",
        success: function(responses) {
            let results = JSON.parse(responses);
            results.forEach(result => {
                let tr = createEle("tr");
                let img = createEle("img",result.photo, {
                    "class": "img-fluid rounded-0",
                    "width": "100",
                    "height": "100",
                    "style": "margin-right:20px;",
                    "src": result.photo
                });
                let tdItem = createEle("td",result.name, {
                    "style": "font-weight:bold;"
                }) ;
                tdItem.prepend(img);
                let tdPrice = createEle("td",result.price);
                let tdQuantity = createEle("td",result.order_quantity);
                let tdTotal = createEle("td",Number(result.price) * Number(result.order_quantity));
                let tdDelete = createEle("td");
                let delet = createEle("a","x", {
                    "class": "btn btn-danger",
                    "href": "cart.php?del="+result.id
                })
                tdDelete.append(delet);
                tr.append(tdItem,tdPrice,tdQuantity,tdTotal,tdDelete)
                $("#result").append(tr);
                function createEle(tag,content,attributes = {}){
                    let el = document.createElement(tag);
                    el.textContent = content;
                    for(const [key,value] of Object.entries(attributes) ) {
                        el.setAttribute(key,value);
                    }
                    return el
                }
            })

            $("#cart-total").html(results.length)
        },
        error:  function (error) {
            console.log(error);
        }
    })
})