import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flavors: {
        watermelon: {
          name: "watermelon",
          image: require('./images/watermelon.png'),
          selected: false,
        },
        strawberry: {
          name: "strawberry",
          image: require('./images/strawberry.png'),
          selected: false,
        },
        raspberry: {
          name: "raspberry",
          image: require('./images/raspberry.png'),
          selected: false,
        },
        cherry: {
          name: "cherry",
          image: require('./images/cherry.png'),
          selected: false,
        },
        lemon: {
          name: "lemon",
          image: require('./images/lemon.png'),
          selected: false,
        },
        apricot: {
          name: "apricot",
          image: require('./images/apricot.png'),
          selected: false,
        },

      }
    }
  }
  onIconClick(event) {


    let newState = Object.assign({}, this.state);
    for (let selection in newState.flavors) {
      if (selection !== event.target.id) {
        newState.flavors[selection].selected = false;
      }
    }

    newState.flavors[event.target.id].selected = true;
    this.setState({
      newState,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Grid container>
            <Grid item sm={1}></Grid>
            {Object.keys(this.state.flavors).map(icon => (
              <Grid item sm key={this.state.flavors[icon]['name']}>
                <div className={this.state.flavors[icon]['selected'] ? "withBorder" : "noBorder"} >
                  <img
                    src={this.state.flavors[icon]['image']}
                    id={this.state.flavors[icon]['name']}
                    alt={this.state.flavors[icon]['name']}
                    onClick={(e) => this.onIconClick(e)} />

                  <p>{this.state.flavors[icon]['name']} </p>
                </div>
              </Grid>
            ))}
            <Grid item sm={1}></Grid>

          </Grid>

          <Typography variant="h3" gutterBottom className="headlineMargin">
            Click on an icon above to choose ice cream flavor
          </Typography>


          <Typography variant="caption" gutterBottom>
            Icons by <a href="https://icons8.com">Icons8 </a>
          </Typography>


        </header>
      </div>
    );
  }
}

export default App;
