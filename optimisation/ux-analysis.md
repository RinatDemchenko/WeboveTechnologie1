# UX Analýza webovej stránky Skupiny 3

## Čo je UX?

UX (User Experience - Používateľská skúsenosť) je všetko o tom, ako sa používateľ cítí pri používaní stránky. Cieľ je aby bola stránka jednoduchá, pekná a príjemná na používanie.

---

## UX Riešenia použité na stránke

### 1. Intuitívna navigácia

**Problém:** Používateľ neví, kam prejsť ku inym strankam.

**Naše riešenie:**

- Header (horný panel) je viditeľný všade
- Jasné menu s 3 položkami: Rozloženie, Zmeny, Záľuby
- Aktívna stránka je zvýraznená (aria-current="page")
- Na mobily sa menu skryje do hamburger menu (☰) - resp. šetrí miesto
- Footer má odkazy na ostatné stránky - používateľ sa vždy môže vrátiť

**Prínos:** Používateľ vždy vie, kde je a ako prejsť inde.

---

### 2. Jasná vizuálna hierarchia

**Problém:** Príliš veľa textu bez štruktúry je ťažko čitateľné.

**Naše riešenie:**

- **Veľké nadpisy (H1, H2)** - uprieť pozornosť na hlavnú tému
- **Rôzne veľkosti textu** - nadpisy sú väčšie ako podtitulky, podtitulky väčšie ako normálny text
- **Farby a ikony** - rozdelenie informácií
- **Odsek a riadkovanie** - text nie je zahusteným blokom
- **Maximálna šírka textu** - text nie je príliš dlhý na riadku (ľahšie sa číta)

**Prínos:** Stránka je čitateľná a ľahko sa v nej orientuje.

---

### 3. Vizuálne spätnoväzby a interakcie

**Problém:** Používateľ neví, či je tlačidlo klikateľné alebo na čo sa dialo po jeho kliknutí.

**Naše riešenie:**

- **Tlačidlá majú hover efekt** - keď prejdete myšou, tlačidlo sa zmení farbu
- **Flip kartičky na Záľuboch** - keď prejdete myšou, kartička sa otočí a ukáže detaily
- **Transitions** - glatké animácie namiesto prudkých zmien
- **Box shadows** - kartičky a prvky majú tieň, čo ich robí "zdvihnutými" z pozadia

**Prínos:** Stránka je interaktívna a zaujímavá, používateľ vie, čo sa deje.

---

### 4. Jasné CTA (Call-to-Action) tlačidlá

**Problém:** Používateľ nemusí vedieť, kam kliknúť, aby sa dozvedel viac.

**Naše riešenie:**

- V hero sekcii sú dva jasné tlačidlá:
  - "Hobby tímu" - prevádza na stránku s koníčkami
  - "Zoznam zmien" - prevádza na stránku s históriou zmien
- Tlačidlá majú jasný text s ikonami
- Jeden tlačidlo je primárne (plná farba), druhé sekundárne (odsadené)
- Tlačidlá sú dostatočne veľké na klikanie na mobily

**Prínos:** Používateľ ľahko vie, kde nájsť ďalšie informácie.

---

### 5. Čítateľnosť a kontrast

**Problém:** Slabý kontrast medzi textom a pozadím je ťažko čitateľný.

**Naše riešenie:**

- **Tmavý text na svetlom pozadí** - primárny text je čierny/tmavý šedý
- **Svetlý text na tmavom pozadí** - v niektorých sekcií je text svetlý
- **Dostatočný kontrast** - text a pozadie sa jasne líšia
- **Farebná paleta** - používame harmonické farby (oranžová, šedá, biela)

**Prínos:** Všetci ľudia, vrátane tých s poruchami videnia, môžu stránku čítať.

---

### 6. Responsive design

**Problém:** Stránka vyzerá blbučko na mobily.

**Naše riešenie:**

- Stránka sa automaticky prispôsobuje veľkosti obrazovky
- Na mobily sa prvky "skomprimujú" do jedného stĺpca
- Písmo sa automaticky zmenšuje/zväčšuje
- Tlačidlá sú dostatočne veľké na dotykovom displeji (aspoň 44x44px)
- Bez horizontálneho scrollovania (scrolovania do strán)

**Prínos:** Stránka funguje na všetkých zariadeniach - telefóny, tablety, počítače.

---

### 7. Priaznivý loading

**Problém:** Stránka sa načítava pomaly alebo flakuje.

**Naše riešenia:**

- **Optimalizované obrázky** - obrázky sú vo vhodnej veľkosti a formáte
- **Minimálny CSS a JavaScript** - len potrebný kód
- **CSS Font Loading** - fonty sa načítavajú z Google Fonts (vychytané správne)
- **Lazy Loading** - obrázky sa načítavajú až keď sú viditeľné (budúce vylepšenie)

**Prínos:** Stránka sa rýchlo načítava a nie je pomalá.

---

### 8. Accessibility (Prístupnosť)

**Problém:** Niektorí používatelia majú postihnutie a potrebujú špeciálne funkcie.

**Naše riešenia:**

- **Alt text na obrázkoch** - ak obrázok nefunguje, ide text
- **ARIA atribúty** - pre screen readers (čítačky textu)
- **Semantic HTML** - používame správne tagi (<header>, <nav>, <main>, <footer>)
- **Dostatočný kontrast** - pre ľudí s probémami videním
- **Zoom in** - stránka musí funguje i keď si je používateľ zväčší text na 200%

**Prínos:** Stránka je prístupná pre všetkých.

---

### 9. Vizuálna identita

**Problém:** Stránka bez štýlu vyzerá nudne.

**Naše riešenia:**

- **Konzistentní farebná paleta** - všetky farby sa opakovajú na všetkých stránkach
- **Typografia** - font "Inter" je moderný a čitateľný
- **Ikony** - používame Phosphor Icons, ktoré sú pekné a konzistentné
- **Spacing** - jednotné odstupy medzi prvkami
- **Zaoblené rohy** - všetky "boxy" majú zaoblené rohy, čo je moderné a príjemné

**Prínos:** Stránka vyzerá profesionálne a moderné.

---

### 10. Názornosť údajov

**Problém:** Zdĺhavý text je nudný.

**Naše riešenia:**

- **Ikony s textom** - namiesto samotného textu máme ikony + text
- **Kartičky** - informácie sú rozdelené do malých, prehľadných kúskov
- **Obrázky** - použitie obrázkov na rozprúdenie textu
- **Flip efekt** - interaktívny prvok, ktorý zaujme

**Prínos:** Informácie sú zábavne prezentované a ľahše sa zapamätajú.

---

### 11. Sociálny dôkaz (Social Proof)

**Problém:** Používateľ nevie, či je stránka dôveryhodná.

**Naše riešenia:**

- **Členovia tímu** - zobrazenie skutočných ľudí za projektom (s fotkami a menami)
- **Záľuby a osobnosti** - humanizácia tímu
- **Zoznam zmien** - transparentnosť, čo sa robilo
- **Git repository odkaz** - všetok kód je verejný a dostupný

**Prínos:** Používateľ vie, kto za tým stojí a vie, že je to vážne.

---

### 12. Microcopy

**Problém:** Návody a texty sú nudné alebo nejasné.

**Naše riešenia:**

- **Jasné nadpisy** - čo sa na stránke nachádza (napr. "Čo sme sa naučili")
- **Kľúčové slová** - v prvých riadkoch sú najdôležitejšie informácie
- **Podtitulky** - krátke popisy sekcií
- **Jasní tlačidlá** - "Hobby tímu" a "Zoznam zmien" sú jasne pomenované

**Prínos:** Používateľ ľahko chápe obsah bez dlhého čítania.

---

### 13. Zoom ovládač (Zmeny stránka)

**Problém:** Niektorí používatelia potrebujú väčší text.

**Naše riešenia:**

- **Zoom tlačidlá (-, Reset, +)** - používateľ môže meniť veľkosť textu
- **Zoom select** - možnosť vybrať si konkrétnu veľkosť (70%, 100%, 130% atď.)
- **ARIA live region** - čítačky textu upozornia na zmenu veľkosti

**Prínos:** Ľudia s poruchami videním alebo staršia populácia si môžu zväčšiť text.

---

### 14. Farby a psychológia

**Problém:** Farby majú psychologický vplyv na ľudí.

**Naše riešenia:**

- **Oranžová** - energia, teplo, prívätivosť
- **Biela** - čistota, jednoduchosť
- **Šedá** - stabilita, profesionalita
- **Teplá paleta** - stránka pôsobí prívätivo a profesionálne

**Prínos:** Farby vyvolávajú pozitívne emócie.

---

### 15. Error Handling a Validácia

**Problém:** Ak sa niečo pokazí, používateľ nemusí vedieť.

**Naše riešenia:**

- **Responsive obrázky** - ak obrázok nefunguje, má alt text
- **Fallback fonty** - ak Google Fonts nefunguje, padne sa na Systemfonty
- **CSS fallbacks** - staršie prehliadače budú mať aspoň základný štýl

**Prínos:** Stránka je stabilná a odolná voči chybám.

---

## Sumár UX princípov

| Princíp              | Riešenie                  | Prínos        |
| -------------------- | ------------------------- | ------------- |
| Intuitívna navigácia | Jasné menu + footer       | Orientácia    |
| Hierarchia           | Rôzne veľkosti textu      | Čitateľnosť   |
| Spätná väzba         | Hover efekty, flip        | Interaktivita |
| CTA tlačidlá         | Jasné a viditeľné         | Konverzia     |
| Kontrast             | Tmavý text na svetlom     | Dostupnosť    |
| Responsive           | Prispôsobenie zariadeniam | Všestrannosť  |
| Performance          | Optimalizácia             | Rýchlosť      |
| Accessibility        | ARIA, semantic HTML       | Dostupnosť    |
| Identita             | Farby, typografia, ikony  | Vernosť       |
| Názornosť            | Kartičky, ikony, obrázky  | Zábava        |
| Social Proof         | Členovia, história        | Dôveryhodnosť |
| Microcopy            | Jasné texty               | Pochopenie    |
| Zoom                 | Ovládač veľkosti          | Inkluzívnosť  |
| Farby                | Psychológia farieb        | Emócie        |
| Odolnosť             | Fallbacks a validácia     | Stabilita     |

---

## Budúce vylepšenia UX

1. **Dark Mode** - tmavý režim pre nočné čítanie
2. **Viacjazyčnosť** - podpora ďalších jazykov
3. **Lazy Loading obrázkov** - rýchlejší loading
4. **PWA (Progressive Web App)** - stránka ako aplikácia
5. **Notifikácie** - oznamovanie nových zmien
6. **Personalizácia** - pamätanie si preferencií používateľa
7. **Search** - vyhľadávanie obsahu
8. **Comments** - komentáre od návštevníkov
9. **Analytics** - sledovanie, ako ľudia používajú stránku
10. **A/B testing** - testovanie rôznych verzií

---

## Záver

Táto webová stránka bola vytvorená s dôrazom na:

- **Jednoduchosť** - bez zbytočných prvkov
- **Prívätivosť** - teplé farby a moderný dizajn
- **Dostupnosť** - pre všetkých, bez ohľadu na zariadenie alebo schopnosti
- **Kvalita** - profesionálny vzhľad a rýchly loading

Cieľ bol vytvoriť stránku, na ktorej sú ľudia šťastní a chcú ju používať. Myslíme si, že sa nám to podarilo! 🎉
