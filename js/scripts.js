(document).ready(function () {
   $('#flipbook').turn({
        width: 420,  // width of frames
        height: 595, // height of frames
       autoCenter: true,
        elevation: 50,
    });
    console.log('Flipbook initialized');
});

console.log('jQuery version:', $.fn.jquery); // Check if jQuery is loaded
console.log('Turn.js loaded:', typeof $.fn.turn); // Check if Turn.js is loaded