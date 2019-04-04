file:
	mkdir -p ./dist; \
	wget https://github.com/Activiti/Activiti/releases/download/activiti-6.0.0/activiti-6.0.0.zip -O ./dist/activiti-6.0.0.zip ; \
	cd ./dist; \
	unzip -o activiti-6.0.0.zip ; \

activiti:
	cd web; \
	cp ../dist/activiti-6.0.0/wars/*.war ./ ;\
	docker build -t activiti/web:latest .

build: file activiti

.PHONY: file activiti