# 🩺 Skin Disease Detection Application(Derma Diagnosis)

A full-stack application for skin disease detection using deep learning and modern web technologies. The project consists of a Flask-based API for model inference, an email server for notifications, and a Next.js frontend for user interaction.

---

## 🚀 Features

- 🌐 REST API built with Flask
- 🤖 TensorFlow/Keras model for skin disease classification
- 📂 Secure file upload handling
- 🔔 Node.js server sends result email notifications.
- 🖥️ Next.js + Tailwind CSS for a responsive UI.
- ⚡ Image preprocessing (OpenCV, NumPy)
- 🔗 Cross-Origin Resource Sharing (CORS) enabled for frontend integration
- 🐳 Docker support for containerized deployment
- ☁️ Deployable to Render, Hugging Face Spaces, PythonAnywhere, etc.

---

## 🏥 Diseases Covered

The model can classify the following conditions:

- Cellulitis
- Impetigo
- Athlete’s Foot
- Nail Fungus
- Ringworm
- Cutaneous Larva Migrans
- Chickenpox
- Shingles

---

## 📦 Tech Stack

- **Backend**: Flask + Flask-CORS
- **Frontend**: Next js(React)
- **ML/DL**: TensorFlow / Keras + TensorFlow Hub
- **Image Processing**: OpenCV, NumPy
- **Deployment**: Docker, Hugging Face Spaces, Vercel

---

## 🗂️ Project Structure

```
application/
├── backend/
│   ├── emailserver/         # Node.js email notification server
│   └── flask api/           # Flask API for ML inference
├── frontend/                # Next.js web application
└── skin-disease-dataset/    # Dataset for training/testing
```

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Python](https://www.python.org/) (v3.8+ recommended)
- [pip](https://pip.pypa.io/en/stable/)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for deployment)
- [Docker](https://www.docker.com/) (optional, for containerized backend)

---

## ⚡ Quick Start

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd application
```

---

### 2. Backend Setup

#### Flask API

```sh
cd backend/flask api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

- The Flask API will run on `http://localhost:5000`.

#### Email Server

```sh
cd ../emailserver
npm install
npm start
```

- The email server will run on `http://localhost:5000` (or as configured).

---

### 3. Frontend Setup

```sh
cd ../../frontend
npm install
npm run dev
```

- The frontend will run on `http://localhost:3000`.

---

## 🧪 Running the Model Training (Optional)

If you want to retrain the model:

```sh
cd backend/flask api
python training.py
```

---

## 📝 Environment Variables

- Configure API endpoints and email server URLs in the frontend and backend as needed.
- Add any required `.env` files for secrets and configuration.

---

## 📁 Dataset

- Place your training and test images in the `skin-disease-dataset/train_set` and `skin-disease-dataset/test_set` directories.

---

## 🐳 Docker (Optional)

To run the Flask API in Docker:

```sh
cd backend/flask api
docker build -t skin-disease-api .
docker run -p 5000:5000 skin-disease-api
```

---

## 📬 Contact

For questions or contributions, please open an issue or pull request.

---

👨‍💻 Author

Developed with ❤️ by Ankit Barik & Sandarva Podder 🧑‍💻

---

**Happy Coding! 🚀**
