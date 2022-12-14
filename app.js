function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber >0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();


}

//grant-total with tax
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
const phoneTotal = getInputValue('phone') * 1229;
const caseTotal = getInputValue('case') * 59;
const subTotal = caseTotal + phoneTotal;
const tax = subTotal/10;
const totalPrice = subTotal + tax;
// console.log(subTotal);
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;

}





//phone handler
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, true)
});
  
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false)
});



// case handler
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('clicked')
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('clicked')
    updateProductNumber('case', 59, false)

})