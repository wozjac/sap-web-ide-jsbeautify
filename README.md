# js-beautify plugin for SAP Web IDE
This extension adds a new beautify command, which uses js-beautify (https://github.com/beautify-web/js-beautify).  
Features:
- supported file types: js, json, css, html and xml 
- configuration options using the .jsbeautifyrc file

![preview](https://www.mediafire.com/convkey/a012/96928ka9ixj31256g.jpg)

## Installation
This extension is available for SAP Web IDE, cloud edition.

1. Add a new destination in the Cloud Platform Cockpit.  
URL: https://sapwebidejsbeautify-p791767trial.dispatcher.hanatrial.ondemand.com
![destination](https://www.mediafire.com/convkey/2162/mro6or31vj04x5y6g.jpg)  
Name and description - choose as you like.

2. Go to Extensions in SAP Web IDE (refresh if already opened) - the extension should be available 
(wait some minutes if not and refresh). 

![extension](https://www.mediafire.com/convkey/ee29/qbzcdrd2uhtf36s6g.jpg)
3. switch to "On".

## Usage
When a supported file is active, a beautify option (Shift + F1) is enabled in the Edit menu. 
![menu](https://www.mediafire.com/convkey/de9c/gadg5jgdsbr9ezl6g.jpg)

## Configuration
js-beautify options can be passed using .jsbeautifyrc file created in the root project folder. If not found, default values are used. 
For more information and possible options, please check [js-beautify documentation](https://github.com/beautify-web/js-beautify#options).

## Credits
- js-beautify (v1.8.9): [https://github.com/beautify-web/js-beautify](https://github.com/beautify-web/js-beautify)

## License
This plugin is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Author
Feel free to contact me: wozjac@zoho.com or via LinkedIn (https://www.linkedin.com/in/jacek-wznk).