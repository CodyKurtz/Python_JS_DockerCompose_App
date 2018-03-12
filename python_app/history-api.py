# mongo.py

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'catDB'
app.config['MONGO_URI'] = 'mongodb://mongodb:27017/catDB'

mongo = PyMongo(app)


@app.route('/api/history', methods=['GET'])
def get_all_images():
  images = mongo.db.histories
  
  output = []
  for s in images.find():
    output.append({'url' : s['url'], 'id' : s['id'], 'source_url' : s['source_url']})
  return jsonify({'images' : output})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)