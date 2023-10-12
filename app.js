var cartvalue = document.getElementById("cart-value")
var cart_value = 0
var price = [ ]
var name1 = [ ]

function cart_pc(n,p){
    let c= document.getElementsByClassName('b1')
    cart_value++
    cartvalue.textContent = cart_value
    name1.push(n)
    price.push(p)
}



 function count_item(){
    const counter = {};
    name1.forEach(ele => {
        if (counter[ele]) {
            counter[ele] += 1;
        } else {
            counter[ele] = 1;
         }
    });
    const counter1 = {};
    price.forEach(ele => {
        if (counter1[ele]) {
            counter1[ele] += 1;
        } else {
            counter1[ele] = 1;
         }
    });
    let k = Object.keys(counter)
    let v = Object.values(counter)
    for (let i=0 ; i<k.length ; i++){
        console.log(`Item name : ${k[i]} - Quantity: ${v[i]}`)
    }
    let k1 = Object.keys(counter1)
    let v1 = Object.values(counter1)
    let total=0
    for (let i=0; i<k1.length; i++){
        let t= k1[i]*v[i]
        total+=t
    }
    let deci = 1-(Math.ceil(total)-total)
    console.log(`The total amount is :${Math.floor(total)}$ ${Math.ceil(deci*100)} Cents`)
 }
