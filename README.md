# Rubik's Cube Simulator
A Rubik's Cube Simulation written in javascript.  
Go [here](https://vedhamahesh.github.io/Rubiks-Cube) to use the simulation.

### Usage
The buttons **above** and **below** the Rubik's Cube are for manipulating the cube.  
The **scramble** button on the left of the cube does 30 random moves to scramble the cube.  
The **solve** button on the right of the cube solves the Rubik's Cube.

### Info
The simulator uses the framework **p5.js** for canvas generation and manipulation.  
p5.js uses **WebGL** for the 3d graphics.

### Code Structure
The cube is made of 27 "cubies".  
There is a class for the cubies and a class for the entire cube.  
The cubie class uses the method **showAll** to draw the cubies on the canvas.  
The cube class has a method for each rotation of the cube.  
(You can go [here](https://ruwix.com/the-rubiks-cube/notation/) to learn how cubing notation works)  
The cube class also has a method for each step of solving the cube.  
In order to keep track of the colors on the cube, the cube class has an attribute called **cubies**.  
Cubies is a three dimensional array that stores the colors of each face of the cube.

### Solving
The simulation solves the **first** and **second layers** with **The Beginner's Method**  
and the **last** layer is solved with **OLL** (Orientate Last Layer) and **PLL** (Permutate Last Layer).