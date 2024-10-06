---
sidebar_position: 3
title: "Odwrócona notacja polska"
---

:::info

Struktury algorytmiczne wymagane w tym rozdziale: [stos](./strucutres#stos).

:::

Odwrócona notacja polska (ONP, ang. _reverse polish notation_ znana także jako
notacja Łukaszewicza) jest alternatywnym sposobem zapisu obliczeń
matematycznych, który nie wymaga korzystania z nawiasów i dla którego
implementacja obliczania wyników jest dosyć prosta.

## Zapis

Zapis standardowy, znany nam z lekcji matematyki jest zapisem infiksowym (czyli
operator zapisany jest **między** operandami), np.:

```
2 + 3
(8 + 5) * 2
```

W ONP stosujemy zapis postfiksowy (czyli operator zapisany jest **za**
operandami), np.:

```
2 3 +
8 5 + 2 *
```

Zauważmy, że w przypadku postfiksowym, nie musimy korzystać z nawiasów, bo
kolejność zapisu operandów i operatorów jednoznacznie definiuje kolejność
wykonywania działań.

Być może nie jest na razie do końca jasne w jaki sposób interpretować zapis
postfiksowy operacji arytmetycznych, ale pomogą w tym na pewno kolejne dwa
podrozdziały.

## Implementacja

Wcześniej wspomniane było, że implementacja wyliczania wyrażenia arytmetycznego
zapisanego w ONP jest bardzo prosta. W pętli czytamy kolejne symbole (operatory
i operandy) i wykonujemy następujące operacje:

- jeśli i-ty element jest liczbą, odłóż ją na stos,
- jeśli i-ty element jest operandem, to zdejmij dwie liczby ze stosu, wykonaj
  operację i odłóż wynik na stos.

## Przykład

Teraz obliczymy wyrażenie `8 5 + 2 *` (standardowy zapis: `(8 + 5) * 2`).

### Symbol: `8`

Z racji tego, że czytany symbol jest liczbą, to odkładamy ją na stos.

**Stos**: `-| 8`

### Symbol: `5`

Z racji tego, że czytany symbol jest liczbą, to odkładamy ją na stos.

**Stos**: `-| 8 5`

### Symbol: `+`

Z racji tego, że czytany symbol jest operacją, to zdejmujemy dwie liczby ze
stosu, wykonujemy operację i odkładamy wynik na stos:

```
a = 5
b = 8

wynik = a + b
```

**Stos**: `-| 13`

### Symbol: `2`

Z racji tego, że czytany symbol jest liczbą, to odkładamy ją na stos.

**Stos**: `-| 13 2`

### Symbol: `*`

Z racji tego, że czytany symbol jest operacją, to zdejmujemy dwie liczby ze
stosu, wykonujemy operację i odkładamy wynik na stos:

```
a = 2
b = 13

wynik = a * b
```

**Stos**: `-| 26`

### Wynik

Wynikiem działania arytmetycznego jest liczba znajdująca się na stosie. W
poprawnym obliczeniu, na stosie powinna znajdować się tylko jedna liczba.
W tym wypadku wynikiem jest 26.

## Więcej informacji

Dla zainteresowanych, którzy chcą o odwróconej notacji polskiej poczytać więcej,
dużo informacji znajduje się na [wikipedii](https://pl.m.wikipedia.org/wiki/Odwrotna_notacja_polska).
