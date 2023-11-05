var maindata=JSON.parse(localStorage.getItem("cartdetails"));
console.log(maindata);
var totalprice=0;
maindata.map((x)=>{
    totalprice+=x.price;
})
var maindiv=document.getElementById("productsdata");
var item=document.getElementById("items");

var number=1;

const itemMap = new Map(); 

maindata.map((x) => {
  const key = x.name;
  
  if (itemMap.has(key)) {
   
    itemMap.set(key, itemMap.get(key) + 1);
    const divs = document.querySelectorAll('.class31 .siddiv h4');
    divs.forEach((div) => {
      if (div.textContent === key) {
        const numberofproduct = div.nextElementSibling;
        numberofproduct.textContent = "x" + itemMap.get(key);
        
      }
    });
 }
  else {
    
    itemMap.set(key, 1);
    var div31 = document.createElement('div');
    div31.className = "class31";
  
    var div32 = document.createElement('div');
    div32.className = "siddiv";
    var image = document.createElement('img');
    image.className = "small_img";
    image.src = x.preview;

    div32.innerHTML += "<h4>" + x.name + "</h4>";
    div32.innerHTML += "<numberofproduct>" + "x" + itemMap.get(key) + "</numberofproduct>" + "<br>";
    div32.innerHTML += "<amount>" + "Amount: Rs " + x.price + "</amount>";

    div31.appendChild(image);
    div31.appendChild(div32);
    maindiv.appendChild(div31);

  }
});



var numberofitems =document.querySelectorAll('.class31').length
item.innerHTML="Total Items: "+numberofitems;

var addtocartnumber = JSON.parse(localStorage.getItem('cart')) || [];
productCount.innerHTML = cartData.length;
var addto=document.getElementById("circle");
addto.innerHTML=addtocartnumber.length;



var totalamount=document.createElement('div');
totalamount.className="amount";
var lineBreak = document.createElement('br');
totalamount.innerHTML+="<br>"+"<amount1>"+"Total Amount"+"</amount1>";
totalamount.appendChild(lineBreak);
totalamount.innerHTML+="<amount2>"+"Amount: Rs "+"<dark>"+totalprice+"</dark>"+"</amount2>";
var finalbutton=document.createElement('button');
finalbutton.className="placeorder";
finalbutton.innerHTML="Place Order"
finalbutton.onclick=()=>{
    url="last.html";
    window.location.href=url;
    localStorage.clear();
}
totalamount.appendChild(finalbutton);
maindiv.append(totalamount);
