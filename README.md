# Fun Coding Projects!
Welcome to **Fun Coding Projects**.</br>
This is where I get to have fun with -
- HTML
- CSS
- Javascript
- Python
- Flask

While this is all in good fun, I will try to keep the code built and organized
in a professional way. Being a recovering engineer and scrum-master, it would
be embarrassing otherwise :)

## Git branching strategy
- The ```main``` branch is always bug-free and deployable</br>
- Most development happens in the ```deploy``` branch</br>
- Create branches from ```develop``` often. Branches are cheap and can be easily discarded</br>
    when you get yourself in trouble!</br>
- Commit changes frequently</br>
- As you create releasable units of code, employ [semantic versioning](https://semver.org/)</br>

## Python Virtual Environment
For the Python code I use a virtual environment to isolate the installed packages,
and allow for a clean upload to Heroku.</br>
(I added the venv/ directory to .gitignore so you'll need to create your virtual environment
afrwr cloning this project)</br>

Create virtual environment (in the ./venv directory)</br>
**Make sure your are in the project root directory in your terminal**</br>
```python -m venv ./venv```</br>
Activate virtual environment</br>
**Make sure your are in the project root directory in your terminal**</br>
```. venv/Scripts/activate```</br>
*You know this is working when you see a ```(venv)``` flag in your terminal*

## Python pip installs
I use a pre-set list of installed pip packages in my Python environment so we 
get the same packages and versions in this virtual environment.
The list is held in ```requirements.txt```

To get a current list of installed packages.</br>
**First make sure you are in a virtual environment**</br>
**Make sure your are in the project root directory in your terminal**</br>
```pip freeze > requirements.txt```
