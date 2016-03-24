/* global YT */
(function(){
    'use strict';

    angular
        .module('sinisterwaltz.youtube', [])    
        .directive('youtube', youtube)
        .factory('youTubeService', youTubeService);

    function youtube(youTubeService) {
        return {
            restrict: 'E',
            scope: {
                height:         '@',
                width:          '@',
                videoid:        '@',
                videoParams:    '='
            },
            template: '<div></div>',
            link: function(scope, element, attrs) {
                var defaults = {},
                    player,
                    params = angular.extend(defaults, scope.videoParams);

                youTubeService
                    .setup()
                    .then(function(){
                        player = new YT.Player(element.children()[0], {                            
                            height: scope.height,
                            width: scope.width,
                            videoId: scope.videoid,
                            playerVars: params
                        });
                    });
            }
        }
    }

    function youTubeService($q, $document, $window){
        var deferred = $q.defer(),
            initialized = false;

        function init(){            
            var $pagejs = angular.element($document).find('script'),
                js = angular
                        .element('<script/>')
                        .prop('src', 'https://www.youtube.com/iframe_api');
            $pagejs.eq(0).parent().prepend(js);
            initialized = true;
            $window.onYouTubeIframeAPIReady = function() {
                deferred.resolve();
            }
        }

        return {
            setup: function() {
                if(!initialized){
                    init();
                }
                return deferred.promise;
            }
        }
    }

}());