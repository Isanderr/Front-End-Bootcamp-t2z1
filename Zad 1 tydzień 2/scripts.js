
if(typeof String.prototype.repeatt !== 'function') {
    
    String.prototype.repeatt = function(number) {
        
             return Array(number+1).join(this)
    }
}

var text = document.getElementById('hej');


text.innerHTML = text.innerHTML.repeatt(3);


