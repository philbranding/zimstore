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
06. create new Template folder in the projectfolder/appfolder/
    - template folder
    - create HTML template files
    
# 01 Views 
07. add the views function in the view.py 
    -  ` def main(request):`
    - `       context = {}`
    - `       return render(request, 'appfoldername/main.html', context )`
    
 #02 URLs
08. create the url-paths in the appfolder/url.py
    - ` from django.urls import path`
    - ` from . import views`
    
    - ` urlspatterns = [`
    - ` #leave as empty string for base url`
    - ` path ('', views.store, name="store"),`
    - ` path ('cart/', views.cart, name="cart"),`
    - ` path ('checkout/', views.checkout, name="checkout")`
    - `] `