import React, { Component } from 'react';
import MapWithADirectionsRenderer from './Map';
class ContainerMap extends Component {
import MapContainer from './Map';
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../../../src/components/Header';
import Footer from '../../../src/components/Footer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
  },
  appBar: {
    height: 50,
  },
});
class ContainerMap extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      
      <Header/>
      <div>
        <MapWithADirectionsRenderer/>
       </div>
      <Footer/>
     
      </MuiThemeProvider>
    );
  }
}
export default ContainerMap;
