---
sidebar_position: 6
title: "Kompresja danych"
---

Kompresja danych oznacza zmniejszenie ich rozmiaru, zwykle przy wykorzystaniu
charakteru danych w połączeniu z mniej lub bardziej skomplikowanymi algorytmami
i funkcjami statystycznymi. W tym rozdziale przyjrzymy się przykładowym
algorytmom kompresji danych oraz rodzajom kompresji.

## Rodzaje kompresji

Wyróżniamy dwa podstawowe typy kompresji danych:

- kompresja stratna - polega na usunięciu niepotrzebnych danych, np.
  niewidocznych/niesłyszalnych dla ludzi (np. zdjęcia albo audio)
- kompresja bezstratna - zmniejsza rozmiar danych bez usuwania z niego żadnych
  informacji (np. kompresja plików tekstowych)

## Przykładowy algorytm kompresji

Przyjrzyjmy się przykładowym algorytmom kompresji stratnej dla plików audio i
bezstratnej dla plików tekstowych.

### Kompresja stratna

Załóżmy, że dźwięk został nagrany dobrym mikrofonem, który
rejestruje dźwięki w przedziale 20Hz do 20,000Hz, czyli takim samym, jakie
słyszy ludzkie ucho. Wiemy, że ludzkie ucho jest najbardziej wrażliwe na
dźwięki w przedziale 2,000-5,000Hz, a dźwięki powyżej 15,000Hz nie są słyszalne
dla dużego odsetka populacji. Dodatkowo, większość naszych słuchaczy korzysta z
tanich i niezbyt dobrych słuchawek dousznych, które nie są w stanie odtworzyć
dźwięków o wysokich częstotliwościach. Mając to wszystko na uwadze, możemy
śmiało usunąć wszystkie dane o dźwiękach powyżej 15,000Hz. Zdecydowana większość
ludzkości nie będzie w stanie zauważyć braku tych dźwięków.

Zamiast usuwać dźwięki, możemy też zmniejszać ich częstotliwość próbkowania
(trochę jakbyśmy zmniejszali rozdzielczość zdjęcia) w tych pasmach, które są
słabo słyszalne dla człowieka. Na tej zasadzie działa algorytm kompresji plików
`mp3`, o którym można więcej przeczytać [na Wikipedii](https://pl.wikipedia.org/wiki/MP3).

### Kompresja bezstratna

Tym razem do skompresowania dostajemy plik tekstowy. Musimy skompresować go
bezstratnie, ponieważ po dekompresji musimy dostać dokładnie ten sam tekst.
Niech tekstem w naszym pliku będzie odmiana słowa kot przez przypadki:

```
kot,kota,kotu,kota,kotem,kocie,kocie
```

Możemy zapisać plik stosując normalne kodowanie ASCII, w którym każdy znak jest
reprezentowany przez liczbę z zakresu 0-127. To oznacza, że do zapisania jednego
znaku potrzebujemy 7 bitów, czyli w sumie na całą wiadomość 252 bity.

Zauważmy, że w naszym pliku wiele razy powtarzają się ciąg znaków "kot". Zapiszmy
tę zbitkę jako jeden znak, a następnie dodajmy mapę tego nowego znaku w zbitkę.
Zróbmy to na przykład tak:

```
1kot,2kocie#1,1a,1u,1a,1em,2,2
```

Teraz do zapisania wiadomości zużyliśmy tylko 217 bitów, czyli o 14% mniej.
Powyższa wiadomość składa się z trzech części:

- `1kot,2kocie` - mapa w ustalonym formacie, która mówi nam, jak podmienić znaki w tekście
- `#` - znak rozdzielający mapę od zakodowanej wiadomości
- `1,1a,1u,1a,1em,2,2` - zakodowana wiadomość

Dla tak krótkiego tekstu, taka kompresja nie jest szczególnie efektywna, ale
jeśli mamy do czynienia z bardzo dużym plikiem i przy budowaniu skorzystamy z
funkcji statystycznych, które pomogą nam ustalić jakie elementy najlepiej
podmieniać, to efekty będą dużo lepsze.

## Zastosowanie kompresji w praktyce

**Kompresja stratna**: JPEG, mp3, mp4, róźne protokoły Bluetooth

**Kompresja bezstratna**: PNG, zip, FLAC (audio)
