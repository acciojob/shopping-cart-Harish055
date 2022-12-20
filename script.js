//your code here
let ItemInput=document.getElementById("item-name-input");
let PriceInput=document.getElementById("item-price-input");

let button =document.getElementById("add");
let table =document.getElementById("table");
let total =document.getElementById("total");

let pricearr=[];


function addItem() {
    let item=ItemInput.value;
    let price=PriceInput.value;
    let sum = 0;

    if (item !=='' && price !=='') {
        let row=document.createElement('tr');
        pricearr.push(parseInt(price));
        row.innerHTML =  `<td>${item}</td><td>${price}</td>`
        for (let i=0;i<pricearr.length; i++) {
            sum +=pricearr[i]
        }
        table.append(row);
        total.innerText=sum;

        ItemInput.value='';
        PriceInput.value='';



    }

}

button.addEventListener('click',addItem)
