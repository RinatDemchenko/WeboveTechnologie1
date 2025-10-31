# Inštrukcie pre tímovú prácu

## Spolupráca pomocou git

### 1: Pošlite mi svoje gh meno

Pošlite mi svoje **GitHub používateľské meno** v Discord, aby som vás mohol pridať ako collaborators do repozitára.

### 2: Klonujte repozitar

```bash
git clone https://github.com/RinatDemchenko/WeboveTechnologie1.git
cd WeboveTechnologie1
```

### 3: Prepnite na svoju vetvu

```bash

git checkout -b nazov-vasej-vetvu

# Príklad pre vetvu "zaluby"
git checkout -b zaluby
```

### 4: Vykonajte zmeny

Upravte potrebné súbory podľa vašej úlohy v projekte.

### 5: Vytvorte commit

```bash
# Pridanie všetkých zmenených súborov
git add .

# Alebo pridanie konkrétnych súborov
git add nazov-suboru.html

# Vytvorenie commitu
git commit -m "Popis vašich zmien"
```

**Poznámka:** Môžete vytvárať commity aj pred tým, ako budete mať hotový výsledok. To pomôže ukázať vašu históriu zmien (aby ste sa vyhli podozreniam z používania AI) a vytvoriť zálohy, aby ste nestratili hotové časti kódu v prípade, že náhodne niečo nespravne zmeníte.

### 6: Zapíšte zmeny do svojej vetvy origin repozitára

```bash
# Push vašej vetvy na GitHub
git push origin nazov-vasej-vetvy

# Príklad:
git push origin zaluby
```

### 7: Vytvorte Pull Request

1. Choďte na https://github.com/RinatDemchenko/WeboveTechnologie1
2. V rozhraní githubu prejdite na vašu vetvu a kliknite na tlačidlo **"Contribute"** -> **"Open pull request"**
3. Pridajte popis vašich zmien
4. Kliknite na **"Create pull request"**

---

## Alternatívna možnosť

Ak z akéhokoľvek dôvodu nemôžete pracovať s Git/GitHub:

1. Stiahnite si repozitár ako ZIP:
   - Kliknite na zelené tlačidlo **"Code"** → **"Download ZIP"**
2. Rozbaľte archív a urobte svoje zmeny
3. Pošlite mi zmenené súbory priamo cez discord

**Odporúčanie:** Preferujem spôsob práce cez Git/Github, pretože mi uľahčuje monitorovanie zmien v kode a s ním je viditeľná história aktualizácií v projekte.
