import express from 'express'; 
import fetch from'node-fetch'; 
const app = express(); 

var date_now = new Date().toLocaleString('pl-PL'); // Przypisanie aktualnej daty do zmiennej 
var port = 1600; // port nasluchiwania

function what_time(ip) 
{ 
      var time_zone = fetch(`http://ipapi.co/${ip}/timezone`); //odczytanie strefy czasowej za pomoca API 
      var ip_date = new Date().toLocaleString('pl-PL', {time_zone}); // odczytanie Daty
      return `${ip_date}`; // date result
} 

app.use((req, res) => { 
        var ip_date =  what_time(req.ip); 
        res.send(`<p>IP klienta: ${req.ip} \n </p><p>Data i czas klienta:  ${ip_date}</p>`); // Wyswietlenie IP i czasu na stronie
    }); 

console.log("Dzisiejsza data: " + date_now); // zapis day do logow
console.log("Autor: Yurii Shnyt"); // imie i nazwisko autora
console.log("Numer portu TCP: " + port); // zapis portow lo logow
app.listen(port, '0.0.0.0'); // listen
