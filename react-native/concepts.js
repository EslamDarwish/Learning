//Metro is the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies.

//Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.


/*
Testing in react native : 
How to make a testable code :
To make your app more testable, start by separating the view part of your app—your React components—from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing—which shouldn’t rely on your React components—independent of the components themselves, whose job is primarily rendering your app’s UI!

Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app’s logic would work without any React components at all!

*/
// Structuring Tests
/*The test is described by the string passed to the it function. Take good care writing the description so that it’s clear what is being tested. Do your best to cover the following:

Given - some precondition
When - some action executed by the function that you’re testing
Then - the expected outcome
This is also known as AAA (Arrange, Act, Assert). */

/*

Types of test
1-Static :

Static analysis checks your code for errors as you write it, but without running any of that code.
a-Linters analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration).

b-Type checking ensures that the construct you’re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.

2-Unit tests
Unit tests cover the smallest parts of code, like individual functions or classes.

3-Integration Tests
In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you’ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing.

4-Component Tests
React components are responsible for rendering your app, and users will directly interact with their output
For testing React components, there are two things you may want to test:

Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)
Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)
There are several libraries that can help you testing these:

React’s Test Renderer, developed alongside its core, provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
React Native Testing Library builds on top of React’s test renderer and adds fireEvent and query APIs described in the next paragraph.

5-End-to-End Tests
In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective.
E2E tests give you the highest possible confidence that part of your app is working. The tradeoffs include:

writing them is more time consuming compared to the other types of tests
they are slower to run
they are more prone to flakiness (a "flaky" test is a test which randomly passes and fails without any change to code)



*/
/*
Mocking
Sometimes, when your tested objects have external dependencies, you’ll want to “mock them out.” “Mocking” is when you replace some dependency of your code with your own implementation.

Generally, using real objects in your tests is better than using mocks but there are situations where this is not possible. For example: when your JS unit test relies on a native module written in Java or Objective-C. */