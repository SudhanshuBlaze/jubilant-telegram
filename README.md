# Mission 1

## Step 1

- enabled Compute Engine API, Vertex AI API, Container Registry API
- created new notebook instance. Enviroment: **TensorFlow:2.6**

## Step 2: putting the training code in a Docker container

- created a directory "mpg"
- created Dockerfile in the "mpg" directory
- created a cloud storage bucket

```bash
BUCKET_NAME="gs://${PROJECT_ID}-bucket"
gsutil mb -l us-central1 $BUCKET_NAME
```

- Added model training code in "./trainer/train.py"
- Built and ran the container within the notebook instance to ensure it's working correctly

```bash
docker build ./ -t $IMAGE_URI
docker run $IMAGE_URI
```

- pushed the container to Google Container Registry

```bash
docker push $IMAGE_URI
```

<img src="./Output%20Images/Push%20To%20Google%20Container%20Registry.png">

## Step 3: trained the custom model on Vetex AI

- Used Custom training method
- Used custom container and selected "gcr.io/dps-custom-ai-model/mpg" container image
- Machine type used: **n1-standard-4, 4 vCPUs, 15 GiB memory**

  <img src="./Output%20Images/Training%20the%20Custom%20model.png">

## Step 4: Deployed the model to Endpoint

<img src="./Output%20Images/Deployment%20to%20Endpoint.png">

## Step 5: Prediction

- Install Vertex AI SDK

```python
!pip3 install google-cloud-aiplatform --upgrade --user
```

- **created a reference to the deployed endpoint**

  <img src="./Output%20Images/EndPoint%20Ref.png">

- **Prediction: used the endpoint for prediction**
- used "test_mpg" provided in the challenge for prediction
  <img src="./Output%20Images/Prediction.png">
- **Predicted MPG: 19.1825542**

# Mission 2

- pushed the code files to this git repository

# Mission 3

- installed **hotpTotpGenerator** npm package
- generated auth key based on the provided arguments
- used **POSTMAN** to do POST request to the provided url
