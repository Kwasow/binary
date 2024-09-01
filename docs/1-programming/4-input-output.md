---
sidebar_position: 5
title: "Operacje wejścia/wyjścia"
---

Programy, które będziemy pisać nie będą zbyt przydatne, jeżeli będą operowały
tylko na wartościach na sztywno zapisanych w kodzie. Najlepiej by było, gdyby
mogły działać na różnych danych, które otrzymamy od użytkownika, dlatego
potrzebujemy sposobu komunikacji między programem, a użytkownikiem. W tym
rozdziale przedstawione zostaną trzy takie metody.

## Wypisywanie na wyjście programu

Do wypisywania komunikatów z programu służy funkcja `print`, która może
przyjmować argumenty dowolnego typu. Funkcje w Pythonie wołamy przy pomocy
nawiasów okrągłych (więcej o funkcjach [tutaj](./6-functions.md)).

Najprostszym programem, który coś wypisuje, może być pojedyncze wywołanie funkcji
`print` - wykonaj poniższy program w środowisku PyCharm i sprawdź, czy poprawnie
wypisuje się napis "Hello, World!".

```python showLineNumbers
print("Hello, World!")
```

Możemy też trochę skomplikować nasz program i wypisać ten sam napis przy pomocy
zmiennej:

```python showLineNumbers
napis: str = "Hello, World!"
print(napis)
```

Powyższy program powinien zachować się tak samo jak ten z pierwszego przykładu.

W Pythonie mamy też dostęp do tzw. formatowanych napisów, które pozwalają
połączyć ze sobą wiele zmiennych. Przykładowo możemy chcieć wypisać liczbę
zapisaną w pewnej zmiennej:

```python showLineNumbers
x: int = 42
# Ta linijka spowoduje wypisanie: "42"
print(x)
# Ta linijka spowoduje wypisanie: "Liczba: 42"
print(f"Liczba: {x}")
```

Zauważmy, że jeśli korzystamy z formatowanych napisów, to musimy przed samym
napisem (który zapisany jest w cudzysłowie) napisać literę `f`. Jeśli wewnątrz
napisu chcemy odwołać się do jakiejś zmiennej, to musimy jej nazwę podać w
nawiasach klamrowych.

## Czytanie z wejścia programu

Jeśli chcemy, żeby po uruchomieniu programu pojawiła się możliwość wpisania
przez użytkownika jakiejś wartości, możemy do tego celu użyć funkcji `input`.
Funkcja `input`, tak samo jak `print`, przyjmuje jeden argument, który musi być
napisem i będzie wypisany jako zachęta dla użytkownika. Funkcja `input` zwróci
napis, który będzie tym, czym wpisał użytkownik.

:::tip

Tutaj po raz pierwszy mowa jest, że funkcja może coś zwracać. Na razie nie
musimy się w to zagłębiać, ale możemy myśleć o tym, że funkcja zrobi jakieś
rzeczy, a potem podmieni się na jakąś wartość - w tym wypadku pewien napis.

:::

Poniższy program zapyta nas o imię, a następnie się z nami przywita. Spróbuj
uruchomić go na swoim komputerze.

```python showLineNumbers
imie: str = input("Podaj swoje imie:")
print(f"Cześć, {imie}!")
```

Czasami będziemy chcieli poprosić użytkownika o wartość, która jest liczbą.
Spróbujmy zastosować do tego taki sam mechanizm jak dotychczas:

```python showLineNumbers
liczba: int = input("Podaj liczbę:")
liczba = liczba * 2
print(f"Twoja liczba to: {liczba}")
```

Jeśli przykładowo wpisalismy `5`, to program wypisał napis `Twoja liczba to: 55`!
Nie takiego wyniku się spodziewalismy. Wynika to z tego, że funkcja `input`
zwróciła napis, a nie liczbę, a pomnożenie napisu przez dwa oznacza tylko, że
zostanie on podwojony. Przy okazji widzimy, że podanie typu zmiennej nic nie
zmienia i jest tylko podpowiedzią dla nas. Żeby zamienić napis na liczbę, musimy
skorzystać z funkcji `int()`, która przyjmuje napis i zwraca liczbę całkowitą.
Przykładowo możemy z niej skorzystać w ten sposób:

```python showLineNumbers
wejscie: str = input("Podaj liczbę:")
liczba: int = int(wejscie)
liczba = liczba * 2
print(f"Twoja liczba to: {liczba}")
```

Tym razem program prawidłowo wypisuje już podwojoną, wpisaną przez nas liczbę.

## Czytanie wejścia z pliku

Na maturze (i w życiu programisty też), często nie będziemy czytali danych z
wejścia standardowego programu, ale z pliku. Załóżmy, że mamy dany plik z
danymi, który wygląda następująco:

```txt showLineNumbers
Jan Nowak
Anna Kowalska
Marzena Wiśniewska
Kamil Wójcik
```

Jak widzimy, jest to lista imion i nazwisk - dane każdej osoby znajdują się w
oddzielnych linijkach i oddzielone są znakiem spacji. Każda linijka jest też
zakończona niewidzialnym znakiem końca linii (być może widzieliście go kiedyś
w Wordzie, kiedy włączyliście znaki niedrukowane). Jeśli plik został stworzony
w Windowsie, to znakiem końca linii jest `\r\n`, a jeśli w systemie zgodnym ze
standardem UNIX (np. Linux albo macOS) to jest to `\n`.

Żeby odczytać zawartość pliku, musimy go najpierw otworzyć przy użyciu funkcji
`open()`, która przyjmuje dwa argumenty:

1. **nazwa pliku** - jeśli plik znajduje się w tym samym katalogu, w którym
   uruchamiany program, to podanie nazwy pliku (wraz z rozszerzeniem) jest
   wystarczające, ale można także podać jego ścieżkę względną lub bezwzględną
2. **tryb dostępu** - do wyboru mamy trzy tryby dostępu do pliku:
  - `r`, czyli tylko do odczytu,
  - `r+`, czyli do odczytu i zapisu, wskaźnik pisania zostaje ustawiony na
    początku pliku i funkcja powoduje błąd jeśli plik nie istnieje
  - `a+`, czyli do odczytu i zapisu, wskaźnik pisania zostaje ustawiony na
    końcu pliku, w przypadku braku pliku zostaje stworzony nowy

Do czytania z pliku wystarczy nam dostęp w trybie tylko do odczytu, czyli `r`.
Funkcja `open()` zwraca nam obiekt reprezentujący otwarty plik. Możeny z niego
następnie odczytać przy pomocy funkcji jednej z trzech funkcji:

- `read` - odczytuje cały plik i zwraca go jako napis,
- `readline` - odczytuje jedną (kolejną) linijkę z pliku,
- `readlines` - zwraca listę napisów, z których każdy zawiera jedną linijkę z
   pliku.

Często najwygodniejsza będzie dla nas funkcja `readlines()`. W praktyce jej
wykorzystanie będzie wyglądało w ten sposób:

```python showLineNumbers
plik = open("nazwiska.txt")
nazwiska: list[str] = plik.readlines()
print(nazwiska)
```

Powyższy program powinien na wyjście standardowe wypisać:
```python
# W systemie Windows
['Jan Nowak\r\n', 'Anna Kowalska\r\n', 'Marzena Wiśniewska\r\n', 'Kamil Wójcik\r\n']
# W systemie Linux/macOS
['Jan Nowak\n', 'Anna Kowalska\n', 'Marzena Wiśniewska\n', 'Kamil Wójcik\n']
```

Więcej o tym, jak korzystać z pozostałych funkcji jak i z funkcji `readlines()`
będzie po wprowadzeniu do naszego programu [pętli](./5-loops.md).

## Pobieranie argumentów programu

Naszym programom możemy także przekazywać parametry przez argumenty wykonania.
Do tej pory poznaliśmy dwie metody uruchamiania programów pythonowych:

1. Poprzez wpisanie kodu programu do interpretera
2. Poprzez napisaniu skryptu (pliku o rozszerzeniu `.py`), który zostanie
   wykonany przez interpreter.

Argumenty można przekazywać tylko do programów, które uruchamiane są zgodnie z
drugą metodą.

Przyjmijmy, że chcemy napisać program, który dodaje do siebie dwa argumenty
otrzymane przy wykonywaniu programu. W systemie operacyjnym Linux moglibyśmy
wykonać taki program w ten sposób:

:::info

W zapisie poleceń wykonywanych w wierszu poleceń linie zaczynające się od `$`
oznaczają polecenia wpisane przez programistę, a `>` oznaczają linie wypisane
przez program.

W poniższym przykładzie widzimy wykonanie jednego polecenia, które wypisało
liczbę 6. Polecenie to składa się z kilku części:

- `python3` to nazwa programu zainstalowanego na naszym komputerze, czyli w tym
  przypadku interpreter Pythona w wersji 3,
- `main.py` to argument, który zostaje przekazany do interpretera, czyli nazwa
  pliku z programem, który napisaliśmy,
- `2` i `4` to argumenty, które zostaną przekazane do naszego programu w pliku
  `main.py`, może ich być dowolnie wiele.

:::


```bash
$ python3 main.py 2 4
> 6
```

Żeby odczytywać argumenty programu musimy skorzystać z biblioteki `sys` oraz
znajdującej się w niej wartości `argv`. Wartość `argv` przechowuje listę
argumentów, które zostały przekazane do programu. Dla powyższego przykładowego
wywołania programu, zawartość pliku `main.py` wyglądałaby następująco:

```python showLineNumbers
# Importujemy bibliotekę sys
import sys

# Odczytujemy pole przechowujące argumenty programu
argumenty: list[str] = sys.argv

# Wykonujemy obliczenie
liczba1 = int(argumenty[0])
liczba2 = int(argumenty[1])
print(liczba1 + liczba2)
```

Jeśli nasz program przyjmuje argumenty wejściowe, to dobrą praktyką jest
sprawdzenie czy ich liczba się zgadza oraz czy są poprawne. Jeśli nie są
poprawne, to powinniśmy wpisać błąd w formacie podobnym do tego:

```
Error: Niepoprawna liczba argumentów
Usage: python3 main.py <liczba1> <liczba2>
```
