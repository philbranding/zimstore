# Project Setup

01. installation 
    -  `$ python pip install Django `
    - `$ python -m django --version `

02. project setup
    - `$ django-admin startproject [projectname] `
    
# App Setup 
03. app setup
    - `$ cd [generated project folder] `
    - `$ django-admin startapp [appname] `
    
# App Config
05. add the app in the settings.py under INSTALLED_APPS = [
    - `'[appname].apps.StoreConfig', .... ] `

# Running the Server
04. test setup and server
    - `$ cd .. [project folder where manage.py] `
    - `$ python manange.py runserver `
    - open the default django webpage at Localhost:8000
 
# 00 Templating
06. create new Template folder in the ´ projectfolder/appfolder/templates/store´
    - templates folder inside the app folder
    - create a store folder inside the templates folder
    - create HTML template files inside the store folder
    - projectfolder/appfolder/templates/store/
    
# 01 Views 
07. add the views function in the view.py 
    -  ` def main(request):`
    - `       context = {}`
    - `       return render(request, 'appfoldername/main.html', context )`
    
# 02 URLs
08. create the urls.py  file for the paths in the appfolder/urls.py
    - ` from django.urls import path`
    - ` from . import views`
    - `` ``
    - ` urlspatterns = [`
    - ` #leave as empty string for base url`
    - ` path ('', views.store, name="store"),`
    - ` path ('cart/', views.cart, name="cart"),`
    - ` path ('checkout/', views.checkout, name="checkout")`
    - `] `
    
 9. add the urls into the projectfolder/urls.py
    -  ` from django.contrib import admin`
    - ` from django.url import path, include` 
    - `` ``
    - `urlpatterns = [`
    - `path('admin/', admin.site.urls),
    - `path('', include('store.urls'))`
    - `]`
    
 10. Run `python manage.py migrate`
 
 # 03 Static
 11. create the static folder in th root folder next to the project folder
        - static/css/main.css
        - ` body{ background-color:bluee}`
        - static/images/
        - static/js/ 
    
 12. in the settings.py under static add
        - ` STATICFILES_DIRS = [  `
        - ` os.path.join(BASE_DIR, static)`
        - ` ]`
 
 13. Linking the static files  
        - ` <!DOCTYPE html> `
        - ` {% load static %} `
        - ` <html lang="en"> `
        - ` <head> ` 
        - ` <meta charset="UTF-8"> `
        - ` <meta content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" name="viewport"/> `
        - ` <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> `  
        - ` <link rel="stylesheet" type="text/css" href="{% static 'css/main.css' %}"> `
        - ` <title> zimstore | home </title> `
        - ` </head> `
        - ` <body> `
        - ` <h1> Navbar placeholder </h1>`   
        - ` <hr> `
        - ` <div class="container"> `
        - `<br> `
        - `{% block content %}`
        - `{% endblock content%}`
        - ` </div> `
        - ` <!------JavaScript------>  `
        - ` <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>  `
        - ` <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> `  
        - ` <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> `
        - ` </body> `
        - ` </html> ` 
 
 
 
 14. Inheriting files 
        - ` {% extends 'store/main.html' %} `
        - ` {% load static %} `
        - ` {% block content %} `
        -  ` `
        - ` <h1>Checkout</h1> `
        -   `  `
         - ` {% endblock content %} `
    
 # Models    
 15. in the app/models.py
        - add the following library import
        - ` from django.connrib.auth.models import User` 
    
    
 16. after making the models for all the relations we need 
 
        -  `class Order(models.Model): `
        -  `customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)  `
        -  ` date_ordered = models.DateTimeField(auto_now_add=True) `
        -  ` complete = models.BooleanField(default=False)  `
        -  ` transaction_id = models.CharField(max_length=100, null=True)` 

        -  ` def __str__(self): `
        -  `  return str(self.id) `
       
        - run $ ` python manage.py makemigrations ` 
        - prep the database
        - run $ ` python manage.py migrate` 
    
 17. Register the models in the admin.py file in the app and import, then register each individual model
 
        - ` from .models import * `
        - ` admin.site.register(Customer) `
        - ` admin.site.register(Product) `
        - ` admin.site.register(Order) `
        - ` admin.site.register(OrderItem)`
        - ` admin.site.register(ShippingAddress) `
 
 
 # Create the Admin User
 18. now we can create a user and login to make sure all our models were properly registered.
 
        - `  $ python manage createsuperuser  `
        - add a name, email and a password, confirm the password
 
 19. Added some products via the Administration Dashboard
 
        - ` $ python manage.py runserver`
        - Once the server starts running  enter /admin 
        - Login the super user account
        - Add the products one by one
    
 # Importing models into views
 20. open the views.py in the app folder
       -     add
       - ` from .models import * `
       
       - add the products object and pass them through the context 
       - ` def  store(request): `
       - ` product = Product.object.all()`
       - ` context = {'products':products} `
       - ` return render(request, 'store/store.html', context) ` 
       
 # replacing the filler data 
 21. create a for-loop 
        - ` {% extends 'store/main.html' %} `
        - ` {% load static %} `
        - ` {% block content %}`
        - `  {% for product in products %} `
        - ` <div class="col-lg-4"> `
        - ` <img class= "thumbnail" scr={% static 'images/placeholder.png' %}> `
        - ` <div class="box-element product"> `
        - ` <h6><strong> {{product.name}}</strong></h6> `
        - ` <hr>`
        - ` <button class="btn btn-outline-secondary add-btn">Add to Cart </button> `
        - ` <a class="btn btn-outline-success" href=# >View</a> ` 
        - ` <h4 style= "dispaly: inline-block; float: right"><strong>${{product.price|floatformat:2}}</strong> </h4>`
        - ` </div> `
        - ` </div> `
        - ` {% endfor %} `
        - ` </div> `
        - `  {%  endblock conent %} `

 # rendering out the Product images
 22.  We will have to add and image field to our model
        - this needs to be configured separately 
        - in the model.py add to the product class
        - ` image = models.ImageField(null=True, blank=True)`
        - install the pillow module to help with the imagefield
        - `  python -m pip install Pillow`
        - now run Migrations
        - `  python manage.py makemigrations`
        - `  python manage.py migrate `
        - the imagefield will be added in the admin panel
        - there is need to do the root folder configuration the media root for saving the images first
 
 # Setting the Media Root for images
 23. go to the settings.py and underneath the staticfiles_dirs
        - ` MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images/products')  `
 
 24. set the media url in the settings.py
        - ` MEDIA_URL = ' /images/products/' `
 
 25. Urls.py Configuration
        - ` from django.conf.urls.static import static`
        - ` django.conf import settings `
        
        - ` urlpatterns +=static  `
 
        
 # Testing the Cart 
 26. create a new customer via the admin panel
        -  give the customer a name and am email and link it top the admin profile
        -  create a new order and give it a number
        -  add items into the order
        
 27. in the views.py under check for authentication of the user whether they are logged in or not
        - ` def cart(request): ` 
        - we will first check if the order was already created or we will create a new order
        - for the logged in user
        - ` if request.user.is_authenticated: `
        - ` customer = request.user.customer `  
        - ` order, created = Oder.objects.get_or_create(customer=customer, complete=False) `
        - ` items = order.orderitem_set.all()`
        - ` else: `
        - ` items = [] `           
        - ` context = {'items ': items} `         
        - ` return render(request, 'store/cart.html',context)` 
        
 # Replace the dynamic info in th cart
 28. use the dynamic links to reference the images, and any other product attributes e.g price
        - ` img src ="{{item.product.imageURL}}" `
        - ` ${{item.product.name}} ` 
        - ` ${{item.product.price|floatformat:2}} `
        - ` x{{item.quantity}} ` 
 
 # Calculating Totals    
 29. Add the function that calculates the Total in the models.py 
        - `  @property ` 
        - `  def get_total(self): ` 
        - `  total = self.product.price * self.quantity ` 
        - `  return total `
        - `  ${{item.product.name|floatformat:2}} `  
        
29. Add the function that calculates the Cart Total in the models.py 
        - `  @property ` 
        - `  def get_cart_total(self): ` 
        - `  orderitems = self.orderitem_set.all() ` 
        - `  total = sum([item.get_total for item in orderitems]) ` 
        - `  return total `
        
30. Add the function that calculates the Cart Items Total in the models.py 
        - `  @property `
        - ` def get_cart_items(self): `
        - ` orderitems = self.orderitem_set.all() `
        - ` total = sum([item.get_quantity for item in orderitems]) # `
        - ` return total `
        
# Checkout Dynamic links 
31. Add the view.py for the Checkout 
        - ` def checkout(request): `
        - ` if request.user.is_authenticated: `
        - ` customer = request.user.customer `
        - ` order, created = Order.objects.get_or_create(customer=customer, complete=False) `
        - ` items = order.orderitem_set.all() `
        - ` else: `
        - ` # Create Empty cart for now for none-logged in users `
        - ` order = {'get_cart_total': 0, 'get_cart_items': 0} `
        - ` items = [] `
        - ` context = {'items': items, 'order': order} `
        - ` return render(request, 'store/checkout.html', context) `
        

# Adding Site Functionality with JS
32. Create a js folder in the static folder 
        - add a cart.js inside the folder
        - add the dynamic link in the main.html 
        - ` <script type= "text/javascript" src="{% static 'js/cart.js' %}"> </script>` 
        - test it ` console.log("Hello Wolrd"); `
        
33. Use the 'update-cart' attribute to add or remove to the cart
        - add the 'update-cart' class for buttons 
        - for the home page, cart and checkout pages for consistence
        - ` <button data-product="{{product.id}}" data-action="add" class="btn "`
        - ` btn-outline-secondary add-btn update-cart>" Add to Cart </button>` 
        
34. Add event handlers in the cart.js
        - first query all the buttons with the update-cart class
        - loop through all the btns and add an event listener
        - this.dataset.product is what enable us to use custom attributes
        - on click set a function thats sets a productID and the action
        - `  var updateBtns = document.getElementsByClassName('update-cart') `
        - ` for(i = 0; i < updateBtns.length; i++){ `
        - ` updateBtns[i].addEventListener('click', function(){ `
        - ` var productId = this.dataset.product `
        - ` var action = this.dataset.action `
        - `  console.log('productId:', productId, 'Action:', action) `
        - check if the USER is authenticated or not
        - ` console.log('USER:', user) `
        - ` if (user == 'AnonymousUser'){ `
        - ` console.log('User is not authenticated') `
        - ` }else{ `
        - ` console.log('User is authenticated, sending data..') `
        - ` } `
        - ` }) `
        - ` } `
        
35. Updating the Item View 
        - Add the from django.http import JsonResponse
        - ` def updateItem(request): `
        - ` return JsonResponse('Item was added', safe=False)`
        - `   `
        - `var updateBtns = document.getElementsByClassName('update-cart')  `
        - ` for(i = 0; i < updateBtns.length; i++){ `
        - ` updateBtns[i].addEventListener('click', function(){ `
        - ` var productId = this.dataset.product `
        - ` var action = this.dataset.action `
        - ` console.log('productId:', productId, 'Action:', action) `
        - ` console.log('USER:', user) `
        - ` if (user == 'AnonymousUser'){ `
        - `    console.log('User is not authenticated') `
        - ` }else{ `
         - `    updateUserOrder(productId, action) `
        - ` } `
        - `  }) `
        - ` } `
        - `  function updateUserOrder(productId, action){ `
        - ` console.log('User is logged in, sending data..') `
        - ` var url = '/update_item/' `
        - ` fetch(url, { `
        - ` method: 'POST', `
        - `  headers:{ `
        - ` 'Content-Type': 'application/json' `
        - ` }, `
        - ` body:JSON.stringify({'productId': productId, 'action':action}) `
        - ` }) `
        - ` } `
        - first query all the buttons with the update-cart class
        - loop through all the btns and add an event listener 
        - this.dataset.product is what enable us to use custom attributes
        - on click set a function that sets a productID and the action
        - check if the user is logged in
        - the fetch function
        - """ Sending data via method: POST in fetch"""
        - """ Passing headers with the method: POST via the Content-Type: 'application/json' """
        - """ body:JSON.stringify({'productId', productId, 'action':action}) """
        - """ 1) Send the data via POST """
        - """ 2) Parse the RESPONSE into a JSON String"""
        - """ 3) Console.log the Data """
        - Sending the DATA to the Backend in Django
        - Forbidden (CSRF token missing or incorrect.):
        - Create the CSRF Token

# create a CSRF Token 
36. add a CSRF Token for handling the cookies 
        - Django knows how to handle that, its in the documentation  
        - https://docs.djangoproject.com/en/3.1/ref/csrf/ 
        - ` var user = '{{request.user}}' `
        - ` function getCookie(name) { `
        - ` let cookieValue = null; `
        - ` if (document.cookie && document.cookie !== '') { `
        - `  const cookies = document.cookie.split(';'); `
        - ` for (let i = 0; i < cookies.length; i++) { `
        - `   const cookie = cookies[i].trim(); `
        - `   // Does this cookie string begin with the name we want? `
        - `   if (cookie.substring(0, name.length + 1) === (name + '=')) { `
        - `       cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); `
        - `       break; `
        - `    } `
        - `  } `
        - `  } `
        - `   return cookieValue; `
        - ` } `
        - ` const csrftoken = getCookie('csrftoken'); `
 
37. Rename the getCookie function above top getToken for consistence 
    - will use it to 
    
    
    
# Backend Logic
38. UpdateItem view logic
        - we now want to process the productId and action when we send this dat to our view from the fetch call. 
        - Parse Data
39. import json in the view.py 
        - ` def updateItem(request):  `
        - ` data = json.loads(request.body) `
        - ` productId = data['productId'] `
        - ` action = data['action'] `
        - ` print('productId : ', productId) `
        - ` print('action : ', action) `
        - `  `
        - ` customer = request.user.customer `
        - ` product = Product.objects.get(id=productId) `
        - ` order, created = Order.objects.get_or_create(customer=customer, complete=False) `
        - `  `
        - ` orderItem, created = OrderItem.objects.get_or_create(order=order, product=product) `
        - `  `
        - ` if action == 'add': `
        - `    orderItem.quantity = (orderItem.quantity + 1) `
        - ` elif action == 'remove': `
        - `     orderItem.quantity = (orderItem.quantity -1) `
        - `  `
        - ` orderItem.save() `
        - `  `
        - `  if orderItem.quantity <= 0: `
        - `    OrderItem.delete() `
        - `  `
        - `  return JsonResponse('Item was added', safe=False) `
   
# Updating CartItems
38. Updating the CartItems
    for each view in the View.py add the cartItems and add it in the context
        - `  def store(request): `
        - `    if request.user.is_authenticated: `
        - `       customer = request.user.customer `
        - `      order, created = Order.objects.get_or_create(customer=customer, complete=False) `
        - `      items = order.orderitem_set.all()  # querying all the child orders that had this parent `
        - `     cartItems = order.get_cart_items `
        - `   else: `
        - `      items = [] `
        - `     order = {'get_cart_total': 0, 'get_cart_items': 0} `
        - `     cartItems = order['get_cart_items'] `
        - `   `
        - `   `
        - `   products = Product.objects.all() `
        - `  context = {'products': products, 'cartItems': cartItems} `
        - `  return render(request, 'store/store.html', context) `
        
39. Adding Event Handlers in the frontend to update the Cart
        - inside the cart.html add the event handlers and the class attribute (update-cart)
        - ` <img data-product="{{item.product.id}}" data-action="add" class="chg-quantity update-cart" src...> `