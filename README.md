# Little Lemon Restaurant - Meta Frontend Developer Capstone

A modern, responsive React application for Little Lemon, a family-owned Mediterranean restaurant in Chicago.

## Features

- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface following the Little Lemon brand guidelines
- **Table Reservations**: Complete booking system with form validation and time availability
- **Menu Showcase**: Display of weekly specials with images and descriptions
- **Customer Testimonials**: Reviews section showcasing customer feedback
- **About Section**: Information about the restaurant and founders
- **Navigation**: Smooth navigation with active link highlighting
- **Accessibility**: Semantic HTML and proper ARIA labels

## Tech Stack

- **React 18**: Modern React with functional components and hooks
- **React Router**: Client-side routing for navigation
- **CSS3**: Custom CSS with Flexbox and Grid layouts
- **Google Fonts**: Markazi Text and Karla font families
- **Jest & React Testing Library**: Unit and integration testing

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Specials.js
│   ├── Testimonials.js
│   ├── About.js
│   ├── Footer.js
│   ├── Homepage.js
│   ├── BookingForm.js
│   ├── BookingPage.js
│   └── *.test.js
├── App.js
├── index.js
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd little-lemon-restaurant
```

2. Install dependencies

```bash
npm install
```

3. Add your assets to the `public/assets/images/` directory:
   - Logo.png
   - restauranfood.jpg
   - greek salad.jpg
   - bruchetta.svg
   - lemon dessert.jpg
   - Mario and Adrian A.jpg
   - Mario and Adrian b.jpg
   - restaurant.jpg
   - restaurant chef B.jpg

4. Start the development server

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

## Git Workflow - Staged Commits

The project was developed in stages with specific commits for each feature:

### Stage 1: Project Setup

```bash
git add package.json public/index.html README.md
git commit -m "Stage 1: Initial project setup with dependencies and HTML structure"
```

### Stage 2: Base Styling and Layout

```bash
git add src/index.css
git commit -m "Stage 2: Complete CSS styling system with responsive design"
```

### Stage 3: Core Components

```bash
git add src/App.js src/index.js src/components/Header.js src/components/Footer.js
git commit -m "Stage 3: Core app structure with header and footer components"
```

### Stage 4: Homepage Sections

```bash
git add src/components/Hero.js src/components/Specials.js src/components/About.js src/components/Homepage.js
git commit -m "Stage 4: Homepage sections - hero, specials, and about components"
```

### Stage 5: Testimonials

```bash
git add src/components/Testimonials.js
git commit -m "Stage 5: Customer testimonials section with review cards"
```

### Stage 6: Booking System

```bash
git add src/components/BookingForm.js src/components/BookingPage.js
git commit -m "Stage 6: Complete reservation system with form validation"
```

### Stage 7: Testing

```bash
git add src/App.test.js src/components/BookingForm.test.js src/components/BookingPage.test.js
git commit -m "Stage 7: Comprehensive test suite for components and functionality"
```

### Stage 8: Final Polish

```bash
git add .
git commit -m "Stage 8: Final optimizations, accessibility improvements, and documentation"
```

## Key Features Implemented

### Responsive Navigation

- Mobile-friendly hamburger menu
- Active link highlighting
- Smooth scrolling to sections

### Reservation System

- Dynamic time slot generation based on selected date
- Form validation with error handling
- Reducer pattern for state management
- Accessible form controls

### Design System

- Consistent color palette (#49SE57 green, #F4CE14 yellow)
- Typography hierarchy (Markazi Text, Karla)
- 16px border radius throughout
- Hover effects and transitions

### Performance

- Optimized images and assets
- Efficient React rendering
- Mobile-first responsive design

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is part of the Meta Frontend Developer Certificate program.
