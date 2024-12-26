# Assignment: Carousel Project

## Project Video
<video controls width="640" height="360">
  <source src="photos/Carsoul.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---
## Project Overview
The objective of this assignment is to implement a fully functional, dynamic carousel as per the given requirements. The carousel is designed to display a collection of cards featuring book titles, descriptions, and images, with enhanced usability and responsiveness.



## Features Implemented
### 1. **Card Design**:
- Each card includes:
  - An **image** that fits responsively within the card.
  - A **title**, displayed prominently.
  - A **content section**, showing a brief description below the title.

### 2. **Carousel Behavior**:
- Navigation:
  - **Arrow Buttons**: Left and right arrow buttons for scrolling through cards.
  - **Keyboard Support**: Navigate using the left and right arrow keys.
- Rotating Carousel:
  - Automatically loops to the first card after the last, and vice versa.
- Pagination:
  - **Dots below the carousel** indicate the current position.

### 3. **Responsiveness**:
- The carousel adapts to varying screen sizes.

### 4. **Dynamic Input**:
- The number of total cards (`n`) and visible cards (`x`) can be configured easily.

### 5. **Data Loading**:
- Book data (title, description, image) is dynamically loaded from a JSON file.

---

## Code Explanation
### 1. **HTML (`index.html`)**:
- Provides the basic structure of the carousel.
- Links the `my-styles.css` for styling and `my-script.js` for functionality.

### 2. **CSS (`my-styles.css`)**:
- Handles the design of:
  - Carousel layout and card styles.
  - Navigation arrows and pagination dots.
- Ensures the carousel is responsive across devices.

### 3. **JavaScript (`my-script.js`)**:
- Dynamically loads book data from `book-description.json`.
- Implements:
  - Navigation functionality (arrows, keyboard shortcuts).
  - Smooth sliding animation and rotation logic.
  - Pagination updates to reflect the current position.

---

## How to Configure
1. Open the `my-script.js` file.
2. Modify the following variables to adjust the carousel:
   ```javascript
   const totalCards = 7; // Total number of cards (n)
   const visibleCards = 4; // Number of cards visible at a time (x)
   ```

---


## Additional Notes
- The project meets the requirements outlined in the assignment:
  - Configurable card display (`n` and `x`).
  - Responsive and smooth carousel behavior.
  - Dynamic loading of book data from `book-description.json`.
- Tested on multiple screen sizes and modern browsers.

---

If you have any questions or feedback about this project, please reach out! Also 
Let me know if further adjustments are needed.
