---
sidebar_position: 1
---

# Wstęp

W informatyce bardzo często mamy do czynienia z dużymi zbiorami danych, których
efektywne przetwarzanie jest konieczne do prawidłowego działania naszych
aplikacji i programów. Poznaliśmy wcześniej różne struktury danych, takie jak
listy, zbiory czy słowniki. Są to struktury przydatne do przechowywania
danych w trakcie wykonywania programu, ale należy pamiętać, że ich efektywność
spada wrac z liczbą elementów w nich przechowywanych - jeśli słownik ma 10
elementów, to bardzo szybko znajdziemy ten, który nas interesuje, ale jeśli
elementów jest 100 milionów, to może to już chwilę zająć.

Przykładem dużego zbioru danych, do którego musimy mieć szybki i wygodny dostęp
jest zbiór użytkowników w pewnym portalu internetowym. Dla każdego użytkownika
należy zapamiętać jego login, informacje o haśle, email i prawdopodobnie jeszcze
inne parametry. Użytkowników w serwisie może być bardzo dużo, a dostępu do ich
danych będziemy potrzebowali często.

## Działanie bazy danych

Z bazami danych możemy się komunikować, używając specjalnego języka nazywanego
SQL. Istnieje wiele różnych baz danych (np. mysql, Oracle, Postgres), których
implementacje języka SQL różnią się nieznacznie między sobą.

Dane w bazie pogrupowane są w tabele. Każda tabela składa się z kolumn, z których
każda ma nazwę i określony typ. Dodatkowo jedna z kolumn powinna być oznaczona
jako *klucz główny*. Klucz główny to unikalna wartość, która jednoznacznie
identyfikuje wiersz tabeli, może nim być jedna kolumna lub zbiór kolumn.
Dostępne typy różnią się nieznacznie między wariantami SQLa, ale zwykle są to:
- `INTEGER` - liczba całkowita,
- `FLOAT`, `DOUBLE` - liczby zmiennoprzecinkowe i podwójnej precyzji,
- `VARCHAR(n)` - napis o długości `n`,
- `DATETIME` - data i godzina,
- i inne wymienione [tutaj](https://www.w3schools.com/sql/sql_datatypes.asp).

Tabele są też często związane relacjami. Poniżej znajdują się dwie przykładowe
tabele o nazwach `emp` i `dept`. Kluczem głównym tabeli `emp` jest kolumna `id`,
kluczem głównym tabeli `dept` jest `id`, a kolumna `dept` tabeli `emp` jest
kluczem obcym, tzn. jest powiązana z tabelą `dept` i pozwala połączyć wiersze
tabeli `emp` z odpowiednimi wierszami tabeli `dept`.

**emp:**
| `id` | `name` | `position` | `sal` | `manager` | `dept` |
|---|---|---|---|---|---|
| 1367 | "Marek" | "Operator serwera" | 1200 | 1369 | 1 |
| 1368 | "Agata" | "Programista" | 1400 | 1369 | 1 |
| 1369 | "Aneta" | "Manager zespołu" | 2500 | NULL | 1 |
| 1370 | "Zbigniew" | "Dział Kadr" | 1500 | NULL | 2 |

**dept:**

| `id` | `name` | `city` |
|---|---|---|
| 0 | "Warszawska 14" | "Poznań" |
| 1 | "Startowa 9" | "Warszawa" |
| 2 | "Zabłocie 15" | "Kraków" |

W kolejnych rozdziałach zobaczymy, jak zbudować taką tabelę i jak czytać z niej
dane.
