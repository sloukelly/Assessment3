Theory Questions

1. In design Heuristics, what does the term "advantages of Matching between system and the real world" mean? What are the advantages?

In design heuristics, "advantages of matching between system and the real world" emphasises the importance of creating interfaces that align with users' personal models and expectations, formed from their experiences. Considering this when making a product can offer multiple benefits.

Users find systems easier to use when interactions resemble familiar concepts, therefore reducing the learning curve. Incorporating this in a system decreases cognitive load, because the user can apply existing knowledge to navigate comfortably.

This increases efficiency as users can work seamlessly, which is especially valuable for complex tasks. This also reduces the chances of errors, as users can predict outcomes and behaviours accurately.

Following this can boost user satisfaction, through meeting their expectations and creating a positive experience. Training requirements decrease since users can confidently engage with a system that reflect their models.

When various types of people can easily get used to a product that works similarly to models they know in real life; flexibility increases. People understand messages better when the design looks familiar, helping them know what the product is saying.

In conclusion, the "advantages of matching between system and the real world" heuristic underscores creating interfaces that align with users' mental models, enhancing usability and overall experience.

2. What do you understand by "Single source of truth"? and how does it relate to redux? What are the advantages?

"Single source of truth" is a principle in information management where a single, authoritative data source is considered the definitive reference for a particular piece of information. In relation to software development, it ensures that data is stored and maintained in a central location, which can reduce inconsistencies and conflicts that otherwise could arise from multiple versions of the same information.

In regards to Redux, the single source of truth refers to the central store that holds the entire application state. All components access this state uniformly, which promotes a predictable and structured approach to managing the data. Redux follows a unidirectional data flow, ensuring that changes to the state are made through clearly-defined actions, and therefore reducing the risk of data discrepancies and enhancing debugging capabilities.

The advantages of a single source of truth in Redux include improved data consistency, simplified data management, efficient debugging, and better collaboration among developers. It fosters a clear understanding of application state and facilitates smoother development and maintenance processes.

3. What is the difference between a stateless component and a stateful compenent in React?

In React, stateless components (functional components) and stateful components (class components) differ in their approach to managing and utilising data.

Stateless components are mostly focused on rendering user interface elements based on the input props they receive. They don't have their own internal state management and are simpler to write and understand. These components are useful for presentational purposes and can be easily tested and reused.

On the other hand, stateful components are capable of maintaining and updating their own internal state using React's state management system. They extend the React.Component class and can hold and manipulate data that might change over time. Stateful components are ideal for managing dynamic user interactions, fetching data from APIs, and handling complex application logic.

In recent React versions, the introduction of Hooks has caused a blurred line between stateful and stateless components, as functional components can now also manage their own state using the various Hooks, like useState and useEffect. Despite this, the concepts of stateless (functional) and stateful (class) components still provide a understanding of React's foundations.

4. List out the advantages and disadvantages of exploratory testing (used in Agile) and scripted testing?

Exploratory testing is an informal Agile testing method where testers use their intuition and expertise to design on-the-spot test cases while interacting with the software. Unlike scripted testing, it lacks predefined guidelines, this allows testers to simulate real user interactions and discover unexpected defects.

Exploratory testing in Agile has several benefits. It encourages flexibility, creativity, and adaptability in testing. It's well-suited for dynamic Agile environments, and catching rapid changes. However, its unstructured nature can lead to inconsistent coverage and documentation.

Scripted testing, on the other hand, provides clear test cases and documentation, ensuring comprehensive coverage. It's beneficial for repetitive tasks and maintaining consistent standards. However, it might struggle to keep pace with Agile's iterative nature and can miss subtle issues, often not covered by predefined scripts. It can also become rigid and fail to adapt to changing requirements.

In conclusion, exploratory testing is great at uncovering unforeseen issues but may lack structure, while scripted testing ensures thorough coverage and documentation but might struggle with agility. The choice depends on project needs: exploratory for rapid discovery and adaptation, scripted for systematic coverage and compliance. Often, a combination of both approaches can yield the best results in Agile environments.