# Food Wagen — Eskalate Full Stack Assessment

## Path Chosen

**Path A: Food Delivery Platform**

---

## Project Structure

- **Backend:** `/backend` (Node.js, Express, Sequelize, PostgreSQL)
- **Frontend:** `/frontend/food-wagen` (React, Vite, Ant Design, TailwindCSS)

---

## Setup Instructions

### Backend

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Configure environment:**
   - Copy `.env.example` to `.env` and set your database credentials.
3. **Run migrations:**
   ```sh
   npx sequelize-cli db:migrate
   ```
4. **Start the server:**
   ```sh
   npm start
   ```
   The backend runs on `http://localhost:5000` by default.

### Frontend

1. **Install dependencies:**
   ```sh
   cd frontend/food-wagen
   npm install
   ```
2. **Start the frontend:**
   ```sh
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

---

## API Endpoint Documentation

Base URL: `/api/v1`

### Foods

- `GET /foods` — List all foods
- `GET /foods?foodName=Pizza` — Search foods by name
- `POST /foods` — Create a new food
  - Body: `{ foodName, foodRating, foodPrice, foodImage, restaurantName, restaurantImage, restaurantStatus }`
- `PUT /foods/:id` — Update a food
  - Body: `{ foodName, foodRating, foodPrice, foodImage, restaurantName, restaurantImage, restaurantStatus }`
- `DELETE /foods/:id` — Delete a food

### Restaurants

- `GET /restaurants` — List all restaurants
- `POST /restaurants` — Create a new restaurant
- `PUT /restaurants/:id` — Update a restaurant
- `DELETE /restaurants/:id` — Delete a restaurant

---

## Frontend Features Implemented

- Modern responsive UI with React, Vite, TailwindCSS, and Ant Design
- List, add, edit, and delete meals (foods)
- Modal forms for adding and editing meals (with validation)
- Search bar for filtering meals
- Restaurant status indicator (open/closed)
- Kebab menu for edit/delete actions on each meal
- Image upload via URL

---

## Bonus Features

- **State Management:** React hooks for local state; ready for Redux integration
- **Validation:** All forms have required field validation
- **Responsiveness:** Fully responsive design for desktop and mobile
- **UI/UX:** Ant Design modals, popovers, and feedback messages
- **API Integration:** All CRUD operations connected to backend

---

## Notes

- Make sure PostgreSQL is running and accessible with the credentials in your `.env` file.
- For any issues, check the backend and frontend console for errors.

---

**Author:** Kirubel (food-wagen assessment)# food-wagen
