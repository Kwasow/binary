---
sidebar_position: 8
title: "Funkcje"
---

## Po co nam funkcje?

Programy, które będziemy pisać, z czasem zaczną robić się coraz większe, będą
miały nieraz setki linii kodu albo nawet wiele plików, z których każdy będzie
bardzo długi. Czasami będziemy też ten sam kod chcieli umieścić w wielu miejscach
w programie - pisanie go wiele razy jest złym rozwiązaniem, bo jeśli znajdziemy
w tym fragmencie kodu jakiś błąd, to będziemy musieli go poprawić w wielu
miejscach i łatwo o kolejną pomyłkę. Konstrukcją, która rozwiązuje oba te
problemy są funkcje.

## Co to są funkcje?

Funkcje to nic innego jak nazwane kawałki kodu, które możemy wykonać z dowolnego
miejsca w naszym programie. Funkcje mają dwie bardzo ważne cechy:

- przyjmują **argumenty** - funkcje nie mają dostępu do zmiennych zdefiniowanych
  poza nimi (czyli w szczególności w miejscu, w którym je wołamy), ale argumenty
  pozwalają nam przekazać odpowiednie wartości do funkcji jako nowe zmienne,
- zwracają **wynik** - funkcje rzadko będą modyfikowały zmienne zdefiniowane poza
  nimi (tzw. zmienne globalne), ale będzie nas interesował wynik działania
  funkcji, dlatego funkcje mogą zwracać dowolną wartość, którą potem przypiszemy
  na zmienną.

Powyższe funkcjonalności najłatwiej będzie zrozumieć na poniższych przykładach.

## Przykłady funkcji

Do tej pory korzystaliśmy już w tym kursie z różnych funkcji, przyjrzyjmy się
teraz trzem z nich bliżej.

1. Funkcja `print()` jest dostępna z dowolnego miejsca w naszych programach i
   przyjmuje jeden argument - napis, albo napis formatowany. Ta funkcja nie
   zwraca żadnej wartości, co możemy sprawdzić poniższym programem:

   ```python showLineNumbers
   ret = print("Test")
   print(f"Wartość zwrócona przez print to: {ret}")
   ```

   Interpreter powinien wypisać nam:

   ```
   Test
   Wartość zwrócona przez print to: None
   ```

   `None` to nic innego jak po prostu brak wartości.

2. Nieco bardziej interesująca jest funkcja `len()`, której mogliśmy używać do
   sprawdzenia długości listy lub napisu. Podobnie jak poprzednia funkcja,
   przyjmuje ona jeden argument - napis, listę, zbiór, słownik i inne, ale tym
   razem zwraca wartość - liczbę całkowitą oznaczającą długość (wielkość)
   podanego argumentu:

   ```python showLineNumbers
   napis: str = "Ala ma kota"
   dlugosc: int = len(napis)

   print(f"Wartość zwrócona przez len to: {dlugosc}")
   ```

   Jeśli wszystko zadziałało poprawnie, to interpreter powinien na ekranie
   wypisać długość napisu.

3. Ostatnim typem funkcji, który zostanie tu przedstawiony, są tak zwane
   funkcje klasowe, czyli takie związane z jakimś obiektem. Obiektem są
   na przykład lista, napis czy zbiór (więcej o programowaniu obiektowym i
   obiektach [tutaj](../6-extras/3-objective-programming.md)). Funkcje klasowe
   wymagają odpowiedniego obiektu, na którym wołana jest funkcja. Zobaczmy to
   na przykładzie sortowania listy:

   ```python showLineNumbers
   lista: list[int] = [4, 2, 7, 1, 9]
   ret = lista.sort()

   print(f"Wartość zwrócona przez funkcję sort to: {ret}")
   print(f"Po wywołaniu funkcji lista to: {lista}")
   ```

   Po wykonaniu tego programu widzimy, że funkcja klasowa `sort()` nie zwróciła
   żadnej nowej wartości, ale zmodyfikowała istniejącą listę. Zwróćmy uwagę na
   fakt, że funkcja klasowa jest wywoływana inaczej niż zwykłe funkcje - z racji
   tego, że jest związana z konkretnym obiektem (w pewnym sensie zdefiniowana
   wewnątrz tego obiektu).

## Definiowanie własnych funkcji

Biblioteka standardowa Pythona ma zdefiniowanych bardzo wiele przydatnych
funkcji, ale trudno się spodziewać, że zawiera funkcję rozwiązujący każdy
problem, który pojawi się w programie. To budzi potrzebę definiowania własnych
funkcji, które będą dostosowane do naszych potrzeb. Możemy to zrobić przy
pomocy słowa kluczowego `def`.

```python showLineNumbers
def suma(a: int, b: int) -> int :
  return a + b

print(suma(12, 13))  # Wynik: 25
```

W powyższym przykładzie dzieje się wiele rzeczy, więc zacznijmy od deklaracji
funkcji - deklaracja to inaczej nazwanie funkcji i określenie argumentów.

Deklaracja składa się z czterech części:

1. `def` - słowo kluczowe rozpoczynające deklarację
2. nazwy funkcji wraz z nawiasami okrągłymi
3. deklaracji argumentów w nawiasach okrągłych (podawanie typów jest oczywiście
   opcjonalne, ale wskazane)
4. opcjonalnej deklaracji zwracanego typu

Lista argumentów funkcji (punkt 3.) może oczywiście być pusta, jeśli funkcja nie
przyjmuje żadnych argumentów. Funkcja nie musi też nic zwracać i wtedy jako
zwracany typ (punkt 4.) możemy podać wspomniany wcześniej typ `None`.

Kolejnym ważnym elementem w powyższej funkcji jest instrukcja `return` (ang.
_zwróć_) będąca częścią definicji funkcji (czyli jej kodu). Instrukcja ta
natychmiast kończy wykonanie funkcji i zwraca wyrażenie przy niej zapisane.
Wyrażeniem tym może być nazwa zmiennej, wyrażenie arytmetyczne lub logiczne albo
stała (np. `5`).

Poniżej znajdują się trzy równoważne definicje funkcji sprawdzającej parzystość
liczby:

```python showLineNumbers
def czyParzysta1(x: int) -> bool:
  if x % 2 == 0:
    return True
  else:
    return False

def czyParzysta2(x: int) -> bool:
  if x % 2 == 0:
    return True

  return False

def czyParzysta3(x: int) -> bool:
  return x % 2 == 0
```

Zachęcam do zapoznania się z powyższymi przykładami i przeanalizowanie, dlaczego
każdy z nich jest poprawny. Warto też dodać, że w tym przypadku preferowaną
wersją byłaby wersja trzecia, ponieważ jest najkrótsza.

We wszystkich powyższych przykładach, funkcja zawsze zwracała tylko jedną lub
zero wartości i faktycznie tak jest - funkcja nie może zwracać więcej niż jednej
wartości. Jeżeli chcemy, żeby funkcja zwracała więcej niż jedną wartość, to
musimy zwrócić krotkę (`tuple`), na przykład tak:

```python showLineNumbers
# Ta funkcja dostaje listę i wartość, którą chcemy znaleźć. Jeśli ją znajdziemy
# to zwracamy parę (indeks, wartość). Jeśli jej nie znajdziemy, to zwracamy
# parę (-1, wartość)
def findWithIndex(lista: list[int], wartosc: int) -> tuple[int, int]:
  for (idx, el) in enumerate(lista):
    if el == wartosc:
      return (idx, wartosc)

  return (-1, wartosc)
```

## Jak dobrze dzielić kod na funkcje?

Umiejętny podział kodu na funkcje, jest trudny i jest czymś, czego programista
uczy się całe życie. Z czasem nabiera się swego rodzaju wyczucia, co powinno być
funkcją, a co lepiej zostawić w kodzie bez jej tworzenia. Na początku warto
trzymać się kilku prostych zasad:

1. Jeśli taka sama logika występuje w kilku miejscach, to powinniśmy napisać
   funkcję i wywołać ją w tych właśnie miejscach
2. Jeśli nasz program staje się bardzo zagnieżdżony (ma 5-6 wcięć), to
   wewnętrzne części powinniśmy wydzielić jako funkcję
3. Jeżeli funkcja lub treść głównego programu robi się bardzo długa (np. więcej
   niż 80-100 linii), to powinniśmy podzielić kod na funkcje

Przy pisaniu funkcji warto pamiętać o dwóch regułach:

1. Nazwy funkcji powinny być znaczące i informować o tym, co dana funkcja robi
2. Funkcje nie powinny być zbyt długie (max. 80-100 linii)
