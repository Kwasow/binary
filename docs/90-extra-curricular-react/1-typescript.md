---
sidebar_position: 2
title: "TypeScript"
---

TypeScript to rozszerzenie języka JavaScript o typowanie. Jest to jeden z
najpopularniejszych języków do tworzenia aplikacji przeglądarkowych i stron
internetowych.

### Deklaracje zmiennych

```ts
// To jest stała, jej wartości nie można zmienić
const a: number = 5;
// To jest zmienna, jej wartość można zmienić
let b: number = 5;
// To jest stary sposób deklaracji zmiennej, czasami się go spotyka, ale nie
// powinno się go używać w nowym kodzie:
var c: number = 5;
```

### Typy

```ts
const a: number = 5;
const b: string = "5";
const c: number[] = [1, 2, 3];
const d: Array<number> = [1, 2, 3];
const e: number = 5.5;

// Konwersje typów
const f: number = parseInt("5");
const g: number = parseFloat("5.5");
```

### Listy

```ts
const a: number[] = [1, 2, 3];
const b: Array<number> = [1, 2, 3];

const element1: number = a[1]; // element1 = 2
const element2: number = b[0]; // element2 = 1
```

### Instrukcja warunkowa `if`

```ts
let a: number = 5;
let b: number = 3;

if (a + b < 0) {
  console.log("Suma ujemna");
} else if (a + b < 3) {
  console.log("Suma mniejsza od trzech");
} else {
  console.log("Suma większa lub równa 3");
}
```

### Funkcje

```ts
function f1(x: number) {
  return x * 2;
}

const f2 = (x: number) => {
  return x * 2;
};
```

### Pętle `while` i `for`

```ts
let i: number = 0;
while (i < 3) {
  print(i);
  i++;
}

for (let i = 0; i < 3; i++) {
  print(i);
}

let lista: int[] = [2, 7, 12, 9, 1];
lista.forEach((el) => {
  print(el);
});
for (let el of lista) {
  print(el);
}
```
