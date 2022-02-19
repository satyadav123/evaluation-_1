let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
var box=document.getElementById("menu")
console.log(fetch(url))
//arr=[]

async function mydata(){
    try{
    let res=await fetch(url);
     data=await res.json();
    console.log("data",data)

   // newdata=meal.data
//     console.log(data)
// for(x in data){
//     newdata=data[x]
// }
// arr.push(newdata)
// console.log(arr)
   appendItem(data)

}
catch(err){
    console.log("err",err)
}
}
mydata()

function appendItem(data){


for(var i=0;i<11;i++){

var div=document.createElement("div");
var image=document.createElement("img")
image.src=data.meals[i].strMealThumb
//console.log(image.src)

title=document.createElement("p")
title.innerHTML=data.meals[i].strMeal

//console.log(title.innerHTML)
price=Math.floor(Math.random()*500)
newprice=document.createElement("p")
newprice.textContent=price
//console.log(newprice.textContent)
addButton=document.createElement("button")
addButton.innerHTML="add to cart"
addButton.onclick=function(event){
    addtocart(image,title,newprice)
}
div.append(image,title,newprice,addButton)

box.append(div)
}
}

count=0
//count=countt.length


arraynew=JSON.parse(localStorage.getItem("mealcart"))||[]
count=arraynew.length

function addtocart(image,title,newprice){
    //console.log(image,title,newprice)
     obj={
i:image.src,
t:title.innerHTML,
p:newprice.innerHTML,
     }
     console.log(obj)
    arraynew.push(obj)
    count++
    console.log(count)
    localStorage.setItem("mealcount",JSON.stringify(count))

    localStorage.setItem("mealcart",JSON.stringify(arraynew))
    document.getElementById("count").innerHTML=JSON.parse(localStorage.getItem("mealcount"))

}