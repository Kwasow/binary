---
sidebar_position: 2
title: "Zapytania podstawowe"
---

W tym rozdziale zobaczymy w jaki sposób możemy komunikować się z bazą danych.
We wszystkich przykładach będziemy korzystali z tabel, które były już
zaprezentowane we wstępie:

**emp:**

| `id` | `first_name` | `position`         | `sal` | `manager` | `dept` |
| ---- | ------------ | ------------------ | ----- | --------- | ------ |
| 1367 | "Marek"      | "Operator serwera" | 1200  | 1369      | 1      |
| 1368 | "Agata"      | "Programista"      | 1400  | 1369      | 1      |
| 1369 | "Aneta"      | "Manager zespołu"  | 2500  | NULL      | 1      |
| 1370 | "Zbigniew"   | "Dział Kadr"       | 1500  | NULL      | 2      |

**dept:**

| `id` | `address`       | `city`     |
| ---- | --------------- | ---------- |
| 0    | "Warszawska 14" | "Poznań"   |
| 1    | "Startowa 9"    | "Warszawa" |
| 2    | "Zabłocie 15"   | "Kraków"   |

Typy kolumn w tych tabelach to kolejno:

- dla tabeli `emp`: `INTEGER`, `VARCHAR(20)`, `VARCHAR(50)`, `INTEGER`, `INTEGER`,
- dla tabeli `dept`: `INTEGER`, `VARCHAR(50)`, `VARCHAR(20)`.

## Wybieranie wierszy z tabeli

Wybieranie wierszy i ich filtrowanie jest podstawową i najważniejszą operacją
w SQLu. Trzeba umieć je pisać i dobrze je znać, ponieważ pojawiają się zarówno
w zadaniach praktycznych jak i teoretycznych.

Wynikiem zapytania `SELECT` jest zawsze nowa tabela (może być pusta). Tabela
wynikowa jest tylko tymczasowa i nie zostaje nigdzie zapisana jako nowy obiekt.

### Wybieranie wierszy (`SELECT`)

Najczęściej używanym zapytaniem w SQLu jest zapytanie `SELECT`. Zbudowane
jest ono w następujący sposób:

```sql
SELECT *
FROM emp;
```

Wynikiem powyższego zapytania będzie cała tabela `emp`. Możemy też wybrać
tylko niektóre kolumny tabeli, podając ich nazwy w następujący sposób:

```sql
SELECT id, first_name
FROM emp;
```

### Filtrowanie wyników (`WHERE`)

Samo wybieranie wierszy nie jest zbyt interesujące i dużo częściej będzie nas
interesowało znalezienie w tabeli wierszy, które spełniają określony warunek.
Przykładowo, jeśli chcemy dowiedzieć się, ile kto w naszej firmie zarabia
przynajmniej 1500 złotych, to możemy zrobić to zapytaniem:

```sql
SELECT first_name
FROM emp
WHERE sal >= 1500;
```

Możemy też łączyć wiele warunków w klauzuli `WHERE` przy użyciu operatorów
logicznych `AND` i `OR`:

```sql
SELECT first_name
FROM emp
WHERE sal >= 1500 AND dept = 1;
```

W wyniku ostatniego zapytania dostajemy tabelę:

**emp:**

| `id` | `first_name` | `position`   | `sal` | `manager` | `dept` |
| ---- | ------------ | ------------ | ----- | --------- | ------ |
| 1370 | "Zbigniew"   | "Dział Kadr" | 1500  | NULL      | 2      |

### Łączenie tabel (`JOIN`)

Ostatnią ważną na maturze operacją na bazie danych jest łączenie tabel ze sobą,
o którym wspominaliśmy we wstępie. Tabele łączymy ze sobą przypasowując do siebie
wiersze jednej tabeli z drugą zgodnie z pewnym warunkiem.

Mamy różne możliwości łączenia tabel:

- `JOIN` - w wyniku są tylko te wiersze, które udało się dopasować w obu tabelach,
- `LEFT JOIN` - w wyniku są wszystkie wiersze z lewej tabeli i te wiersze z prawej
  tabeli, które udało się dopasować (wartości `NULL`, jeśli takich nie było),
- `RIGHT JOIN` - w wyniku są wszystkie wiersze z prawej tabeli i te wiersze z lewej,
  tabeli, które udało się dopasować (wartości `NULL`, jeśli takich nie było),
- `FULL OUTER JOIN` - wszystkie wiersze z obu tabel, z wartościami
  `NULL` w miejscach, gdzie nie udało się nic dopasować.

Nazwy powyższych klauzul `JOIN` często różnią się w różnych wariantach języka
SQL.

Jeżeli chcemy dla każdego pracownika z tabeli `emp` wypisać, gdzie pracuje, to
zrobimy to następującym zapytaniem:

```sql
SELECT emp.id, emp.first_name, dept.address
FROM emp
LEFT JOIN dept ON emp.dept = dept.id;
```

I wynikowa tabela to:

| `emp.id` | `emp.first_name` | `dept.address` |
| -------- | ---------------- | -------------- |
| 1367     | "Marek"          | "Startowa 9"   |
| 1368     | "Agata"          | "Startowa 9"   |
| 1369     | "Aneta"          | "Startowa 9"   |
| 1370     | "Zbigniew"       | "Zabłocie 15"  |

W przykładzie widzieliśmy też, że w klauzuli `SELECT`, możemy przed nazwą pola
podać nazwę tabeli. Jeśli wybieramy wiersze tylko z jednej tabeli, to raczej nie
ma potrzeby, żeby to robić, ale kiedy pojawia się kilka tabel, a w szczególności
jeżeli obie mają pola o takich samych nazwach, to powinniśmy podać nazwę tabeli,
z której pochodzi pole.

## Modyfikowanie i tworzenie tabel

Zapytania znajdujące się w tej sekcji nie są obowiązkowe na maturze i nie trzeba
umieć ich pisać, ale warto je znać, bo teoretycznie mogą pojawić się pytanie
ich dotyczące w sekcji teoretycznej.

### Tworzenie (`CREATE`)

Aby stworzyć tabelę, trzeba zdefiniować jej nazwę oraz typy kolejnych kolumn.
Warto też określić, która kolumna jest kluczem głównym. Jeśli nie dodamy klucza
głównego, to baza danych sama stworzy ukryty klucz główny, ale nasza praca z
bazą danych nadal będzie utrudniona.

Zapytanie tworzące tabelę `emp`:

```sql showLineNumbers
CREATE TABLE emp (
  -- highlight-start
  id INT NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  position VARCHAR(20) NOT NULL,
  sal INT NOT NULL,
  manager INT,
  dept INT NOT NULL,
  -- highlight-end
  PRIMARY KEY (id),
  FOREIGN KEY (manager) REFERENCES emp(id),
  FOREIGN KEY (dept) REFERENCES dept(id)
);
```

Zapytanie jest dosyć długie, więc przyjrzyjmy się mu fragmentami:

- w linijce 1 deklarujemy nazwę tabeli i rozpoczynamy zapytanie,
- w liniach 2-7 definiujemy jakie pola ma mieć nasza tabela, zdefiniowanie ich
  jako obowiązkowych (`NOT NULL`) jest opcjonalne, co widać na przykładzie pola
  `manager`,
- w liniach 8-10 nakładamy dodatkowe warunki (ang. _constraints_) na pewne pola.

Warunki w powyższym przykładzie oznaczają:

- `PRIMARY KEY` - kolumna oznaczona w ten sposób jest kluczem głównym i baza
  danych pilnuje, żeby wartości w niej się nie powtarzały - jeśli wstawimy wiersz
  o takiej samej wartości w tej kolumnie, to dostaniemy błąd,
- `FOREIGN KEY x REFERENCE tab(y)` - kolumna oznaczona w ten sposób to klucz
  obcy, to znaczy, że musi zawierać wartość, która jest kluczem głównym w innej
  tabeli - jeśli oznaczymy kolumnę w ten sposób, to w przypadku próby usunięcia
  wiersza z tabeli, do której jest referencja pojawi się błąd i wymagane będzie
  usunięcie referencji w pierwszej kolejności.

Zwykle na kolumnę `id` nakłada się jeszcze warunek `AUTO INCREMENT` albo podobny,
który automatycznie nadaje klucz główny i zwiększa go dla każdego wiersza, ale
to już zdecydowanie wybiega poza program matury.

### Wstawianie (`INSERT`)

Aby wstawić wiersz do tabeli, podajemy kolejno wartości wszystkich pól. Na
przykład, żeby wstawić ostatni wiersz tabeli `emp` do tejże tabeli musimy
wykonać zapytanie:

```sql
INSERT INTO emp (1370, "Zbigniew", "Dział Kadr", 1500, NULL, 2);

-- Lub z podaniem nazwy kolumn:
INSERT INTO emp (id, first_name, position, sal, dept)
VALUES (1370, "Zbigniew", "Dział Kadr", 1500, 2);
```

Pierwszy zapis jest krótszy, ale nie pozwala na pomijanie kolumn. Drugi zapis
pozwala pominąć kolumny, które mają wartość `NULL`, ale też na podanie wartości
w innej kolejności niż kolejność kolumn.

### Aktualizowanie (`UPDATE`)

Aktualizowanie wiersza tabeli wygląda podobnie do poznanego wcześniej zapytania
`SELECT ... FROM ... WHERE`. Załóżmy, że chcemy w naszej tabeli `emp`
zaktualizować pensję pana Zbigniewa:

```sql
UPDATE emp
SET sal = 1700
WHERE id = 1370;
```

### Usuwanie (`DELETE`)

Usuwanie wierszy tabeli jest bardzo podobne do klauzul `WHERE` i `UPDATE`, więc
pana Zbigniewa możemy zwolnić w następujący sposób:

```sql
DELETE FROM emp
WHERE id = 1370;
```

Całą tabelę możemy usunąć poleceniem:

```sql
DROP TABLE emp;
```

:::warning

Usunięcie tabeli zapytaniem `DROP TABLE` jest nieodwracalne.

:::

### Zmienianie (`ALTER`)

Czasami może zdarzyć się tak, że będziemy chcieli zmodyfikować kolumny naszej
tabeli - dodać nowe kolumny, usunąć stare albo dodać dodatkowe warunki. To
zapytanie ma wiele wariantów i raczej nie pojawi się na maturze, ale o jego
działaniu można przeczytać więcej [tutaj](https://www.w3schools.com/sql/sql_alter.asp).

## Podsumowanie

Wielkość znaków we wszystkich powyższych zapytaniach nie ma znaczenia, ale
zwyczajowo nazwy tabel/kolumn małymi literami, a klauzule SQL wielkimi. Pomaga
to wprowadzić porządek w zapytaniach i odróżnić składowe zapytań od nazw
wprowadzonych przez programistę. Zalecam też pisać każdą część zapytania w
oddzielnej linijce, bo pomaga to jeszcze ułatwić czytanie zapytań.

Warto natomiast pamiętać kolejność klauzul w zapytaniu, ponieważ jest ona
istotna. Ogólny schemat, którego należy się trzymać wygląda następująco:

```sql
SELECT ...
FROM ...
WHERE ...
JOIN ... ON ...
WHERE ...
```

Zauważmy też, że w powyższym schemacie klauzula `WHERE` pojawia się dwa razy,
ponieważ możemy filtrować wyniki zarówno przed jak i po łączeniu tabel.
