# DataBooster.io Remix App 🚀

This is a small Remix project for the DataBooster frontend developement internship assignment.

## Overview
The time it took to complete this assignment was approximately **2.5** hours. Most of the time was allocated to the breakdown of the component architecture and the basic styling of those components. Some research was also done to understand Remix's routing conventions.

## Methodology
## Folder Structure
I have followed the industry standard's guidelines when it comes to folder structure in React and Remix projects. This is a small project so the structure is quite basic. 

Instead of placing the `lessons.json` file in the root of the project, I thought it was cleaner and
## Routing
In the `_index.tsx` file, I opted to immediately redirect to the `/exercises` route with a data loader function that fetches the first exercise. This makes it clear to the user that they are going to see exercises in their browser.

I have used dynamic routes (`/exercises/$exerciseId`) to load each exercise from the json data source. The `exercises.$exercise.tsx` file uses a data loader to fetch the exercise based on the id parameter. If the exercise is found, I render the `Exercise.tsx` component.

## Naming Conventions
I follow a consistent naming pattern for my components to understand which file I am in and what I am looking at. I also use TypeScript to add typings to parameters and variables accordingly.

When necessary, I use enums to make checking more consistent and robust. For example, I have created an `ExerciseEnumType` enum to match the exercise to its `resourcetype` property and render either the video or multiple choice component. 

## Component Architecture
I have 4 main components with the following nested structure.
- Exercise.tsx
    - MultipleChoice.tsx
        - Answer.tsx
    - Buttons.tsx

The `Exercise.tsx` component renders the exercise content on the page. If it is a multiple choice exercise, I render a `MultipleChoice.tsx` component which has a component `Answer.tsx` for each answer in the data. A user can select only one answer with the radio button.

In the `Exercise.tsx` I also render the `Buttons.tsx` component which takes care of navigating back and forth between exercises. The `Buttons.tsx` component detects whether to render a left or right arrow icon based on the props passed from the parent component. 

Such an architecture is modular and maintainable, rather than having a monolithic structure which may introduce duplication and inconsistent code. For example, if I added a new `<li>` element for each answer instead of a single component, I could miss a styling property (e.g. padding). 

## Styling
I have used TailwindCSS classes and Remix Icons to style the web page. 

## Future Improvements
The web page can be improved in multiple ways but I focus on a handful.

### Responsiveness
To make the web page responsive, TailwindCSS provides targeted classes that are mapped to media queries. We could add these and test on multiple device simulations to make sure the web page responds to each using Chrome/Firefox Dev Tools.

### Color Palette
The current color pallette is not very color-blind friendly. We could also implement a dark-theme which inverts the colors. DaisyUI is another great UI library that provides theming and beautiful, ready components.

### Error States
There is an exercise in the data which refers to another exercise that does not exist. Therefore, we reach an error state: 404 Not Found. We may implement error handling in the application with a global error page for unreachable requests.