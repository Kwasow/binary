---
sidebar_position: 4
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
nawiasów okrągłych (więcej o funkcjach [tutaj](./5-funkcje.md)).

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

## Pobieranie argumentów programu
