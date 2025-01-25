// https://vanslaars.io/articles/create-a-card-flip-animation-with-css
const front1 = document.getElementById('front1');
const back1 = document.getElementById('back1');
const front2 = document.getElementById('front2');
const back2 = document.getElementById('back2');
const front3 = document.getElementById('front3');
const back3 = document.getElementById('back3');

// const btn = document.getElementById('flip-btn');
function handleFlip1() {
  front1.classList.toggle('flipped');
  back1.classList.toggle('flipped');
};
function handleFlip2() {
  front2.classList.toggle('flipped');
  back2.classList.toggle('flipped');
};
function handleFlip3() {
  front3.classList.toggle('flipped');
  back3.classList.toggle('flipped');
};
// btn.addEventListener('click', handleFlip);
front1.addEventListener('dblclick', handleFlip1);
back1.addEventListener('dblclick', handleFlip1);
front2.addEventListener('dblclick', handleFlip2);
back2.addEventListener('dblclick', handleFlip2);
front3.addEventListener('dblclick', handleFlip3);
back3.addEventListener('dblclick', handleFlip3);

$( function() {
  $( "#cardOne" ).draggable();
  $( "#cardTwo" ).draggable();
  $( "#cardThree" ).draggable();
} );

function toggleHints() {
    $( "#hints" ).toggleClass( "display-block" );
    $( "#hints" ).toggleClass( "display-none" );
    $( "#toggleBackground" ).toggleClass( "backgroundcolor-shadow8" );
    $( "#toggleBackground" ).toggleClass( "backgroundcolor-green6" );
    $( "#toggleButton" ).toggleClass( "marginleft-medium" );
    $( "#toggleHintLabel" ).toggleClass( "display-none" );
}

// https://dirask.com/posts/JavaScript-bring-div-element-to-front-on-click-DdZ3Qj
function createStack(counter) {
    if (counter == null) {
        counter = 0;
    };
    return {
        registerElement: function(element) {
            var onMouseDown = function(e) {
                element.style.zIndex = String(++counter);
            };
            element.addEventListener('mousedown', onMouseDown);  
            var remove = function() {
                if (remove) {
                    element.removeEventListener('mousedown', onMouseDown);  
                    remove = null;
                }
            };
            return remove;
        }
    }
}
var stack = createStack();
stack.registerElement(document.querySelector('#cardOne'));
stack.registerElement(document.querySelector('#cardTwo'));
stack.registerElement(document.querySelector('#cardThree'));