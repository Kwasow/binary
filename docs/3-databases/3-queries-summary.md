---
sidebar_position: 4
title: "Podsumowanie zapytań"
---

Rzeczy, o których warto pamiętać, żeby było nam wygodniej czytać SQLa:

- klauzule zapisujemy wielkimi literami, a nazwy kolumn i tabel małymi,
- zaczynamy kolejne części zapytania od nowych linijek.

Pamiętajmy też, że użycie funkcji agregujących wymaga skorzystania z klauzuli
`GROUP BY`, a kolejność klauzul w zapytaniu musi się zawsze zgadzać:

```sql
SELECT ...
FROM ...
WHERE ...
JOIN ... ON ...
WHERE ...
GROUP BY ...
HAVING ...
ORDER BY ...;
```

Przy korzystaniu z funkcji agregujących możemy korzystać w `WHERE` przed
agregacją, a po agregacji musimy już korzystać z `HAVING`.
