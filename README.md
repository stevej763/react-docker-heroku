Deployment commands

docker-compose deployment:

dev build: ```docker-compose -f docker-compose.dev.yml up -d --build```

prod build: ```docker-compose -f docker-compose.prod.yml up -d --build```

Heroku build guide:

build using buildx so you can define the platform (Mac m1 work around)

```docker buildx build -f Dockerfile.heroku --platform linux/amd64 -t <ImageName> .```

make sure the image tag points to the heroku repo:

```docker tag <image-name> registry.heroku.com/<app-name>/web```

push to heroku heroku push:

```docker push registry.heroku.com/<app-name>/web```

release update on Heroku:
```heroku container:release web --app <app-name>```
