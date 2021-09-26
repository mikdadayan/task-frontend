# TAMM - Task for the frontEnd

### This repository contains the following 2 tasks from the TAMM document

1. Write higher order component in React
   HOC should provide property mouseOver to child component if mouse is over or mouse is out of the component.
2. Write functional React component
   Component should use HOC from previous question to display if mouse is over or out of component and on click of mouse changes text color.

### To run this project

1. `git clone URL`
2. `cd REPO_NAME`
3. `npm start`

### To test functionality

1. Run project
2. Hover your mouse over and out on `Mouse Out/Over` text
3. Click on `Mouse Over` text and the text color will be changed

### The first task solution is located in `src/components/withHover` folder

This is a higher order component which wraps the provided component in the withHover HOC and provides exta properties to it to detect if the mouse is over or out

### The second task solution is located in `src/components/mouseHover` folder

This component displays a paragraph using the `withHover` HOC and changes the text based on the properties provided by withHover HOC
