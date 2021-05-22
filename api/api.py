import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_item():
    return {'time': time.time()}