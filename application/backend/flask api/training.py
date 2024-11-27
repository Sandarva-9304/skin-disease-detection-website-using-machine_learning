import numpy as np
import cv2
import PIL
import os
import pathlib
import tensorflow as tf
# from tensorflow import keras
import tf_keras
import tensorflow_hub as hub 
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings("ignore")



base_dir = os.path.abspath('../dermanext/application')  # Assuming the dataset is in the parent directory
train_dataset_url = os.path.join(base_dir, 'skin-disease-dataset', 'train_set')

os.listdir(train_dataset_url)




data_dir=pathlib.Path(train_dataset_url)
data_dir

cellulitis=list(data_dir.glob('BA- cellulitis/*'))
len(cellulitis)

FU_athlete_foot=list(data_dir.glob('FU-athlete-foot/*'))
len(FU_athlete_foot)

VI_chickenpoxt=list(data_dir.glob('VI-chickenpox/*'))
len(VI_chickenpoxt)

VI_shingles=list(data_dir.glob('VI-shingles/*'))
len(VI_shingles)

FU_nail_fungus=list(data_dir.glob('FU-nail-fungus/*'))
len(FU_nail_fungus)

BA_impetigo=list(data_dir.glob('BA-impetigo/*'))
len(BA_impetigo)

FU_ringworm=list(data_dir.glob('FU-ringworm/*'))
len(FU_ringworm)

PA_cutaneous_larva_migrans=list(data_dir.glob('PA-cutaneous-larva-migrans/*'))
len(PA_cutaneous_larva_migrans)

PIL.Image.open(str(cellulitis[6]))

PIL.Image.open(str(cellulitis[16]))

PIL.Image.open(str(BA_impetigo[16]))

PIL.Image.open(str(FU_ringworm[4]))

PIL.Image.open(str(FU_athlete_foot[16]))

cv2.imread(str( cellulitis[0])).shape[2]

disease_images_train_dic={
    'cellulitis':list(data_dir.glob('BA- cellulitis/*')),
    'impetigo':list(data_dir.glob('BA-impetigo/*')),
    'athlete-foot':list(data_dir.glob('FU-athlete-foot/*')),
    'nail-fungus':list(data_dir.glob('FU-nail-fungus/*')),
    'ringworm':list(data_dir.glob('FU-ringworm/*')),
    'cutaneous-larva-migrans':list(data_dir.glob('PA-cutaneous-larva-migrans/*')),
    'chickenpox':list(data_dir.glob('VI-chickenpox/*')),
    'shingles':list(data_dir.glob('VI-shingles/*')),
#     'normal':list(data_dir.glob('normal/*')),   
}

disease_train_label_dic={
    'cellulitis': 0,
    'impetigo': 1,
    'athlete-foot': 2,
    'nail-fungus': 3,
    'ringworm': 4,
    'cutaneous-larva-migrans':5,
    'chickenpox':6,
    'shingles':7,
#     'normal':8,
}

x_train = []
y_train = []

for image_name, image_paths in disease_images_train_dic.items():
    for image_path in image_paths:
        img = cv2.imread(str(image_path))
        if img is None:
            continue
        image_resize=cv2.resize(img,(224,224))
        x_train.append(image_resize)
        y_train.append(disease_train_label_dic[image_name])

x_train[0].shape

len(disease_images_train_dic['ringworm']),len(disease_images_train_dic['shingles'])

len(x_train)

len(y_train)

y_train=np.array(y_train)
x_train=np.array(x_train)
y_train.shape

test_dataset_url= os.path.join(base_dir, 'skin-disease-dataset', 'test_set')

data_dir=pathlib.Path(test_dataset_url)
data_dir

disease_images_test_dic={
    'cellulitis':list(data_dir.glob('BA- cellulitis/*')),
    'impetigo':list(data_dir.glob('BA-impetigo/*')),
    'athlete-foot':list(data_dir.glob('FU-athlete-foot/*')),
    'nail-fungus':list(data_dir.glob('FU-nail-fungus/*')),
    'ringworm':list(data_dir.glob('FU-ringworm/*')),
    'cutaneous-larva-migrans':list(data_dir.glob('PA-cutaneous-larva-migrans/*')),
    'chickenpox':list(data_dir.glob('VI-chickenpox/*')),
    'shingles':list(data_dir.glob('VI-shingles/*')),
#     'normal':list(data_dir.glob('test_set/normal/*')),   
}
disease_test_label_dic={
    'cellulitis': 0,
    'impetigo': 1,
    'athlete-foot': 2,
    'nail-fungus': 3,
    'ringworm': 4,
    'cutaneous-larva-migrans':5,
    'chickenpox':6,
    'shingles':7,
#     'normal':8,
}

x_test = []
y_test = []

for image_name, image_paths in disease_images_test_dic.items():
    for image_path in image_paths:
        img = cv2.imread(str(image_path))
        if img is None:
            continue
        image_resize=cv2.resize(img,(224,224))
        x_test.append(image_resize)
        y_test.append(disease_test_label_dic[image_name])

x_train=np.array(x_train)
y_train=np.array(y_train)
x_test=np.array(x_test)
y_test=np.array(y_test)

x_test.shape

x_train_scaled=x_train/255
x_test_scaled=x_test/255

x_train_scaled[0]



# Correct URL from TensorFlow Hub
feature_extractor_url = "https://tfhub.dev/google/tf2-preview/mobilenet_v2/feature_vector/4"

feature_extractor_layer = hub.KerasLayer(feature_extractor_url,
                                         input_shape=(224, 224, 3),
                                         trainable=False)


x_train_scaled.shape

model = tf_keras.Sequential([
    feature_extractor_layer,
    tf_keras.layers.Dense(8, activation='softmax')]  # KerasLayer from tensorflow_hub
      # Output layer for classification (adjust '8' based on the number of classes)
)


model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

model.fit(x_train_scaled,y_train,epochs=15)

x_test_scaled.shape

model.evaluate(x_test_scaled,y_test)

y_predict=model.predict(x_test_scaled)
# y_predict[0]
y_predicted_labels=[]
for i in y_predict:
    y_predicted_labels.append(np.argmax(i))
    
y_predicted_labels=np.array(y_predicted_labels)

print("Classification Report: \n", classification_report(y_test, y_predicted_labels))

confusion_matrix=tf.math.confusion_matrix(labels=y_test,predictions=y_predicted_labels)
confusion_matrix


plt.figure(figsize=(10, 7))
sns.heatmap(confusion_matrix, annot=True, fmt='d')

plt.xlabel('Predicted')
plt.ylabel('Truth')
plt.show()

model.save(os.path.join(base_dir, 'backend'))



