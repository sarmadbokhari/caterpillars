'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('./router');

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Router />, container);
