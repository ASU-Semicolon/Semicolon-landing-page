

let cards = [
    {
        title: 'ARM',
        description:
          "ARM architecture is a popular processor architecture used in a variety of devices, as smartphones, laptops, and embedded systems. It's designed to be energy-efficient, fast, and scalable, making it an excellent choice for different applications. The workshop includes arm architecture, RCC clock, interrupt, DMA, and more. By the end, you will have an excellent understanding of the STM32F103 microcontroller and its capabilities.",
        objectives: [
          'By the end of this course, you will have a thorough understanding of the STM32F103 microcontroller and its capabilities. You will be able to confidently design and develop embedded systems using arm architecture unlocking its full potential and taking your skills to the next level.',
        ],
        prerequisites: [
          '1. C/C++ development experience is a must!',
          '2. Embedded C and dealing with the compilation process is a must',
          '3. Dealing with any micro-controller is a must',
          '4. Basic knowledge of Digital electronics.',
        ],
        content: [
          '1. ARM Architecture',
          '2. RCC Peripheral',
          '3. DIO Peripheral',
          '4. NVIC',
          '5. NVIC Driver',
          '6. EXTI',
          '7. SysTick',
          '8. UART',
          '9. SPI',
          '10. DMA',
        ],
        duration_in_sessions: 10,
        sessions_per_week: 3,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'AVR',
        description:
          "AVR microcontrollers are widely used in a variety of applications, from simple DIY projects to complex industrial systems. You will learn topics including Embedded Systems, module drivers, DIO, timers, ADC, communication protocols, and more By the end of this course, Join us to build a solid understanding of how to work with AVR microcontrollers and design your embedded systems using them. So let's dive in and start mastering AVR microcontrollers!",
        objectives: [
          'By the end of the course you will know the concepts of Embedded Systems and get skilled in writing module drivers to interface with any MCU that will make you compatible to go throw embedded track with many embedded system companies.',
        ],
        prerequisites: [
          '1. Knowledge of C language is a MUST.',
          '2. Good knowledge of Embedded C',
          '3. Basic knowledge of Digital electronics.',
        ],
        content: [
          '1. Intro to Embedded Systems.',
          '2. Interfacing (GPIO & 7 segment & buzzer)',
          '3. AVR Interrupts',
          '4. AVR Timers',
          '5. ADC and ultrasonic ',
          '6. External Interfacing (LCD & Keypad)',
          '7. Communication Protocols (UART and SPI)',
        ],
        duration_in_sessions: 10,
        sessions_per_week: 3,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'C Programming',
        description:
          'Operating systems, games, and mobile apps are all made with the help of the robust and popular programming language C. You will learn topics including variables, data types, operators, control flow, functions, arrays, pointers, memory allocation, data structure, and more. Join us to build a strong foundation in C programming and take your skills to the next level.',
        objectives: [
          "This course will give you a strong foundation in C programming and embedded C, regardless of your level of programming experience. You'll have a head start understanding the topics of this workshop if you have a basic understanding of any programming language.",
        ],
        prerequisites: [
          '1. Logic number system (0,1)',
          '2. Background in any programming language',
        ],
        content: [
          '1. Introduction to the C language and Embedded C (Variables, data types, part of data modifiers, I/O ) ',
          '2. C Operators &Flow Control (if conditions and loops)',
          '3. Function ',
          '4. Arrays  ',
          '5. String  ',
          '6. Pointer  ',
          '7. Dynamic Memory Allocation  ',
          '8. Struct, Union, and Enum ',
          '9. Memory [Data modifiers and visibility Modifiers, Memory Layout(.bss,.data),Files in C ] ',
          '10. Preprocessor directive, toolchain',
          '11. Data Structure',
        ],
        duration_in_sessions: 10,
        sessions_per_week: 3,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'Digital Design',
        breif: 'Cutting-edge Insights: AI for Digital Design and Digital Design for AI',
        objectives: null,
        prerequisites: [
          '1. Logic design Basics',
          '2. Verilog HDL knowledge',
          '3. Computer architecture is a plus',
          '4. MATLAB or python programming is a very good plus'
        ],
        content: [
          '1. Hands on implementing Hardware for AI applications knowledge',
          '2. Architecture design and RTL and Verification code implementation',
          '3. FPGA flow for implemented AI application',
          '4. AI chatbots usage for generating HDL designs'
        ],
        duration_in_sessions: 5,
        sessions_per_week: 2,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'Artificial Intelligence',
        description:
          " Welcome to the AI workshop which covers all topics related to machine learning. You'll explore Python libraries like NumPy, pandas, and Matplotlib, crucial for exploratory data analysis. The workshop progresses into machine learning topics such as linear regression, logistic regression, and multiple variable linear regression, addressing practical applications in predictive modeling.\n\n Advanced topics include decision trees, Naïve Bayes, KNN, K-means, and hierarchical clustering for pattern recognition and data segmentation. Theoretical concepts like variance-bias tradeoff, data science methodologies, SVM, and introductory neural networks to provide a comprehensive understanding of machine learning techniques.",
        objectives: [
          '1. Understanding How Ai work and how to implement it',
          '2. develop your Problem-Solving and Analytical Skills',
          '3. Develop Ai models for most Comon Application on Ai Like Image Classifier and Spam Email detector',
          '4. Dive deeply in high Industry AI technology and integrate it with your job',
          '6. Learn one of most high potential field with a lot of research and Development',
          '7. one of most field containing Science especially in Mathematics and Algrothims',
          '8. treat with big fan Community of Ai and be part of it'
        ],
        prerequisites: [
          '1. basic knowledge programming Preferred Python',
          '2. Knowledge of Mathematics especially Statistics and Probability, Linear Algebra and Differential Calculus'
        ],
        content: [
          'Review to Python programming & Python Data Structures',
          'Python Libraries for EDA (Numpy ,pandas Matplotlib)',
          'Intro to ML, Linear Regression',
          'Multiple Variable Linear Regression',
          'Logistic Regression',
          'Variance and Bais Problems',
          'Data Science Methodology',
          'Decision Tree and Naïve bayes',
          'KNN, K-means and Hierarchical clustering.',
          'Anomaly Detection, Recommendation Systems (Optional Session)',
          'Reinforcement Learning (Optional Session)',
          'SVM',
          'Introduction To Neural Network'
        ],
        duration_in_sessions: 12,
        sessions_per_week: 3,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'Frontend Development',
        description:
          'HTML, CSS, and JavaScript are the three core technologies that power the modern web. This workshop introduces you to their fundamentals, so you can start building your own websites and web apps. Learn to structure web pages with HTML, style them with CSS, and add interactivity with JavaScript.',
        objectives: [
          '1. You will start your way in Web Development world by a very powerful and easy techniques.',
          '2. In this course you will gain the fundamental and basic concepts of Front-end web development, you will have fundamental knowledge of HTML/CSS syntax.',
          '3. You will learn the basics of JavaScript and how to use it to add interactivity and dynamic behavior to web pages.',
        ],
        prerequisites: ['You don’t need any skill or any previous experience!'],
        content: [
          '1. Basic setup and learning how to learn',
          '2. Web standards and best practices (such as accessibility and cross-browser compatibility)',
          '3. HTML, the language that gives web content structure and meaning',
          '4. CSS, the language used to style web pages',
          '5. JavaScript, the language that adds interactivity to a web page',
          '6. Interacting with the DOM (Document Object Model) API',
        ],
        duration_in_sessions: 7,
        sessions_per_week: 2,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'JavaScript & NodeJS',
        description:
          'Welcome to the JavaScript & Node.js course! In this course, you will learn the fundamentals of server-side development with Node.js. Node.js is a popular and powerful JavaScript runtime that allows developers to build fast, scalable, and event-driven server-side applications. You will learn how to build and deploy server-side applications using Node.js and other popular web development technologies.',
        objectives: [
          '1. Understand the basics of JavaScript and its architecture.',
          '2. Learn about advanced JavaScript concepts.',
          '3. Understand the basics of Node.js and its architecture.',
          '4. Build and deploy server-side applications using Node.js.',
          '5. Use Node.js to work with databases and APIs',
          '6. Build RESTful APIs using Node.js and Express.',
          '7. Understand how to use Node.js to handle asynchronous operations',
          '8. Use Node.js with front-end frameworks such as React, Angular, and Vue',
          '9. Understand how to deploy Node.js applications to production environments.',
        ],
        prerequisites: [
          'A basic understanding of HTML & CSS are preferred, but not required.',
        ],
        content: [
          '1. Basics of JavaScript',
          '2. Loops, functions, objects, and arrays',
          '3. Hoisting, closure, higher-order functions, and callbacks',
          '4. Asynchronous JavaScript',
          '5. Introduction to Node.js',
          '6. Building Node.js Applications',
          '7. Express.js & RESTFUL APIs',
          '8. Authentication & Authorization',
          '9. Working with Databases with MongoDB',
          '10. Deploying Node.js Applications',
        ],
        duration_in_sessions: 8,
        sessions_per_week: 2,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    },
    {
        title: 'Frontend with ReactJS',
        description:
          'In this workshop, you will have the opportunity to dive deep into the world of React and see how it can be used to develop web applications. You will learn how to build interactive and dynamic user interfaces, integrate with APIs, and much more. Some examples of popular web applications built with React include Facebook, Instagram, and Netflix.',
        objectives: [
          '1. Build and deploy a React application.',
          '2. Use JSX to build complex user interfaces.',
          '3. Manage state in React applications using hooks.',
          '4. Understand how to handle user input and events in React.',
          '5. Use React to work with data from APIs.',
          '6. Make your own web application as a final project.',
        ],
        prerequisites: [
          '1. A basic understanding of HTML, CSS, and JavaScript',
          '2. Familiarity with modern JavaScript features, such as arrow functions and destructuring',
          '3. Experience with a code editor such as VS Code or Sublime Text',
        ],
        content: [
          '1. Introduction to React',
          '2. Building a Simple React Application',
          '3. Managing State in React',
          '4. Handling User Input and Events',
          '5. Working with Data from APIs',
          '6. Testing React Applications',
        ],
        duration_in_sessions: 6,
        sessions_per_week: 2,
        start_date: new Date(2024, 8, 1),
        location: "Abdo Basha",
        season: "Summer 2024",
        state: 'not-started',
    }
];


export default cards;