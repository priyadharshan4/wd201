/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList =  require('../todo');
const {all, markAsComplete, add, overdue, dueToday,dueLater } = todoList();
describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0, 10)
            }
        );
    })
    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0, 10)
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
    test("Should retrieve overdue todo", () => {
 let dateToday = new Date()
         today = dateToday
         yesterday =
  new Date(new Date().setDate(dateToday.getDate() - 1))
        
        let tomorrow = 
 Date(new Date().setDate(dateToday.getDate() + 1))
         todoitemscount = all.length
         overDueCount = overdue().length
        add({ title: 'Submit assignment', dueDate: yesterday.toLocaleDateString("en-CA"), completed: false })
        expect(overdue().length).toBe(overDueCount + 1)
    });
    test("Should retrieve dueDate todo", () => {
    let dateToday = new Date()
         let today = dateToday
         let yesterday =
   new Date(new Date().setDate(dateToday.getDate() - 1))
         
         let tomorrow = 
         new Date(new Date().setDate(dateToday.getDate() + 1))
         let todoitemscount = all.length
 
             let dueTodayCount = dueToday().length
             add({ title: 'Service Vehicle', dueDate: today.toLocaleDateString("en-CA"), completed: false })
             expect(dueToday().length).toBe(dueTodayCount + 1)
        });
    test("Should retrieve dueLater todo", () => {
    let dateToday = new Date()
    let today = dateToday
    let yesterday =
new Date(new Date().setDate(dateToday.getDate() - 1))
    let tomorrow = 
    new Date(new Date().setDate(dateToday.getDate() + 1))
    let todoitemscount = all.length
        const dueLaterCount = dueLater().length
        add({ title: 'File taxes', dueDate: tomorrow.toLocaleDateString("en-CA"), completed: false })
        expect(dueLater().length).toBe(dueLaterCount + 1)
});    
});
