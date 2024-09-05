---
sidebar_position: 5
title: "Praca w MS Access"
---

Program MS Access jest częścią pakietu biurowego Microsoft Office i jest jednym
z dwóch programów bazodanowych dostępnych na maturze. Darmową alternatywą jest
LibreOffice Base, któremu jednak brakuje wielu funkcji i jest zdecydowanie
mniej intuicyjny. Nie polecam zdawać w nim matury.

## MsSQL

MsSQL (**nie** mysql) to wariant języka SQL i baza danych oferowana przez firmę
Microsoft. Wariant ten nieznacznie różni się od standardowego SQLa, który był
omawiany wcześniej. Poniżej zaprezentowane są

## Różnice względem SQLa

1. Część wspólna złączenia tabel (`JOIN`) nazywa się `INNER JOIN`.
2. Jeśli korzystamy z operatora `AS` do zmienienia nazwy tabeli, to niestety
   nie możemy korzystać z aliasowanej nazwy we wszystkich miejscach.
3. Przy użyciu operatora `LIKE` korzystamy z `*` zamiast `%` i `$` zamiast `_`.

## Operacje na czasie

Składnia dotycząca czasu, dostępne typy i funkcje różnią się (często znacząco)
między różnymi implementacjami baz danych, ale dla nas istotna jest tylko składnia
z MsSQLa:

- `Date()` – zwraca aktualną datę,
- `Now()` – zwraca aktualny czas (czyli datę + godzinę),
- `Time()` – zwraca aktualny czas sformatowany jako string,
- `DateAdd(interval, number, date)` – dodaje do daty odpowiedni czas zależny od
  interval (np. `s` – sekundy, `n` – minuty, `m` – miesiące, pełną listę
  możliwych jednostek czasu można znaleźć w internecie),
- `DatePart(interval, date, [firstdayofweek], [firstweekofyear])` – zwraca
  wartość podanej jednostki czasu; UWAGA! niedziela jest domyślnie pierwszym
  dniem tygodnia,
- `Minute(date)`, `Day(date)`, `Month(date)`, `Year(date)`, `Weekday(date)` –
  podobnie jak `DatePart` i ta sama uwaga,
- `DateDiff(interval, date1, date2, [firstdayofweek], [firstweekofyear])` –
  zwraca różnicę między datami w podanej jednostce czasu.

Na czasie można też wykonywać normalne operacje arytmetyczne `+` i `-`, ale nie
zawsze będą się one dobrze zachowywały – jeśli to możliwe, lepiej użyć 
odpowiedniej funkcji.

Pełna lista funkcji dostępna w [dokumentacji](https://support.microsoft.com/en-us/office/access-functions-by-category-b8b136c3-2716-4d39-94a2-658ce330ed83).

## Microsoft Access

Jak wcześniej wspomniałem, MS Access jest częścią pakietu biurowego MS Office,
ale nie jego wersji podstawowej, tylko wersji Pro. Najprawdopodobniej nie
posiadacie go u siebie w domu.

### Tworzenie nowej bazy danych

### Wczytywanie danych

### Pisanie zapytań
