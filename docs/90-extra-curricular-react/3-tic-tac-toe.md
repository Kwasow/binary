---
sidebar_position: 4
title: "Kółko i krzyżyk"
---

Projektem wprowadzającym do Reacta będzie dla nas stworzenie kółko i krzyżyk
zgodnie z oficjalnym tutorialem znajdującym się
[tutaj](https://react.dev/learn/tutorial-tic-tac-toe).

Tutorial zakłada jednak, że programujemy w JavaScripcie, a chcielibyśmy
ćwiczyć programowanie w TypeScripcie. W związku z tym, w trakcie projektu
będzie trzeba wykonać kilka kroków inaczej niż w oficjalnym tutorialu.

:::info

Proponuję pracować na przygotowanym do tego celu projekcie znajdującym się w
katalogu `tic-tac-toe` w repozytorium git z przykładami:

```bash
git clone https://github.com/Kwasow/startowa-examples.git
```

Dodane zostały tam odpowiednie style CSS, które przyspieszą pracę na początku.

:::

#### Zadanie dodatkowe

Po zakończeniu tutoriala ze strony Reacta, spróbuj przerobić swoje rozwiązanie
tak, żeby nie korzystało z klas zdefiniowanych w pliku `app.css`, tylko z
komponentów ostylowanych przez `styled-components`.

_Wskazówka:_ Podejrzyj jak są zdefiniowane style w `app.css` i spróbuj wykorzystać
je w komponentach stworzonych przy użyciu `styled-components`.

## Argumenty komponentu

Gdybyśmy pisali kod w JavaScript, to moglibyśmy przekazać komponentowi
argumenty w następujący sposób:

```js
function Article({title, body}) {
  return <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
}

function Home() {
  return <Article title="To jest tytuł" body="A to treść artykułu">
}
```

Jak widać, komponentu nie wołamy jako funkcji, pomimo że tak jest zdefiniowany,
a argumenty przekazujemy przez parametry znacznika. W powyższym przykładzie
brakuje jednak typów i nie możemy mieć pewności, czym jest `title` oraz `body`.
Żeby poprawnie przekazać argumenty w TypeScripcie, musimy stworzyć nowy typ,
które będzie je reprezentował:

```js
interface ArticleProps {
  title: string,
  body: string,
}

function Article({title, body}: ArticleProps) {
  return <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
}

function Home() {
  return <Article title="To jest tytuł" body="A to treść artykułu">
}
```

Zwyczajowo typ argumentów nazywa się tak samo jak komponent, z dopiskiem `Props`
na końcu. Tak napisany kod daje nam pewność, że `body` i `title` będą napisami.

## Stan bez wartości początkowej

W tutorialu często pojawia się zapis:

```js
const [variable, setVariable] = useState(null);
```

Nie jest to poprawny kod w TypeScriptcie, ponieważ nie wiadomo jakiego typu
jest zmienna `variable`. Gdyby zamiast `null` (`null` oznacza brak wartości)
podana byłaby wartość początkowa, to TypeScript sam domyśliłby się jakiego
typu należy użyć. W tym wypadku musimy mu jednak pomóc, więc jeśli chcemy, żeby
zmienna `variable` była typu liczbowego, to możemy napisać:

```ts
const [variable, setVariable] = useState<number | null>(null);
```

W tym przykładzie przekazaliśmy typ do hooka `useState()` i powiedzieliśmy, że
zmienna `variable` jest albo typu liczbowego, albo jest `null`-em. Podobnie
zrobilibyśmy, gdybyśmy jako stan chcieli przechowywać pustą listę:

```ts
const [list, setList] = useState<string[]>([]);
// Albo alternatywnie:
const [list, setList] = useState<Array<string>>([]);
```
