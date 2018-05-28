.PHONY: build deploy serve test

# TODO: lint target, put it in deploy (deploy: lint test build login)

build:
	./node_modules/.bin/react-scripts build

deploy: lint test build
	git push heroku master

lint:
	./node_modules/.bin/standard --fix "src/**/*.js"

serve:
	./node_modules/.bin/react-scripts start

test:
	./node_modules/.bin/react-scripts test
