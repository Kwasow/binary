---
sidebar_position: 11
title: "Styl"
---

## Lukier syntaktyczny

Lukrem syntaktycznym nazywamy skróty myślowe w programowaniu, które pozwalają
nam zapisać tę samą operację mniejszą liczbą znaków. W Pythonie najczęściej
będziemy korzystać ze skróconego zapisu operacji arytmetycznych:

```python showLineNumbers
x: int = 5
# Zapis:
x = x + 2
# Jest równoważny zapisowi:
x += 2

# Podobnie oba poniższe zapisy są równoważne:
x = x * 2
x *= 2

# Również analogicznie:
x = x / 2
x /= 2
```

## Pusta przestrzeń

Pusta przestrzeń jest w programach bardzo ważna, ponieważ pomaga nam szybko
czytać kod i łatwiej znajdywać błędy. Poniżej znajduje się dłuższy fragment
kodu w Pythonie, zapisany zgodnie z zalecanym stylem:

```python showLineNumbers
def pobierz_liczbe() -> int:
  return int(input("Podaj liczbę:"))


def sum(a: int, b: int, c: int) -> int:
  return a + b + c


x: int = 5
y: int = 7
arr: list[int] = [5, 7]

arr.append(pobierz_liczbe())
suma = sum(arr[0], arr[1], arr[2])

if suma >= 20:
  print(f"Suma wynosi {suma}")
else:
  print("Suma jest mniejsza niż 20")
```

W powyższym programie warto zwrócić uwagę na następujące elementy:
- funkcje nazywamy małymi literami, a między słowami stosujemy podkreśliniki,
- między nazwą funkcji, a nawiasami nie zostawiamy spacji,
- argumenty funkcji oddzielamy spacją zarówno przy deklaracji jak i wywołaniu,
- dookoła strzałki przy definicji funkcji zostawiamy spacje,
- po definicji funkcji zostawiamy dwa puste wiersze,
- zmienne nazywamy małymi literami i dookoła znaku przypisania zostawiamy spacje,
- wołając funkcje klasowe (z kropką) nie zostawiamy spacji dookoła kropki,
- dookoła operatorów logicznych i arytmetycznych zostawiamy spacje.
