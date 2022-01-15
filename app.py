# Import the packages you need to run the app!
from flask import Flask, render_template
import random

# Create the Flask app
app = Flask(__name__)

# Create the index page
@app.route('/')
def home():
    return render_template('index.html')


'''
Run the app from the command line.
NOTE: I was having issues with caching and not seeing my latest code, so I open the html page on a random port
'''
if __name__ == '__main__':
    app.run(debug=True, port=random.randint(4000, 5000))
