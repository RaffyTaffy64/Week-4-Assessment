let quotes = [
  {id: 0, quote: "Just because it's taking time doesn't mean it's not going to happen"},
  {id: 1, quote: "The move you're scared to make is the one that will change everything for you"},
  {id: 2, quote: "You can't change what has happened to you but you can change how you choose to move forward"},
  {id: 3, quote: "Don't give up. You will find yourself again and it will be better than the version you were before"},
  {id: 4, quote: "They say time heals all wounds, but time won't heal what you won't face"},
  {id: 5, quote: "Happiness often sneaks in a door that you did not think was open"},
  {id: 6, quote: "Things that break your heart are the same things that open your eyes"},
  {id: 7, quote: "You don't need a reason to help people"},
  {id: 8, quote: "Never forget how WILDLY capable you are"},
  {id: 9, quote: "You're allowed to make mistakes"}
]

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

let globalTaskId = 4

let tasks = [
  { id: 0, task: "Say something nice in front of the mirror about yourself", time: "🌞 or 🌛" },
  { id: 1, task: "Breathe deeply for 30 seconds", time: "🌞 or 🌛" },
  { id: 2, task: "Meditate/Pray", time: "🌞 or 🌛" },
  { id: 3, task: "Set intentions for the day", time: "🌞 or 🌛" }
]

const handlerFunctions = {
  getTasks: (req, res) => {
    res.send({
      message: "All tasks present",
      tasks: tasks
    })
  },

  addTask: (req, res) => {
    const { task, time } = req.body;
    const newTask = { id: globalTaskId++, task, time }
    tasks.push(newTask)
    res.send({ message: "New task added", newTask })
  },

  deleteTask: (req, res) => {
    const { id } = req.params
    tasks = tasks.filter(task => task.id !== +id)
    res.send({ message: "Task deleted", tasks })
  },

  editTask: (req, res) => {
    const { id, task, time } = req.body
    const index = tasks.findIndex(t => t.id === +id)
    if (index !== -1) {
      tasks[index] = { id: +id, task, time }
      res.send({ message: "Task updated successfully", updatedTask: tasks[index] })
    } else {
      res.status(404).send({ message: "Task not found" })
    }
  }
}

export default handlerFunctions
export { getRandomQuote }


