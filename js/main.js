import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  /*{
    'title':  "Portfolio Boilerplate",
    'href':  "https://example.com",
    'desc':  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image':  {
      'desc':  "A Serverless Portfolio",
      'src':  "images/example1.png",
      'comment':  ""
    }
  },*/
  {
    'title':  "SharePoint Portfolio",
    'href':  "https://www.slideshare.net/djsablosky/sharepoint-portfolio-26477950",
    'desc':  "This SharePoint portfolio demonstrates a web application built" +
              "and customized with Visual Studio and SharePoint Designer.  It" +
              " also displays a custom SharePoint feature for site " +
              "permissions as well as Power Shell scripts for auditing and " +
              "deployment.",
    'image':  {
      'desc':  "example screenshot of a project involving chemistry",
      'src':  "images/example2.png",
      'comment':  ""
    }
  },
  {
    'title':  ".NET Portfolio",
    'href':  "https://www.slideshare.net/djsablosky/portfolio-6521910",
    'desc':  "This .NET portfolio exhibits the building parts of the " +
              "business tier for a retail company using Microsoft.NET " +
              " Framework in the C# programming language.",
    'image':  {
      'desc':  "example screenshot of a project involving cats",
      'src':  "images/example3.png",
      'comment':  `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181"`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
