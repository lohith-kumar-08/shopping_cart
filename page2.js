function nextpage(data) {
    var div1 = document.createElement('div');
    var htmldiv = document.getElementById('maindiv');
    var img1 = document.createElement('img');
    img1.className = 'bigimg';
    img1.src = data.preview;
    div1.appendChild(img1);
    htmldiv.appendChild(div1);

    var div2 = document.createElement('div');
    div2.className = 'sidediv';
    div2.innerHTML += "<name1>" +"<h1>"+ data.name + "<h1>"+"</name1>";
    div2.innerHTML += "<h1>" + data.brand + "</h1>";
    div2.innerHTML +=  "<br>" + "PRICE: " + "RS " +"<price1>"+ data.price + "</price1>" + "<br>";
    div2.innerHTML += "<br>" + "Description" + "<br>" + "<description>" + "<br>" + data.description + "</description>";
   
    var productreview=document.createElement('div');
    productreview.innerHTML+= "<product>" + "Product Preview" +"</product>"+ "<br>";
    productreview.className="product";
    div2.appendChild(productreview);
    var div = document.createElement('div');
    // div.innerHTML = "<product>"+"<br>" + "Product Preview" +"</product>"+ "<br>";
    div.className = 'previewimage';
    var firstImage = true;
    data.photos.map((x) => {
        var div3 = document.createElement('div');
        var img = document.createElement('img');
        img.className = 'smallimage';
        img.src = x;

        if (firstImage) {
            img.style.border = '2px solid #007BFF';
            firstImage = false;
        }
        img.addEventListener('click', () => {


            var smallImages = document.querySelectorAll('.smallimage');
            smallImages.forEach((image) => {
                image.style.border = 'none';
            });
            img.style.border = '2px solid #007BFF';

            document.querySelector('.bigimg').src = x;

        });
        
        div3.appendChild(img);
        div.appendChild(div3);
        div2.appendChild(div);

    })
 
     var button = document.createElement('button');
     button.innerHTML = "Add to Cart";
     button.className = 'btn';
     button.onclick=function(){
        cartFunction(data)
        var cartdata=JSON.parse(localStorage.getItem('cartdetails'))||[];
        document.getElementById("circle").innerHTML=cartdata.length;
        console.log(cartdata.length);
        
     }
     div2.appendChild(button);
    htmldiv.appendChild(div2);


var d=document.getElementById("icon");
d.onclick=function (){
    var url = "productdetails.html";
    window.location.href = url;
}
}
var imageData = JSON.parse(localStorage.getItem("imageData"));
nextpage(imageData);


 var cartFunction=(data)=>
{
    var cartdata=JSON.parse(localStorage.getItem('cartdetails'))||[];
    cartdata.push(data);
    localStorage.setItem("cartdetails",JSON.stringify(cartdata));
}