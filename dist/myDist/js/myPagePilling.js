$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#333',
            'position': 'right',
            'tooltips': ['My Name', 'My Skill', 'My Project', 'My Gallery', 'My Contact']
        },
       	normalScrollElements: 1,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        sectionsColor: ['#eaeaea', '#0d6efd', '#eaeaea', '#0d6efd', '#eaeaea'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu'
	});
});