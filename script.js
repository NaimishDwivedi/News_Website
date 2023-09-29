let key="85bf6af56c2141f488a914a54336e3dc";
let cardData= document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData= document.getElementById("inputData");
let searchType = document.getElementById("type");


const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    searchType.innerText= "Search : "+input;
    inputData.value="";
    cardData.innerHTML="";
    jsonData.articles.forEach(function(article){
        console.log(article);

    let divs= document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `

    divs.addEventListener("click", function(){
        window.open(article.url)
    })
    })

}

window.addEventListener("load", function(){
    getData("India");
})
searchBtn.addEventListener("click", function(){
    let inputText = inputData.value;
    getData(inputText);
})


function navClick(navName){ 
    if(navName=="world cup"){
        document.getElementById("Cricket").style.color="#47c8bf";
        document.getElementById("Finances").style.color="#000";
        document.getElementById("Politics").style.color="#000";
    }
    if(navName=="Finances"){
        document.getElementById("Finances").style.color="#47c8bf";
        document.getElementById("Politics").style.color="#000";
        document.getElementById("Cricket").style.color="#000";
    }
    if(navName=="Politics"){
        document.getElementById("Politics").style.color="#47c8bf";
        document.getElementById("Finances").style.color="#000";
        document.getElementById("Cricket").style.color="#000";
    }
    getData(navName);
}
