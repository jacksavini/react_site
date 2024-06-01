# Create a user-defined network
docker network create mynetwork

# Build the backend Docker image
docker build -t backend-image -f Dockerfile.backend .

# Build the frontend Docker image
docker build -t frontend-image -f Dockerfile.frontend .

# Run the backend container
docker run -d --name backend --network mynetwork -p 5002:5002 backend-image

# Run the frontend container
docker run -d --name frontend --network mynetwork -p 3000:80 frontend-image
