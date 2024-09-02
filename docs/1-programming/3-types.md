---
sidebar_position: 4
title: Typy
---

## Typy w Pythonie

Wiele języków programowania (np. Java, C, C++) wymagają podawania typu zmiennej,
tzn. zdefiniowania z góry typu wartości w niej przechowywanej, na przykład:

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
[tutaj](./7-functions.md)).

W przypadku zmiennych, typy można dopisać w Pythonie po dwukropku:

```python showLineNumbers
x: int = 5
y: int = 3
z: int = 5 + 3
```

## Typy proste

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

Napisy można także porównywać przy użyciu operatorów logicznych. Porównywanie
napisów odbywa się zgodnie z porządkiem leksykograficznym, czyli:
- napisy porównywane są znak po znaku,
- litery `A-Z` są przed `a-z`,
- litery pojawiające się w alfabecie wcześniej, są mneijsze, czyli `a` jest
  mniejsze od `b`.

Tak naprawdę napisy porównywane są zgodnie z kodem [ASCII](https://www.asciitable.com/).
Każdy znak (litera) ma przypisaną wartość liczbową i porównywanie napisów polega
na porównaniu wartości liczbowej każdego znaku po kolei.

### Liczby

Większość języków programowania dzieli liczby na dwie grupy:
- liczby całkowite (ang. *integer*) - w Pythonie jest to typ `int`
- liczby zmienno przecinkowe (ang. *floating-point* albo *double precision*),
  czyli niecałkowite, posiadające część dziesiętną - w Pythonie jest to typ
  `float`

Na liczbach można wykonywać operacje, które zostały przedstawione wyżej, w
rozdziale o operacjach arytmetycznych. Dodatkowo warto wiedzieć, że istnieje
możliwość zamienienia liczby zapisanej w formie napisu, na jej faktyczną
wartość liczbową przy użyciu funkcji odpowiednio `float()` oraz `int()`. Pomoże
to zrozumieć poniższy przykład:

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

O wartościach logicznych była już mowa w przypadku [operatorów logicznych](./2-variables.md).
Typ reprezentujący wartość logiczną nazywamy w Pythonie `bool` i może przyjąć
wartość `True` albo `False`.

Warto tutaj zaznaczyć, że inne typy można rzutować na typ `bool` (rzutować,
czyli w pewnym sensie zmieniać/konwertować ich typ). To, jak rzutowane są
wartości, możemy sprawdzić przy pomocy funkcji `bool()`:

```python showLineNumbers
# W przypadku liczb, zero jest interpretowane jako False, a wszystkie inne
# wartości jako True
print(bool(0))        # Wynik: False 
print(bool(1))        # Wynik: True
print(bool(-1))       # Wynik: True

# W przypadku napisów, puste napisy interpretowane są jako False, a wszystkie
# inne jako True:
print(bool(""))       # Wynik: False
print(bool("napis"))  # Wynik: True

# Podobnie listy:
print(bool([]))       # Wynik: False
print(bool([1]))      # Wynik: True
print(bool(["test"])) # Wynik: True
```

Warto o tym pamiętać, bo w programowaniu często wykorzystuje się takie rzutowanie.

### Listy

Listy w większości języków programowania mogą przechowywać dowolnie wiele
elementów, ale wszystkie elementy muszą być tego samego typu. Python nie ma
takiego wymagania, ale lepiej nie definiować list, które mają elementy różnych
typów, bo łatwo wtedy o błąd w programie.

Typ listy, jest pierwszym typem parametryzowanym, który poznamy. Typ parametryzowany,
to taki typ, który jako argument przyjmuje inny typ. W przypadku listy ten typ
będzie oznaczał, jakiego typu są elementy na liście. Spójrzmy na poniższy
przykład:

```python showLineNumbers
# Tutaj mówimy, że lista1 jest typu list, ale nie podajemy, jakiego typu są jej
# elementy, co jest dopuszczalne, ale lepiej ten typ podawać
lista1: list = [1, 2, 3, 4]

# Tutaj definiujemy kilka list, które definiują typ elementu, który zawierają
lista2: list[int] = [1, 2, 3, 4]
lista3: list[str] = ["napis1", "napis2"]
lista4: list[bool] = [True, False, False]

# Co więcej możemy stworzyć listę list:
lista5: list[list[int]] = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
```

Dostęp do elementów listy możemy uzyskać poprzez użycie nawiasów kwadratowych.
Listy we wszystkich popularnych językach programowania są indeksowane od zera,
co znaczy, że pierwszy element znajduje się pod indeksem 0:

```python showLineNumbers
lista: list[str] = ["pierwszy", "drugi", "trzeci"]

print(lista[0])  # Wynik: "pierwszy"
print(lista[1])  # Wynik: "drugi"
print(lista[2])  # Wynik: "trzeci"
```

Próba pobrania elementu o indeksie, który nie znajduje się na liście, zakończy
się błędem. Na przykład gdybyśmy w powyższym przykładzie wykonali polecenie
`print(lista[3])` w interpreterze, to powinien wypisać się błąd:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

Dozwolone jest natomiast korzystanie z indeksów ujemnych, które interpretowane
są jako liczba elementów licząc od końca listy:

```python showLineNumbers
lista: list[str] = ["pierwszy", "drugi", "trzeci"]

print(lista[-1])  # Wynik: "trzeci"
print(lista[-2])  # Wynik: "drugi"
print(lista[-3])  # Wynik: "pierwszy"
```

Na listach można wykonywać różne operacje (pełna lista [tutaj](https://docs.python.org/3/tutorial/datastructures.html)), a najważniejsze z nich to:

- `list.append(elem)` - dopisanie na koniec nowego elementu `elem`
- `list.insert(i, elem)` - wstawienie `elem` na `i`-ty indeks
- `list.pop(i)` lub `list.pop()` - usunięcie i zwrócenie `i`-tego elementu z
   listy, jeśli nie podamy indeksu `i` to usunięty zostanie ostatni element
- `list.sort()` - posortowanie elementów listy
- `len(list)` - sprawdzenie długości listy

## Typy zaawansowane

Znajomość tych typów nie jest konieczna na poziomie matury, ale często bardzo
ułatwiają one zadanie, więc warto umieć z nich korzystać.

### Krotki

Krotki (`tuple`) są strukturą danych, która do pewnego stopnia przypomina listy,
ale ma z góry określoną liczbę elementów i zwyczajowo może przechowywać elementy
różnych typów.

Załóżmy, że chcemy mieć listę punktów w układzie współrzędnych. Moglibyśmy
przechowywać ją jako listę list w następujący sposób:

```python showLineNumbers
punkty: list[list[int]] = [[0, 0], [1, 1], [-1, -1]]

# Dostęp do współrzędnych drugiego punktu:
x = punkty[1][0]  # x = 1
y = punkty[1][1]  # y = 1
```

Nie jest to najgorsze rozwiązanie, ale żeby uzyskać obie współrzędne punktu,
potrzebujemy aż dwie linijki kodu. Dodatkowo IDE nie ostrzeże nas, jeśli
przez przypadek do listy `punkty` dodamy element `[0]` - listę jednoelementową,
która spowoduje błąd w trakcie wykonania programu.

Spójrzmy jak wyglądałoby rozwiązanie tego problemu przy pomocy krotki
dwuelementowej, czyli pary:

```python showLineNumbers
punkty: list[tuple[int, int]] = [(0, 0), (1, 1), (-1, -1)]

# Dostęp do współrzędnych drugiego punktu, krotka zostaje rozpakowana:
(x, y) = punkty[1]  # x = 1, y = 1
```

Krotki mogą oczywiście zawierać dowolnie wiele elementów:

```python showLineNumbers
para: tuple[int, int] = (12, 13)
trojka: tuple[int, str, str] = (1, "Anna", "Kowalska")
czworka: tuple[int, str, str, float] = (12, "al. Jerozolimskie", "Warszawa", 15.4)
```

### Zbiory

Zbiór jest kolejną strukturą danych podobną do listy, ale z jedną znaczącą
różnicą - elementy na liście znajdują się w określonej kolejności, a zbiór jest
raczej workiem, w którym znajdują się wartości, ale bez ustalonego porządku.
Co więcej, na liście ten sam element może znajdować się wielokrotnie, a w
zbiorze każdy element występuje tylko raz.

```python showLineNumbers
zbior1: set[str] = {"jabłko", "banan", "marchewka"}
zbior2: set[str] = {"jabłko", "banan", "marchewka", "jabłko"}

# Oba te zbiory zawierają te same elementy:
print(zbior1)  # Wynik: {'marchewka', 'banan', 'jabłko'}
print(zbior2)  # Wynik: {'marchewka', 'banan', 'jabłko'}
```

Na zbiorach można wykonywać funkcje podobne do tych na listach:
- `set.add(elem)` - wstawienie elementu
- `set.remove(elem)` - usunięcie elementu
- operator `in` - sprawdzenie czy element jest w zbiorze
- `len(set)` - sprawdzenie liczby elementów w zbiorze

Przykład użycia tych funkcji:

```python showLineNumbers
zbior: set[int] = {2, 3, 5, 7}
print(zbior)              # Wynik: {2, 3, 5, 7}

zbior.add(11)
zbior.add(13)
print(zbior)              # Wynik: {2, 3, 5, 7, 11, 13}

zbior.remove(2)
print(zbior)              # Wynik: {3, 5, 7, 11, 13}

czyZawiera5 = 5 in zbior  # Wynik: True
rozmiar = len(zbior)      # Wynik: 5
```

Na zbiorach można też wykonywać operacje znane nam z matematyki:
- `a | b` - suma, wszystkie elementy z a i b
- `a ^ b` - suma wszystkie elementy z a i b, które nie są w obu
- `a - b` - różnica, elementy w a, ale nie w b
- `a & b` - przecięcie, elementy w a i b jednocześnie

### Słowniki

Słownik, tak samo jak w rzeczywistości, to zbiór par. Pierwszy element takiej
pary nazywamy kluczem (*ang.* key), a drugi wartością (*ang.* value). Dostęp
do elementów odbywa się przy pomocy nawiasów kwadratowych, podobnie jak w
przypadku listy. Zobaczmy działanie zbiorów na przykładzie:

```python showLineNumbers
ceny: dict[str, float] = {
  "czekolada": 4.99,
  "woda": 1.89,
  "sok": 2.99
}

# Sprawdzenie ceny produktu
cena: float = ceny["woda"]          # cena = 1.89

# Dodanie nowej ceny
ceny["masło"] = 6.99

# Zaaktualizowanie ceny
ceny["woda"] = 1.99

# Usunięcie elementu ze słownika
del ceny["czekolada"]

# Wypisanie słownika
print(ceny)                         # Wynik: {'woda': 1.99, 'sok': 2.99, 'masło': 6.99}

# Sprawdzenie czy klucz jest w słowniku
zawieraWode: bool = "woda" in ceny  # Wynik: False
```

Podobnie jak w przypadku zbiorów, każdy klucz może pojawić się w słowniku tylko
raz. Przypisanie wartości na istniejący klucz zakończy się powodzeniem, ale
nadpisze wcześniej zapisaną tam wartość.

## Sprawdzanie typu zmiennej

Może zdarzać się tak, że w programach, które będziemy pisali, pojawi się błąd
związany z niewłaściwym typem pewnej zmiennej. Przydać może nam się wtedy
funkcja `type()`, która zwraca nazwę typu zmiennej jako napis. Przykładowo
możemy z niej skorzystać tak:

```python showLineNumbers
a = 1
b = "test"
c = (a, b)
d = [1, 2, 3]

print(type(a))  # Wynik: <class 'int'>
print(type(b))  # Wynik: <class 'str'>
print(type(c))  # Wynik: <class 'tuple'>
print(type(d))  # Wynik: <class 'list'>
```
