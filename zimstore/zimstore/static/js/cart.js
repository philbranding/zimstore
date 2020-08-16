/*
first query all the buttons with the update-cart class
loop through all the btns and add an event listener
this.dataset.product is what enable us to use custom attributes
on click set a function thats sets a productID and the action
*/

var updateBtns = document.getElementsByClassName('update-cart')


for(i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)
    })
}