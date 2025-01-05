# To-Do List Application

## Overview
The app allows users to:
1. Add new tasks
2. Mark tasks as complete
3. Delete tasks
4. Filter tasks by status (All, Completed, Pending)
5. Persist tasks using local storage to retain them after page refresh


## State Management
1. Tasks (Array): Stores all to-do items with their completion status.
2. filter (String): Controls the visibility of tasks based on their status.
3. newTask (String): Captures user input for adding new tasks.
4. useState and useEffect are used for managing state and syncing tasks with local storage.


## How to Run the App
1. Clone the repository.
2. Install dependencies: `yarn`
3. Start the application: `yarn start`
4. Run tests: `yarn test`
