$(document).ready(function(){
    console.log("log me in");
    $.ajax({
        url: "./process_allproducts.php",
        success: function(responses) {
            let results = JSON.parse(responses);
            results.forEach(result => {
                let cardCOl = createEle("div","",{
                    "class": "col-md-4"
                });
                let cardHolder = createEle("div","",{
                    "class": "card mb-4 product-wap rounded-0"
                });
                let card = createEle("div","",{
                    "class": "card rounded-0"
                });
                

                let img = createEle("img","", {
                    "class": "card-img img-fluid rounded-0",
                    "src": result.photo
                })
                let prod_rank_ul = createEle("ul","", {
                    "class": "list-unstyled d-flex justify-content-center mb-1"
                });
                 let prod_rank_li = createEle("li","",{
                    "id": "product_rank"
                 });
               
                for(let i =1; i<=result.rank; i++) {
                    //
                    let rank = document.createElement("i");
                    rank.setAttribute("class","text-warning fa fa-star");
                    prod_rank_li.append(rank);
                }

                for(let i = 1; i <= 5-result.rank; i++) {
                    //
                    let rem_rank = document.createElement("i")
                    rem_rank.setAttribute("class","text-muted fa fa-star");
                    prod_rank_li.append(rem_rank);
                }
                prod_rank_ul.append(prod_rank_li);
                
                let cardBody = createEle("div","", {
                    "class": "card-body"
                })
                let cardTittle = createEle("a",result.name, {
                    "class": "h3 text-decoration-none",
                    "href": "./shop_single.php?id="+ result.id
                })
                let price = createEle("p","$" + result.price, {
                    "class": "card-text text-center"
                })


                cardBody.append(cardTittle,prod_rank_ul,price);
                card.append(img,cardBody);
                cardHolder.append(card);
                cardCOl.append(cardHolder)
                $("#display_result").append(cardCOl);

                function createEle(tag,content,attributes){
                    let el = document.createElement(tag);
                    el.textContent = content;
                    for(const [key,value] of Object.entries(attributes) ) {
                        el.setAttribute(key,value);
                    }
                    return el
                }
                            })
        },
        error: function(error){
            console.log(error);
        }
    })
})


