BIN = ./node_modules/.bin

.PHONY: demo

demo:
	$(BIN)/jetpack ./demo --html='./index.html'
