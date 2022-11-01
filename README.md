# HNGi9 STAGE ONE TASK - BUILD A WEBSITE LIKE LINK-TREE's

This project is was built as a solution to a task given to interns at the HNG internship program 9.
- Here is the a link to my solution- [https://browyn-link-tree.netlify.app/](https://browyn-link-tree.netlify.app/)

## Project's / Task Requirements

While asked to build a website with features as that of link-tree, we were also given a design as figma file to use as the UI for the task.

- Here is the a link to the figma file - [https://www.figma.com/file/m2C1MHd8vASrLqfxSUdgxD/Designs-for-frontend?node-id=4623%3A431129](https://www.figma.com/file/m2C1MHd8vASrLqfxSUdgxD/Designs-for-frontend?node-id=4623%3A431129)

The project was divided into two parts (profile and links section) and we were also asked to follow a set of rules follow as a requirement to move unto the next stage, the rules are listed out below;

### Required Librabry

- React.js

### The Profile section

- A profile image with an id of "profile__img"
- Twitter username with an id of "twitter"
- Slack display name with an id of "slack" (This is meant to be hidden in the UI but available on code)

### The Links Section

- Click [https://hng9.notion.site/Front-End-Stage-1-Task-cdaf503a796b4a5a85c5883a0a6163db](here) to view

## Special resources used

- React.js
- SCSS 
- JavaScript
- react-web-share

## Extra Features added

- Ability to share link-tree profile
- Ability to share individual link
- Ability to add / see extra information about individual link

### Some notable experience

To access the above features, you must hover or touch on a single link, however, on mobile that may be tricky, because some users may have no reason to touch slightly and will likely end up clicking the link which will not activate the above features but link to the intended route.

On the official link-tree, a user on mobile would have to swipe a link to see a button to activate the share feature. Still how may users would want to swipe left or right without an indicator to do so.

To solve this, I thought of a longer but better (in my opinion) approach. The solution will be to;

- Display three icons on click of a link, which are the visit link icon, info icon and share icon, with the user being able to choose whichever one that fits the intention.

Although this is a longer approach, the user has full access to the features on a single link on mobile devices, while maintaining the default hover effects to display all features attached to a link on desktop.

I didn't implement this because, I was sticking to the rules on the task.
