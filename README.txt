# Strona odliczania — instrukcja

## Pliki w repozytorium
- `index.html` — strona główna (widoczna dla wszystkich)
- `style.css` — style
- `script.js` — logika odliczania (ładuje config.json)
- `config.json` — WSPÓLNY plik ustawień (wszyscy go widzą)
- `admin.html` — panel administracyjny (Tylko dla Ciebie!)

## Jak to działa
Strona główna (`index.html`) przy każdym odświeżeniu pobiera plik `config.json` z repozytorium. Dzięki temu wszyscy odwiedzający widzą identyczne dane.

Panel admina (`admin.html`) pozwala edytować `config.json` bezpośrednio w repozytorium przez GitHub API.

## Szybki start

### 1. Wgraj pliki na GitHub
Wgraj WSZYSTKIE 5 plików do repozytorium i włącz GitHub Pages (Settings → Pages → Branch: main).

### 2. Wygeneruj GitHub Token (raz)
Musisz to zrobić tylko raz:
1. Wejdź na github.com → kliknij swój awatar (prawy górny róg) → **Settings**.
2. W lewym menu na samym dole: **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
3. Kliknij **Generate new token (classic)**.
4. Nadaj nazwę np. "Countdown Admin".
5. Zaznacz zakres: **repo** (w sekcji "repo" zaznacz wszystko lub przynajmniej "public_repo" jeśli repo jest publiczne).
6. Kliknij **Generate token** na dole.
7. **SKOPIUJ TOKEN OD RAZU** — GitHub pokaże go tylko raz!

### 3. Użyj panelu admina
1. Wejdź na: `https://TWOJ-LOGIN.github.io/NAZWA-REPO/admin.html`
2. Wypełnij formularz (data, nazwa wydarzenia, tekst daty).
3. Wklej swój GitHub Token w ostatnie pole.
4. Kliknij **Zapisz w repozytorium**.
5. Gotowe! Zmiany będą widoczne po 30-60 sekundach (tyle GitHub Pages potrzebuje na przebudowanie strony).

## Bezpieczeństwo
- Token jest przechowywany tylko w pamięci przeglądarki (sessionStorage) i znika po zamknięciu karty.
- Panel admina nie jest linkowany z głównej strony — zna go tylko osoba, która zna adres.
- Nie udostępniaj tokena nikomu — działa on jak hasło do Twojego repozytorium.

## Zmiana domyślnych ustawień bez panelu
Możesz też edytować plik `config.json` bezpośrednio na GitHubie (przycisk "Edit this file" w przeglądarce).
