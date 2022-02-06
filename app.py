# Import the packages you need to run the app!
from flask import Flask, render_template
import random

# Create the Flask app
app = Flask(__name__)


# Create the index page
@app.route('/')
def index():
    return render_template('index.html', page_title='Fun Coding Projects')


return render_template('index.html', page_title='Fun Coding Projects')


# Show a list of choices and a button to make a choice
@app.route('/choosy')
def choosy():
    choice_list = chooser.get_list()
    return render_template('choosy.html', page_title='Choosy', choice_list=choice_list)


# Choice has been made
@app.route('/choice_made')
def choice_made():
    choice = chooser.make_choice()
    return render_template('choice_made.html', page_title='Choosy - Choice Made', choice=choice)


# Page Not Found page
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', page_title='Page Not Found')


'''
Run the app from the command line.
NOTE: I was having issues with caching and not seeing my latest code, so I open the html page on a random port
'''
if __name__ == '__main__':
    app.run(debug=True, port=random.randint(4000, 5000))
