---
sidebar_position: 6
title: "Nawigacja"
---

:::info

Zachęcam do wypróbowania poniższych przykładów na przykładowym projekcie, który
można pobrać za pomocą polecenia:

```bash
git clone https://github.com/Kwasow/startowa-examples.git
```

Używane w przykładach biblioteki są już zdefiniowane w pliku `package.json` w
przykładowym projekcie.

:::

Istnieje wiele różnych bibliotek obsługujących nawigację w React'cie, które
zwykle różnią się sposobem użycia, ale udostępniają podobną funkcjonalność.
W naszych projektach, będziemy korzystać z biblioteki
[react-router](https://reactrouter.com/), która jest jedną z najczęściej
wybieranych opcji.

## Definiowanie ścieżek

Ścieżką będziemy nazywać ciąg znaków, który znajduje się po nazwie domeny, np.
dla strony Startowej moglibyśmy zdefiniować następujące ścieżki:

| **Adres** | **Domena** | **Ścieżka** |
| --------- | ---------- | ----------- |
| `https://startowa.edu.pl` | `startowa.edu.pl` | `/` |
| `https://startowa.edu.pl/godziny-lekcji/` | `startowa.edu.pl` | `/godziny-lekcji` |
| `https://startowa.edu.pl/2025/02/22/podziekowania-dla-marty-markiewicz/` | `startowa.edu.pl` | `/2025/02/22/podziekowania-dla-marty-markiewicz` |

Na stronie internetowej, dla każdej ścieżki można zdefiniować stronę, która ma
się dla niej wyświetlić. Stronę główną, znajdującą się pod ścieżką `/` nazywamy
zwykle indeksem, ponieważ na serwerze jest ona zwykle reprezentowana przez
plik `index.html`.

W przykładowym projekcie ścieżki definiowane są w pliku `app/routes.ts`.
Początkowo jest tam zdefiniowana tylko jedna strona `index("routes/home.tsx")`,
czyli strona główna. Możemy dodać kolejne podstrony przy pomocy funkcji
`route()`, która przyjmuje dwa argumenty - pierwszym jest ścieżka strony,
a drugim ścieżka do pliku, w którym zdefiniowany jest widok mający się wyświetlić
na tej stronie.

Przykładowo moglibyśmy dodać taką konfigurację:

```ts
// Plik: app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("secondary", "routes/secondary.tsx")
] satisfies RouteConfig;
```

```ts
// Plik: app/routes/secondary.tsx
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Secondary page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Secondary() {
  return <p>To jest druga strona</p>;
}
```

Teraz możemy otworzyć naszą podstronę w przeglądarce i sprawdzić, czy na
pewno wszystko działa. Po uruchomieniu programu przez `npm run dev` wypisze
się adres, na którym dostępna jest nasza strona internetowa (może się on
nieznacznie różnić od tego w poniższym przykładzie). Powinniśmy móc odwiedzić
dwie strony:

- `http://localhost:5173/` - nasza stara strona główna,
- `http://localhost:5173/secondary` - przed chwilą zdefiniowana druga strona.

Przejście na inną stronę, np. `http://localhost:5173/test` powinno spowodować
błąd 404, który wypisze się w przeglądarce oraz w terminalu, w którym
uruchomiliśmy stronę.

### Komponenty domyślne

W jednym pliku, może być zdefiniowanych wiele komponentów (funkcji), skąd
więc `react-router` wie, który komponent ma wyświetlić jako główny?

W JavaScriptcie i TypeScriptcie możemy definiować dowolnie wiele funkcji w
jednym pliku i korzystać z nich wewnątrz tego pliku. Jeśli chcemy umożliwić
korzystanie z jakiejś funkcji w innym pliku, to musimy ją wyeksportować przy
pomocy słowa kluczowego `export`:

```ts
// Plik: app/routes/isEven.ts
export function isEven(num: number) {
  return num % 2 == 0
}
```

Możemy z niej wtedy skorzystać w innym pliku importując ją:

```ts
// Plik: app/routes/isOdd.ts
import { isEven } from './isEven.ts'

function isOdd(num: number) {
  return !isEven(num)
}
```

Z każdego pliku można wyeksportować dowolnie wiele funkcji, jednak można
utworzyć tylko jeden eksport domyślny:

```ts
// Plik: app/routes/isEven2.ts
export default function isEven(num: number) {
  return num % 2 == 0
}
```

Funkcja taka eksportowana jest bez nazwy, to znaczy, że korzystający z niej
programista sam nadaje jej nazwę korzystając z niej w ten sposób:

```ts
// Plik: app/routes/isOdd2.ts
import isEvenFromOtherFile from './isEven2.ts'

function isOdd(num: number) {
  return !isEvenFromOtherFile(num)
}
```

Zauważmy, że w przypadku eksportów domyślnych nie stosuje się nawiasów
klamrowych przy instrukcji `import`. W powyższym przykładzie zmieniliśmy też
nazwę funkcji `isEven` podczas importu. Aby nawigacja przy pomocy `react-router`
działała poprawnie, musimy w pliku implementującym ścieżkę umieścić właśnie
taki eksport domyślny - to on będzie wyświetlony jako główny widok na stronie.

## Nawigacja do innej strony

## Parametry

Każdej ścieżce można też przekazać parametry - możemy na przykład chcieć
wyświetlić imię osoby otwierającej stronę o adresie
`http://localhost:5173/secondary?name=Karol`. O tym, jak uzyskać argument
`name` można przeczytać w [dokumentacji](https://reactrouter.com/home) projektu
`react-router`.
