

const blogs = [{
    title: "When should we use Content API?",
    content: "Context API helps to provide data from parent component to its child components easily. Whenever we need to send data to its child components in deep component tree we can use context api. Context API is useable for Theming, inheritance based data, routing, managing states and etc."
},
{
    title: "What is Custom Hooks?",
    content: "Hooks are function, That do some works, Likes Function. Custom Hooks are functions that do some logic and return something. Custom Hooks can use multiple react hooks in combination to build a great Hooks. Hooks are named using use prefix."
},
{
    title: "What is useRef? When to use it?",
    content: "useRef is a React Hook. useFef stores something likes state in react. but it doesn't re-render page in change. Mainly, useRef is useable for storing the DOM element's reference or something related to WEB API."
},
{
    title: "What is useMemo? How does this works?",
    content: "useMemo memorize components/functions return value to reduce unnecessary re-randers.It helps to optimize react applications speed. it receive 2 parameters. first parameter takes an component/function that's return value will store. As Second parameter, if it does get the second parameter, useMemo will call the function is each render of the component. in case the dependency array is empty, it will call the function once(in first render). while dependency array value change it will call the function"
}]

function Post({ post }) {
    return (
        <div className="py-8">
            <h1 className="text-[clamp(1.5rem,1rem+3vw,2.5rem)]">{post.title}</h1>
            <p className="text-dark02 mt-3 leading-relaxed text-lg">{post.content}</p>
        </div>
    )
}

export default function PostBlog() {

    

    return (
        <section className="container my-16">
            <h1 className="font-extrabold text-[clamp(2rem,1.5rem+3vw,3rem)] text-center bg-slate-200 p-3">
                Blog
            </h1>

            {blogs.map((post,i) => <Post key={i} post={post}  />)}
        </section>
    )
}