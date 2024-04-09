# Getting Started 
- Clone the repository `git clone https://github.com/VivekSite/web3dev-todo-app-task.git`
- intall dependencies `npm install`
- run development server `npm start`

# Run Docker image for development/production
### Development
- Create a new Docker image `docker build -f Dockerfile.dev -t reactapp .`
- Run Container `docker run --name <container-name> -p 3000:3000 reactapp`

### Production
- Create a new Docker image `docker build -t reactapp .`
- Run `docker run --name <container-name> -p 3000:80 reactapp`
- replace the <container-name> with your desired container name.