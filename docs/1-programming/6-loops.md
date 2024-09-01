---
sidebar_position: 8
title: "Pętle"
---

W programach komputerowych bardzo często nie wszystko wiemy na etapie pisania
programu. Działanie naszego programu może zależeć od zmiennych podawanych przez
użytkownika, od danych ładowanych z pliku lub internetu. Poznaliśmy już
instrukcje warunkowe, które pozwalają na sprawdzenie czy zachodzą pewne warunki.
Drugim narzędziem, z którego będziemy korzystać, będą pętle, które pozwalają nam
wykonywać operacje wielokrotnie.

## Pętla `while`

Pętla `while` (z angielskiego *dopóki*) jest rozszerzeniem instrukcji warunkowej
`if`. Ma taką samą konstrukcję, z tą różnicą, że jej ciało będzie się wykonywało
tak długo, jak spełniony będzie postawiony w niej warunek. Spójrzmy na poniższy
przykład:

```python showLineNumbers
i: int = 0

while i < 4:
  print(f"Wartość i to {i}")
  i = i + 1
```

Uruchomienie takiego programu spowoduje wypisane:

```
> Wartość i to 0
> Wartość i to 1
> Wartość i to 2
> Wartość i to 3
```

Zauważmy, że wartość zmiennej `i` po wyjściu z pętli to `4`, ale wartość nie
została wypisana. Wynika to z tego, że dla `i = 4` warunek pętli `i < 4`
przyjmuje już wartość `False`.

Spójrzmy na nieco bardziej skomplikowany przykład, który pozwoli nam obliczyć
sumę wszystkich elementów listy:

```python showLineNumbers
lista: list[int] = [12, 18, 1, 4]
i: int = 0
suma: int = 0

while i < len(lista):
  suma = suma + lista[i]
  i = i + 1

print(f"Suma elementów listy to: {suma}")
```

Jak dobrze pamiętamy, listy w Pythonie są indeksowane od zera, stąd początkowa
wartość zmiennej `i` to właśnie zero. Zwróćmy też uwagę, że tak napisana pętla
nie spowoduje błędu związanego ze zbyt dużym (nieistniejącym) indeksem:
- jeśli lista jest pusta, to `len(lista) == 0`, więc pętla się nie wykona,
- jeśli długość listy to `n`, to po wyjściu z pętli `i == n`, ale iteracja dla
  `i == n` się nie wykona, tak jak w poprzednim przykładzie. 

Na koniec zobaczmy tylko, jak napisać pętlę, która będzie się wykonywała w
nieskończoność:

```python showLineNumbers
i: int = 0

while True:
  print("Numer iteracji: {i}")
  i = i + 1
```

Warunkiem wykonywania tej pętli jest `True`, które jest zawsze prawdą, więc ta
pętla będzie wykonywana w nieskończoność.

## Pętla `for`

We wszystkich powyższych przykładach korzystamy ze zmiennej `i`, którą zwiększamy
w każdej iteracji pętli instrukcją `i = i + 1`. Nie wygląda to zbyt elegancko i
jest niewygodne, bo trzeba o tym pamiętać pisząc każdą pętlę, dlatego istnieje
też pętla `for`, która jest specjalnie stworzona do iterowania się po listach
i przedziałach.

Prześledźmy kod programu analogicznego do pierwszego przykładu pętli `while`,
ale w wersji z pętlą `for`:

```python showLineNumbers
for i in range(4):
  print(f"Wartość i to {i}")
```

Uruchomienie takiego programu spowoduje wypisane tego samego, co w przykładzie z
pętlą `while`:

```
> Wartość i to 0
> Wartość i to 1
> Wartość i to 2
> Wartość i to 3
```

Funkcja `range()` pozwala nam iterować się po wszystkich liczbach z przedziału
od 0 do 4. Wartość zmiennej `i` jest aktualizowana przy każdym wykonaniu pętli
i nie musimy nic z nią robić.

Dodatkowo funkcja `range()` może otrzymać więcej argumentów, które pozwalają
tworzyć bardziej zaawansowane iteracje. Pierwszym argumentem jest wartość
początkowa, drugim wartość końcowa, a trzecim krok, czyli o ile zwiększana
jest zmienna `i` w kolejnych wykonaniach:

```python showLineNumbers
for i in range(4, 10, 2):
  print(f"Wartość i to {i}")
```

Uruchomienie takiego programu spowoduje wypisane:

```
> Wartość i to 4
> Wartość i to 8
```

Moglibyśmy wykorzystać funkcję range do iterowania się po indeksach listy (np.
używając `range(len(lista))`), ale Python oferuje lepsze rozwiązanie:

```python showLineNumbers
lista: list[int] = [12, 18, 1, 4]
suma: int = 0

for e in lista:
  suma = suma + e

print(f"Suma elementów listy to: {suma}")
```

W tym wypadku zmienna `e` przyjmuje jako wartości kolejne elementy listy. Nie
ma więc potrzeby wyciągania wartości z listy przy pomocy indeksów. Jeśli
jednak z jakiegoś powodu potrzebujemy indeksów listy, to możemy to zrobić w
następujący sposób:

```python showLineNumbers
lista: list[int] = [12, 18, 1, 4]

for indeks, element in enumerate(lista):
  print(f"Wartość pod indeksem {indeks} to {element}")
```

Zachęcam do sprawdzenia powyższego przykładu samemu.

## Instrukcje `continue` oraz `break`

## Inne sposoby iteracji

Poniżej przedstawiony został materiał dodatkowy, czyli metody iteracji dostępne
w innych językach programowania, ale niezaimplementowane w Pythonie. Warto je
znać, bo rzadko kiedy programiści pracują całe życie tylko z jednym językiem
programowania.

### Pętla `do-while`

### Konstrukcja `foreach`
