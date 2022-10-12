import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <section>
        <div className="blog">
          <h3>What is the purpose of React Router ?</h3>
          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route. React Router plays
            an important role to display multiple views in a single page
            application. Without React Router, it is not possible to display
            multiple views in React applications. Most of the social media
            websites like Facebook, Instagram uses React Router for rendering
            multiple views.
          </p>
        </div>
        <div className="blog">
          <h3>How does context api work?</h3>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state.
          </p>
        </div>
        <div className="blog">
          <h3>What is useRef ?</h3>
          <p>
            Ref means just reference, so it can be a reference to anything (DOM
            node, Javascript value, etc). The useRef hook returns a mutable
            object which doesn’t re-render the component when it’s changed.
            Think it like useState, but unlike useState, doesn’t trigger
            re-render of the component. The object that useRef returns have a
            current property that can hold any modifiable value. The useRef
            returns a mutable ref object. This object has a property called
            .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
