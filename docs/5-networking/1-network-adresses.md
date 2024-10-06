---
sidebar_position: 2
title: "Adresy sieciowe"
---

Komunikacja w sieci Internet ma charakter warstwowy i na każdej z warstw
zdefiniowane są protokoły, zgodnie z którymi odbywa się komunikacja. Na etapie
matury wystarczy nam wiedzieć, że urządzenia w sieci mogą się ze sobą
komunikować, wysyłając do siebie pakiety. O pakietach można myśleć jak o
listach, ponieważ mają bardzo podobną charakterystykę. Każdy pakiet ma
określone:

- nadawcę,
- adresata,
- zawartość (czyli treść listu).

Skoro dla każdego pakietu musimy określić nadawcę i adresata, to potrzebujemy
sposobu na adresowanie urządzeń w sieci i to właśnie zdefiniowane jest w
protokole IP (ang. _Internet Protocol_).

## Adresowanie IP

Popularniejszą wersją protokołu jest starsza wersja czwarta. W tej wersji każde
urządzenie w sieci ma przypisany adres, który jest liczbą 32-bitową. Poniżej
podano ten sam adres IP zapisany na dwa sposoby:

- 192.168.0.10,
- 1100 0000 1010 1000 0000 0000 0000 1010.

Drugi zapis jest po prostu binarnym zapisem liczby 32-bitowej bez znaku, ale dla
ułatwienia adresy IP zapisujemy zwykle w pierwszy sposób, czyli jako ciąg
czterech liczb 8-bitowych oddzielonych kropkami. Każda z wartości między
kropkami może być liczbą z zakresu od 0 do 255.

W sieciach lokalnych (takich jak w domu, w pracy czy w szkole) adresy zwykle są
ograniczone do zakresów podanych poniżej:

- 10.0.0.0/8,
- 172.16.0.0/16,
- 192.168.0.0/24.

### Adres sieci

Wewnątrz jednej sieci (np. naszej sieci domowej) może znajdować się wiele
urządzeń, które są rozróżniane przez adresy IP. Potrzebny jest jednak mechanizm,
który pozwoli nam ustalić, które urządzenia są w tej samej sieci. Tym
mechanizmem jest maska sieciowa, która pozwala wyznaczyć adres sieci. Poniżej
znajdują się trzy adresy wraz z maską:

- 86.42.16.19/20,
- 86.42.17.1/20,
- 86.42.15.19/20.

W tym wypadku, maska została zapisana jako liczba całkowita po ukośniku. Liczba
po ukośniku oznacza, ile pierwszych bitów maski (która ma długość taką samą jak
adres IP, czyli 32-bity) jest ustawionych. Maskę 20 można więc zapisać na trzy
sposoby:

- /20,
- 1111 1111 1111 1111 1111 0000 0000 0000,
- 255.255.240.0.

W pierwszy przykładzie zapisaliśmy maskę jako liczbę całkowitą oznaczającą
liczbę ustawionych, początkowych bitów maski. W drugim przykładzie zapisaliśmy
32-bity, z których pierwsze 20 jest ustawionych. W trzecim przykładzie
zastosowaliśmy taką samą konwencję jak w przypadku adresów IP, czyli zapisaliśmy
maskę jako cztery liczby z zakresu 0-255 oddzielone kropkami. Zauważmy, że każda
z tych liczb reprezentuje 8 bitów maski.

Aby ustalić adres sieci, należy wykonać operację bitową `AND` adresu urządzenia
sieciowego i maski, co w uproszczeniu oznacza, że bierzemy pierwsze _n_ bitów
adresu, a resztę zerujemy. Sprawdźmy teraz dla poprzednio podanych przykładowych
adresów IP, jakie są adresy ich sieci:

- dla adresu 86.42.16.19/20 adres sieci to 86.42.16.0,
- dla adresu 86.42.17.1/20 adres sieci to 86.42.16.0,
- dla adresu 86.42.15.19/20 adres sieci to 86.42.0.0.

We wszystkich przykładowych adresach, dwie pierwsze liczby pozostają bez zmian
w adresie sieci, bo w sumie mają one 16 bitów, a maska ma ich 20. Potrzebujemy
jeszcze 4 bity z trzeciej części adresu, więc musimy zapisać liczbę dziesiętną
w systemie binarnym:

- dec(16) = bin(0001 0000) więc pierwsze cztery bity dają 16,
- dec(17) = bin(0001 0001) więc pierwsze cztery bity dają 16,
- dec(15) = bin(0000 1111) więc pierwsze cztery bity dają 0.

Ostatnią część adresu zerujemy.

W takim razie ustaliliśmy, że dwa pierwsze urządzeni znajdują się w tej samej
sieci, a ostatnie należy do innej sieci.

### Broadcast

Innym ważnym adresem w każdej sieci komputerowej jest adres broadcast (pol.
_rozgłoszeniowy_). Adres rozgłoszeniowy jest adresem największym w danej sieci i
wysłanie na niego dowolnego komunikatu spowoduje przesłanie go do wszystkich
urządzeń w sieci. Aby wyznaczyć adres rozgłoszeniowy, trzeba najpierw ustalić
jaki jest adres sieci, a następnie ustawić wszystkie bity, które nie należą do
adresu sieci.

Poniżej znajdują się przykłady wyznaczenia adresu broadcast dla różnych sieci:

1. Adres urządzenia: 192.168.0.10/24 -> Adres sieci: 192.168.0.0 -> Broadcast: 192.168.0.255
2. Adres urządzenia: 10.0.15.16/8 -> Adres sieci 10.0.0.0 -> Broadcast: 10.255.255.255
3. Adres urządzenia: 86.42.16.19/ 20 -> Adres sieci 86.42.16.0 -> Broadcast: 86.42.31.255

Zwróćmy szczególną uwagę na przykład trzeci. Ustawiamy wszystkie bity, które nie
należą do adresu sieci, więc w pierwszych dwóch liczbach nie zmieniamy nic,
w ostatniej ustawiamy wszystkie bity, a w trzeciej ustawiamy tylko dolną połowę
liczby, czyli w zapisie binarnym:

- bin(0001 0000) = dec(16) -> bin(0001 1111) = dec(31)

## Liczba urządzeń w sieci

Dla każdej sieci można łatwo obliczyć ile urządzeń maksymalnie może się w niej
znajdować. Wiemy, że maska mówi nam o tym, ile pierwszych bitów nie może się
zmienić, a to oznacza, że wszystkie pozostałe można zmieniać dowolnie. Jeśli
więc maska to 20, to urządzeń w sieci może być `2^(32-20) = 2^16`.

To nie jest niestety poprawny wynik, ponieważ należy pamiętać o dwóch rzeczach:

- adres sieci nie może być adresem urządzenia,
- adres rozgłoszeniowy jest adresem zarezerwowanym i również nie może zostać
  przydzielony żadnemu urządzeniu.

W takim razie w przypadku maski 20 maksymalną liczbą urządzeń w sieci będzie
`2^16 - 2`, bo musimy uwzględnić dwa adresy specjalne.

Jak łatwo zauważyć, w przypadku adresów 32-bitowych liczba wszystkich dostępnych
adresów to 2<sup>32</sup>, czyli 4,294,967,296 (4,3 miliarda), czyli zdecydowanie
za mało, jeśli weźmiemy pod uwagę fakt, że na świecie jest 8 miliardów ludzi,
większość z nich ma przynajmniej telefon, wielu z nich ma również komputer i
tablet, a do tego istnieją jeszcze serwery, inteligentne urządzenia i wiele
innych sprzętów podłączonych do internetu. Istnieje wiele rozwiązań tego
problemu, z których dwa najważniejsze przedstawiono poniżej.

### Adresowanie IPv6

Już w 1995 roku opracowana została kolejna wersja protokołu IP w wersji 6, która
rozwiązuje problem brakujących adresów IP poprzez zwiększenie rozmiary adresu
do 128-bitów. Ta liczba adresów jest wystarczająca i z całą pewnością się nie
wyczerpie, ponieważ pozwala na stworzenie większej liczby adresów niż liczba
atomów we wszechświecie (liczba atomów we wszechświecie to około 10<sup>80</sup>).

Niestety pomimo minięcia już prawie 30 lat od czasu opracowania standardu IPv6
jest on cały czas używany tylko w niewielkiej liczbie systemów. Nie mniej jednak
jego znajomość jest podstawą wiedzy o sieciach komputerowych.

Z racji tego, że adresy IPv6 są dużo dłuższe od IPv4 stosujemy zapis korzystający
z systemu szesnastkowego. Zapisujemy grupy po cztery cyfry oddzielone dwukropkami:

- 2001:0db8:0000:0000:0000:0000:1428:57ab.

Z racji tego, że w adresach IPv6 często występuje dużo zer, możemy zastosować
zapis skrócony, w którym albo skracamy części, które są zerami, albo zupełnie
je pomijamy:

- 2001:0db8:0:0:0:0:1428:57ab,
- 2001:0db8::1428:57ab.

Zwróćmy uwagę na podwójny dwukropek w drugim przykładzie.

### Network Address Translation

Z racji tego, że protokół IPv4 odpowiada za większość ruchu w internecie, istnieje
rozwiązanie pośrednie, które nazywamy NAT. W uproszczeniu jest to system, który
zapewnia, że adresy IP są unikalne tylko w obrębie jednego poziomu sieci (więcej
w rozdziale [nastepnym](./2-network-topology.md)) i routery na każdym etapie
utrzymują mapę adresów i przekazują pakiety do odpowiednich urządzeń.

Dla zainteresowanych, można przeczytać na
[Wikipedii](https://pl.wikipedia.org/wiki/Network_address_translation).

## Podsumowanie

**Adres IPv4**: 255.255.255.255 (32-bity)

**Adres IPv6**: ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff (128-bitów)

**Sposoby zapisy maski sieciowej**:

- /20,
- 1111 1111 1111 1111 1111 0000 0000 0000,
- 255.255.240.0.
