#!make
include .env

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

deploy:
	docker stack deploy --compose-file docker-compose.yml osp

download-envs:
	node tools/download-envs

upload-envs:
	node tools/upload-envs
