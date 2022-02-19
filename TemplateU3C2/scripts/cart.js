cartdata=JSON.parse(localStorage.getItem("mealcart"))
console.log(cartdata)
sum=0;

document.querySelector("tbody").innerHTML="";
cartdata.map(function(elem,index){
var tr=document.createElement("tr");
var td1=document.createElement("td");

var im=document.createElement("img");
im.setAttribute("src",elem.i)

im.setAttribute("width","100")
im.setAttribute("height","100")

td1.append(im)

var td2=document.createElement("td");
td2.textContent=elem.t;

var td3=document.createElement("td");
td3.textContent=elem.p;
sum=sum+Number(elem.p)
document.getElementById("total").innerHTML=sum
console.log(sum)
tr.append(td1,td2,td3)
document.querySelector("tbody").append(tr)
})

