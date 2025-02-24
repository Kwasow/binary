---
sidebar_position: 1
title: "Symulacja czasu"
---

W zadaniach maturalnych dotyczących symulacji, często będziemy musieli symulować
akcje, które zachodzą przez pewien okres czasu. Przydatne do tego celu może
okazać się klasa datetime dostępna w bibliotece standardowej Pythona.

## Biblioteka `datetime`

Każdy program, w którym chcemy korzystać z funkcji dostępnych w bibliotece
`datetime`, musimy rozpocząć od zaimportowania tej biblioteki:

```python
# Wystarczy, że importujemy te części biblioteki datetime, które będą nam
# potrzebne
from datetime import datetime, date, time, timedelta
```

W następujący sposób można stworzyć nową instancję czasu:

```python
# Data: 24 lutego 2024
date_no_time: date = date(2024, 2, 24)
# Czas: 13:58:01
time_no_date: time = time(13, 58, 1)
# Data i czas: 24 lutego 2024, 13:58:01
date_with_time: datetime = datetime(2024, 2, 24, 13, 58, 1)
```

Jeśli mamy podaną datę w formie napisu (np. w tekstowym pliku z danymi), to
możemy skorzystać z funkcji `strptime` (_string parse time_), która przyjmuje
jako argumenty format daty i samą datę:

```python
str_data: str = "2024-02-24 13:58:01"
data_format: str = "%Y-%m-%d %H:%M:%S"
data: datetime = datetime.strptime(str_data, data_format)
```

Własności konkretnej daty możemy przeczytać w następujący sposób:

```python
data: datetime = datetime(2024, 2, 24, 13, 58, 1)

rok: int = data.year
miesiac: int = data.month
dzien: int = data.day
godzina: int = data.hour
minuta: int = data.minute
sekunda: int = data.second

dzien_tyg_1: int = data.weekday()
dzien_tyg_2: int = data.isoweekday()
```

Zwróćmy uwagę na ostatni przykład, w którym sprawdzamy dzień tygodnia - funkcja
`weekday()` zwraca wartość z przedziału 0 do 6, a funkcja `isoweekday()` zwraca
wartość od 1 do 7. Nie ma znaczenia, której z tych funkcji używamy, ale musimy
mieć świadomość tej różnicy i pamiętać o odpowiednim dostosowaniu do niej kodu.

Ostatnią ważną rzeczą jest "zwiększanie" czasu. Możemy to zrobić przy pomocy
obiektu `timedelta`:

```python
dzisiaj: date = date(2024, 2, 24)

# Konstruktor timedelta przyjmuje wiele argumentów nazwanych, np.: years,
# months, weeks, days, hours, minutes, seconds
roznica_dzien: timedelta = timedelta(days = 1)

jutro: date = dzisiaj + roznica_dzien
```

Daty można także porównywać przy pomocy standardowych operatorów matematycznych.

Więcej funkcji biblioteki datetime można znaleźć w oficjalnej dokumentacji
[tutaj](https://docs.python.org/3/library/datetime.html).

## Inne sposoby symulacji czasu

Zastosowanie biblioteki datetime pozwoli nam rozwiązać każdy problem związany
z symulacją czasu, ale jej użycie nie zawsze jest konieczne. Często istotna
jest tylko długość symulacji, wtedy np. symulację trwającą 150 dni przeprowadzimy
w następujący sposób:

```python
for i in range(150):
  # Wykonaj symulację pojedynczego dnia
```

Gdyby w tej symulacji interesował nas tylko dzień tygodnia, moglibyśmy zrobić to
w następujący sposób:

```python
# Przyjmijmy, że pierwszym dniem symulacji jest sobota (dni od 0 do 6)
weekday: int = 5

for i in range(150):
  # Wykonaj symulację pojedynczego dnia

  # Zwiększ dzień tygodnia
  weekday = (weekday + 1) % 7
```
