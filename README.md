# xamtrack ⚡

> ### [Temporary Deploy Check HERE](https://xamtrack.up.railway.app/api/tasks/)

**Xamtrack API** is a simple and easy-to-use RESTful API that allows you to manage a list of tasks. You can create, read, update and delete tasks using HTTP methods and JSON data. Whether you need to keep track of your personal projects, your work assignments or your daily chores, **Xamtrack API** can help you organize your tasks and monitor your progress. :sparkles:

## [Documentation](https://codexam.vercel.app/docs/project/xt)

If you want to learn more about how **xamtrack** works and how to use it effectively, you can check out the detailed documentation [**here**](https://codexam.vercel.app/docs/project/xt). The documentation covers topics such as:

- How to set up and run **xamtrack**
- How to authenticate and authorize your requests
- How to use the endpoints for different resources
- How to handle errors and responses
- How to test your requests using Postman
- How to design and implement **xamtrack**
- *And Many More....*


The documentation also includes code examples, screenshots and diagrams to help you understand the concepts and features of **xamtrack**


## Features

- CRUD operations for tasks
- Unique ids for each task
- Validation and error handling
- Express.js framework and mongoose database
- Priority and due date for tasks
- Authentication and authorization for users

## Installation

To use **Xamtrack API**, you need to have Node.js and MongoDB installed on your machine. Then follow these steps:

1. Clone this repository: `git clone https://github.com/yourusername/task-manager-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. Test the endpoints using a tool like [**Postman**](https://www.postman.com/) or curl.

## Endpoints

The base URL for the API is `http://localhost:5000`. The following endpoints are available:

| Method | Endpoint      | Description                                      |
| ------ | ------------- | ------------------------------------------------ |
| GET    | /tasks        | Returns a list of all tasks                      |
| GET    | /api/tasks?select=id,description   | Returns the details of a single task with the id |
| POST   | /tasks        | Creates a new task                               |
| PUT    | /tasks/:id    | Updates the task with the id                     |
| DELETE | /tasks/:id    | Deletes the task with the id                     |

## Data Format

The data format for tasks is JSON. A task object has the following properties:

- id (string) - a unique identifier for the task
- description (string) - a detailed description of the task
- status (string) - the current status of the task, either "completed" or "incomplete"
- priority (string) - the priority level of the task, either "low", "medium", "high" or "urgent"
- dueDate (date) - the deadline for completing the task
- owner (object id) - the user who created the task

An example of a task object is:

```json
{
  "id": "f3b8d9c4-dfb3-4f1a-bb5d-f9b19fbd7d40",
  "description": "Write an essay on RESTful APIs for school",
  "status": "incomplete",
  "priority": "high",
  "dueDate": "2023-03-31T00:00:00Z",
  "owner": "60a7c86e8e2e4a0015d6f6a1"
}
```

## Examples

Here are some examples of how to use **Xamtrack API** with curl commands:

### Get all tasks

`curl http://localhost:5000/tasks`

### Get a single task by id

`curl http://localhost:5000/tasks/f3b8d9c4-dfb3-4f1a-bb5d-f9b19fbd7d40`

### Create a new task

`curl -X POST -H "Content-Type: application/json" -d '{"description":"Do laundry","status":"incomplete","priority":"low","dueDate":"2023-04-01T00:00:00Z","owner":"60a7c86e8e2e4a0015d6f6a1"}' http://localhost:5000/tasks`

### Update an existing task by id

`curl -X PUT -H "Content-Type: application/json" -d '{"description":"Do laundry","status":"completed","priority":"low","dueDate":"2023-04-01T00:00:00Z","owner":"60a7c86e8e2e4a0015d6f6a1"}' http://localhost:5000/tasks/f3b8d9c4-dfb3-4f1a-bb5d-f9b19fbd7d40`

### Delete an existing task by id

`curl -X DELETE http://localhost:5000/tasks/f3b8d9c4-dfb3-4f1a-bb5d-f9b19fbd7d40`


## Contribution

If you want to contribute to **xamtrack**, you are very welcome! :smiley:

Here are some rules and guidelines for contributing:

- You can write solutions in Node.js/Express.js/MongoDB/mongoose.
- Follow the file/folder naming convention for all your pull requests.
- While adding any content, it should be inside its appropriate directory.
- If there is any problem with an inaccurate solution, create an issue!
- Things you can contribute to:
  - This repository contains folders of all the xamtrack API features and endpoints with some pre-addressed questions. You can add a solution to an unanswered question.
  - You can update the existing solution with a better one (better complexity, readability, security etc.).
  - Participants can even add new questions and solutions of their interest.
  - Solve issues raised by other people or yourself.
  - Well-documented source code with detailed explanations provides a valuable resource for developers and users alike.

Please make sure to follow the [code of conduct](https://github.com/Subham-Maity/xamtrack/blob/main/CODE_OF_CONDUCT.md) and the [contributing guidelines](https://github.com/Subham-Maity/xamtrack/blob/main/CONTRIBUTING.md) before making a pull request.

Thank you for your interest and support! :heart:

## License

This project is licensed under the MIT License.

## Feedback

If you have any questions or suggestions about **xamtrack**, please feel free to contact me at codexam.personal@gmail.com





