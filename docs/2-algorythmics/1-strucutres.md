---
sidebar_position: 2
title: "Struktury danych"
---

Niektóre z poniższych struktur danych były przedstawione już wcześniej, ale w
tym rozdziale szczególną uwagę zwracamy na rodzaje operacji dostępnych na
tych strukturach oraz ich stronę algorytmiczną.

## Stos

Stos jest strukturą danych dużo prostszą od listy i zachowuje się tak, jak
spodziewalibyśmy się, że działa stos. Na stosie można wykonywać tylko dwie
operacje:

- `push(el)`, czyli dołożenie elementu `el` na szczyt stosu,
- `pop()`, czyli zdjęcie elementu ze szczytu stosu.

Stos zawsze rośnie do góry i nie można dostać się do innych elementów niż ten na
szczycie stosu, inaczej niż zdejmując kolejne elementy ze szczytu.

W Pythonie stos implementuje się zwykle przy pomocy listy, ale sami sobie
ograniczamy z jakich funkcji możemy korzystać. Moglibyśmy np. korzystać z
nawiasów kwadratowych, żeby dostać się do elementów innych niż ten na szczycie
stosu, ale nie robimy tego, jeżeli traktujemy listę jako stos. Na listach
w Pythonie dostępne są dwie interesujące nas funkcje:

- `append(el)`, która wykonuje operację _push_ i odkłada element na szczyt
  stosu,
- `pop()`, która wykonuje operację _pop_ i zdejmuje oraz zwraca element ze
  szczytu stosu.

Poniżej znajduje się prosty program, który odkłada na stos liczby od 1 do 3, a
następnie zdejmuje je i wypisuje na ekranie. Zwróćmy uwagę, że ze względu na
naturę stosu, liczby zdejmowane są w odwrotnej kolejności niż zostały na niego
włożone.

```python showLineNumbers
stos: list[int] = []

# Włożenie elementów na stos
stos.append(1)
stos.append(2)
stos.append(3)

# Zdjęcie i wypisanie elementów stosu
print(stos.pop())
print(stos.pop())
print(stos.pop())
```

Program wypisuje:

```
> 3
> 2
> 1
```

W przykładach stos zawsze będziemy opisywali w następujący sposób:

```
-| 1 2 3 4
```

Symbol `-|` oznacza spód stosu, a potem po kolei wymienione są elementy na
stosie. Element najbardziej z prawej strony jest elementem na wierzchu stosu.
