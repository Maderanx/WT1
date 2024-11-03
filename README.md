Website link will be given
implement till one level of depth
COmponents
heirarchy
esx,jsx,functional component
USe state
Prop
React routing
CSS/bootstrap
coding process
totol 80
2nd question 
lab exercise and code from ppts
20marks

npm create vite@latest

npx create-react-app myapp

npm install react-router-dom

npm install styled-components

npm install bootstrap

# Game Theory Algorithms
## Minimax
1. **Function** `minimax(node, depth, maximizing_player)`
   - **Input**:
     - `node`: Current node or game state
     - `depth`: Maximum depth to search
     - `maximizing_player`: Boolean indicating if it’s the maximizing player’s turn
   - **Output**: Optimal score for the given node

2. **Base Case**:
   - If `depth == 0` or `node` is a terminal (end) state:
     - **Return** the evaluation score of the `node`

3. **If `maximizing_player` is True** (Maximizing player's turn):
   - Initialize `max_eval` to negative infinity (`-inf`)
   - For each `child` in `node`'s children:
     - **Recursively call** `minimax(child, depth - 1, False)`
     - Update `max_eval` as the maximum of `max_eval` and the result of the recursive call
   - **Return** `max_eval` (Best score the maximizing player can achieve)

4. **Else** (Minimizing player's turn):
   - Initialize `min_eval` to positive infinity (`inf`)
   - For each `child` in `node`'s children:
     - **Recursively call** `minimax(child, depth - 1, True)`
     - Update `min_eval` as the minimum of `min_eval` and the result of the recursive call
   - **Return** `min_eval` (Best score the minimizing player can achieve)

## Alpha-Beta Pruning
1. **Function** `alpha_beta(node, depth, alpha, beta, maximizing_player)`
   - **Input**:
     - `node`: Current node or game state
     - `depth`: Maximum depth to search
     - `alpha`: Best value the maximizing player can guarantee
     - `beta`: Best value the minimizing player can guarantee
     - `maximizing_player`: Boolean indicating if it’s the maximizing player’s turn
   - **Output**: Optimal score for the given node

2. **Base Case**:
   - If `depth == 0` or `node` is a terminal (end) state:
     - **Return** the evaluation score of the `node`

3. **If `maximizing_player` is True** (Maximizing player's turn):
   - Initialize `max_eval` to negative infinity (`-inf`)
   - For each `child` in `node`'s children:
     - **Recursively call** `alpha_beta(child, depth - 1, alpha, beta, False)`
     - Update `max_eval` as the maximum of `max_eval` and the result of the recursive call
     - Update `alpha` as the maximum of `alpha` and `max_eval`
     - If `beta <= alpha`: **Break** (Prune the branch)
   - **Return** `max_eval` (Best score the maximizing player can achieve)

4. **Else** (Minimizing player's turn):
   - Initialize `min_eval` to positive infinity (`inf`)
   - For each `child` in `node`'s children:
     - **Recursively call** `alpha_beta(child, depth - 1, alpha, beta, True)`
     - Update `min_eval` as the minimum of `min_eval` and the result of the recursive call
     - Update `beta` as the minimum of `beta` and `min_eval`
     - If `beta <= alpha`: **Break** (Prune the branch)
   - **Return** `min_eval` (Best score the minimizing player can achieve)
