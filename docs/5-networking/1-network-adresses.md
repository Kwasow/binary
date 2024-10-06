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

# Adresowanie IP

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

## Maska sieci i broadcast

## Network Address Translation

## Adresowanie IPv6

