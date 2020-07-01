// Define your models ant their properties
export const Todo = {
    name: 'Todo',
    primaryKey: 'id',
    properties: {
        id: { type:'string'},
        name: { type: 'string' },
        color: { type: 'string' },
        todoList: {type: 'TodoList[]'}
    }
};

export const TodoList = {
    name: "TodoList",
    primaryKey: 'todoListId',
    properties: {
        todoListId: { type:'string'},
        title: { type: 'string' },
        completed: { type: 'bool' }
    }
};




















/*export default class TodoSchema { // Modo Errado de Fazer
    static schema = {
        name: 'Todo',
        primaryKey: 'id',
        properties: {
            id: { type:'int'},
            name: { type: 'string' },
            color: { type: 'string' },
            todos: [
                {
                    title: { type: 'string' },
                    completed: { type: 'boolean' }
                }
            ]
        }
    }
}*/






// R E A L M   F U N C T I O N S 

// C R E A T I N G
/*try {
    realm.write(() => {
        realm.create('Todo', {
            name: 'Plan a Trip',
            color: '#24A6D9',
            todos: [
                {
                    title: 'Book Flight',
                    completed: false
                },
                {
                    title: 'Passport Check',
                    completed: true
                },
                {
                    title: 'Reserve Hotel Room',
                    completed: true
                },
                {
                    title: 'Pack Luggage',
                    completed: false
                },
            ]
        })
    });
} catch (error) {
    console.log("Error on Creating Function");
}*/




// Define your models ant their properties
/*const TodoSchema = {
    name: 'Todo',
    primaryKey: 'id',
    properties: {
        id: { type:'int'},
        name: { type: 'string' },
        color: { type: 'string' },
        todos: [
            {
                title: { type: 'string' },
                completed: { type: 'boolean' }
            }
        ]
    }
}*/



