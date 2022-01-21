# Fun Coding Projects!
Welcome to **Fun Coding Projects**.</br>
This is where I get to have fun with -
- HTML 5.0
- CSS
  - Sass (scss)
- Javascript
- Python
- Flask

## Contents
- [Basic setup](#basic-setup)
- [Run the app](#run-the-app)
- [Compile sass](#compile-sass)

While this is all in good fun, I will try to keep the code built and organized
in a professional way. Being a recovering engineer and scrum-master, it would
be embarrassing otherwise :)

<a id="basic-setup">

## Basic Setup
**In the project root folder**
1. ```npm install``` installs all javascript dependencies from package.json </br>
2. ```pip install -r requirements.txt``` installs python requirements from requirements.txt

<a id="run-the-app">

## Running the app to create html pages
**Make sure your are in the project root directory in your terminal**</br>
I assume you have Python installed </br>
```python app.py```

<a id="compile-sass">

### Compile sass into css
```npm run sass``` compiles [main.scss](./sass/main.scss) into [main.css](./static/style/main.css)</br>
*Recommendation*: [main.scss](./sass/main.scss) should only contain imports of other sass files.
This way you can split the sass into nicely organized components.

## Git branching strategy
- The ```main``` branch is always bug-free and deployable</br>
- Most development happens in the ```deploy``` branch</br>
- Create branches from ```develop``` often. Branches are cheap and can be easily discarded</br>
    when you get yourself in trouble!</br>
- Commit changes frequently</br>
- As you create releasable units of code, employ [semantic versioning](https://semver.org/) via git tags</br>

## Python Virtual Environment
For the Python code I use a virtual environment to isolate the installed packages,
and allow for a clean upload to Heroku.</br>
(I added the venv/ directory to .gitignore so you'll need to create your virtual environment
after cloning this project)</br>

Create virtual environment (in the ./venv directory)</br>
**Make sure you are in the project root directory in your terminal**</br>
```python -m venv ./venv```</br>
Activate virtual environment</br>
**Make sure you are in the project root directory in your terminal**</br>
```. venv/Scripts/activate```</br>
*You know this is working when you see a ```(venv)``` flag in your terminal*

## Python pip installs
I use a pre-set list of installed pip packages in my Python environment so we 
get the same packages and versions in this virtual environment.
The list is held in ```requirements.txt```

To update the list of installed packages.</br>
**First make sure you are in a virtual environment**</br>
**Make sure you are in the project root directory in your terminal**</br>
```pip freeze > requirements.txt```
