# HTML5 Exercise: DOM Viajes. Manipulation with JavaScript

This project presents an HTML5 exercise where all elements of the webpage are dynamically generated using JavaScript DOM manipulation methods. No static HTML is written; everything is created programmatically.

## Features

1. **Main Banner:**
   - A banner displayed at the top of the page. It could include an image or a title that represents the main theme of the page.

2. **Three Cards:**
   - Each card contains:
     - An image
     - A title
     - Descriptive text
   - These cards are placed side by side and represent different sections of the page.

3. **City Selector:**
   - A dropdown (or select) input that allows users to select a city from a predefined list.
   - The cities will be displayed as options, and the selection could trigger an event (e.g., display information about the selected city).

## How It Works

The entire structure of the webpage is built using JavaScript DOM methods such as `createElement`, `appendChild`, and `createTextNode`. The project demonstrates how to dynamically create elements and insert them into the DOM without directly writing HTML.

### DOM Manipulation Methods Used

- `document.createElement()`: Used to create various elements like `div`, `img`, section, `select`, `option`, etc.
- `document.createTextNode()`: Used to create text nodes that are inserted into elements.
- `element.appendChild()`: Used to append created elements and text nodes to their respective parent elements.

### Example Breakdown

1. **Main Banner:**
   - The banner is created as a `div` element, with a title or image added dynamically using JavaScript.

2. **Three Cards:**
   - Each card is created as a `div` containing:
     - An image (`img` element)
     - A title (`h2` element)
     - A description (`p` element)
   - These cards are appended to a container `div` element.

3. **City Selector:**
   - A `select` element is created, and `option` elements representing cities are dynamically added to it.

