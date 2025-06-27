# ♻️ ZeroWasteDrop

**ZeroWasteDrop** is a hyperlocal, community-powered app that maps donation and recycling spots in real time. Designed to promote sustainable habits and reduce overflow, it connects citizens with city services and local collection initiatives.

---

## 🚀 Features

- 📍 View nearby recycling and donation bins on an interactive map
- 🧹 “Adopt-a-Spot” to take care of bins in your neighborhood
- 🔔 Receive alerts for scheduled city pickups (via API integrations)
- 📦 Report full bins and view recent activity updates
- 📊 Track your environmental impact via your profile

---

## 🛠 Tech Stack

- **Framework:** React (with TypeScript)
- **UI:** Tailwind CSS
- **Build Tool:** Vite
- **Map Services:** Mapbox (assumed integration)
- **State/Data:** Firebase (assumed from earlier context)

---

## 📁 Project Structure

```bash
src/
├── components/         # Reusable UI components (e.g., MapContainer, SpotCard)
├── data/               # Local mock data (e.g., mockData.ts)
├── pages/              # Page-level components (Home, Map, Report, AdoptSpot, etc.)
├── App.tsx             # Root component
├── main.tsx            # App entry point
├── index.css           # Global styles
