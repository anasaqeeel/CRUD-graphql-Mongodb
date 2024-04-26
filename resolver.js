const Todo = require('./Model');

const resolvers = {
  Query: {
    getTodos: async () => await Todo.find({}),
    getTodo: async (_, { id }) => await Todo.findById(id),
  },
  Mutation: {
    createTodo: async (_, { title, status }) => {
      const newTodo = new Todo({ title, status });
      return await newTodo.save();
    },
    updateTodo: async (_, { id, title, status }) => {
      const updatedValues = { title, status };
      return await Todo.findByIdAndUpdate(id, updatedValues, { new: true });
    },
    deleteTodo: async (_, { id }) => await Todo.findByIdAndDelete(id)
  },
};

module.exports = resolvers;
