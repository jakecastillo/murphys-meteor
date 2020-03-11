import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="murphys-background">
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" inverted>
                  A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block
                  off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}