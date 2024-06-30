fetch(`the link of json server `)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)
showdata(data)
})
.catch(function(error){
    console.log(error)
})

function showdata(data){
    data.forEach((products)=>cont.append(createcards(products)))

}

let cont = document.getElementById("cont")

let ch = document.documentElement.clientHeight
let sh = document.documentElement.scrollHeight
let st = document.documentElement.scrollTop
console.log(ch,sh);

let page = 1;

window .addEventListener("scroll", ()=>{
    let ch = document.documentElement.clientHeight
    let sh = document.documentElement.scrollHeight
    let st = document.documentElement.scrollTop
})

if(sh -ch <= st && flag ){
    console.log("we are at the bottom..")
    page++

}
function createcards(products){
    let card = document.createElement("div")
    card.classlist.add("card")

    let name = document.createElement("h1")
    name.innerText = products.name

    let des = document.createElement("h3")
    des.innerText = products.description

    let price =document.createElement("h3")
    price.innerText = products.price

    let category = document.createElement("h3")
    category.innerText = products.category

    card.append(name,des,price,category)
    cont.append(card)
}



