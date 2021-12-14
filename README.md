# Instrukcja

# Zadanie 2 #
![alt text](https://github.com/Penxulidao/Pwcho2/blob/main/pics/Dockerfile.png "Dockerfile")

Dockerfile.
# Zadanie 3 #
## a. docker build -f Dockerfile -t local . ##


Budowanie obrazu za pomocą Dockerfile.
## b. docker run -p 2300:1600 -d --rm --name Projekt local ##


Uruchom obraz lokalny w kontenerze o nazwie Project, 2300 to port hosta, 1600 to port kontenera.
## c. docker logs Projekt ##


Logi z kontenera.
## d. docker image inspect local | jq ".[] .RootFS" ##


Sprawdź informacje o liczbie warstw.
# Zadanie 4 #
1. Aby zbudować obraz za pomocą linku GitHub, należy w terminalu wpisać polecenie: docker build urlRepositoryGitHub.
2. Aby przenieść utworzony obraz do DockerHub, należy w terminalu wprowadzić polecenie: 
  
  $ docker login
  
  $ docker build -t <your_username>/my-dockerhub-repo .
  
  $ docker push <your_username>/my-dockerhub-repo
