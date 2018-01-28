
build: node_modules
	rm -rf dist
	npm run build
	cp -r public/{img,favicon,styles,scripts,fonts} dist/

node_modules:
	npm install
