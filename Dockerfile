#wybor bazowego obrau 
FROM node AS buildfirst
#dockerfile author
LABEL author="Yurii Shnyt"
#utworzenie katalogu /var/node
RUN mkdir -p /var/node
#ustawienie katalogu jako przestrzeni roboczej
WORKDIR /var/node
#dodanie katalogu src
ADD src ./
#wybor obrazu alpine
FROM node:alpine
#kopiowanie plikow do katalogu
COPY --from=buildfirst /var/node /var/node
#ustawienie katalogu jako workdir
WORKDIR /var/node
#ustawienie portu 1600
EXPOSE 1600
#uruchomienie
CMD ["node", "mojserwer.js"]