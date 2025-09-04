  const Posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      desc: "React Hooks are special functions introduced in React 16.8 that allow developers to use state and other important React features in functional components, without needing to write class components. Before hooks, React developers had to rely heavily on class components to manage state, lifecycle methods, and side effects. This often led to complex, verbose, and harder-to-maintain code. Hooks were introduced to solve these problems and make components simpler, more reusable, and easier to understand.useState lets you add state variables to a functional component. Instead of using this.state and this.setState, you simply call useState and get a pair: the current value and a function to update it.useEffect replaces many of the lifecycle methods found in class components (like componentDidMount, componentDidUpdate, and componentWillUnmount).It allows you to run side effects in functional components, such as fetching data, setting up subscriptions, or manually changing the DOM.useContext makes it easier to consume values from React’s Context API without needing to write nested render props. Beyond these, React also provides more advanced hooks like useReducer (for managing complex state logic), useMemo and useCallback (for performance optimization by memoizing values and functions), and useRef (for directly accessing DOM elements or persisting values between renders). Developers can even create their own custom hooks to encapsulate reusable logic, making applications more modular and maintainable." ,
      image: "React-Hooks.png",
    },
     {
      id: 2,
      title: "Unveiling the Google's Quantum chip",
      desc: "Google's Willow quantum chip, unveiled in December 2024, represents a significant advancement in quantum computing. Developed by Google Quantum AI, Willow is a 105-qubit superconducting processor designed to address long-standing challenges in quantum error correction and computational scalability .",
      image: "qchip.jpg",
    },
  ];

  export default Posts;