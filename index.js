
class shoplane {
    constructor(data) {
        this.value = data
    }
    bigimage(newid) {
        var htmldiv = document.getElementById(newid);
        this.value.map((x) => {
            var div2 = document.createElement('div');
            div2.className = "subimage";
            var img1 = document.createElement('img');
            img1.className = "bigimg";
            img1.src = x.preview;
            var div3 = document.createElement('div');
            div3.className = "container";
            div3.innerHTML += "<h4>" + x.name + "</h4>";
            div3.innerHTML += "<h5>" + x.brand + "<h5>";
            div3.innerHTML += "<p>" + "RS " + x.price + "</p>";
            img1.onclick = function () {
                var url = "page2.html";
                localStorage.setItem("imageData", JSON.stringify(x));
                window.location.href = url;
            };
            div2.appendChild(img1);
            div2.appendChild(div3);
            htmldiv.appendChild(div2);
        })

    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

var a = new XMLHttpRequest();
a.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
a.send();

var clothes_data = [];
var accessoryList = [];

a.onreadystatechange = function () {
    if (a.readyState == 4 && a.status == 200) {
        var data = JSON.parse(a.responseText);

        productList = data;
        clothes_data = data.filter(function (item) {
            return item.isAccessory == false;
        });
        accessoryList = data.filter(function (item) {
            return item.isAccessory == true;
        });

        f(clothes_data, accessoryList);
    }
};
function f(clothes_data, accessoryList) {
    var obj = new shoplane(clothes_data);
    obj.bigimage("clothes");
    var obj2 = new shoplane(accessoryList)
    obj2.bigimage("accessorie");
}

var addtocartnumber=JSON.parse(localStorage.getItem("cartdetails"));
var addto=document.getElementById("circle");
addto.innerHTML=addtocartnumber.length;





