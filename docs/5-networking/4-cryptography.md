---
sidebar_position: 5
title: "Bezpieczeństwo i kryptografia"
---

Wyróżniamy dwa typy kryptografii:

- symetryczna – ten sam klucz jest znany odbiorcy i nadawcy, ten sam klucz służy
  do szyfrowania i rozszyfrowywania wiadomości,
- klucza publicznego (asymetryczna) – wszyscy znają klucz publiczny, który służy
  do szyfrowania wiadomości, ale tylko odbiorca zna klucz prywatny, który może
  wykorzystać do jej rozszyfrowania.

## Przykłady zastosowań

1. Alicja chce wysłać do Boba wiadomość, ale boi się, że ktoś ich podsłuchuje.
   Mogą do tego celu wykorzystać symetryczny szyfr cezara. Umawiają się wcześniej,
   o jaką wartość będą przestawiać litery i teraz każde z nich może zaszyfrować
   i odszyfrować każdą wiadomość.

2. Alicja chce wysłać do Boba wiadomość, ale boi się, że ktoś ich podsłuchuje. Nie
   mogą się też spotkać, żeby bezpiecznie ustalić zasady działania szyfru cezara.
   Alicja generuje parę kluczy publiczny-prywatny i to samo robi Bob. Każde z
   nich przesyła do drugiego swój klucz publiczny w formie niezaszyfrowanej.
   Teraz Alicja może użyć klucza publicznego Boba, żeby zaszyfrować wiadomość do
   niego. Rozszyfrować będzie ją mógł tylko Bob, który posiada klucz prywatny.

3. Alicja chce wysłać Bobowi podpisaną umowę, ale nie ma skanera, więc nie może
   jej podpisać fizycznie. Alicja wygenerowała wcześniej parę asymetrycznych
   kluczy prywatnych i umieściła klucz publiczny na swojej stronie internetowej.
   Może teraz podpisać dokument przy użyciu swojego klucza publicznego, a
   Bob będzie mógł pobrać klucz publiczny z jej strony i zweryfikować, że to
   faktycznie Alicja podpisała dokument.

### Podsumowanie

W przypadku szyfrowania, każdy może zaszyfrować wiadomość kluczem publicznym, ale
przeczytać ją może tylko adresat, który posiada odpowiedni klucz prywatny.

W przypadku podpisu cyfrowego, każdy może zweryfikować, czy podpis jest oryginalny,
wykorzystując do tego klucz publiczny, ale podpis może stworzyć tylko właściciel
klucza prywatnego.

## Przykłady kluczy

**Szyfr cezara** - kryptografia z kluczem symetrycznym, bo kluczem jest liczba,
o którą trzeba przesunąć znak w alfabecie, żeby otrzymać właściwą wiadomość. Ta
sama liczba jest używana przy szyfrowaniu i rozszyfrowywaniu wiadomości.

**Szyfr przestawieniowy** - kryptografia z kluczem symetrycznym, w ktorym
zamieniamy litery zgodnie z wcześniej ustaloną mapą z liter w litery. Ta sama
mapa służy do szyfrowania i rozszyfrowania wiadomości.

**Szyfr AES** - silne szyfrowanie z kluczem publicznym, które jest aktualnie
standardem jeśli chodzi o bezpieczne szyfrowanie danych.
