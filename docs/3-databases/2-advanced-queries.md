---
sidebar_position: 3
title: "Zapytania zaawansowane"
---

Konstrukcje zaprezentowane w tym rozdziale są spotykane w rzeczywistości nie
rzadziej niż te z poprzedniego, ale z całą pewnością należą już do nieco bardziej
zaawansowanej części języka SQL. Ich znajomość jest też wymagana na maturze.

W przykładach w tym rozdziale będziemy korzystać z następującej tabeli o nazwie
`emp`:

| `id` | `first_name` | `position`         | `sal` | `manager` | `dept` | `login`        |
| ---- | ------------ | ------------------ | ----- | --------- | ------ | -------------- |
| 1367 | "Marek"      | "Operator serwera" | 1200  | 1369      | 1      | "pracownik1"   |
| 1368 | "Agata"      | "Programista"      | 1400  | 1369      | 1      | "pracownik10"  |
| 1369 | "Aneta"      | "Manager zespołu"  | 2500  | NULL      | 1      | "manager2"     |
| 1370 | "Zbigniew"   | "Dział Kadr"       | 1500  | NULL      | 2      | "pracownik3"   |
| 1371 | "Weronika"   | "CEO"              | 4000  | NULL      | 2      | "pracownik"    |
| 1372 | "Arkadiusz"  | "Programista"      | 1300  | 1369      | 1      | "pracownik123" |

## Sortowanie wyników

Wyniki zapytań możemy sortować. Domyślne sortowanie jest rosnące i nie wymaga
żadnego dodatkowego słowa kluczowych, sortowanie malejące wymaga dodatkowej
instrukcji `DESC`:

```sql
-- Sortowanie rosnące
SELECT id, first_name
FROM emp WHERE sal > 1200
ORDER BY first_name;

-- Sortowanie malejące
SELECT id, first_name
FROM emp WHERE sal > 1200
ORDER BY sal DESCENDING;
```

Pamiętajmy też, że klauzula `ORDER BY` jest zwykle jedną z ostatnich
pojawiających się w zapytaniu.

## Funkcje agregujące

## Operator `AS`

W naszych zapytaniach może zdarzyć się tak, że nazwa tabeli będzie bardzo długa
i nie będzie nam się chciało jej wiele razy pisać, albo będziemy musieli użyć
tej samej tabeli w jednym zapytaniu, dwa razy (np. łącząc ją samą ze sobą).
Wtedy z pomocą przychodzi nam operator `AS`, którym możemy nadać alias tabeli
albo polu tabeli. Spójrzmy na poniższy przykład:

```sql
SELECT a.dept, COUNT(a.dept) AS liczba_prac
FROM emp AS a
WHERE liczba prac > 2
GROUP BY a.dept
```

W powyższym przykładzie użyliśmy operatora `AS` dwa razy - do nazwania nowej
kolumny powstałej z agregacji i do zmiany nazwy tabeli `emp` na `a`.

## Operator `LIKE`

Często w SQLu będziemy chcieli wyszukiwać stringi, które pasują do jakiegoś
wzorca, dlatego w standardzie zawarty jest operator `LIKE`, który wspiera bardzo
podstawowe funkcje Regexa.

Dwa znaki specjalne, które są w nim zdefiniowane, to `%` i `_`:

- `%` – reprezentuje 0 lub więcej znaków; przykład zastosowania:

  ```sql
  SELECT login
  FROM emp
  WHERE login LIKE "pracownik%";
  ```

  Wówczas w odpowiedzi dostaniemy tabelę zawierającą loginy:
  `pracownik1, pracownik10, pracownik3, pracownik, pracownik123`.

- `_` - reprezentuje dokładnie jeden znak; przykład zastosowania:

  ```sql
  SELECT login
  FROM emp
  WHERE login LIKE "pracownik_";
  ```

  Wtedy odpowiedź będzie wyglądała następująco: `pracownik1, pracownik3`.

Możemy też połączyć oba te operatory, żeby np. wymusić przynajmniej n znaków,
ale dopuścić więcej. W poniższym przykładzie szukamy pracowników, którzy w
loginie mają co najmniej dwie cyfry:

```sql
SELECT login
FROM emp
WHERE login LIKE "pracownik %";
```

W odpowiedzi dostajemy: `pracownik10, pracownik123`.

## Zwracanie wyrażenia arytmetycznego

W wyrażeniu SELECT można oczywiście wykonywać standardowe operacje arytmetyczne,
w których argumentami mogą być liczby lub kolumny. Kilka przykładów:

- wypisujemy dodatkową kolumnę, która jest liczbą:  
  `SELECT first_name, sal, 100 AS nazwa FROM emp`
- sprawdzamy, co by się stało, gdyby wszyscy dostali podwyżkę:  
  `SELECT first_name, sal, sal + 100 AS nowa pensja FROM emp`
- podwyżka zależna od departamentu, w którym ktoś pracuje:  
  `SELECT first_name, sal, sal + dept * 100 AS nowa pensja FROM emp`

## Instrukcje warunkowe

Można w wyrażeniach `SELECT` używać instrukcji warunkowych `IF` i `CASE` – ich
składnia znowu będzie się różniła między wariantami SQLa. Przykłady w miarę
standardowe:

- `SELECT first_name, sal, IF (dept == 1) THEN sal + 100 ELSE sal END FROM emp`
- `SELECT first_name, sal, CASE dept WHEN 1 THEN sal + 100 WHEN 2 THEN sal END FROM emp`
