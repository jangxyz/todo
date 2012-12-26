TESTS = $(shell find test/ -name "*.test.js" -type f | sort)
REPORTER = dot

check: test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--require ./test/support/bootstrap.js \
		$(TESTS)

.PHONY: test
