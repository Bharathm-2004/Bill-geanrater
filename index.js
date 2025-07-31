var data_row=[
    {
        id:1,
        product_image:"./image/headset.png",
        product_name:"Headset",
        product_price:700,     
    },
    {
        id:2,
        product_image:"./image/redmi.png",
        product_name:"Redmi Note 12",
        product_price:15000,     
    },
    {
        id:3,
        product_image:"./image/lunch.png",
        product_name:"Lunch Box",
        product_price:300,     
    },
]

const product=document.querySelector(".products")
// new table create
const product_table=document.createElement("table")
product_table.className="table table-striped table-border table-hover align-middle mb-0"
// table ha div la append
product.appendChild(product_table);
// bootstrap   head create
const thead=document.createElement("thead")
thead.className="table-dark"
// table la thead append
product_table.appendChild(thead)
// thead la tr create
const headerRow=document.createElement("tr")
// head la headerrow append
thead.appendChild(headerRow)
console.log(product)
const heading=["ID","Product Image","Product Name","Product Price"]
heading.forEach(text => {
    const th=document.createElement("th")
    th.className="text-center"
    th.textContent=text
    headerRow.appendChild(th)
});
// create tbody
const tbody=document.createElement("tbody")
product_table.appendChild(tbody)
// data la erunthu one by one value eduthu td la store
data_row.forEach(product=>{
    // tbody la tr create panni append
    const row=document.createElement("tr")
    tbody.appendChild(row)
    // row la td create panni
    // id column
    const idcell=document.createElement("td")
    idcell.className="text-center fw-bold"
    idcell.textContent=product.id;
    row.appendChild(idcell)
    // image column
    const imgcell=document.createElement('td')
    imgcell.className="text-center"
    row.appendChild(imgcell)
    // img tag create
    const img=document.createElement("img")
    imgcell.appendChild(img)
    img.src=product.product_image
    img.className="img-thumbnail rounded"
    img.style.width="80px"
    img.style.height="80px"
    // name column
    const namecell=document.createElement("td")
    row.appendChild(namecell)
    namecell.className="text-center fw-bold"
    namecell.style.fontFamily="mono"
    namecell.textContent=product.product_name;
    // price column
    const pricecell=document.createElement("td")
    pricecell.className="text-center text-success"
    pricecell.textContent=`$ ${product.product_price}`
    row.appendChild(pricecell)
})

// console.log(product)

// customer details

function get_tot_price(){
    const pro_name=document.getElementById("pro_name").value;
    const pro_qty=document.getElementById("pro_qty").value;

    if(pro_name !=""){

        const product_price=data_row.filter(value => 
            value.product_name.toLowerCase()===pro_name.toLowerCase()
        )
        if(product_price.length===0){
            alert("Pleace enter a valid product name")
        }
         
        const total_price=pro_qty*product_price[0]["product_price"]
        console.log(total_price)
        var tot_price=document.getElementById("tot_price")
        tot_price.value=total_price
    }
    else{
        alert("Please enter a product name ")
    }
}


// bill show

const btn=document.getElementById("btn")
btn.addEventListener("click",bill_show);


 var Total=0  //total price add panna variable
 var pro_items=[]  //product la store panna empty array
   
// show.className=""

function bill_show(event){
    // event.preventdefalut();

    let parentbill=document.querySelector(".show")
    parentbill.innerHTML=""

    // bill card 
    const bill=document.createElement("div")
    bill.className="card shadow-sm bg-white rounded"
    parentbill.appendChild(bill)

    // card head
    const cardhead=document.createElement("div")
    cardhead.className="card-head bg-primary text-white "
    cardhead.innerHTML=`<h3 claas="mb-3"><strong>Customer Invioce</storng></h3>`
    bill.appendChild(cardhead)

    // card body

    const cardbody=document.createElement("div")
    cardbody.className="card-body "
    bill.appendChild(cardbody);

    // customer info
    const customer_info=document.createElement("div")
    customer_info.className=" row"
    customer_info.innerHTML=`<div class="col-md-4 ">
                            <p><strong>Customer Name: </strong>${document.getElementById("user_name").value}</p>
                        </div>
                         <div class="col-md-4">
                             <p><strong>Contact Number:</strong> ${document.getElementById('mobile').value}</p>
                         </div>
                        <div class="col-md-4">
                            <p><strong>Address:</strong> ${document.getElementById('address').value}</p>
                         </div>`;
    cardbody.appendChild(customer_info)

    // table create

    const billtable=document.createElement("table")
    billtable.className="table table-stripped table-border table-hover align-middle"
    cardbody.appendChild(billtable)

    //table thead

    const billThead=document.createElement("thead")
    billThead.className="table-dark"
    billtable.appendChild(billThead)

    const bill_row1=document.createElement("tr")
    billThead.appendChild(bill_row1)

   let value= ["Product","Image","Qunatity","Price","Total price"]
    value.forEach(value=>{
        const billth=document.createElement("th")
        billth.textContent=value;
        bill_row1.appendChild(billth)
    })

    //table tbody


    const billTbody=document.createElement("tbody")
   
    const product_name1=document.getElementById("pro_name").value;
    // product_name1.innerHTML=""
    var product_qty2=parseInt(document.getElementById("pro_qty").value)
    
    //total price calucaltion
        var tot_price3=parseInt(document.getElementById("tot_price").value);
    Total+=Number(tot_price3)

    //vantha product data la erukka nu check
   const product=data_row.find(value=>
        value.product_name.toLowerCase()===product_name1.toLowerCase()
    );

    //array la value illa if print panum
    if(!product){
        console.log("product not found")
        return;
    }

    //array la already data erukka check
    var exititem=[];
     exititem=pro_items.find(item=>
        item.product_name.toLowerCase() === product.product_name.toLowerCase()
    );
    if(exititem){
        exititem.pro_qty+=Number(product_qty2)
        exititem.tot_price=exititem.pro_qty*exititem.product_price
        console.log(exititem.pro_qty)
    }
    else{
        pro_items.push({
            product_name:product.product_name,
            product_image:product.product_image,
            product_price:product.product_price,
            pro_qty:product_qty2,
            tot_price:tot_price3,
        })
        
    }
    
 
pro_items.forEach(value=>{


    if(value){
        const bill_row2=document.createElement("tr");
        // name column
        const namecell=document.createElement("td");
        namecell.className="fw-semibold"
        namecell.textContent=value.product_name
        bill_row2.appendChild(namecell)
        // image column
        const imgcell=document.createElement("td")
        const img=document.createElement("img")
        img.src=value.product_image
        img.className="img-thumbnail rounded"
        img.style.width="60px"
        img.style.height="60px"
        imgcell.appendChild(img)
        bill_row2.appendChild(imgcell)

        // qunatity column               
        const qtycell=document.createElement("td")
        qtycell.className="fw-semibold text-center"
        qtycell.textContent=value.pro_qty
        bill_row2.appendChild(qtycell)
        
        //price column
        const pricecell=document.createElement("td")
        pricecell.className="fw-semibold text-center"
        pricecell.textContent=value.product_price
        bill_row2.appendChild(pricecell)
        //total column
        const totalcell=document.createElement("td")
        totalcell.className="fw-semibold text-center text-success my-5"
        // totalcell.textContent=`$${tot_price3}`
        totalcell.textContent=`$${value.tot_price}`
        bill_row2.appendChild(totalcell)

        billTbody.appendChild(bill_row2)
    }

})        
    

  billtable.appendChild(billTbody)

//total section

    const total=document.createElement("div")
    total.className="row mt-4"
    total.innerHTML=`<div class="col-md-5 offset-md-7">
                        <div class="card border-success">
                            <div class="card-body text-end ">
                                <h4 class="card-title">Total Amount</h4>
                                <p class="display-6 text-success fw-bold">$${Total}</p>
                            </div>
                        </div>                
                     </div>`
    console.log(total)
                     
    cardbody.appendChild(total)
}