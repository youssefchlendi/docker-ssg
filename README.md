# SSG + Docker

This project was developed using nuxt to generate a static site and docker to containerize the application.

## How to run the project

Before running the project, we need to build all the necessary images. To do this, run the following command:

```bash
docker-compose build
# OR
docker compose build
```

After building the images, we can :

### 1. Run the project in development mode

To run the project in development mode, run the following command:

```bash
docker-compose up dev
# OR
docker compose up dev
```

With this command, the application will be available at http://localhost:8000 and the changes made in the code will be automatically updated (hot reload).

### 2. Build the project

To build the project, run the following command:

```bash
docker-compose up build
# OR
docker compose up build
```

With this command, the application will be built and the static files will be available in the `output` folder.

### 3. Run the project in production mode

To run the project in production mode, run the following command:

```bash
docker-compose up run
# OR
docker compose up run
```

this command will run the built application in production mode, making it available at http://localhost:88.
