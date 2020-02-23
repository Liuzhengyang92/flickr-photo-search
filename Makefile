HOST = 13.210.121.201
KEY = flickr-app.pem
BUILD_PATH = ./build
REMOTE_STATIC_PATH = ubuntu@${HOST}:static

deploy:
	@echo -n "deploy..."
	@scp -i ./key/${KEY} ./build/index.html  ${REMOTE_STATIC_PATH}/
	@scp -i ./key/${KEY} ./build/static/js/*  ${REMOTE_STATIC_PATH}/js/
	@scp -i ./key/${KEY} ./build/static/css/*  ${REMOTE_STATIC_PATH}/css/
	# @scp -i ./key/${KEY} ./build/static/img/*  ${REMOTE_STATIC_PATH}/img/