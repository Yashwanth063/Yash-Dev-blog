import express from "express";
import cors from "cors";
import path from 'path';
import { log } from "console";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('public/'));


 let posts = [
  {
      id: 1,
      title: "The RTX 50-series has delivered a record-breaking $4.28B in gaming revenue for Nvidia...",
      desc: "Although AI is absolutely the main focus of Nvidia right now, with Jen-Hsun now referring to it as an AI infrastructure company, the green team hasn't forgotten about gaming. The launch of the RTX 50-series graphics cards this year has certainly been a boon for the company and accounts for a huge increase in gaming revenue.The second quarter of Nvidia's fiscal year 2026 or 2025 if you're not Nvidia has seen a record $4.28 billion of revenue, which is 49% higher than the same period last year. The start of 2024 didn't see any major launches for GPUs, with the RTX 40-series cards rolling out from the latter half of 2022 to the middle of 2023.For a longer term picture of what this stat means, Nvidia reported a gaming revenue of $1.83 billion in the final quarter of 2022 Nvidia's Fiscal 2023. Yeah, it a confusing system. This same quarter saw the launch of RTX 40-series laptops, as well as the RTX 4070 Ti. Prior to that, in Q3 of 2022, we would only just seen the launch of the RTX 4090, and Nvidia reported a gaming revenue of $1.57 billion. Nvidia followed up with gaming revenue of $2.24 billion in Q1 fiscal 2024, as well as the launch of the RTX 4070. Finally, Q2 of fiscal 2024 saw a revenue of $2.49 billion, with the launch of both the RTX 4060 and the RTX 4060 Ti.",
      image: "/nvidia-img.png",
      uname:"Vincent"
  },
    {
      id: 2,
      title: "Understanding React Hooks",
      desc: "React Hooks are special functions introduced in React 16.8 that allow developers to use state and other important React features in functional components, without needing to write class components. Before hooks, React developers had to rely heavily on class components to manage state, lifecycle methods, and side effects. This often led to complex, verbose, and harder-to-maintain code. Hooks were introduced to solve these problems and make components simpler, more reusable, and easier to understand.useState lets you add state variables to a functional component. Instead of using this.state and this.setState, you simply call useState and get a pair: the current value and a function to update it.useEffect replaces many of the lifecycle methods found in class components (like componentDidMount, componentDidUpdate, and componentWillUnmount).It allows you to run side effects in functional components, such as fetching data, setting up subscriptions, or manually changing the DOM.useContext makes it easier to consume values from React’s Context API without needing to write nested render props. Beyond these, React also provides more advanced hooks like useReducer (for managing complex state logic), useMemo and useCallback (for performance optimization by memoizing values and functions), and useRef (for directly accessing DOM elements or persisting values between renders). Developers can even create their own custom hooks to encapsulate reusable logic, making applications more modular and maintainable." ,
      image: "/React-Hooks.png",
      uname:"Yash@004"
    },
     {
      id: 3,
      title: "Unveiling the Google's Quantum chip",
      desc: "Google's Willow is a cutting-edge quantum computing chip that represents a significant leap toward practical, large-scale quantum computation by tackling the long-standing challenge of quantum error correction. Unveiled in late 2024, the chip, developed by Google's Quantum AI lab in Santa Barbara, demonstrated an exponential reduction in error rates as it scaled, a historic achievement in the field. This milestone, known as being below threshold, indicates that the system's ability to correct errors outpaces the rate at which they occur as more qubits are added, paving the way for more reliable and scalable quantum computers. Using 105 superconducting transmon qubits, which exhibit quantum behavior at temperatures just above absolute zero, Willow performed a complex benchmark calculation in under five minutes, a task that would take a modern supercomputer an estimated 10 septillion years. This staggering speed demonstrates the immense potential of quantum computation to solve problems that are intractable for classical computers. Beyond its raw speed, Willow's architecture also incorporates real-time error correction and enhanced qubit connectivity, contributing to its state-of-the-art performance. While still a research prototype, the innovations introduced by Willow could accelerate progress in various fields, including drug discovery, artificial intelligence, and materials science, by enabling complex simulations and problem-solving at an unprecedented scale .",
      image: "/qchip.jpg",
      uname:"Daniel"
    } 
  ];


app.get("/", (req,res)=>{
  res.json(posts);
})

// single post
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

app.post("/api/posts", (req, res) => {
  const { title, desc, image, uname } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    desc,
    image: `/${image}` || "/default.png",
    uname: uname || "Admin",
  };
  posts.push(newPost);
  res.json(newPost);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
