const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const ROWS = 30;
const COLS = 40;
const CELL_SIZE = Math.min(CANVAS_WIDTH / COLS, CANVAS_HEIGHT / ROWS);
canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;
const SNAKE_INITIAL_LENGTH = 5;
const GAME_SPEED = 150; // in milliseconds

// Direction
const DIRECTION = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

// Initial state
let snake = [];
let direction = DIRECTION.RIGHT;
let food = {
  x: 0,
  y: 0,
};

function reset() {
  snake = [];
  for (let i = SNAKE_INITIAL_LENGTH - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }
  direction = DIRECTION.RIGHT;
  generateFood();
}

function generateFood() {
  food.x = Math.floor(Math.random() * COLS);
  food.y = Math.floor(Math.random() * ROWS);
}

// Define variables for food properties
let foodSize = CELL_SIZE / 2; // Initial size of the food
let foodColor = "#555"; // Initial color of the food

// Function to toggle food color between #555 and #999
function toggleFoodColor() {
    if (foodColor === "#555") {
        foodColor = "#999";
    } else {
        foodColor = "#555";
    }
}

// Toggle food color every half hour (1800 seconds)
setInterval(toggleFoodColor, 1800000); // 1800000 milliseconds = 30 minutes

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
    // Draw snake body
    snake.forEach((segment, index) => {
        // Set color
        ctx.fillStyle = "#999"; // Snake color
  
        // Calculate segment position
        let x = segment.x * CELL_SIZE + CELL_SIZE / 2;
        let y = segment.y * CELL_SIZE + CELL_SIZE / 2;
  
        // Draw curved thick straight line based on index (even or odd)
        ctx.beginPath();
        if (index % 2 === 0) {
            // Even segment, curve to the right
            ctx.moveTo(x - CELL_SIZE / 4, y - CELL_SIZE / 4);
            ctx.quadraticCurveTo(x, y, x + CELL_SIZE / 4, y + CELL_SIZE / 4);
        } else {
            // Odd segment, curve to the left
            ctx.moveTo(x + CELL_SIZE / 4, y - CELL_SIZE / 4);
            ctx.quadraticCurveTo(x, y, x - CELL_SIZE / 4, y + CELL_SIZE / 4);
        }
        ctx.lineWidth = CELL_SIZE / 2;
        ctx.lineCap = 'round';
        ctx.stroke();
    });

    // Draw snake head (last segment)
    let head = snake[0];
    let headX = head.x * CELL_SIZE + CELL_SIZE / 2;
    let headY = head.y * CELL_SIZE + CELL_SIZE / 2;

    // Draw head shape
    ctx.fillStyle = "#333"; // Snake color
    ctx.beginPath();
    ctx.arc(headX, headY, CELL_SIZE / 2 + CELL_SIZE / 4, 0, Math.PI * 2); // Larger head size
    ctx.fill();

    // Draw eyes
    ctx.fillStyle = "#fff"; // White color
    let eyeRadius = CELL_SIZE / 10;
    let eyeOffsetX = CELL_SIZE / 4;
    let eyeOffsetY = -CELL_SIZE / 4;
    ctx.beginPath();
    ctx.arc(headX - eyeOffsetX, headY + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
    ctx.arc(headX + eyeOffsetX, headY + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw food (round shape)
    ctx.fillStyle = foodColor;
    ctx.beginPath();
    ctx.arc((food.x + 0.5) * CELL_SIZE, (food.y + 0.5) * CELL_SIZE, foodSize, 0, Math.PI * 2);
    ctx.fill();
}



function update() {
  // Move snake
  let head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case DIRECTION.UP:
      head.y--;
      break;
    case DIRECTION.DOWN:
      head.y++;
      break;
    case DIRECTION.LEFT:
      head.x--;
      break;
    case DIRECTION.RIGHT:
      head.x++;
      break;
  }

  // Wrap around canvas
  if (head.x < 0) head.x = COLS - 1;
  if (head.x >= COLS) head.x = 0;
  if (head.y < 0) head.y = ROWS - 1;
  if (head.y >= ROWS) head.y = 0;

  // Check collision with itself
  if (snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
    alert("YUTQAZDINGIZ! SIZNING NATIJANGIZ: " + snake.length);
    reset();
    return;
  }

  // Check collision with food
  if (head.x === food.x && head.y === food.y) {
    // Increase snake length
    snake.unshift(head);
    generateFood();
  } else {
    // Move snake
    snake.pop();
    snake.unshift(head);
  }
}

function gameLoop() {
  update();
  draw();
}

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction !== DIRECTION.DOWN) direction = DIRECTION.UP;
      break;
    case "ArrowDown":
      if (direction !== DIRECTION.UP) direction = DIRECTION.DOWN;
      break;
    case "ArrowLeft":
      if (direction !== DIRECTION.RIGHT) direction = DIRECTION.LEFT;
      break;
    case "ArrowRight":
      if (direction !== DIRECTION.LEFT) direction = DIRECTION.RIGHT;
      break;
  }
}

const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const num2 = document.getElementById("num2");
const num4 = document.getElementById("num4");
const num6 = document.getElementById("num6");
const num8 = document.getElementById("num8");

arrowUp.addEventListener("click", () => {
  if (direction !== DIRECTION.DOWN) direction = DIRECTION.UP;
});
arrowDown.addEventListener("click", () => {
  if (direction !== DIRECTION.UP) direction = DIRECTION.DOWN;
});
arrowLeft.addEventListener("click", () => {
  if (direction !== DIRECTION.RIGHT) direction = DIRECTION.LEFT;
});
arrowRight.addEventListener("click", () => {
  if (direction !== DIRECTION.LEFT) direction = DIRECTION.RIGHT;
});

num2.addEventListener("click", () => {
  if (direction !== DIRECTION.DOWN) direction = DIRECTION.UP;
});
num4.addEventListener("click", () => {
  if (direction !== DIRECTION.RIGHT) direction = DIRECTION.LEFT;
});
num6.addEventListener("click", () => {
  if (direction !== DIRECTION.LEFT) direction = DIRECTION.RIGHT;
});
num8.addEventListener("click", () => {
  if (direction !== DIRECTION.UP) direction = DIRECTION.DOWN;
});

// Start the game
reset();
setInterval(gameLoop, GAME_SPEED);
document.addEventListener("keydown", handleKeyPress);
