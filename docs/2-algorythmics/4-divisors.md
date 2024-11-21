---
sidebar_position: 5
title: "Podzielność liczb"
---

Dzielnikiem liczby nazywamy każdą liczbę naturalną nieujemną, która dzieli daną
liczbę całkowicie, to znaczy bez reszty. Liczba pierwsza to taka, która ma
dokładnie dwa dzielniki - 1 oraz siebie samą.

## Wyznaczanie dzielników liczby

Naturalnym algorytmem wyznaczania dzielników liczby, jest sprawdzenie podzielności
przez każdą liczbę po kolei. W Pythonie moglibyśmy to zaimplementować w
następujący sposób:

```python showLineNumbers
def dzielniki(n: int) -> list[int]:
  wynik: list[int] = []

  for i in range(1, n + 1):
    if n % i == 0:
      wynik.append(i)

  return wynik
```

Ważne jest, żeby pamiętać o górnym ograniczeniu `range`, czyli `n + 1`, bo
chcemy do listy dodać także samą liczbę.

Powyższy algorytm działa w czasie liniowym, co oznacza, że jest dosyć kosztowny.
Możemy jednak wykonać optymalizację, która pozwoli nam go znacząco przyspieszyć.
Przyjrzyjmy się poniższej liczbie dzielników liczby 24:

```
  |‾‾‾‾‾‾‾‾‾‾|
  |          |
  |   |‾|    |
1 2 3 4 6 8 12 24
|   |     |     |
|   |_____|     |
|_______________|
```

Zauważmy, że każdy dzielnik ma swoją odwrotność, czyli liczbę przez jaką należy
go pomnożyć, aby otrzymać dzieloną liczbę `n`. Możemy wykorzystać tę obserwację
i szukać dzielników nie w przedziale od `1` do `n`, ale w przedziale od `1` do
`√n`, ponieważ największą możliwą parą dzielnik-odwrotność będzie pierwiastek z
liczby (zachęcam do przeanalizowania dzielników dowolnego kwadratu liczby
naturalnej). Wtedy algorytm będzie wyglądał następująco:

```python showLineNumbers
import math

def dzielniki(n: int) -> list[int]:
  wynik: list[int] = []

  for i in range(1, math.ceil(math.sqrt(n))):
    if n % i == 0:
      wynik.append(i)
      wynik.append(n // i)

  return wynik
```

Zwróćmy uwagę na konieczność zaimportowania biblioteki `math` oraz skorzystania
z funkcji `math.ceil()` (sufit), ponieważ wynikiem funkcji `math.sqrt()` jest
liczba zmiennoprzecinkowa, a `range()` wymaga liczby całkowitej.

Pamiętajmy też, że w tym przypadku dzielniki w liście wynikowej nie są posortowane
w kolejności rosnącej.

## Rozkład liczby na czynniki

Algorytm rozkładu liczby na czynniki jest bardzo podobny do wyznaczania jej
dzielników i zawiera tylko jedną drobną modyfikację:

```python showLineNumbers
def czynniki(n: int) -> list[int]:
  wynik: list[int] = []

  for i in range(2, n + 1):
    while n % i == 0:
      wynik.append(i)
      n = n // i

  return wynik
```

Zwróćmy uwagę, że w przeciwieństwie do wyznaczania dzielników liczby, dzielimy
liczbę `n` przez znalezione dzielniki. Dodatkowo dzielimy przez dany dzielnik
możliwie najwięcej razy (przy pomocy pętli `while`), co daje nam zapewnienie, że
każdy znaleziony czynnik jest liczbą pierwszą. Należy też pamiętać, że musimy
zastosować dzielenie całkowite, co jest bezpieczne, ponieważ wcześniej sprawdzamy
czy reszta z dzielenia wynosi zero.

Jeśli nie chcemy, żeby czynniki się powtarzały, to możemy zamiast listy użyć
zbioru.

## Sprawdzanie pierwszości

:::warning

Należy pamiętać, że liczby 0 i 1 nie są liczbami pierwszymi.

:::

Sprawdzenie, czy dana liczba jest pierwsza jest uproszczeniem algorytmu
wyznaczania dzielników liczby. Jeśli mamy już wyznaczone dzielniki liczby, to
możemy z niej skorzystać i sprawdzić, czy zawiera ona dokładnie dwa elementy -
będą to `1` i liczba `n`. W przeciwnym wypadku najlepiej skorzystać z poniższego
algorytmu, który stosuje optymalizację opisaną w sekcji o
[wyznaczaniu dzielników](#wyznaczanie-dzielników-liczby):

```python showLineNumbers
import math

def czy_pierwsza(n: int) -> bool:
  # Nie sprawdzamy pierwszości dla liczb ujemnych oraz 0, 1
  if n < 2:
    return False

  for i in range(2, math.ceil(math.sqrt(n))):
    if n % i == 0:
      return False

  return True
```

Należy pamiętać, że w przypadku sprawdzania pierwszości iteracje pętli for
rozpoczynamy od `2`.
