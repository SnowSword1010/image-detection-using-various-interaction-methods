from flask import Flask
from flask import request
from flask import jsonify
import cv2
import numpy as np
import time

app = Flask(__name__)


@app.route('/script1', methods=['POST'])
def script1():
    if(request.method == 'POST'):
        print('post app')
        req = request.json
        name = req['name']
        threshold = req['slider']
        accent = req['accent']
        print(name)
        print(threshold)
        print(accent)
        

    # PANDA
    return jsonify(status="200")


@app.route('/script2', methods=['POST'])
def script2():
    if(request.method == 'POST'):

        # SHEFFY

        return jsonify(status="200")
