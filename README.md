# ♻ ZeroWasteDrop

**ZeroWasteDrop** is a hyperlocal, community-powered app that maps donation and recycling spots in real time. 
Designed to promote sustainable habits and reduce overflow, it connects citizens with city services and local collection initiatives.

---

## Features

- View nearby recycling and donation bins on an interactive map
- “Adopt-a-Spot” to take care of bins in your neighborhood
- Receive alerts for scheduled city pickups (via API integrations)
- Report full bins and view recent activity updates
- Track your environmental impact via your profile
- Achievements and badges system on profile

---

## Project Structure

```bash
src/
├── components/         # Reusable UI components (e.g., MapContainer, SpotCard)
├── data/               # Local mock data (e.g., mockData.ts)
├── pages/              # Page-level components (Home, Map, Report, AdoptSpot, etc.)
├── App.tsx             # Root component
├── main.tsx            # App entry point
├── index.css           # Global styles
```
---

## How to run

1. Clone the Repo
```bash
git clone https://github.com/your-username/zerowastedrop.git
cd zerowastedrop
```
2. Install Dependencies
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```
