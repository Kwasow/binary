---
sidebar_position: 3
title: "Budowa sieci"
---

Poniżej przedstawiono przykładowy model sieci. Pod modelem znajduje się opis
urządzeń znajdujących się w sieci i jej działania.

![Przykładowy model sieci](./img/network_diagram.svg)

## Urządzenia sieciowe

Do sieci podłączonych jest wiele różnych rodzajów urządzeń, ale możemy je
podzielić według rodzaju na kilka kategorii:

- router - urządzenie sieciowe służące do łączenia **różnych** sieci komputerowych
  (np. sieci domowej z siecią globalną),
- switch - (przełącznik sieciowy) jest urządzeniem sieciowym przekazującym
  pakiety między różnymi urządzeniami w **tej samej sieci**,
- serwer - komputer, który udostępnia pewne zasoby dla użytkowników internetu,
- urządzenie końcowe - np. komputer/telefon.

## Budowa sieci

Sieć internet jest tak właściwie zbudowana z wielu małych sieci, które komunikują
się między sobą. Przykładowo, budowę sieci można opisać następująco:

- sieci lokalne - takie jak sieć domowa czy szkolna, w których do jednego
  routera podłączonych jest wiele urządzeń końcowych, takich jak telefony czy
  komputery,
- podsieci - łączą wiele sieci lokalnych, albo wiele innych podsieci,
- dostawca internetu - podłączony bezpośrednio do IXP,
- punkty wymiany internetu (IXP).

Urządzenia sieciowe mogą należeć do więcej niż jednej sieci, tak jak w przypadku
routera na powyższym modelu. Router należy zarówno do sieci lokalnej (z której
pochodzi adres 192.168.1.1) jak i do pewnej sieci dostawcy internetu (w której
jego adresem jest 89.0.12.24). Jest to konieczne, jeśli urządzenie ma zapewniać
komunikację między dwoma różnymi sieciami.

## Komunikacja w sieci

Jak było wyjaśnione wcześniej, komunikacja w sieci odbywa się przy pomocy
adresów IP, jednak na co dzień nie mamy z nimi styczności i korzystamy raczej
z nazw serwisów takich jak https://google.com. Jest to możliwe dzięki systemowi
DNS (Domain Name Service), który tłumaczy nazwy czytelne dla użytkowników na
adresy IP.

Załóżmy, że w powyższym modelu sieci `Komputer 1` chce odwiedzić wyszukiwarkę
Google i w swojej przegladarce wpisał jej adres. Przeglądarka wysyła żądanie
do routera o to, jaki jest adres strony https://google.com. Router nie wie, jaki
jest adres, więc pyta o to dostawcy internetu. Dostawca internetu też tego nie
wie, więc wysyła zapytanie do serwera DNS (większość dostawców utrzymuje
własne serwery DNS). Następnie serwer DNS odpowiada dostawcy internetu, a potem
każdy po kolei dostaje odpowiedź na swoje zapytanie. Kiedy odpowiedź dotrze do
`Komputer 1`, to może on wysłać zapytanie już do prawidłowego serwera o adresie
203.0.113.10.

W praktyce zapytanie o adres IP danego serwera rzadko wymaga bezpośredniej
komunikacji z serwerem DNS, ponieważ większość urządzeń sieciowych utrzymuje
własną kopię danych z serwera DNS. Przykładowo, jeśli `Komputer 1` już kiedyś
dowiedział się, jaki jest adres witryny https://google.com, to zapamiętał go
sobie i przy kolejnym wejściu na stronę nie będzie musiał wysyłać zapytania.
Jeśli `Komputer 1` wchodził na stronę https://google.com, a następnie będzie
chciał to zrobić `Komputer 2`, to najprawdopodobniej informacja o adresie IP
tej witryny została zapamiętana w routerze.
