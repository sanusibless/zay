$(document).ready(function() {
    console.log("Hello from jQuery!");

    $.ajax({
        url: "./transc_index.php",
        success: function(resp) {
            let responses = JSON.parse(resp);
            let product_target = [["#first_title","#first_img"],["#second_title","#second_img"], ["#third_title","#third_img"]];
            for(let i = 0; i<product_target.length; i++) {
                $(product_target[i][0]).text(responses[i].name)
                $(product_target[i][1]).attr("src", responses[i].photo);
            }
        },
        error: function(error) {
            console.log(error);
        }
    })

    $.ajax({
        url: "./prod_features.php",
        success: function(responses) {
            let resps = JSON.parse(responses);
            resps.forEach(resp => {
                displayResult(resp);
            });
        }
    })


    //feature function 
function displayResult(resp) {
    let colDiv = document.createElement("div");
                 colDiv.setAttribute("class", "col-12 col-md-4 mb-4");
                // card that will be attached to coldiv
                let cardDiv = document.createElement("div");
                 cardDiv.setAttribute("class","card h-100");

                // picture link that will be attached to card
                let link = document.createElement("a");
                link.setAttribute("href","shop-single.html");
                let linkImg = document.createElement("img");
                linkImg.setAttribute("class","card-img-top");
                linkImg.setAttribute("src",resp.photo);
                link.append(linkImg);
                //card -body that will be attached to card
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                // product ranking that will be attached to card body
                let prod_rank_ul = document.createElement("ul");
                prod_rank_ul.setAttribute("class","list-unstyled d-flex justify-content-between");
                
                // product li that will  be attached to prod_rank
                let prod_rank_li = document.createElement("li");
                prod_rank_li.setAttribute("id","product_rank");
               

                for(let i =1; i<=resp.rank; i++) {
                    //
                    let rank = document.createElement("i");
                    rank.setAttribute("class","text-warning fa fa-star");
                    prod_rank_li.append(rank);
                }

                for(let i = 1; i <= 5-resp.rank; i++) {
                    //
                    let rem_rank = document.createElement("i")
                    rem_rank.setAttribute("class","text-muted fa fa-star");
                    prod_rank_li.append(rem_rank);
                }
                

                // this set the price 
                
                let price_li = document.createElement("li");

                price_li.setAttribute("class","text-muted text-right");
                price_li.textContent = `$ ${resp.price}`;
                
                prod_rank_ul.append(prod_rank_li,price_li);
    
                // production Name 
                let product_title = document.createElement("a");  
                product_title.setAttribute("class","h2 text-decoration-none text-dark");
                product_title.setAttribute("href","shop-single.html");
                product_title.setAttribute("id","product_title");
                product_title.textContent = resp.name;

                // this holds the comments
                let product_comment = document.createElement("p");
                product_comment.setAttribute("class","card-text");
                product_comment.setAttribute("id","prod_comment");
                product_comment.textContent = resp.product_comment;
                
                // attaching to card - body
                cardBody.append(prod_rank_ul,product_title,product_comment);

                //  appending to card 
                cardDiv.append(link,cardBody);
                // attaching to coldiv
                colDiv.append(cardDiv)
                $("#row").append(colDiv);
            }
})