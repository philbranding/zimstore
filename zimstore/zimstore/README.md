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
    - '[appname].apps.StoreConfig', .... ] `

# Running the Server
04. test setup and server
    - `$ cd .. [project folder where manage.py] `
    - `$ python manange.py runserver `
    - open the default django webpage at Localhost:8000
 
# 00 Templating
06. create new Template folder in the projectfolder/appfolder/templates/store
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
 
 24. set the media url in the seetings.py
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
        
 27. in the cart.py under check for authentication of the user whether they are logged in or not
        - ` def cart(request): ` 
        - ` `        
        - ` context = {} `         
        - ` ` 