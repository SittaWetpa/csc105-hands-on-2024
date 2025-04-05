import { todo } from 'node:test';
import type { CreateTodoInput, Todo, UpdateTodoInput } from '../types/index.ts';

// In-memory data store (in a real app, this would be a database)
const todos: Todo[] = [
	{ id: 1, title: 'Learn Hono', completed: false },
	{ id: 2, title: 'Build a REST API', completed: false },
	{ id: 3, title: 'Test with Postman', completed: false },
];

// Get all todos
export function findAll(): Todo[] {
	return todos;
}

// Get a specific todo by ID
export function findById(id: number): Todo | undefined {
	// IMPLEMENT HERE
	return todos.find((todo) => todo.id === id) // arrow function
	//.find() means if we found that matched id we pass in function, 
	// we reuturn that id you pass from the list of todos
	// but if it fail then return "undefined" 

}

// Create a new todo
export function create(input: CreateTodoInput): Todo {
	const newTodo: Todo = {
		id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
		title: input.title,
		completed: input.completed === true, // defaults to false if not provided
	};

	todos.push(newTodo);
	return newTodo;
}

// Update a todo completely
export function update(id: number, input: Todo): Todo | undefined {
	const index = todos.findIndex((todo) => todo.id === id);

	if (index === -1) {
		return undefined;
	}

	const updatedTodo: Todo = {
		...input,
		id, // ensure ID doesn't change
	};

	todos[index] = updatedTodo;
	return updatedTodo;
}

// Update a todo partially
export function patch(id: number, input: UpdateTodoInput): Todo | undefined {
	const index = todos.findIndex((todo) => todo.id === id);

	if (index === -1) {
		return undefined;
	}

	const updatedTodo: Todo = {
		...todos[index],
		...(input.title !== undefined && { title: input.title }),
		...(input.completed !== undefined && { completed: input.completed }),
	};

	todos[index] = updatedTodo;
	return updatedTodo;
}

// Delete a todo
export function remove(id: number): Todo | undefined {
  //IMPLEMENT HERE	
  // find the index and ensure that the index for that specific id
  // is in the list if not return -1
  const index = todos.findIndex((todo) => todo.id === id)
	//findIndex returns the index(number) not an actual object

  if(index === -1){
	return undefined;
  }
  
  const deletedTodo = todos[index];
  todos.splice(index,1);
  //.splice means remove "1"(behind the comma) item starting at "index"
  //and important thing is .splice() modifies the original array
  //meaning after this fuunction executed it will decrease the
  //number of the item in todos array

  return deletedTodo;
  //to show what we deleted
}

// Filter todos by completion status
export function findByCompleted(completed: boolean): Todo[] {
	return todos.filter((todo) => todo.completed === completed);
}

// Search todos by title
export function search(term: string): Todo[]{
	if (!term) return []; //if term is empty returns empty array
	// IMPLEMENT HERE
	return 	todos.filter((todo) => 
		todo.title.toLowerCase().includes(term.toLowerCase())
		//.includes means if the element is in the todo array then
		//return true if not return false
		
	);
}