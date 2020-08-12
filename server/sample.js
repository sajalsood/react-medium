const { v4: uuidv4 } = require('uuid');
const uID = uuidv4();

const users = {
  "sajalsood" : {
    userId : uID, 
    username : "sajalsood"
  }
};

const blogs = [
    {
        'blogId': uuidv4(),
        'title': 'Building Great User Experiences with Concurrent Mode and Suspense',
        'text': `At React Conf 2019 we announced an experimental release of React that supports Concurrent Mode and Suspense. In this post we’ll introduce best practices for using them that we’ve identified through the process of building the new facebook.com.
                This post will be most relevant to people working on data fetching libraries for React.
                It shows how to best integrate them with Concurrent Mode and Suspense. The patterns introduced here are based on Relay — our library for building data-driven UIs with GraphQL. However, the ideas in this post apply to other GraphQL clients as well as libraries using REST or other approaches.
                This post is aimed at library authors. If you’re primarily an application developer, you might still find some interesting ideas here, but don’t feel like you have to read it in its entirety.
                If you prefer to watch videos, some of the ideas from this blog post have been referenced in several React Conf 2019 presentations:
                This post presents a deeper dive on implementing a data fetching library with Suspense.
                Putting User Experience First
                The React team and community has long placed a deserved emphasis on developer experience: ensuring that React has good error messages, focusing on components as a way to reason locally about app behavior, crafting APIs that are predictable and encourage correct usage by design, etc. But we haven’t provided enough guidance on the best ways to achieve a great user experience in large apps.
                For example, the React team has focused on framework performance and providing tools for developers to debug and tune application performance (e.g. React.memo). But we haven’t been as opinionated about the high-level patterns that make the difference between fast, fluid apps and slow, janky ones. We always want to ensure that React remains approachable to new users and supports a variety of use-cases — not every app has to be “blazing” fast. But as a community we can and should aim high. We should make it as easy as possible to build apps that start fast and stay fast, even as they grow in complexity, for users on varying devices and networks around the world. `,
        'timestamp': new Date("2020-01-15"),
        'userId': uID
    },
    {
        'blogId': uuidv4(),
        'title': '5 tips to make your Angular application more accessible',
        'text': `
            This article's intent is to give the reader a few tips to follow when building accessible Angular applications. This is by no means an exhaustive list, or a cheatsheet of all the things you have to do in order to be WCAG compliant. I'm not going to talk about A, AA, Section 508, or any of that. The idea is to give you the basic ideas so you can start from there.
            I wanted to make it fun, so I decided to create an Angular app that has multiple accessibility problems that we will identify together. For each of those problems, there's going to be a solution. These aren't production-ready solutions, but they are a good starting point.
            I created this repository for the article, which has multiple branches. Each tip has two branches- one for the problem, and one for the solution. Each of those branches can be easily configured locally by following these steps:
                git clone the repository
                cd to the directory with your command line tool
                run the command npm install
                run the command npm run start
            The application will run on the port 4200 , and you can access it with the browser of choice.
        `,
        'timestamp': new Date("2020-02-21"),
        'userId': uID
    },
    {
        'blogId': uuidv4(), 
        'title': 'A Practical Guide To Angular: Handling HTTP Operations',
        'text': `
                Making HTTP requests and dealing with asynchronous code is vital for many applications. In this article, I'll show you how to handle HTTP operations in Angular and how to work with observables.
                Angular is a framework for building dynamic client-side applications using HTML, CSS and JavaScript. It has a nice CLI tool that helps with developer productivity and with generating code that follows the recommended Angular design guide so you can build fast, responsive and modular applications. In this article, I’ll show you how to make HTTP requests and work with RxJS observables.
                If you want to continue reading, you should already have an understanding of components, directives, modules, data binding, services and dependency injection in Angular. If you don’t know those things, you’re in good company because I’ve written about them 😉😃. Here are the links to the articles I’ve written covering those topics:
                    A Practical Guide To Angular: Environment and Project Set Up
                    A Practical Guide To Angular: Components and NgModules
                    A Practical Guide To Angular: Data Binding & Directives
                    A Practical Guide To Angular: Services & Dependency Injection
                The application we’ll build together while you go through this article builds on the sample application from the articles I listed above. If you have been reading and working along with me over those articles, you should have the complete code. Otherwise, you can download the project on GitHub. When you download it, you should then copy the content from src-part-4 folder into the src folder if you want to code along while you read.
        `,
        'timestamp': new Date("2020-05-30"),
        'userId': uID
    },
    {
        'blogId': uuidv4(),
        'title': 'You’re Missing the Point of React',
        'text': `I’ve seen React misunderstood by smart people more often than any other JavaScript library. React is packed with ideas that were radical at the time of its introduction. This created an air of controversy that still hasn’t quite dissolved.

            After a year of using React and observing people learning it, I can say that the best parts of React are not the ones that made it famous.
            
            They’re not virtual DOM, custom event system, server rendering or JSX. Rather, they are a few boring, old and powerful ideas.
            Image for post
            Image for post
            Sketch of surfing Polynesians
            
            Using other people’s code is like surfing. You control and surrender. You’ve got to trust the wave to carry you, but stop paying attention, and the first abstraction leak will throw you under the water.
            
            When we see something that is new both technologically and philosophically, we tend to focus on the technology part because we need to tame the magic first. We’ve had enough of black boxes in our careers. We want to understand—if not the full picture, then at least up to the level where we can make a snarky comment that is also correct to some degree.
            
            “How” is more viral than “why” at this point.
            
                “What’s new?” is an interesting and broadening eternal question, but one which, if pursued exclusively, results only in an endless parade of trivia and fashion, the silt of tomorrow. I would like, instead, to be concerned with the question “What is best?,” a question which cuts deeply rather than broadly, a question whose answers tend to move the silt downstream.
            
                Robert Pirsig
            
            When React came out, virtual DOM got everyone talking. It was a breakthrough and, like any good piece of engineering, it was built with carefully considered tradeoffs.
            
            The concept was so simple and powerful at the same time that it became the way people introduce and differentiate React from other front-end frameworks and libraries. “React is a view layer that uses virtual DOM for performance.” Another motto you can often hear is “React can be used as the V in MVC.” At the time, downplaying React’s role in application architecture was intentional because React already had too many “seemingly bad” ideas to risk alienating people by adding some more.
            
            In fact, React is not at all about virtual DOM. It’s an implementation detail that made React famous, but it overshadowed other concepts that are less shiny but more important in the long run.
            
            Now that we’re not surprised by virtual DOM anymore and it is being adopted by other frameworks and libraries, we can focus on examining React’s true strengths: composition, unidirectional data flow, freedom from DSLs, explicit mutation and static mental model.
            
            We will examine these topics in next articles.
            
            To be continued.
        `,
        'timestamp': new Date(),
        'userId': uID
    }
];

module.exports =  {
    users,
    blogs
};