/**
 * Constructs an array of coordinates that show the shortest path a Knight piece
 * can take to reach the end coordinates, starting from the start coordinates.
 * 
 * @param {[number, number]} start - The starting coordinates for the Knight.
 * @param {[number, number]} end - The end coordinates the Knight must traverse to.
 * @returns {[[number, number]]} An array of coordinates that must be visited to arrive to the end.
 */
export function knightMoves(start, end) {

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