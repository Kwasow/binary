---
sidebar_position: 3
title: Zmienne i operacje
---

## Zmienne

Koncepcja zmiennych z pewnością znana jest nam chociażby z lekcji matematyki i
warto myśleć o nich w podobny sposób. Spójrzmy na przykładowy program w
języku Python:

```python showLineNumbers
x = 3
y = 5
z = x + y
```

Nie trudno domyślić się, co robią te trzy linijki:

- w 1. przypisujemy na zmienną o nazwie `x` wartość 3
- w 2. przypisujemy na zmienną o nazwie `y` wartość 5
- w 3. przypisujemy na zmienną o nazwie `z` sumę wartości zapisanych w zmiennych
  `x` i `y`, czyli 8

Zmienne w Pythonie mogą mieć dowolne nazwy, które spełniają poniższe kryteria:

- składa się tylko ze znaków `a-z`, `A-Z`, `0-9` i `_`
- nie zaczyna się od cyfry

Wartość zmiennej w Pythonie można oczywiście nadpisać zarówno ustaloną wcześniej
wartością, jak i wartością innej zmiennej:

```python showLineNumbers
x = 3
y = 5
x = y
z = x + y
```
W powyższym przykładzie `x` przyjmuje w trzeciej linijce wartość 5, a następnie
`z` przyjmuje wartość 10.

## Operacje arytmetyczne

W prawie każdym języku programowania dostępne są wszystkie standardowe operacje
arytmetyczne. W Pythonie dostępne mamy następujące operacje:

:::tip

W tym przykładzie poraz pierwszy pojawiają się komentarze w kodzie. Każda
linijka, która rozpoczyna się od symbolu `#` jest ignorowana w trakcie
wykonywania programu, więc możemy w niej zapisać dowolny komentarz.

Komentarze nie muszą się zaczynać od początku linijki (tak jak poniżej), ale
nie da się ich zakończyć wcześniej niż na końcu linijki.

:::

```python showLineNumbers
# Dodawanie:
y = 3 + 5    # Wynikiem będzie 8

# Odejmowanie
y = 3 - 5    # Wynikiem będzie -2

# Mnożenie
y = 3 * 5    # Wynikiem będzie 15

# Dzielenie
y = 3 / 5    # Wynikiem będzie 0.6

# Dzielenie całkowite
y = 15 // 4  # Wynikiem będzie 3

# Dzielenie modulo
y = 13 % 4   # Wynikiem będzie 1

# Potęgowanie
y = 2**5     # Wynikiem będzie 32
```
Dostępna jest też operacja pierwiastkowania, ale o niej będzie mowa później.
Większość problemów można rozwiązać bez użycia operacji pierwiastkowania.

Każdą z powyższych operacji można też wykonywać na zmiennych, które przechowują
wartości liczbowe, tak jak to było pokazane w przykładzie pierwszym.

## Operacje logiczne

Oprócz wykonywania obliczeń, będziemy też często w naszych programach chcieli
sprawdzić czy wynik spełnia jakiś warunek i warunkowo wykonywać pewne akcje
(więcej w rozdziale o [instrukcjach warunkowych](./5-conditional-statements.md)).

Z matematyki dobrze znane są nam operatory logiczne, takie jak `and (i)` czy
`or (lub)`, ale także operatory `=`, `<` i `>`. W programowaniu wszystkie te
operatory zwracają wartość `True` albo `False`. Żeby lepiej to zrozumieć,
spójrzmy na poniższy przykład:

```python showLineNumbers
a = 5
b = 12
c = 13

czyPitagoras = (a**2 + b**2) == c**2    # Wynik: True
aMniejszeC = a < c                      # Wynik: True
cMniejszeRówneA = c <= a                # Wynik: False
czyPosortowane = (a < b) and (b < c)    # Wynik: True
```

Najpierw definiujemy trzy zmienne `a`, `b` i `c` o wartościach odpowiednio 5, 12
i 13. Następnie wykonujemy pewne sprawdzenia dotyczące tych zmiennych i zapisujemy
wyniki tych sprawdzeń:

- `czyPitagoras` - w linijce 5 obliczamy dwie wartości (zobaczyć to pomagają
  nam nawiasy, ale nie są one konieczne), a następnie sprawdzamy czy wyniki
  obu obliczeń są takie same; zwróćmy szczególną uwagę na fakt, że równość
  sprawdzamy podówjnym znakiem `=` - wynika to z tego, że znak `=` oznacza już
  przypisanie wartości do zmiennej
- `aMniejszeC` - w linijce 6 porównujemy dwie zmienne i sprawdzamy czy `a` jest
  mniejsze od `c`
- `cMniejszeA` - w linijce 7 korzystamy z operatora "mniejszy lub równy" do
  porównania dwóch zmiennych - analogicznie możemy skorzystać z operatora `>=`
- `czyPosortowane` - linijka 8 pokazuje jak możemy skorzystać z operatora
  logicznego `and` - nawiasy w tym przypadku nie są konieczne, ale pomagają nam
  zobaczyć w jaki sposób wykonywane jest sprawdzenie - najpierw zostanie
  obliczona wartość `a < b`, co da wynik `True`, następnie `b < c`, co również
  daje wynik `True`, a na koniec operacja `(True) and (True)`, która również da
  wynik `True`

Warto jeszcze zwrócić uwagę, że operator `and` jest silniejszy (ważniejszy) od
operatora `or`, co ilustruje poniższy przykład:

```python showLineNumbers
# Taki zapis:
x1 = 7 < 5 and 6 < 5 or 10 < 20       # Wynik: True
# Jest równoważny z napisaniem:
x2 = (7 < 5 and 6 < 5) or (10 < 20)   # Wynik: True
# Ale jest czym innym niż:
y = (7 < 5) and (6 < 5 or 10 < 20)    # Wynik: False
```

Ostatnim operatorem logicznym jest `not`, który odwraca wynik pozostałych
operacji:

```python showLineNumbers
x1 = 1 < 2        # Wynik: True
x2 = not (1 < 2)  # Wynik: False
```
