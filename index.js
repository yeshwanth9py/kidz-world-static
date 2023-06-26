const cart = {}

const addtocart = (name,author,price)=>{
    if(name in cart){
        cart[name].quantity += 1
    }
    else{
        cart[name] = {
            name: name,
            author: author,
            price: price,
            quantity: 1
        }
    }
    // console.log("cart",cart)
}

const book1 = Array.from(document.querySelectorAll(".books"))
// const add = Array.from(document.querySelectorAll(".button.flex.space-evenly"))
// const event = new Event("click");

console.log(book1)

book1.forEach((e)=>{
    // console.log(e)
    e.addEventListener("click",(e2)=>{
        const name = e2.target.nextElementSibling.innerText
        const author = e2.target.nextElementSibling.nextElementSibling.innerText
        const price = e2.target.parentElement.nextElementSibling.children[0].innerText
        console.log(name,author,price);
        addtocart(name,author,price)
})})

document.querySelector("#cart").addEventListener("click", (e)=>{
    if (Object.keys(cart).length === 0) {
        console.log("Object is empty");
        return
    }
    console.log(cart)
    let totprice = 0
    for (i in cart){
        let str1 = ""
        for (j in cart[i]){
            str1 += "-" + cart[i][j]
        }
        // console.log(str1)
        let arr = str1.split("-")
        console.log("Name:-",arr[1],"Author:-",arr[2],"Price:-",arr[3],"Qty:-",arr[4])
        totprice += parseFloat(arr[3].substring(1))*parseFloat(arr[4])
    }
    
    console.log(totprice)
});


