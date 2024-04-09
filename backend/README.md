# Getting started with local configuration
- install all dependencies `npm install` && `npm install ts-node-dev@2.0.0`
- run the development server `npx ts-node-dev src/index.ts` this will run the index.ts file and watch for any changes in .ts files

# Getting started with Docker Image
- make sure you are in root directory of express application
- create a Docker image `docker build -f Dockerfile.dev -t express_app .`
- run the container using image `docker run --name <app-name> -p 8080:8080 express_app`
- replace the <app-name> with your desired container name