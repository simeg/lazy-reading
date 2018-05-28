.PHONY: build deploy serve test

# TODO: lint target, put it in deploy (deploy: lint test build login)

build:
	./node_modules/.bin/react-scripts build

deploy: test build login
	heroku container:push web

login:
	heroku container:login

serve:
	./node_modules/.bin/react-scripts start

test:
	./node_modules/.bin/react-scripts test
