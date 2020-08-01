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