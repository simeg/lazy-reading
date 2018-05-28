.PHONY: build deploy lint serve test

build:
	./node_modules/.bin/react-scripts build

deploy: lint test build
	git push heroku master

lint:
	./node_modules/.bin/prettier "src/**/*.js" --write

serve:
	./node_modules/.bin/react-scripts start

test:
	./node_modules/.bin/react-scripts test
