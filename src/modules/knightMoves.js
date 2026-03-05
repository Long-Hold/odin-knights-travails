/**
 * Constructs an array of coordinates that show the shortest path a Knight piece
 * can take to reach the end coordinates, starting from the start coordinates.
 * 
 * @param {[number, number]} start - The starting coordinates for the Knight.
 * @param {[number, number]} end - The end coordinates the Knight must traverse to.
 * @returns {[[number, number]]} An array of coordinates that must be visited to arrive to the end.
 */
export function knightMoves(start, end) {
    const startingSquare = new Node(start);
    const endSquare = new Node(end);

    /**
     * Stores the nodes that can be legally visited from the current node,
     * as a Node is removed from queue, all of it's valid children will be calculated so on
     * and so forth.
     */
    const queue = [startingSquare];

    // Tracks visited spaces so prevent redundant calculations.
    const visitedSquares = new Set();
    visitedSquares.add(startingSquare.position.toString());
    while (queue.length > 0) {
        const currentNode = queue.shift();
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
    }
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