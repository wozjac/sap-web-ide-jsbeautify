# js-beautify plugin for SAP Web IDE
This extension adds a new beautify command, which uses js-beautify (https://github.com/beautify-web/js-beautify).  
Features:
- supported file types: js, json, css, html and xml 
- configuration options using the .jsbeautifyrc file

![preview](http://public_repo.vipserv.org/images/beautify/screen1.gif)

## Installation
This extension is available for SAP Web IDE, cloud edition.

1. Add a new destination in the Cloud Platform Cockpit.  
URL: https://sapwebidejsbeautify-p791767trial.dispatcher.hanatrial.ondemand.com
![destination](http://public_repo.vipserv.org/images/beautify/screen2.png)  
Name and description - choose as you like.

2. Go to Extensions in SAP Web IDE (refresh if already opened) - the extension should be available 
(wait some minutes if not and refresh). 

![extension](http://public_repo.vipserv.org/images/beautify/screen3.png)  
3. switch to "On".

## Usage
When a supported file is active, a beautify option (Shift + F1) is enabled in the Edit menu. 
![menu](http://public_repo.vipserv.org/images/beautify/screen4.png)

## Configuration
js-beautify options can be passed using .jsbeautifyrc file created in the root project folder. If not found, default values are used. 
For more information and possible options, please check [js-beautify documentation](https://github.com/beautify-web/js-beautify#options).

## Credits
- js-beautify (v1.8.9): [https://github.com/beautify-web/js-beautify](https://github.com/beautify-web/js-beautify)

## License
This plugin is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Author
Feel free to contact me: wozjac@zoho.com or via LinkedIn (https://www.linkedin.com/in/jacek-wznk).
