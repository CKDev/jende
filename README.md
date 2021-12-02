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