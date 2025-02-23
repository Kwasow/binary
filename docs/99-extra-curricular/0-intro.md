---
sidebar_position: 1
---

# Wstęp

Na fakultecie będziemy uczyli się pracy w technologii React, która pozwala
budować nowoczesne aplikacje przeglądarkowe (strony internetowe). Przy pomocy
jej rozszerzenia, jakim jest react-native, można także tworzyć aplikacje
mobilne.

Nauczymy się także korzystać z różnych narzędzi informatycznych, takich jak:

- menadżery pakietów: `npm`, `yarn`,
- środowiska programistyczne: VS Code,
- synchronizacja kodu przy pomocy narzędzia `git` oraz jego zastosowanie w
  serwisach Github i Gitlab,
- projektowanie aplikacji: Material Design,
- praca w środowisku Linuxa.

## Instalacja środowiska node

Pracować będziemy w środowisku Linuxa, ale instalacja tego systemu nie jest
konieczna - można również skonfigurować wirtualne środowisko w Windowsie przy
pomocy WSL (Windows Subsystem for Linux).

W obu przypadkach będziemy potrzebowali edytora [VS Code](https://code.visualstudio.com/),
który można zainstalować ze Sklepu Microsoft (Windows) lub z menadżera pakietów
dostępnego w naszej dystrybucji (Linux).

### Windows

Aby zainstalować Ubuntu przy pomocy WSL na Windowsie 10 lub nowszym należy
uruchomić Terminal (PowerShell) z uprawnieniami administratora a nastepnie
wpisać polecenie:

```PowerShell
wsl --install
```

Spowoduje to zainstalowanie komponentu WSL w Windowsie oraz obrazu Ubuntu,
który będziemy uruchamiać dzięki WSL. Po zakończeniu instalacji należy uruchomić
nowo zainstalowany program "Ubuntu" i założyć nowe konto zgodnie z instrukcjami
na ekranie.

Czarne okienko, które zobaczymy, to tak zwany "terminal". Jest podstawą działania
Linuxa i najbardziej podstawowym narzędziem każdego programisty. Płynne poruszanie
się w nim jest bardzo przydatne i usprawnia pracę, ale nie musimy się przejmować,
jeśli nie wszystko będzie od początku jasne. Linux posiada również środowisko
graficzne (np. [Gnome](https://www.gnome.org/), [KDE](https://kde.org/) i wiele
innych), ale wersja zainstalowana przy pomocy WSL nie ma możliwości uruchamiania
programów graficznych i udostępnia tylko terminal.

Po zainstalowaniu edytora Visual Studio Code (niebieska ikonka, nie mylić z
Visual Studio, które jest zupełnie innym edytorem z fioletową ikonką) konieczna
jest instalacja rozszerzenia "WSL".

### Ubuntu/WSL

Poniżej znajdują się polecenia, które należy wpisać w terminalu, wraz z opisami.
Linijki zaczynające się od znaku `#` to komentarze i nie są wykonywane.

:::warning

`sudo` to polecenie, które pozwala wykonywać inne polecenia z uprawnieniami
administratora (administratorem w Linuxie jest użytkownik `root`). Wykonywanie
nieznanych programów i poleceń z `sudo` jest niebezpieczne i może trwale
uszkodzić nasz system. Należy zachować ostrożność przy wykonywaniu jakichkolwiek
poleceń z użyciem `sudo`.

Jeśli chcemy sprawdzić, jak działa `sudo`, możemy wykonać poniższy przykład:

```bash
# Polecenie whoami wypisze nazwę naszego użytkownika
whoami
# Jeśli teraz wykonamy to samo polecenie z sudo, to wypisze się nazwa użytkownika
# "root"
sudo whoami
```

:::

```bash
# 1. curl - narzędzie służące do pobierania rzeczy z internetu, w tym wypadku
#    pobieramy skrypt instalacyjny i zapisujemy go jako setup.sh (flaga -o to
#    skrót od angielskiego output)
curl -fsSL https://deb.nodesource.com/setup_22.x -o setup.sh
# 2. chmod  - (ang. change mode) umożliwia zmianę uprawnień pliku, pliki mają
# trzy typy uprawnień: r - read, w - write i x - execute
sudo chmod +x setup.sh
# 3. uruchamiamy pobrany scrypt (rozszerzenie .sh oznacza "shell script")
sudo ./setup.sh
# 4. apt - program, który służy do zarządzania pakietami w Ubuntu i który
#    udostępnia różne operacje, między innymi: update - pobierz listę najnowszych
#    dostępnych wersji programów, upgrade - zaktualizuj zainstalowane programy,
#    install - zainstaluj nowy program
# Program może zapytać nas, czy potwierdzamy operację - można wtedy na klawiaturze
# kliknąć "y", żeby potwierdzić, lub "n", żeby anulować. Opcja zapisana wielką
# literą (w tym wypadku "Y"), to opcja domyślna i zostanie wykonana po naciśnięciu
# klawisza enter
sudo apt update
sudo apt upgrade
sudo apt install nodejs
# 5. node - zainstalowany przez nas program nodejs, zawiera polecenie node,
#    które umożliwia uruchamianie programów napisanych w języku JavaScript. Opcja
#    -v pozwala sprawdzić wersję programu. Robimy to, żeby upewnić się, że
#    program się zainstalował
node -v
```

### Inny Linux

W przypadku jeżeli korzystamy z innej wersji Linuxa niż Ubuntu, należy zainstalować
środowisko `nodejs` zgodnie z instrukcją dla swojego systemu operacyjnego.

## System kontroli wersji - `git`

Standardem w pracy programisty jest korzystanie z systemów kontroli wersji,
z którym najpopularniejszy jest `git`. Narzędzia te pozwalają na zapisywanie
kopii zapasowej kodu na zdalnym serwerze oraz na pracę wielu osób nad tym
samym projektem jednocześnie.

Istnieje wiele serwisów, które udostępniają serwer, przez którym można
przechowywać kopię zapasową kodu - niektóre z nich to [GitHub](https://github.com),
[Gitlab](https://gitlab.com) i BitBucket[https://bitbucket.org]. Funkcje dostępne
w każdym z nich nieznacznie się różnią, ale podstawowe funkcje są darmowe w
każdym z nich.

Więcej o gicie dowiemy się później, na razie wystarczy nam wiedzieć, że działa
podobnie jak wspólne edytowanie dokumentu na Google Docs, ale przechowuje
pełną historię zmian i pozwala przeglądać lub przywracać stare wersje kodu.

Przykładowy projekt, na którym będziemy pracować na zajęciach można pobrać
poleceniem:

```bash
git clone https://github.com/Kwasow/startowa-examples.git
```

## Struktura projektu - React

Technologia, której będziemy się uczyć nazywa się [React](https://react.dev/) i
pozwala na tworzenie stron internetowych przy pomocy języka JavaScript lub
TypeScript (JavaScript nie ma nic wspólnego z Javą!). Proszę pobrać przykładowy
projekt zgodnie z instrukcją z poprzedniego podpunktu, a nastepnie przejść
dalej. Projekt znajduje się w katalogu `template/`

Aby otworzyć projekt w edytorze VS Code, możemy:

- **na Linuxie** otworzyć program VS Code a następnie wybrać `Plik` > `Otwórz folder`
- **na Windowsie z WSL** otworzyć `Ubuntu`, następnie wejść do odpowiedniego
  katalogu i wpisać `code .` - spowoduje to otwarcie aktualnego katalogu w edytorze
  VS Code.

:::info

Nawigacja po plikach i katalogach w terminalu jest możliwa dzięki poniższym
poleceniom:

- `pwd` - (od _print work directory_) wypisuje ścieżkę do katalogu, w którym
  aktualnie się znajdujemy,
- `ls` - wypisuje pliki i foldery w aktualnym katalogu,
- `cd [nazwa]` - wchodzi do podanego katalogu.

Dodatkowo:

- `.` oznacza aktualny katalog,
- `..` - oznacza katalog wyżej.

:::

### Plik `package.json`

Plik `package.json` znajduje się zawsze w katalogu głównym projektu i go opisuje.
Opisany jest w formacie JSON, w którym najważniejsze są dla nas wartości zapisane
jako:

- `name` - nazwa projektu,
- `scripts` - definicje poleceń, które można wykonać wewnątrz projektu,
- `dependencies` - lista zależności (bibliotek), z których korzysta projekt,
- `devDependencies` - lista zależności (bibliotek), które są potrzebne w trakcie
  tworzenia projektu, ale po jego udostępnieniu już nie.

W pliku `package.json` może występować dużo więcej pól, ale na razie nie są one
dla nas istotne.

### Menadżer pakietów `npm`

`npm` to program, który jest częścią pakietu `nodejs`, który zainstalowaliśmy
wcześniej. Jego nazwa to skrót od _node package manager_. Pozwala on na zarządzanie
zależnościami i wykonywanie poleceń zdefiniowanych w `package.json` pod kluczem
`scripts`.

Pierwszą rzeczą, którą zawsze należy zrobić po pobraniu kodu źródłowego projektu,
jest zainstalowanie jego zależności poleceniem:

```bash
npm install
```

Po wykonaniu tego polecenia powstanie plik i katalog:

- plik `package-lock.json` - jego treść jest z początku podobna do `package.json`,
  jednak w którymś momencie zaczynają się pojawiać nowe elementy - definicje
  konkretnych zależności, które zostały zainstalowane, wraz z ich konkretnymi
  wersjami, sumami kontrolnymi i adresami, z których zostały zainstalowane. Jest
  to konieczne, ponieważ wersje zależności zwykle podajemy "miękko", np. `^7.1.2`.
  Symbol `^` oznacza, że zgadzamy się na zainstalowanie dowolnej wersji nowszej
  niż `7.1.2`, ale starszej niż `8.0.0`. Jeśli w projekcie istnieje już plik
  `package-lock.json`, to `npm install` instaluje konkretne wersje w nim zapisane,
  a nie te spełniające definicję wersji w pliku `package.json`. Pozwala to uniknąć
  sytuacji, w których programiści mają zainstalowane różne wersje bibliotek na
  swoich komputerach, przez co dochodzi do błędów.
- katalog `node_modules` - jest to katalog, w którym zostały zainstalowane wszystkie
  zależności projektu zdefiniowane w `package.json`. Jeśli przyjrzymy się
  zawartości tego katalogu, to będzie w nim dużo więcej podkatalogów, niż się
  spodziewamy, ponieważ każda zależność (biblioteka), którą zainstalowaliśmy,
  sama też ma swoje zależności, które zostały tutaj zainstalowane.

Żeby wykonać polecenia zdefiniowane pod kluczem `scripts` należy skorzystać z
polecenia `npm run` i podać nazwę skryptu, przykładowo, żeby uruchomić projekt,
należy wpisać:

```bash
npm run dev
```

Po uruchomieniu tego polecenia, w terminalu program wypisze adres, pod którym
dostępna jest lokalna wersja naszej strony internetowej.

Jeśli będziemy chcieli dodać jakieś zależności do naszego projektu, to możemy do
tego użyć polecenia `install`, np.:

```bash
# Aby zainstalować bibliotekę styled-components
npm add styled-components
# Aby zainstalować narzędzie do automatycznego formatowania kodu, w sekcji
# devDependencies w pliku `package.json`
npm add --save-dev prettier
```

### Pozostałe pliki

**Katalog `public`**, w którym umieszczamy statyczne pliki związane z naszym
projektem, np. zdjęcia, dokumenty czy zawartość audio.

**Katalog `app`**, w którym znajduje się kod naszej strony internetowej. Możemy
zwrócić szczególną uwagę na pliki:

- `app/routes.tsx`, w którym zdefiniowane są ścieżki naszej strony internetowej
  (na razie jest to tylko jedna ścieżka główna `index`),
- `app/routes/home.tsx`, w którym zdefiniowany jest jeden domyślny widok `Home`,
  który wyświetla się po otwarciu naszej strony internetowej.
