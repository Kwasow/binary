---
sidebar_position: 11
title: "Podsumowanie"
---

Poniżej znajduje się podsumowanie wszystkich konstrukcji programistycznych,
które poznaliśmy do tej pory, oraz przykłady zastosowania poznanych funkcji
z biblioteki standardowej Pythona.

## Deklaracje zmiennych

```python
a: int = 5
b: str = "test"
c: list[int] = [1, 2, 3]
d: list[str] = ["a", "b", "c"]
e: float = 5.1
```

## Typy

```python
a: str = "5"
b: int = int(a) # 5
c: int = int("5") # 5
```

## Obsługa wejścia/wyjścia

```python
# Poproszenie użytkownika o wpisanie danych
napis: str = input("Wpisz dowolny napis: ")

# Wypisanie danych
print(f"Wpisałeś: {napis}")

# Wczytanie pliku
plik = open("nazwa_pliku.txt")
zawartosc_pliku: str = plik.read()

# Podział stringa na listę stringów
linijki_z_pliku: list[str] = zawartosc_pliku.split('\n')
```

_Uwaga!_ Przy korzystaniu z funkcji `input()` należy pamiętać, że zwracany typ
to zawsze `str`!

_Uwaga!_ Przy czytaniu zawartości pliku najpierw otwieramy plik przy pomocy
funkcji `open()`, potem wczytujemy cały plik jako `str` przy pomocy funkcji
`read()`, a na koniec wykonujemy funkcję `split()` z argumentem `\n` (czyli
znakiem nowej linii). W efekcie otrzymujemy listę wszystkich linijek z pliku.
Więcej informacji na ten temat można znaleźć
[tutaj](./4-input-output.md#czytanie-wejścia-z-pliku)

## Listy

```python
a: list[int] = [1, 2, 3, 4, 5, 6]
b: int = a[0] # 1
c: int = a[-1] # 6
d: list[int] = a[1:] # [2, 3, 4, 5, 6]
```

## Instrukcja warunkowa `if`

```python
a: int = 5
b: int = 3

if a + b < 3:
    print("Suma mniejsza od trzech")
elif a + b < 0:
    print("Suma ujemna")
else:
    print("Suma większa lub równa trzy")
```

## Pętla `while`

```python
i: int = 0
while i < 5:
    print(i) # 0, 1, 2, 3, 4
    i += 1
```

## Pętla `for`

```python
for i in range(5)
    print(i) # 0, 1, 2, 3, 4

l: list[str] = ["a", "b", "c", "d"]
for el in l:
    print(el) # "a", "b", "c", "d"
```

## Funkcje

```python
def dodaj_liczby(a: int, b: int) -> int:
    return a + b
```
