---
sidebar_position: 2
title: "Zapytania podstawowe"
---

W tym rozdziale zobaczymy w jaki sposób możemy komunikować się z bazą danych.
We wszystkich przykładach będziemy korzystali z tabel, które były już
zaprezentowane we wstępie:

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

Typy kolumn w tych tabelach to kolejno:
- dla tabeli `emp`: `INTEGER`, `VARCHAR(20)`, `VARCHAR(50)`, `INTEGER`, `INTEGER`,
- dla tabeli  `dept`: `INTEGER`, `VARCHAR(50)`, `VARCHAR(20)`.

## Tworzenie tabel (`CREATE`)

## Wybieranie wierszy (`SELECT`)

## Filtrowanie wyników (`WHERE`)

## Łączenie tabel (`JOIN`)

## Aktualizowanie wierszy (`UPDATE`)

## Podsumowanie
