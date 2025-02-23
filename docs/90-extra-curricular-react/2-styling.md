---
sidebar_position: 3
title: "Styl elementów"
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

Domyślne znaczniki HTML nie wyglądają zwykle zbyt elegancko i są bardzo proste.
Ma tego świadomość każdy, kto kiedyś robił w szkole stronę w HTMLu. Żeby
modyfikować wygląd znaczników korzystamy z CSS (ang. _cascading style sheet_),
który pozwala nadawać specjalne atrybuty elementom, które spełniają pewne
warunki. W poniższym przykładzie zmieniamy kolor tekstu w każdym znaczniku
`<p>` na niebieski:

```css
p {
  color: blue;
}
```

Być może nie chcemy, żeby wszystkie znaczniki `<p>` miały kolor niebieski,
tylko jeden, wtedy możemy stworzyć nową klasę CSS i przypisać ją do znacznika:

```css
/* Plik CSS */
.niebieski_tekst {
  color: blue;
}
```

```html
<p class="niebieski_tekst">Ten tekst będzie niebieski!</p>
<p>A to będzie normalny, czarny tekst</p>
```

CSS pozwala na bardzo zaawansowane zmiany stylów komponentów, a nawet animacje
i reagowanie na parametry urządzenia (np. rozmiar ekranu) i obszerny opis
wszystkich możliwości można znaleźć na stronie [W3schools](https://www.w3schools.com/Css/)
lub [Mozilli](https://developer.mozilla.org/en-US/docs/Web/CSS).

W Reactcie zwykle jednak nie będziemy pisać stylów CSS bezpośrednio, tylko
będziemy korzystali z odpowiednich bibliotek.

## Styled components

Najbardziej podstawową biblioteką do stylowania znaczników jest
[styled-components](https://styled-components.com/).
Pozwala ona na stworzenie nowego elementu przy użyciu funkcji `styled` i znanej
nam już składni CSS. Nowe komponenty będziemy zwyczajowo nazywać z wielkiej
litery. Przyjrzyjmy się poniższemu przykładowi:

```ts
const Card = styled.div`
  background-color: blue;
  border-radius: 3vh;
  padding: 1vh;
`

const WhiteText = styled.p`
  color: white
`

const BoldWhiteText = styled(WhiteText)`
  font-weight: bold;
  font-size: 1.5rem;
`

export default function Home() {
  return <Card>
    <BoldWhiteText>Nagłówek</BoldWhiteText>
    <WhiteText>Mniejszy tekst</WhiteText>
  </Card>
}
```

Stworzyliśmy trzy nowe komponenty: `Card`, `WhiteText` oraz `BoldWhiteText`.
Pierwsze dwa są bezpośrednią modyfikacją znaczników HTML, na które nakładamy
atrybuty CSS. Możemy potem korzystać z nowych komponentów w komponencie `Home()`,
tak samo jakby były to standardowe znaczniki HTML. Komponent `BoldWhiteText`
jest modyfikacją innego, już zmodyfikowanego komponentu. Zauważmy, że nie musimy
po raz kolejny definiować koloru tekstu, ponieważ jest on _dziedziczony_ z komponentu
`WhiteText`.

Dzieje się tak zgodnie z nazwą CSS, czyli _**cascading** style sheet_ - style
nakładane są kaskadowo. Jeśli w komponencie "niższym" nadpiszemy któryś atrybut
z komponentu "wyższego", to zostanie zastosowany ten niższy. Jeśli komponent
"niższy" nie ma jakiegoś atrybutu, to dziedziczy go z komponentu "wyższego".

## MUI

Najczęściej nie będziemy jednak korzystać także z biblioteki `styled-components`
i tworzyć komponentów ręcznie, tylko skorzystamy z gotowej biblioteki, która
utrzymuje wszystkie elementy w tym samym stylu. Jednym z popularnych styli
interfejsów graficznych jest Material UI wymyślony przez firmę Google i popularny
w aplikacjach na system Android ([wersja 2](https://m2.material.io/components?platform=android),
[wersja 3](https://m3.material.io/components)), która w Reactcie jest zaimplementowana
w bibliotece [MUI](https://mui.com/).

Poniższy przykład realizuje podobny interfejs co poprzedni, ale z wykorzystaniem
biblioteki MUI.

```ts
export default function Home() {
  return <Card variant="outlined">
    <CardContent>
      <Typography variant="h1">Nagłówek</Typography>
      <Typography variant="subtitle1">Mniejszy tekst</Typography>
    </CardContent>
  </Card>
}
```

Zauważmy, że kod tego komponentu jest dużo prostszy i krótszy. Dodatkowo biblioteka
MUI utrzyma taki sam styl dla wszystkich komponentów w całym projekcie, dopasuje
kolory i pozwoli też na łatwą implementację trybu ciemnego. Każdy komponent
został też przygotowany w kilku wariantach, żeby można go było dopasować do
potrzeb. Pełną listę dostępnych komponentów można znaleźć w
[dokumentacji](https://mui.com/material-ui/all-components/).

## Inne

Bibliotek pozwalających na budowanie ciekawych interfejsów graficznych w Reactcie
jest mnóstwo i nie sposób je tu wszystkie wymienić. Łatwo wyszukać wiele
artykułów porównujących je pod hasłem _"React UI library"_. Warto pamiętać, że
jeden projekt nie powinien korzystać z więcej niż jednej biblioteki, żeby
ułatwić zachowanie spójnego stylu.
