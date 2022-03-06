#!make
include .env.devops

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env.devops))

deploy:
	docker stack deploy --compose-file docker-compose.yml osp

check-env:
ifndef ENV
	$(error ENV is undefined)
endif

download-envs: check-env
	ENV=$(ENV) node tools/download-envs

upload-envs: check-env
	ENV=$(ENV) node tools/upload-envs

move-envs: check-env
	ENV=$(ENV) cp ${ENV}/.env .env
