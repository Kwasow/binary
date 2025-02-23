---
sidebar_position: 2
title: "Widoki i stan"
---

:::info

Zachęcam do wypróbowania poniższych przykładów na przykładowym projekcie, który
można pobrać za pomocą polecenia:

```bash
git clone https://github.com/Kwasow/startowa-examples.git
```

Przykłady poniżej można wypróbowywać zastępując treść funkcji `Home()` w pliku
`app/routes/home.tsx` treścią funkcji z przykładu.

:::

## Komponenty

Komponenty w Reactcie definiowane są jako funkcje, które zwracają strukturę HTML.
Przykładowo, możemy zdefiniować komponent, który wyświetla nagłówek oraz tekst i
nazwać go `Article`:

```ts
function Article() {
  return <div>
    <h1>To jest tytuł artykułu</h1>
    <p>A to jest treść artykułu</p>
  </div>
}
```

Komponenty mogą zwracać tylko jeden element, więc jeśli chcemy zwrócić kilka
elementów, to musimy je opakować w pudełko. Zastosowane w tym przykładzie
elementy to:

- `<div>` - zwykłe pudełko, grupujące kilka elementów; domyślnie wyświetla
  elementy (swoje dzieci) jedno pod drugim,
- `<h1>` - nagłówek, czyli tekst z odpowiednim style - większa czcionka,
  pogrubiony tekst,
- `<p>` - paragraf, czyli po prostu tekst; jeśli umieścimy po sobie kilka
  paragrafów, to zostanie między nimi zostawiona przerwa.

Komponenty mogą też przyjmować argumenty, tak jak zwykłe funkcje:

```ts
function Article(title: string, body: string) {
  return <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
}
```

Jak widać, zawartość zmiennych możemy umieszczać wewnątrz struktury HTML przy
pomocy nawiasów klamrowych. Moglibyśmy też spróbować zbudować prosty, interaktywny
widok, który pokazuje liczbę naciśnięć guzika:

```ts
function ButtonClicker() {
  let counter: number = 0

  function clicked() {
    counter = counter + 1

    console.log(counter)
  }

  return <div>
    <p>Liczba naciśnięć guzika: {counter}</p>
    <button onClick={clicked}>Naciśnij mnie</button>
  </div>
}
```

W powyższym przykładzie zdefiniowaliśmy lokalną funkcję `clicked()`, którą
wykonujemy przy naciśnięciu guzika `<button>`. Jeśli jednak uruchomimy nasz
przykład, to okaże się, że zawartość strony się nie zmienia, pomimo że w konsoli
przeglądarki wypisują się kolejne wartości. Dzieje się tak dlatego, że widok
jest statyczny i się nie odświeża.

## Stan komponentu

Ostatni przykład z poprzedniego podpunktu pokazał nam, że komponenty w Reactcie
są statyczne i nie reagują na zmiany wartości zmiennych. Często jednak będziemy
chcieli zmieniać elementy komponentu - jak więc to zrobić? Musimy zastosować
specjalny mechanizm stanu przy pomocy funkcji `useState()`. Przyjrzyjmy się
poniższemu przykładowi.

```ts
function ButtonClicker() {
  const [counter, setCounter] = useState(0)

  function clicked() {
    setCounter(counter + 1)

    console.log(counter)
  }

  return <div>
    <p>Liczba naciśnięć guzika: {counter}</p>
    <button onClick={clicked}>Naciśnij mnie</button>
  </div>
}
```

Z pozoru wygląda to dosyć podobnie do poprzedniej wersji, ale deklarację zmiennej
zamieniliśmy na wywołanie funkcji `useState()`. Funkcja ta zwróciła listę
dwuelementową, której pierwszy element nazwaliśmy `counter`, a drugi `setCounter`.
Pierwszy jest wartością zmiennej, a drugi specjalną funkcją do ustawiania jej
wartości. Zwyczajowo tak właśnie nazywamy elementy listy zwracanej przez `useState()`.

Jeśli skorzystamy z funkcji `setCounter`, żeby zmienić wartość zmiennej counter,
to React automatycznie odświeży widok i wygeneruje jego nową wersję, ze zmienioną
wartością. Stanie się tak tylko, jeśli skorzystamy z funkcji `setCounter`, a nie
kiedy ręcznie ustawimy wartość zmiennej `counter` na inną.

Będziemy zawsze korzystali ze stanu i funkcji `useState()` jeśli będziemy chcieli
zmieniać coś w naszym komponencie w trakcie jego wyświetlania.

## Hooki (ang. hooks)

`useState()` jest w Reactcie specjalną funkcją, którą nazywamy hookiem (ang. hook).
Ma ona zwykle jakieś specjalne, ukryte działanie, ale wprowadza też
ograniczenia - między innymi można z niej korzystać tylko w komponentach i tylko
na ich początku. Można je wykorzystać w innym hooku, ale nie w zwykłej funkcji
(spowoduje to błąd). Hooki łatwo rozpoznać, ponieważ ich nazwa zwykle zaczyna
się od przedrostka `use-`.
