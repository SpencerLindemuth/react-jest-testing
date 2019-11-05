import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/navbar'
import * as TestRenderer from 'react-test-renderer'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a component called NavBar', () => {
  let testRenderer = TestRenderer.create(<NavBar />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
})

it('has a NavBar component with text "Site Logo Here"', () => {
  let renderer = TestRenderer.create(<NavBar />);
  let instance = renderer.root
  let node = instance.find(node => node.type === Child).props.children.type === 'p';
  expect(node.innerText).toBe("Site logo here")
})
