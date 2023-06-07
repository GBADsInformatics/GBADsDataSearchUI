## Running the Project :running_woman:

In the `src` directory, you can run:

### `npm i` 

Installs all of the dependencies required to run this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Development :hammer:

The project is broken up into 3 major sections
- Pages :bookmark_tabs:
- Components :bricks:
- Routing :arrow_right:

### Pages :bookmark_tabs:
Pages are very general and contain components. Pages can include a homepage, settings page, search page, etc. When you're developing pages, you're creating a new view in the project that the user can route to.

### Components :bricks:
Components are generally designed under the principal that they should be reusable, but there are cases where it's generally not needed. For example, the `MainGrid.js` component is used in several views, and relies on information that comes from an API call.

#### Example
If I wanted to create a card that housed some sort of information but always looked the same, I'd create a component that takes whatever information it needs, and then I can map that information onto that card as many times as I want. Let's say I had loads of animal data within a JSON object that contained:
- Name
- Weight
- Height

I can map those components easily onto the same component and add that inside a div (like a container).

A great example is found in KeywordSidebar.js:
```
{props.keywords.map((item, index) => (
                <div key={index} className="keyword">
                    <p>{item}</p>
                </div>
            ))}
```

## How can I start working on this?

A good idea is to start by understanding the files within the pages folder, and see how the components are used in each file. Some of the routing to different routes is done in the within the `MainGrid.js` file, where depending on which option button is selected, the route will change.
