//import addImage from './add-image.js';
// const addImage = require('./add-image.js');
alert("webpack 2");
// import helloWorld from './hello-world.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js' 
//import addImage from './add-image.js';
import Heading from './components/heading/heading.js';
//helloWorld();
const heading = new Heading();
heading.render();
const helloWorldButton =  new HelloWorldButton()
//addImage();
helloWorldButton.render();
