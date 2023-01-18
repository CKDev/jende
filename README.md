# Jende Solutions

## Deploying

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```
$ heroku login
```
Log in to Container Registry
You must have Docker set up locally to continue. You should see output when you run this command.

```
$ docker ps
```
Now you can sign into Container Registry.

```
$ heroku container:login
```
Push your Docker-based app
Build the Dockerfile in the current directory and push the Docker image.

```
$ heroku container:push web --app jende-solutions
```
Deploy the changes
Release the newly pushed images to deploy your app.

```
$ heroku container:release web --app jende-solutions
```

## Running Locally

The following assumes you can run `docker` via a command line. If not, install [Docker](https://docs.docker.com/get-docker/)

First, in a command line, build the container from the Dockerfile by running:
```
docker build -t jende .
```

Then, run the site on port 8080 (or a port of your choosing, just change anywhere it says "8080")
```
docker run --name jende -e PORT=8080 -p 8080:8080 jende
```

You can then find the site at [http://localhost:8080](http://localhost:8080) (change the port to match if different)

To stop the container, open a new terminal window and run (it may take up to 10 seconds before the container stops running):
```
docker stop jende
```

Note that changes made to any files will not be reflected immediately in any running container, since it must be re-built/re-run first.