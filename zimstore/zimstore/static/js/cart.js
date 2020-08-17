/*
first query all the buttons with the update-cart class
loop through all the btns and add an event listener
this.dataset.product is what enable us to use custom attributes
on click set a function thats sets a productID and the action

check if the user is logged in

the fetch function

    """ Sending data via method: POST in fetch"""
    """ Passing headers with the method: POST via the Content-Type: 'application/json' """
    """ body:JSON.stringify({'productId', productId, 'action':action}) """
    """ 1) Send the data via POST """
    """ 2) Parse the RESPONSE into a JSON String"""
    """ 3) Console.log the Data """

Sending the DATA to the Backend in Django
Forbidden (CSRF token missing or incorrect.):
- Create the CSRF Token

*/

var updateBtns = document.getElementsByClassName('update-cart')


for(i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log('User is logged in, sending data..')

    var url = '/update_item/'

    fetch(url, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'X-CSRFToken':csrftoken,
    },
    body:JSON.stringify({'productId': productId, 'action':action})
    })

    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log('data:', data)
    })

}