# Adaptívnosť webovej stránky Skupiny 3

## Úvod

Táto webová stránka bola navrhnutá tak, aby vyzerala výborne na všetkých zariadeniach - od malých mobilných telefónov až po veľké desktopové obrazovky. Používame tzv. "responsive design" prístup, kde sa stránka prispôsobuje veľkosti obrazovky.

---

## Zariadenia a rozlíšenia

Webová stránka je optimalizovaná pre nasledujúce veľkosti obrazoviek:

- **Mobily (700px a menej)** - Malé telefóny a starší mobily
- **Tablety (900px)** - Väčšie tablety a malé notebooky
- **Počítače (1300px)** - Štandardné desktopové monitory
- **Veľké obrazovky (1600px a viac)** - Veľké monitory a ultra-wide displeje

---

## Stránka 1: Rozloženie (index.html)

### Mobilná verzia (do 700px)

**Hlavička:**

- Hamburger menu (☰) sa aktivuje na malých obrazovkách
- Navigačné odkazy sa skryjú a zobrazia sa v dropdown menu

**Hero sekcia (úvodný blok):**

- Text a obrázok sú umiestnené pod sebou (jeden pod druhým)
- Obrázok sa zmenší na 250x250px
- Tlačidlá sú vedľa seba alebo pod sebou podľa miesta

**Sekcia "Čo sme sa naučili":**

- 3 kartičky sa zobrazujú v jednom stĺpci (jedna pod druhou)
- Každá kartička je úplne viditeľná a čitateľná
- Ikony a text majú väčšie odstupy

**Členovia tímu:**

- Fotky sa zobrazujú v jednom stĺpci namiesto gridu
- Obrázky sú menšie, ale stále kvalitné
- Text je dobré čitateľný

**Footer:**

- Odkazy sú pospájané vertikálne
- Všetok text je citateľný bez zoomov

### Tablet verzia (700px - 900px)

**Zmeny oproti mobilu:**

- Obrázok v hero sekcii sa zväčší na 400x400px
- Sekcia "Čo sme sa naučili" zostáva v jednom stĺpci
- Členovia sa zobrazujú v 2 stĺpcoch (2 fotky vedľa seba)
- Padding (odstupy) sa zvyšujú pre lepšie rozdelenie

### Desktop verzia (900px a viac)

**Finálna verzia:**

- Hero sekcia: text vedľa obrázka (klasické rozloženie)
- Sekcia "Čo sme sa naučili": všetky 3 kartičky vedľa seba (3 stĺpce)
- Členovia: 5 stĺpcov alebo viac podľa veľkosti
- Maximálna šírka stránky je limitovaná na `container` class
- Písmo je väčšie a čitateľnejšie

---

## Stránka 2: Zmeny (zmeny.html)

### Mobilná verzia (do 700px)

**Hero blok (Zmeny nadpis):**

- Nadpis je veľký, ale automaticky sa zmenšuje na menších obrazovkách
- Ovládač veľkosti textu (pilulka s tlačidlami -/+) sa zmení na menší dizajn
- Tlačidlá sú vedľa seba, ale s menšími odstupy

**Zoznam zmien (čo sa zmenilo):**

- Každá položka sa zobrazuje v jednom stĺpci
- Ikona, text a autor sú umiestnení pod sebou
- Padding sa zmenší z 30px na 20px pre úspornosť miesta

**Zoom kontrol:**

- Odstupy medzi tlačidlami sa zmenšia
- Select box pre výber veľkosti sa zobrazuje na novom riadku ak treba

### Tablet verzia (700px - 900px)

**Zmeny:**

- Výška hero sekcie sa zmenšuje
- Položky v zozname sú stále v jednom stĺpci, ale s väčšími odstupy (25px padding)
- Zoom bar má viac miesta

### Desktop verzia (900px a viac)

**Finálna verzia:**

- Hero sekcia má štandardné odstupy (80px navrchu a dnu)
- Zoznam zmien je v klasickom dvojstĺpcovom formáte
- Všetky prvky majú svoje optimálne veľkosti

---

## Stránka 3: Záľuby (zaluby.html)

### Mobilná verzia (do 700px)

**Kartičky so záľubami:**

- Kartičky sa zobrazujú v jednom stĺpci
- Každá kartička má výšku 380px
- Flip efekt (otočenie karty) funguje aj na mobily
- Odstupy sa zmenšia

**Obrázky:**

- Proporcia obrázka je 4:3 (štandardný formát)
- Obrázok je responzívny a prispôsobuje sa šírke

### Tablet verzia (700px - 900px)

**Zmeny:**

- Kartičky sa zobrazujú v 2 stĺpcoch vedľa seba
- Odstupy sa zvyšujú

### Desktop verzia (900px a viac)

**Finálna verzia:**

- Kartičky sú v klasickom gridu s auto-fit (automaticky sa prispôsobujú počtu na riadku)
- Minimálna šírka kartičky je 260px
- Odstupy medzi karticami sú veľké (2rem = 32px)

---

## Ako to technicky funguje

### CSS Media Queries

Používame CSS `@media` pravidlá, ktoré zmenia štýly podľa veľkosti obrazovky:

```css
@media (max-width: 700px) {
  /* štýly pre malé mobily */
}

@media (max-width: 900px) {
  /* štýly pre tablety */
}

@media (min-width: 1300px) {
  /* štýly pre väčšie obrazovky */
}
```

### Flexbox a Grid

- **Flexbox** - používame na usporiadanie prvkov v riadkoch/stĺpcoch
- **Grid** - používame na membrov a kartičky, lebo je flexibilnejší


### Viewport Meta Tag

Na všetkých stránkach máme:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Toto hovorí prehliadaču, aby sa prispôsobil veľkosti zariadenia.

---

## Súbory s CSS pravidlami

- `styles/globals.css` - všeobecné štýly pre všetky stránky
- `styles/index.css` - štýly pre stránku Rozloženie
- `styles/zmeny.css` - štýly pre stránku Zmeny
- `styles/zaluby.css` - štýly pre stránku Záľuby
- `styles/responsiveness/responsive-700.css` - štýly pre mobily
- `styles/responsiveness/responsive-900.css` - štýly pre tablety
- `styles/responsiveness/responsive-1300.css` - štýly pre väčšie obrazovky
- `styles/responsiveness/responsive-1600.css` - štýly pre veľmi veľké obrazovky

---

## Zaujímavosti

- Všetky animácie (hover efekty, flip kartičky) fungujú aj na dotykovom displeji
- Klikateľné prvky sú dostatočne veľké (aspoň 44x44px) pre pohodlné klikanie na mobily
- Farby a kontrast sú optimalizované na čitateľnosť
- Webová stránka sa načítava rýchlo aj na pomalších mobilných sieťach
