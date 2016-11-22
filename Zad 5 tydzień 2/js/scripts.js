
function Toggler(elem) {

	if( !(this instanceof Toggler) ) {
		return new Toggler(elem);
	}

	this._element = document.querySelector(elem);

}

Toggler.prototype.getElem = function() {
    return this._element;
};

Toggler.prototype.show = function() {
    return this._element.style.display = "block";
};

Toggler.prototype.hide = function() {
    return this._element.style.display = "none";
};

var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    };

}, false);