help:
	@egrep '^\S|^$$' Makefile

clean:
	rm -rf _site/
	rm -rf vendor

install: test-bundler
	bundle config --local path vendor/bundle
	bundle install

update: test-bundler
	bundle config --local path vendor/bundle
	bundle update

s serve: test-jekyll
	bundle exec jekyll serve --trace --livereload --drafts

serve-dev: test-jekyll serve

serve-prod: test-jekyll
	JEKYLL_ENV=production bundle exec jekyll serve --trace --livereload

build: test-jekyll
	JEKYLL_ENV=production bundle exec jekyll build --trace

build-dev: test-jekyll 
	bundle exec jekyll build --drafts

build-prod: test-jekyll build

open:
	open http://localhost:4000/

BUNDLE_EXISTS := $(shell command -v bundle 2> /dev/null)
JEKYLL_EXISTS := $(shell command -v jekyll 2> /dev/null)

test-bundler:
ifndef BUNDLE_EXISTS
	$(error bundler is not installed. Run `gem install bundler`)
endif

test-jekyll:
ifndef JEKYLL_EXISTS
	$(error Jekyll is not installed. Run `make install`)
endif