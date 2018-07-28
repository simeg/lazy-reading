.PHONY: all build ci deploy fmt lint serve test-ci test verify-deps

BINS=$(shell npm bin)

REACT_SCRIPTS=$(BINS)/react-scripts
PRETTIER=$(BINS)/prettier
YARN=$(shell which yarn)

build:
	$(REACT_SCRIPTS) build

ci: verify-deps lint test-ci build

deploy: ci
	git push heroku master

fmt:
	$(PRETTIER) "src/**/*.js" --write

lint:
	$(PRETTIER) --list-different "src/**/*.js"

serve:
	$(REACT_SCRIPTS) start

test-ci:
	CI=true $(REACT_SCRIPTS) test

test:
	$(REACT_SCRIPTS) test

verify-deps:
	$(YARN) check --integrity
