# **Bowling Booking Application**

En bokningsapplikation för bowling som tillåter användare att boka banor, ange antal personer och deras skostorlekar, och hantera bokningar.

## **Innehållsförteckning**

- [Om Projektet](#om-projektet)
- [Funktioner](#funktioner)
- [Använda Teknologier](#använda-teknologier)
- [Struktur](#struktur)
- [Hur Det Fungerar](#hur-det-fungerar)
- [Lärdomar](#lärdomar)

---

## **Om Projektet**

Detta projekt är ett verktyg för att enkelt boka bowlingbanor online. Det innehåller funktioner som låter användare välja datum, tid, banor och ange detaljer som skostorlekar för alla deltagare. Projektet är byggt med fokus på enkel användning och responsiv design.

---

## **Funktioner**

- Val av datum och tid för bokning.
- Dynamisk validering av antal spelare och skostorlekar.
- Automatisk beräkning av banor beroende på antal spelare.
- Visning av felmeddelanden om användaren inte fyllt i obligatoriska fält.
- Responsivt gränssnitt.

---

## **Använda Teknologier**

- **Frontend:**
  - React med TypeScript
  - React Router
  - Vanilla CSS för design

---

## **Struktur**

- **React-Komponenter:**

  - `BookingForm` – Huvudkomponenten för bokning.
  - `WhenForm` – Hanterar val av datum och tid.
  - `ShoesForm` – Samlar in skostorlekar.
  - `DynamicButton` – Dynamisk knapp för att hantera bokningsklick.

- **Backend:**  
  Hur man arbetar med en backend som man själv inte har skapat och fått jobba med mer response för att skicka data och "hämta" till confirmation page.

---

## **Hur Det Fungerar**

1. **Steg 1:** Användaren anger datum, tid och antal spelare.
2. **Steg 2:** Applikationen kontrollerar om bokningen följer reglerna, t.ex. max fyra spelare per bana.
3. **Steg 3:** Användaren fyller i skostorlekar för alla deltagare.
4. **Steg 4:** När allt är korrekt ifyllt skickas bokningsdata till backend via API.
5. **Steg 5:** Backend validerar och sparar bokningen i DynamoDB.

---

## **Lärdomar**

Under projektet har jag:

- Förstått hur man använder `useEffect`, `useState`, för att hantera dynamisk validering.
- Fått träna mer på `typescript` och typning
- Förbättrat mina kunskaper i responsiv design och komponentarkitektur.
