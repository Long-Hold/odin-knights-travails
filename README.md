# Knight’s Travails

A Node.js command-line program that finds the shortest path a chess knight can take between two squares on a standard 8x8 board.

-----

## How It Works

The knight follows standard chess movement rules: it moves in an L-shape, either two squares in one direction and one in the other. From any given square, a knight has at most eight possible moves.

The program uses **breadth-first search (BFS)** to traverse the board graph, guaranteeing the shortest path is found. Each square is treated as a node, with edges connecting every square reachable in a single knight move. Visited squares are tracked to avoid redundant calculations.

Once the target square is reached, the path is reconstructed by walking each node back to its parent.

-----

## Usage

```bash
node src/index.js
```

Call `knightMoves` with a start and end coordinate, each as a two-element array `[column, row]` using zero-based indices (0–7).

```js
import { knightMoves } from './src/modules/knightMoves.js';

knightMoves([0, 0], [3, 3]);
// => [ [0,0], [1,2], [3,3] ]

knightMoves([0, 0], [7, 7]);
// => [ [0,0], [2,1], [4,2], [6,3], [7,5], [5,6], [7,7] ]
```

The return value is an ordered array of coordinates from start to end, inclusive.

-----

## Project Structure

```
odin-knights-travails/
├── src/
│   ├── index.js
│   └── modules/
│       └── knightMoves.js
├── package.json
└── README.md
```

-----

## Installation

```bash
git clone https://github.com/Long-Hold/odin-knights-travails.git
cd odin-knights-travails
npm install
```

-----

## Requirements

- Node.js v18 or higher

-----

## About

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum, under the Computer Science section on data structures and algorithms.