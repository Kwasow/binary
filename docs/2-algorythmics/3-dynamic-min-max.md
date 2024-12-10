---
sidebar_position: 4
title: "Element najmniejszy/największy listy"
---

W Pythonie możemy skorzystać z funkcji `min()` lub `max()`, żeby znaleźć odpowiednio
najmniejszy lub największy element danej listy, na przykład w ten sposób:

```python showLineNumbers
lista: list[int] = [1, 17, 4, 19, 2, 1, 99, 82, 46]

minimum: int = min(lista)
maximum: int = max(lista)
```

Warto jednak wiedzieć, jak wygląda standardowy algorytm znajdywania elementu
największego/najmniejszego w liście, bez użycia funkcji, ponieważ korzysta on z
metody programowania dynamicznego.

## Algorytm dynamiczny

## Algorytm rekurencyjny

## Algorytm wykorzystujący sortowanie

Możemy sobie też wyobrazić algorytm, który działa w czasie stałym `O(1)` na
posortowanej liście, lub samym kosztem sortowania w przypadku dowolnej listy.
Może być to przydatne w sytuacji, w której i tak potrzebujemy posortowanej listy.

Algorytm o koszcie `O(n*log(n))` wykorzystujący funkcję `sort()` z biblioteki
Pythona wygląda następująco:

```python showLineNumbers
lista: list[int] = [1, 17, 4, 19, 2, 1, 99, 82, 46]

lista.sort()
minimum: int = lista[0]
maximum: int = lista[-1]
```
