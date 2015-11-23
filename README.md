This is a *very* simple program that mimics the "popsickle" sticks teachers use to ensure they call on all students in their class. It uses only local storage and does not need a server or database, though you must have Node.js installed for the initial set-up.

Before using the program in the browser, you must:

1. Create a file in the root folder called `students.txt`.
2. Type "CLASS" and a group name before each list of names you copy/paste in--each name should be on a new line. The program uses the word "CLASS" to delineate each new group. Ex: 
```
CLASS
Fairytale Characters
Little Red Riding Hood
Goldilocks
Cinderella
Sleeping Beauty

CLASS
Shakespeare Characters
Romeo
Juliet
Brutus
Hamlet
```
3. From your command line, run `node scripts/students.js`.
4. Open `index.html` in your browser! 
5. If, at any point in the future, you edit `student.txt` (to update your lists, add more groups etc...) click the "Clear Memory" button to ensure your changes get added to localStorage.
