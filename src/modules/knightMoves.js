/**
 * Constructs an array of coordinates that show the shortest path a Knight piece
 * can take to reach the end coordinates, starting from the start coordinates.
 * 
 * @param {[number, number]} start - The starting coordinates for the Knight.
 * @param {[number, number]} end - The end coordinates the Knight must traverse to.
 * @returns {[[number, number]]} An array of coordinates that must be visited to arrive to the end.
 */
export function knightMoves(start, end) {
    /**
     * Stores the nodes that can be legally visited from the current node,
     * as a Node is removed from queue, all of it's valid children will be calculated so on
     * and so forth.
     */
    const queue = [new Node(start)];

    // Tracks visited spaces so prevent redundant calculations.
    const visitedSquares = new Set();
    visitedSquares.add(start.toString());

    /**
     * These are the values to add / subtract from (x, y) coordinates from the current Node's position.
     * They simulate all the potential combinations a Knight can legally move from it's current square.
     */
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [-1, 2], [1, -2], [-1, -2]
    ];

    /**
     * This is where the BFS occurs on the grid.
     * 
     * We explore the nodes, level by level, exploring all reachable squares from the current node until the end coordinates are
     * encountered.
     */
    let currentNode = null;
    while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode.position.toString() === end.toString()) break;

        /**
         * At most, 8 squares can be visited from a single starting point.
         * 
         * (x - 2 & x + 2, y + 1 & y - 1)
         * (y + 2 & y - 2, x + 1 & x - 1)
         * 
         * As a node is visited and added to the queue, also add it to the set.
         * 
         * If any are out-of-bounds or in visitedSquares, ignore, else add to queue.
         * If coord = end.position, terminate the loop.
         */
        const [x, y] = currentNode.position;
        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7 && !visitedSquares.has([newX, newY].toString())) {
                queue.push(new Node([newX, newY], currentNode));
                visitedSquares.add([newX, newY].toString());
            }
        }
    }

    const stepsArr = [];
    while (currentNode) {
      stepsArr.push(currentNode.position);
      currentNode = currentNode.parent;
    }

    return stepsArr.reverse();

}

/**
 * A node that represents a square on a chess board.
 * 
 * Nodes are connected to their parent node as they are discovered as a valid, traversable
 * square from their parent node.
 */
class Node {
    /**
     * 
     * @param {[number, number]} position - The position of the Node on a chess board.
     * @param {Node} parent - The Node that was visited prior to discovering this node.
     */
    constructor(position, parent = null) {
        this.position = position;
        this.parent = parent;
    }
}

console.log(knightMoves([0,0], [7,7]));