Here’s a **README.md** that follows the submission guidelines from your PDF and matches your Event Management App implementation.

---

````md
# 🎟️ Event Management App (Angular)

A simple **Event Management Portal* built with Angular that displays a list of upcoming events, formats ticket prices, and highlights premium events.

This project demonstrates:
- **Angular Components**
- **Custom Pipes** for price formatting
- **Custom Directives** for highlighting premium events
- **Basic animations & hover effects**

---

## 📌 Features

### 1. Event List Component
- Displays event details: **Name**, **Date**, **Ticket Price**, **Category**
- Uses `*ngFor` for dynamic rendering
- Styled for clarity and readability

### 2. PriceFormatPipe
- Formats ticket prices in **Indian currency format**
- Example:  
  `500 → ₹500.00`  
  `1200 → ₹1,200.00`

### 3. HighlightDirective
- Highlights premium events (**ticket price > ₹2000**) with **light gold background**
- Adds a **hover animation** for premium events (subtle lift + shadow)

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone 
   cd event-management-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   ng serve
   ```

4. **Open in browser**

   ```
   http://localhost:4200
   ```

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── components/
 │   │   └── event-list/
 │   │       ├── event-list-component.component.ts
 │   │       ├── event-list-component.component.html
 │   │       └── event-list-component.component.scss
 │   ├── directives/
 │   │   └── highlight-directive.directive.ts
 │   ├── pipes/
 │   │   └── price-format-pipe.pipe.ts
 │   └── app.module.ts
 ├── assets/
 └── styles.scss
```

---

## 📊 Sample Data

```ts
events = [
    { name: 'Global Business Leaders Summit', date: '2025-09-25', price: 5500, category: 'Conference' },
    { name: 'Cybersecurity & Data Privacy Forum', date: '2025-10-08', price: 4800, category: 'Seminar' },
    { name: 'Digital Marketing Masterclass', date: '2025-10-20', price: 3500, category: 'Workshop' },
    { name: 'Artificial Intelligence & Robotics Expo', date: '2025-11-15', price: 6200, category: 'Expo' },
    { name: 'Finance & Investment Strategies Summit', date: '2025-12-05', price: 5000, category: 'Conference' },
    { name: 'Summer Food Festival', date: '2025-06-18', price: 1500, category: 'Festival' },
    { name: 'Yoga & Wellness Retreat', date: '2025-07-22', price: 3200, category: 'Workshop' },
    { name: 'International Film Screening', date: '2025-08-30', price: 900, category: 'Screening' },
    { name: 'Tech Startups Pitch Night', date: '2025-09-10', price: 2800, category: 'Conference' },
  ];
  ```

---

## 🖼️ Screenshot

**Event List with Price Formatting & Highlighting**
*![Output Image]*D:\Angular Projects\Day21_20\Wipro-Nga-Angular-main\Event_Management_App\src\app\Screenshot (158).png

---

## 📚 Technologies Used

* Angular 17+
* TypeScript
* HTML5
* SCSS / CSS
* Renderer2 & HostListener for DOM manipulation

---

[GitHub]:https://github.com/ArunaChakali/EduLearn_Courses_Day19
 


