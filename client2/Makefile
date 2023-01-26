build-dev:
	docker build -t react-appli .

build-local:
	docker build \
	-t react-app-production:local \
	--build-arg CADDYFILE=Caddyfile.local \
	--build-arg BASE_URL=http://localhost:5000/api \
	-f dockerfile.production . 

build-production:
	docker build 
	\-t react-app-production:production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=https://mern.mysuperawesomesite.com/api \
	-f dockerfile.production .

	