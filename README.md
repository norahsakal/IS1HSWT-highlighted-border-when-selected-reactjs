# IS>1HSWT: Trigger a highlighted border around images when selected or clicked on in react.js
**IS>1HSWT** = **I** **S**pent **>** **1** **H**our **S**truggling **W**ith **T**his; highlighting a border when selected in react.js.

The concept is simple: I spent > 1 hour on a problem, so I'm sharing my solution to save you your precious time. 

I'm not saying it's the right way to solve the problem, full disclosure: it might be a completely incorrect way to solve it - but it works, and I'm providing you this working Github repo + a working demo, so here we go.

**I Spent > 1 Hour Struggling With This:** creating a highlighted border around images when selected in react.js

Here's a working demo; http://is1hswt-highlighted-border-when-selected-reactjs.s3-website-us-east-1.amazonaws.com/

## The aim of this walkthrough
Trigger a highlighted border around images when being selected or clicked at in react.js

![alt text](https://github.com/norahsakal/IS1HSWT-highlighted-border-when-selected-reactjs/blob/master/icon_clicking_final.gif?raw=true)

## The struggle | in summary
1. Trigger className change when an image is selected
2. Loop through multiple images and trigger a highlighted border around the selected image and switch when another image is clicked at

## My > 1-hour struggle | in detail
First of all, looping through multiple images and second of all, making the highlighted border switch between the selected image.

### 1. Create the app
Create a basic react.js app;

```
npx create-react-app <your_app_name>
```

And then;
```
cd <your_app_name>
```

For help or troubleshooting with this step, visit; https://github.com/facebook/create-react-app

### 2. Install Material UI

```
npm install @material-ui/core
```

### 3. Create an object with the information 
Add this to `src/app.js`;
```
class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        your_object : {
            item_1 : {
                title : "Name of the item",
                image : require('./images/item_1.png'),
                selected: false,
            },
           item_1 : {
                title : "Name of the item",
                image : require('./images/item_2.png')
                selected: false,
           }
        
        }
    
     }
}
render() {
    return()
}
```
### 4. Loop through the created object
Add this to `src/app.js`;

```
{Object.keys(this.state.your_object).map(icon => (
    <img 
        src={this.state.your_object[icon]['image']} 
        id={this.state.your_object[icon]['name']} 
    />
    <p>{this.state.your_object[icon]['name']}</p>
))}
```

### 5. Create css classes for highlighted border
Add this to `src/app.css`;
```
.noBorder {
    text-align: center;
    color: #000;
    border: solid 2px transparent;
    padding: 12px 12px 12px 12px; 
    margin: 0px 0px 10px 0;
}
.withBorder {
    text-align: center;
    color: #000;
    border: solid 2px #EC3A4B; 
    padding: 12px 12px 12px 12px;
    margin: 0px 0px 10px 0;
}
```

### 6. Add an if statement for selected images
Add a `<div>` to existing code in `src/app.js`;

```
{Object.keys(this.state.your_object).map(icon => (
    
    <div className={this.state.your_object.[icon]['selected'] ?
    "withBorder" : "noBorder"} >
        <img src={this.state.your_object[icon]['image']} />
        <p>{this.state.your_object[icon]['name']}</p>
    </div>
))}
```

### 7. Add a function that handles the change when selecting an image
Add this to `src/app.css` above the render function

```
onIconClick(event) {


    let newState = Object.assign({}, this.state);
    for (let selection in newState.your_object) {
        if (selection !== event.target.id) {
            newState.your_object[selection].selected = false;
        }
     }
    
    newState.your_object[event.target.id].selected = true;
    this.setState({
        newState,
    })
}
```

First, we're creating a new object with the existing information in the state;
```
let newState = Object.assign({}, this.state);
```
We're then basically looping through the object your_object and changing the selected value to false on all the selected key;
```
for (let selection in newState.your_object) {
    if (selection !== event.target.id) {
        newState.your_object[selection].selected = false;
    }
}
```

Except for the clicked key, which is changed to true;
```
newState.your_object[event.target.id].selected = true;
```

Lastly, the state is updated with the new information;
```
this.setState({
    newState,
})
```

### 8. Add an onClick function to the image
Add an onClick function referring to the newly created onIconClick function in `src/app.js`;
```
{Object.keys(this.state.your_object).map(icon => (
    <img 
        src={this.state.your_object[icon]['image']} 
        id={this.state.your_object[icon]['name']} 
        onClick={(e) => this.onIconClick(e)}
    />
<p>{this.state.your_object[icon]['name']}</p>
))}
```

### 9. Run the app and try it out
Run the app
```
npm start
```

### 10. Repo + working demo
What would this walkthrough be without a working demo?
#### Here's a working demo; http://is1hswt-highlighted-border-when-selected-reactjs.s3-website-us-east-1.amazonaws.com/

### 11. Feedback
Please feel free to comment if you know or have found a better and easier way to solve this, would love to hear your thoughts.
