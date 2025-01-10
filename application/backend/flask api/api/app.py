from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import cv2
import numpy as np
# import tensorflow as tf
import tf_keras
import tensorflow_hub as hub
# from PIL import Image

# Initialize Flask app and enable CORS
app = Flask(__name__)
# CORS(app, resources={r"/": {"origins": ""}}, supports_credentials=True)
# CORS(app)
CORS(app, resources={r"/predict": {"origins": "https://derma-diagnosis.vercel.app"}})
# CORS(app,origins=["https://derma-diagnosis.vercel.app"])

# Load the pre-trained model once when the app starts
MODEL_PATH = os.getenv("MODEL_PATH", "../model.h5")  # Default to "model.h5" if not set
UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "../uploads")  # Update this path to where your saved model is
model = tf_keras.models.load_model(
       (MODEL_PATH),
       custom_objects={'KerasLayer': hub.KerasLayer}
)

# Define a function to preprocess the uploaded image
def load_and_preprocess_image(image_path):
    img = cv2.imread(image_path)  # Load the image
    img_resized = cv2.resize(img, (224, 224))  # Resize to 224x224 as required by the model
    img_scaled = img_resized / 255.0  # Scale pixel values to [0, 1]
    return np.expand_dims(img_scaled, axis=0)  # Add a batch dimension: (1, 224, 224, 3)

# Route to handle image uploads and prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        # Save the uploaded image file temporarily
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)

        # Preprocess the image and make a prediction
        img_for_prediction = load_and_preprocess_image(filepath)
        predicted_probabilities = model.predict(img_for_prediction)

        # Get the predicted class label
        predicted_class = np.argmax(predicted_probabilities)

        # Mapping class indices back to disease names
        label_to_disease = {
            0: 'Cellulitis', 1: 'Impetigo', 2: 'Athlete-Foot', 3: 'Nail-Fungus',
            4: 'Ringworm', 5: 'Cutaneous-Larva-Migrans', 6: 'Chickenpox', 7: 'Shingles'
        }

        predicted_disease = label_to_disease[predicted_class]
        confidence = round(np.max(predicted_probabilities) * 100, 2)

        # Return the result as JSON
        return jsonify({"disease": predicted_disease, "confidence": confidence})
    
# def add_cors_headers(response):
#     response.headers["Access-Control-Allow-Origin"] = "https://derma-diagnosis.vercel.app"
#     response.headers["Access-Control-Allow-Methods"] = "POST,OPTIONS"
#     response.headers["Access-Control-Allow-Headers"] = "Content-Type"
#     return response

if __name__ == '__main__':
    # Ensure 'uploads' directory exists to save uploaded files
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    # port = int(os.getenv("PORT", 5000))
    # app.run(host="0.0.0.0", port=port, debug=False)
    app.run(debug=True)