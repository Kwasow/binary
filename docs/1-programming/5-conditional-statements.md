---
sidebar_position: 6
title: "Instrukcje warunkowe"
---

Nasze programy nie będą zbyt przydatne, jeżeli będą mogły wykonywać się tylko
od początku do końca, bez podejmowania żadnych deyzji. Mechanizm, który pozwala
naszym programom zachowywać się inaczej, w zależności od danych, które otrzyma,
to instrukcje warunkowe. W Pythonie (i większości współczesnych języków
programowania) dostępne są instrukcja `if` oraz `match` (w wielu innych językach
nazywana `switch-case`).

## Instrukcja `if`

Instrukcja `if` (od angielskiego _jeżeli_) jest prostszą z dwóch dostępnych
instrukcji. Być może niektórzy znają ją z programu Microsoft Excel, często
używanym na wcześniejszych etapach nauki. W najprostszej swojej formie
wygląda ona następująco:

```python showLineNumbers
if wyrazenie:
  print("Prawda!")
else:
  print("Fałsz!")
```

W miejsce `wyrazenie` możemy wpisać nazwę zmiennej typu bool lub dowolne
wyrażenie logiczne. Tak zwana gałąź `if` wykona się, jeśli wyrażenie zwróci
wartość `True`. W przeciwnym razie wykona się kod w gałęzi `else` (od
angielskiego _w przeciwnym przypadku_).

Załóżmy, że mamy program, który wypisuje, czy liczba jest parzysta. Wyglądałby
on następująco:

```python showLineNumbers
liczba: int = int(input("Podaj liczbę:"))

if liczba % 2 == 0:
  print(f"Liczba {liczba} jest parzysta")
else:
  print(f"Liczba {liczba} nie jest parzysta")
```

Gałąź `else` instrukcji `if` jest opcjonalna i można ją pominąć. Przykładowo
program, który podwaja liczbę, tylko jeśli jest parzysta, może wyglądać tak:

```python showLineNumbers
liczba: int = int(input("Podaj liczbę:"))

if liczba % 2 == 0:
  liczba = liczba * 2

print(f"Wynik: {liczba}")
```

Może być też tak, że potrzebujemy więcej niż dwóch gałęzi i możemy wtedy
skorzystać z dodatkowej gałęzi `elif`, która również przyjmuje wyrażenie
logiczne:

```python showLineNumbers
liczba: int = int(input("Podaj liczbę:"))

if liczba % 3 == 1:
  print(f"{liczba} dzieli się przez 3 z resztą 1")
elif liczba % 3 == 2:
  print(f"{liczba} dzieli się przez 3 z resztą 2")
else:
  print(f"{liczba} jest podzielna przez 3")
```

:::warning

Jak widać w powyższych przykładach, kod wykonywany warunkowo, wewnątrz ciała
instrukcji warunkowej, jest wcięty. W większości języków programowania wcięcia
nie są wymagane (aczkolwiek bardzo zalecane), ponieważ bloki kodu ograniczane
są przez nawias wąsate. W Pythonie nie korzystamy z nawiasów wąsatych i blok
kodu oznaczony jest odpowiednim wcięciem. Wcięcia muszą być zawsze takiej
samej wielkości i nie można mieszać spacji ze znakami tabulacji, ponieważ
spowoduje to błąd przy próbie uruchomienia programu.

Zalecam korzystanie z wcięć przy użyciu spacji o szerokości 2 lub 4 znaków.

:::

## Instrukcja `match`

Instrukcja `match` jest rozszerzeniem funkcjonalności instrukcji `if`. Łatwo się
domyślić, że mogą pojawić się sytuacje, w których warunków do sprawdzenia i
różnych możliwości zrobi się bardzo dużo i pisanie wielu gałęzi jednej
instrukcji `if` może stać się uciążliwe. Spójrzmy na poniższy przykład:

```python showLineNumbers
owoc: str = input("Podaj nazwę owoca:")
cena: float

if owoc == "jabłko":
  cena = 5.99
elif owoc == "truskawki":
  cena = 12.99
elif owoc == "banan":
  cena = 7.99
elif owoc == "jagody":
  cena = 15.99
else
  cena = -1

print(f"Cena owocu '{owoc}' to: {cena}")
```

W tym przykładzie musieliśmy napisać aż 5 gałęzi instrukcji `if-else`. Przy
użyciu instrukcji `match` możemy napisać kod, który będzie szybszy do napisania
i będzie wyglądał schludniej:

```python showLineNumbers
owoc: str = input("Podaj nazwę owoca:")
cena: float

match owoc:
  case "jabłko":
    cena = 5.99
  case "truskawki":
    cena = 12.99
  case "banany":
    cena = 7.99
  case "jagody":
    cena = 15.99
  case _:
    cena = -1

print(f"Cena owocu '{owoc}' to: {cena}")
```

Zwróćmy uwagę na kilka ważnych rzeczy:

- instrukcję rozpoczynamy od słowa kluczowego `match`, po którym należy wpisać
  wyrażenie (nazwę zmiennej), które będziemy dopasowywać do przypadków,
- każdy przypadek zaczyna się od słowa kluczowego `case`, po którym wpisana jest
  wartość, którą obsługuje dany przypadek,
- ostatnim przypadkiem jest `case _`, który zostanie wykonany, jeśli żaden z
  poprzednich przypadków, nie będzie pasował do otrzymanej wartości,
- ciało instrukcji `match`, czyli lista przypadków, jest wcięte jeden raz, a
  ciało każdego przypadku jest wcięte o kolejny poziom, czyli już dwa razy.

Warto pamiętać o instrukcji `match`, mimo że zawsze można ją zastąpić odpowiednią
liczbą instrukcji `if-else`. Instrukcja `match` jest czytelniejsza, więc
wprowadza mniejsze ryzyko wprowadzenia błędu, a w przypadku jego pojawienia się,
ułatwia jego znalezienie.
