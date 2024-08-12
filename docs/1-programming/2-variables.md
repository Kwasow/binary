---
sidebar_position: 3
title: Zmienne i operacje arytmetyczne
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

TODO

## Typy w Pythonie

Wiele języków programowania (np. Java, C, C++) wymagają podawania typu zmiennej,
tzn. zdefiniowania z góry typu wartości w niej przechowywanej przechowywanej, np.:

- liczba całkowita (*int* od angielskiego *integer*),
- liczba niecałkowita (*float* od angielskiego *floating point*),
- znak (*char* od angielskiego *character*),
- napis (*string*),
- lista, krotka i wiele innych.

W Pythonie nie trzeba podawać typu zmiennych, a co więcej, ich typ można zmieniać
w trakcie wykonywania programu. W pythonie poprawnym programem jest na przykład:

```python showLineNumbers
x = 12
y = "test"
y = x
z = x + y # `z` przyjmuje wartość 24
```

Taki kod nie jest możliwy do napisania np. w języku C++:

```cpp showLineNumbers
int x = 12;
std::string y = "test";
y = x; // Ta linijka spowoduje błąd, ponieważ typ `string` to co innego niż `int`
```

Możemy jednak (i nawet powinniśmy) dopisywać do zmiennych w Pythonie typy. Nie
spowoduje to błędu w trakcie wykonywania programu, tak jak w C++ i operacja
przypisania wartości niewłaściwego typu na zmienną nadal się powiedzie, jednak
nasze środowisko programistyczne (np. PyCharm) poinformuje nas o błędnym
przypisaniu. Pomoże to też podpowiadać środowisku odpowiednie funkcje, które
dostępne są tylko dla niektórych typów (o funkcjach będzie później mowa
[tutaj](./6-functions.md)).

W przypadku zmiennych, typy można dopisać w Pythonie po dwukropku:

```python showLineNumbers
x: int = 5
y: int = 3
z: int = 5 + 3
```

## Dostępne typy

Python posiada bardzo wiele wbudowanych typów, jak również możliwość tworzenia
własnych. Znajdująca się poniżej lista typów nie jest wyczerpująca, ale powinna
w zupełności wystarczyć na poziomie matury z informatyki.

### Napisy

Napisy są w Pythonie reprezentowane przez typ `str`. Do poszczególnych znaków
napisu możemy dostać się tak samo jak do elementów listy (więcej o listach
poniżej):

```python showLineNumbers
napis: str = "Ala ma kota"

znak1: str = napis[0]  # Wynikiem będzie "A"
znak2: str = napis[-2] # Wynikiem będzie "t"

ciag: str = napis[:3]  # Wynikiem będzie "Ala"
```

Warto też znać funkcję `split()`, którą można wykonać na napisie. Funkcja
`split()` ma jeden opcjonalny argument, który oznacza znak, na którym ma zostać
podzielony napis - domyślnie jest to każdy biały znak (spacja, tabulator).
Wynikiem funkcji split jest lista napisów:

```python showLineNumbers
napis: str = "Ala ma kota"

podzielony1: list[str] = napis.split()
# Zmienna podzielony1 przyjmuje wartość:
# ["Ala", "ma", "kota"]

podzielony2: list[str] = napis.split("a")
# Zmienna podzielony2 przyjmuje wartość:
# ["Al", " m", " kot", ""]
```

Na napisach można też wykonywać niektóre operacje "arytemtyczne", na przykład:

```python showLineNumbers
napis1: str = "test "
napis2: str = "dodawania"

# To spowoduje wypisanie: "test dodawania"
print(napis1 + napis2)

# To spowoduje wypisanie: "test test test test "
print(napis1 * 4)
```

### Liczby

Większość języków programowania dzieli liczby na dwie grupy:
- liczby całkowite (ang. *integer*) - w Pythonie jest to typ `int`
- liczby zmienno przecinkowe (ang. *floating-point* albo *double precision*),
  czyli niecałkowite, posiadające część dziesiętną - w Pythonie jest to typ
  `float`

Na liczbach można wykonywać operacje, które zostały przedstawione wyżej, w
rozdziale o operacjach arytmetycznych. Dodatkowo warto wiedzieć, że istnieje
możliwość zamienienia liczby zapisanej w formie napisu, na jej faktyczną
wartość liczbową przy użyciu funkcji odpowiednio `float` oraz `int`. Pomoże to
zrozumieć poniższy przykład.

```python showLineNumbers
napis1: str = "5"
napis2: str = "5.0"

# Pomnóżmy teraz napisy przez 4 na dwa różne sposoby
print(napis1 * 4)        # Wynik: 5555
print(int(napis1) * 4)   # Wynik: 20

print(napis2 * 4)        # Wynik: 5.05.05.05.0
print(float(napis2) * 4) # Wynik: 20.0
```

Zobaczmy też, co stanie się, jeśli do funkcji `int()` podamy wartość, która nie
jest liczbą:

```python
print(int("to nie jest liczba!"))
```

Jeśli powyższe polecenie wykonaliśmy w interpreterze, to powinien wypisać się
błąd:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'to nie jest liczba'
```

Taki błąd w informatyce nazywamy wyjątkiem i więcej o wyjątkach pojawi się w
rozdziale [Wyjątki](./8-exceptions.md), a na razie wystarczy nam wiedzieć, że
oznacza to, że nasz program napotkał sytuację, z którą nie mógł sobie poradzić
(zamienienie zwykłego tekstu na liczbę) i przestał się wykonywać.

#### Niedokładność arytmetyki zmiennoprzecinkowej

Warto zaznaczyć przy tej okazji, że z powodu sposobu reprezentacji liczb
niecałkowitych w pamięci komputera, pojawiają się tu pewnie niedokładności.
Jeśli w pythonie wykonamy obliczenie `0.3-0.1`, to wynikiem będzie
`0.19999999999999998`. Więcej o powodach tej niedokładności będzie mowa później
([tutaj](../6-extras/1-floatingpoint-arithmetics.md)), ale warto pamiętać, że
takie zjawisko zachodzi i może wpływać na wyniki naszych obliczeń.

### Wartości logiczne


### Listy i krotki


### Zbiory i słowniki


<!-- stare
- `int` - liczba całkowita
- `float` - liczba zmiennoprzecinkowa
- `bool` - wartość logiczna (`True` lub `False`)
- `list`, `list[int]` - w pierwszym przypadku podajemy tylko typ jako lista, a w drugim
  precyzujemy, jakiego typu elementy znajdują się na liście (w tym przypadku
  są to liczby); w nawiasie kwadratowym można podać dowolny typ (również kolejną
  listę, jeśli chcemy mieć listy wielowymiarowe)
- `tuple`, `tuple[int, int]` - krotka, czyli np. para, trójka, albo więcej (drugi
  przypadek to sprecyzowanie, że to para liczb całkowitych - patrz lista)
- `str` - napis
- `set`, `set[int]` - matematyczny zbiór elementów, nie występują w nim duplikaty
- `dict`, `dict[int, str]` - słownik, czyli mapa wartości jednego typu w wartości
  drugiego (innego, lub takiego samego); można myśleć, że lista jest mapą z indeksów
  w wartości, więcej o tym typie będzie później
-->
