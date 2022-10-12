import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-24">Frequently Asked Questions</h2>

                    <div className=" space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the using purpose of react router?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does context API works?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

                                The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is useref?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. useRef is like a “box” that can hold a mutable value in its .current property.useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. to run some code when React attaches or detaches a ref to a DOM node, it may want to use a callback ref instead.

                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;