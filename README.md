# Search Algorithms Lab Record

## 1. Depth First Search (DFS)
**Algorithm Description:**
Depth First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It explores as far as possible along each branch before backtracking, essentially diving deep into the graph to reach the goal.

**Working:**
1. Start at the root node (or any arbitrary node as the start point).
2. Push the starting node into a stack and mark it as visited.
3. Pop the top node from the stack, and if it matches the goal, return the path.
4. If not, push all unvisited neighboring nodes to the stack.
5. Repeat until either the stack is empty or the goal is found.

**Characteristics:**
- Uses a stack (LIFO) for traversal.
- Backtracks when reaching a dead-end.
- Not guaranteed to find the shortest path.

**Complexity:**
- Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
- Space Complexity: O(V).

## 2. Breadth First Search (BFS)
**Algorithm Description:**
Breadth First Search (BFS) is a traversing or searching algorithm used for trees and graphs. It visits nodes layer by layer, starting from the root.

**Working:**
1. Start at the root node (or any arbitrary node as the start point).
2. Add the starting node into a queue and mark it as visited.
3. Dequeue a node from the front and explore its neighbors.
4. If the goal node is found, return the path.
5. Add all unvisited neighboring nodes to the queue.
6. Repeat until the queue is empty or the goal is reached.

**Characteristics:**
- Uses a queue (FIFO) for traversal.
- Visits nodes in levels/layers.
- Guaranteed to find the shortest path in an unweighted graph.

**Complexity:**
- Time Complexity: O(V + E).
- Space Complexity: O(V).

## 3. British Museum Search (BMS)
**Algorithm Description:**
British Museum Search is a type of exhaustive search that tries all possible paths to find the solution.

**Working:**
1. Start at the root node.
2. Use a stack to explore all paths.
3. Each time a node is reached, push the new node to the stack and continue until the goal is found.
4. Store each found path.
5. Repeat until all paths have been explored.

**Characteristics:**
- Not efficient for large graphs.
- It ensures all possible solutions are found.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V!).

## 4. Hill Climbing (HC)
**Algorithm Description:**
Hill Climbing is an optimization search algorithm that starts at the initial solution and iteratively moves in the direction of increasing value based on a heuristic until the goal is reached.

**Working:**
1. Start at the root node.
2. Choose the neighboring node with the lowest heuristic value.
3. If the goal node is reached, return the path.
4. Repeat until no better neighbor is available.

**Characteristics:**
- Uses heuristics to choose which path to follow.
- May get stuck in local optima.
- Not guaranteed to find the optimal solution.

**Complexity:**
- Time Complexity: O(V).
- Space Complexity: O(V).

## 5. Beam Search (BS)
**Algorithm Description:**
Beam Search is a heuristic search algorithm that explores a graph by expanding the most promising nodes and keeping only a fixed number of paths (beam width).

**Working:**
1. Start at the root node.
2. Keep only `beam_width` paths with the best heuristic scores.
3. Expand nodes along the best paths.
4. If the goal is found, return the path.

**Characteristics:**
- Keeps track of only a few nodes, reducing memory.
- May lose optimal paths.

**Complexity:**
- Time Complexity: O(b * beam_width), where b is the branching factor.
- Space Complexity: O(beam_width).

## 6. Oracle Search
**Algorithm Description:**
Oracle Search explores all possible paths to find all possible solutions, using exhaustive search to reach the goal.

**Working:**
1. Start at the root node.
2. Use a stack to explore all possible paths.
3. Keep track of each path found until all paths are exhausted.

**Characteristics:**
- Finds all possible paths.
- Not efficient for large graphs.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V!).

## 7. Oracle with Heuristics (OracleH)
**Algorithm Description:**
This is a heuristic version of Oracle Search where the path cost is calculated with a heuristic value, and all paths are tracked.

**Working:**
1. Start at the root node and maintain a stack.
2. Push nodes with their corresponding heuristic values and costs.
3. Track all possible paths to the goal.
4. Use heuristics to assist in searching more efficient paths.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V!).

## 8. Branch and Bound (BB)
**Algorithm Description:**
Branch and Bound is an optimization search algorithm used for solving combinatorial problems by maintaining a bound on the best solution.

**Working:**
1. Start with the root node.
2. Explore nodes using a queue, keeping track of their path cost.
3. Discard paths that exceed the current best solution.
4. Return the optimal path once the goal is reached.

**Characteristics:**
- Guarantees optimal solution.
- Prunes unnecessary paths to improve efficiency.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V).

## 9. Branch and Bound with Extended List (EL)
**Algorithm Description:**
This is an improved version of Branch and Bound with an extended list to keep track of already visited nodes.

**Working:**
1. Use a priority queue to explore nodes.
2. Maintain an extended list to prevent revisiting nodes.
3. Return the optimal path once the goal is reached.

**Characteristics:**
- Efficient for avoiding cycles.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V).

## 10. Branch and Bound with Heuristics (EH)
**Algorithm Description:**
This version of Branch and Bound uses a heuristic function to estimate the remaining path cost.

**Working:**
1. Start with a priority queue.
2. Expand nodes by estimating cost using a heuristic.
3. Keep track of the best path and prune paths that exceed the current bound.

**Characteristics:**
- Faster due to heuristic guidance.

**Complexity:**
- Time Complexity: O(V!).
- Space Complexity: O(V).

## 11. A* Search (Astar)
**Algorithm Description:**
A* Search is a pathfinding and graph traversal algorithm that uses both actual path cost and heuristic cost to find the optimal path.

**Working:**
1. Start at the root node.
2. Use a priority queue to keep track of nodes with their combined path cost and heuristic.
3. Expand the node with the lowest total cost.
4. Continue until the goal is reached.

**Characteristics:**
- Uses cost-so-far and heuristic to find the optimal path.
- Guaranteed to find the shortest path if the heuristic is admissible.

**Complexity:**
- Time Complexity: O(V).
- Space Complexity: O(V).

## 12. Best-First Search
**Algorithm Description:**
Best-First Search is a search algorithm that uses a heuristic to determine the order in which nodes are expanded.

**Working:**
1. Start at the root node.
2. Expand the node with the lowest heuristic value.
3. Continue expanding until the goal is reached.

**Characteristics:**
- Can be faster but not guaranteed to find the optimal path.
- Uses only heuristic values to decide the path.

**Complexity:**
- Time Complexity: O(V).
- Space Complexity: O(V).

## 13. AO* Search
**Algorithm Description:**
AO* Search is an algorithm used for searching AND-OR graphs, often used for problem-solving and planning.

**Working:**
1. Use both AND and OR nodes.
2. Expand paths based on heuristics and merge AND branches.
3. Continue until the optimal solution is found.

**Characteristics:**
- Suitable for AND-OR graphs.
- Finds optimal paths in decision-making scenarios.

**Complexity:**
- Time Complexity: O(V).
- Space Complexity: O(V).

**Summary:**
Each of these algorithms has its advantages, use cases, and trade-offs. Depending on the type of graph, whether it is weighted or unweighted, and the requirements (e.g., optimal path vs. any path), the appropriate algorithm can be chosen for efficient traversal or searching.

