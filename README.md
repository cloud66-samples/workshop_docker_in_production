# workshop_docker_in_production

run habitus: `$ habitus --host=unix://var/run/docker.sock --secrets=false` 
docker stats: `docker stats $(docker ps | awk '{if(NR>1) print $NF}')`