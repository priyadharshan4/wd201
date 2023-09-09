const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    let Overduelist = [];
    Overduelist = all.filter((TodoList) => TodoList.dueDate < new Date().toLocaleDateString("en-CA"));
    return Overduelist;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    let DueTodaylist = [];
    DueTodaylist=all.filter((TodoList) => TodoList.dueDate === new Date().toLocaleDateString("en-CA"));
    return DueTodaylist;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    let DueLaterlist = [];
    DueLaterlist = all.filter((TodoList) => TodoList.dueDate > new Date().toLocaleDateString("en-CA"));
    return DueLaterlist;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list.map(
      (Todo) =>
        `[${Todo.completed ? "x" : " "}] ${Todo.title} ${
          Todo.dueDate !== formattedDate(new Date()) ? Todo.dueDate : ""
        }`).join("\n").trim();
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};