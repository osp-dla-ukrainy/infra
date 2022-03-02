#!make
include .env

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

deploy:
	docker stack deploy --compose-file docker-compose.yml osp
