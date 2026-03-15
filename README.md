# michiwuerzer.ch — Personal Branding Site

## 🚀 Deployment in 10 Minuten

### Schritt 1: GitHub Repository erstellen
1. Gehe auf **github.com** → "New Repository"
2. Name: `michi-site` (oder `michiwuerzer.ch`)
3. Public oder Private — beides funktioniert
4. **Nicht** "Add a README" ankreuzen

### Schritt 2: Code hochladen
**Option A: Via GitHub Web-Upload (einfachster Weg)**
1. Entpacke diesen ZIP-Ordner
2. Auf deinem neuen Repo: "uploading an existing file" klicken
3. Alle Dateien reinziehen (drag & drop)
4. "Commit changes" klicken

**Option B: Via Terminal (falls Git installiert)**
```bash
cd michi-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/michi-site.git
git push -u origin main
```

### Schritt 3: Vercel verbinden
1. Gehe auf **vercel.com** → "Sign Up" mit deinem GitHub-Account
2. "Add New Project" → Wähle dein `michi-site` Repo
3. Framework: **Vite** (wird automatisch erkannt)
4. "Deploy" klicken
5. ✅ Fertig! Deine Site ist live unter `michi-site.vercel.app`

### Schritt 4: Eigene Domain verbinden
1. Domain kaufen: z.B. `michiwuerzer.ch` bei **Infomaniak** oder **Hostpoint** (~CHF 15/Jahr)
2. In Vercel: Settings → Domains → deine Domain eingeben
3. DNS-Einträge bei deinem Domain-Anbieter setzen (Vercel zeigt dir genau was)
4. ✅ Deine Site läuft unter `michiwuerzer.ch`

---

## 📸 Foto einfügen
1. Lege dein Foto als `michi.jpg` in den `/public/` Ordner
2. In `src/App.jsx` im Hero-Bereich:
   - Lösche den Block `{/* OPTION A: Placeholder */}` komplett
   - Entferne die Kommentare um `{/* OPTION B: Echtes Foto */}`
3. Push → Vercel deployed automatisch

## ✏️ Inhalte ändern
Alle Texte sind direkt in `src/App.jsx` — einfach ändern und pushen.
Vercel baut automatisch bei jedem Push neu.

## 🏃 Lokal testen (optional)
```bash
npm install
npm run dev
```
Öffnet auf `http://localhost:5173`

---

## Domain-Empfehlungen für die Schweiz
| Domain | Preis/Jahr | Anbieter |
|--------|-----------|----------|
| `michiwuerzer.ch` | ~CHF 15 | Infomaniak, Hostpoint |
| `michiwuerzer.com` | ~CHF 12 | Infomaniak, Namecheap |
| `wuerzer.dev` | ~CHF 14 | Google Domains, Namecheap |
