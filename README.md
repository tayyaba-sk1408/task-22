
# Day 22 - Image Carousel/Slider

## Project Description

An interactive and responsive image carousel built using HTML5, CSS3, and JavaScript. It allows users to browse images using navigation buttons, slide indicators, and automatic rotation.

## Objective

To practise DOM indexing, JavaScript timers, event handling, and CSS transitions while building an interactive user interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- Five image slides
- Previous and Next navigation buttons
- Automatic slide rotation every three seconds
- Pause automatic rotation when hovering over the carousel
- Clickable slide indicators
- Current slide counter
- Smooth fade transitions
- Responsive layout for desktop and mobile screens
- Automatic slide index wrapping
- Keyboard-focus pause support

## Project Structure

```text
day22-image-carousel/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Create a folder named `day22-image-carousel`.
2. Create the four files listed above.
3. Copy the HTML into `index.html`.
4. Copy the CSS into `style.css`.
5. Copy the JavaScript into `script.js`.
6. Save all files.
7. Open `index.html` in a web browser.
8. Ensure you have an internet connection to load the images and Google Fonts.

## How It Works

JavaScript tracks the current slide index and updates the active slide and indicator. The Previous and Next buttons change the slide manually. The `setInterval()` method automatically changes slides every three seconds. The timer is cleared when the user hovers over the carousel and restarted when the pointer leaves.

The modulo operator wraps the slide index so navigation continues from the last slide to the first and vice versa.

## Learning Outcomes

- Selecting and updating DOM elements
- Managing slide indexes
- Using `setInterval()` and `clearInterval()`
- Handling click, hover, and focus events
- Creating CSS transitions
- Building responsive layouts with media queries

## Future Improvements

- Add touch-swipe navigation
- Add pause and play controls
- Load images from a local folder
- Add captions from a JavaScript data array
- Improve accessibility and keyboard navigation

## Conclusion

This project demonstrates how HTML, CSS, and JavaScript can be combined to build a responsive image slider with manual controls, automatic rotation, and interactive indicators.
