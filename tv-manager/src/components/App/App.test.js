import React from 'react';
import App from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<App />', () => {
  it('renders an header', () => {
    const header = shallow(<App />);
    expect(header.find('div.App-header'));
  });

  it('renders the header output', () => {
    const app = shallow(<App />);
    const expectedOutput =
    '<div class="App">' +
    '<header class="App-header">' +
    '<h1 class="App-title">TV Series List</h1>' +
    '<ul class="nav-bar">' +
    ' <li>' +
    '<a class="nav-link" href={"/"}>' +
    '<p class="textarea">Home</p>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</header>' +
    ' </div>' 
    ;
    const realOutput = app.find('header.App-header').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});

