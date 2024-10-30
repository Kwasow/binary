---
sidebar_position: 4
title: "Wyszukiwanie elementu listy"
---

:::info

Struktury algorytmiczne wymagane w tym rozdziale: [lista](./strucutres#Lista).

:::

Wyobraźmy sobie, że mamy listę zakupów i chcemy sprawdzić, czy znajduje się na
niej konkretny produkt, np. szukamy jabłek na liście:

- marchewki,
- rzodkiewki,
- banany,
- jabłka.

Ta lista jest dosyć krótka, więc łatwo możemy ją ogarnąć wzrokiem i szybko
stwierdzić, czy jabłka się na niej znajdują. Komputer nie może "ogarnąć wzrokiem"
całej listy jednocześnie, bo może odczytywać co najwyżej jedną z jej wartości
naraz. Podobnie jest, kiedy lista ma bardzo wiele elementów (np. lista zakupów,
która ma ponad 100 pozycji) i my również nie jesteśmy w stanie po prostu na nią
spojrzeć i określić, czy coś się na niej znajduje. Co zrobić w takiej sytuacji?

## Wyszukiwanie liniowe

Wyszukiwanie liniowe jest najbardziej naturalnym dla ludzi i większość z nas
stosuje pewnie ten algorytm w sytuacjach, w których musimy przeszukać dużą listę.

Wyszukiwanie liniowe to nic innego jak sprawdzenie kolejno wszystkich elementów
listy, dopóki nie dojdziemy do szukanego elementu lub dojdziemy do końca listy.

Gdybyśmy na przykład sprawdzali czy na przykładowej liście z początku tego
rozdziału znajdują się jabłka, to wyglądałoby to następująco:

```bash
marchewki  != jabłka # -> nie znaleźliśmy jabłek
rzodkiewki != jabłka # -> nie znaleźliśmy jabłek
banany     != jabłka # -> nie znaleźliśmy jabłek
jabłka     == jabłka # -> znaleźliśmy jabłka!
```

W Pythonie moglibyśmy to zaimplementować następująco:

```Python showLineNumbers
def czyListaZawieraElement(lista: list[str], el: str) -> bool:
  for e in lista:
    if e == el:
      return True

  return False
```

Powyższa pętla zwraca `True`, jeśli któryś element spełnia warunek równości, a
jeśli taki element nie zostanie odnaleziony i pętla zakończy się bez zwracania,
to zwróci `False`.

To rozwiązanie jest jednak dosyć nieefektywne, bo wymaga zawsze przeszukania
całej listy. Czy da się ten sam cel zrealizować lepiej?

## Wyszukiwanie binarne

Jeśli wiemy, że będziemy wielokrotnie wyszukiwać elementy w tej samej liście, to
może nam się opłacać posortować listę (koszt O(n\*log(n))), żeby móc zastosować
algorytm wyszukiwania binarnego.

Wyszukiwanie binarne możemy zastosować dla każdej posortowanej listy elementów.
Jest ono znacząco szybsze, ponieważ przy każdej iteracji pozwala nam odrzucić aż
połowę elementów. Załóżmy, że mamy listę liczb całkowitych:

```
[1, 2, 3, 4, 5, 6, 7]
```

Żeby sprawdzić, czy liczba `5` znajduje się na tej liście, nie musimy przeszukiwać
jej od początku do końca. Wystarczy, że porównamy środkowy element listy (`4`) z
liczbą 5. Okaże się wtedy, że `5 > 4`, więc szukanej liczby na pewno nie ma na
lewo od czwórki. W takim razie odrzucamy lewą część listy i musimy sprawdzić czy
piątka znajduje się w liście o połowę krótszej:

```
[5, 6, 7]
```

Sprawdzamy środkowy element listy i dostajemy `5 < 6` - piątki na pewno nie ma
na prawo od szóstki, więc odrzucamy połowę listy i dostajemy do przeszukania
listę:

```
[5]
```

Tym razem przy porównaniu ze środkowym elementem listy okazuje się, że znaleźliśmy
piątkę, czyli jest ona na liście. Wystarczyły nam do tego trzy kroki, a przy
przeszukiwaniu liniowym potrzebowalibyśmy ich pięć.

Złożoność przeszukiwania binarnego to O(log(n)), czyli zdecydowanie lepiej niż
złożoność przeszukiwania liniowego.

Wyszukiwanie binarne można w Pythonie zaimplementować przy pomocy rekurencji:

```Python showLineNumbers
def znajdzBinarnie(lista: list[str], el: str) -> bool:
  dlugosc: int = len(el) # Zakłdamy, że długość > 0
  polowa: int = dlugosc // 2 # Musimy zastosować dzielenie całkowite

  if lista[polowa] == el:
    # Znaleźliśmy szukany element
    return True
  if lista[polowa] > el:
    # Wykonaj to samo dla lewej połowy listy
    return znajdzBinarnie(lista[:polowa], el)
  if lista[polowa] < el:
    # Wykonaj to samo dla prawej połowy listy
    return znajdzBinarnie(lista[(polowa + 1):], el)
```

## Wyszukiwanie w Pythonie

W Pythonie nie musimy ręcznie pisać wyszukiwania elementu w liście, możemy
skorzystać z wbudowanej funkcji `count(el)` dostępnej na listach, która zwraca
liczbę elementów równych `el` w liście. Należy jednak pamiętać, że Python nie
może założyć, że lista jest posortowana i będzie musiał zastosować wyszukiwanie
liniowe, które może być kosztowne.
