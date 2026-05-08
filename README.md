# 🧩 Labyrinth - Zoom Maze

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

An experimental maze game where the challenge isn't just finding the path, but dealing with a zoom out as you progress through specific checkpoints.

## 📋 Summary
- [Technologies](#-technologies)
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [What I Learned](#-what-i-learned)
- [How to Run](#-how-to-run)

---

## 🛠 Technologies
- **HTML5**: Uses a `<table>` structure to create a coordinate-based grid for the maze.
- **CSS3**: Implements CSS Variables (`--size`) and `transition` for smooth zooming effects.
- **JavaScript (ES6+)**: Handles the movement logic, collision detection, and dynamic style manipulation.

## ✨ Features
- **WASD Controls**: Classic keyboard navigation to move the player character through the grid.
- **Dynamic Zooming Mechanism**: Reaching specific "checkpoint" cells triggers the `multipleZoom` function, which recalculates and updates CSS variables to change the map's scale in real-time.
- **Collision System**: Simple logic that prevents the player from passing through "wall" cells.

## 📂 Project Architecture
* `index.html`: Defines the maze layout using a table where each `<td>` represents a path, a wall, or a trigger.
* `style.css`: Contains the styling for the walls (blue), paths (white), and the transition logic for the zoom effect.
* `script.js`: The core engine. It manages the (X, Y) coordinates, listens for keydown events, and updates the CSS `:root` variables.
* `player.png`: The visual representation of the player within the maze.

## 📚 What I Learned
* **CSS Variable Manipulation**: How to use `setProperty` in JavaScript to bridge the gap between logic and real-time visual styles.
* **Coordinate Mapping**: Managing player movement within a table-based grid by accessing `table.rows[y].cells[x]`.
* **Smooth Transitions**: Using CSS transitions to ensure that mathematical changes in size appear as fluid animations to the player.

## 🚀 How to Run
- Ensure `player.png` is in the same directory as the other files.
- Open `index.html` in any modern web browser.
- Use the **W, A, S, D** keys to navigate through the labyrinth.
