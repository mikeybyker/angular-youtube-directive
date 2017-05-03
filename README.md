# YouTube Directive

A straight forward drop-in Angular.js YouTube directive. Supply the video id (plus dimensions and any params you want) and that's it. Based upon a [Phil Oxrud](http://blog.oxrud.com/posts/creating-youtube-directive/) blog post.

Alternatively, there's [the component version](https://github.com/mikeybyker/angular-youtube-component) if you're using angular 1.5+.

### Usage
Bare bones

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular.min.js"></script>
<script src="angular-youtube.min.js"></script>
<body ng-app="app">
    <youtube width="640" height="390" videoid="BChww2pEZUs"></youtube>
<body>
```
If you want to supply [video parameters](https://developers.google.com/youtube/player_parameters), point the directive to an object in your controller.

```html
<body ng-app="app" ng-controller="AppController as vm">
    <youtube width="640" height="390" videoid="BChww2pEZUs" video-params="vm.videoParams"></youtube>
<body>
```
```javascript
    angular.module('app', ['sinisterwaltz.youtube'])
    .controller('AppController', function(){
        var vm = this;        
        vm.videoParams = {controls: 1, rel: 0}; // etc.
    });
```

### Demo
See it/play around: [Plnkr](http://plnkr.co/edit/uOp9hYc82wUhN5XDMPtA?p=preview)


### Version
0.1.1


Mike