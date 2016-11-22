(function() {

    var url = "https://jsonplaceholder.typicode.com/users";

    function fetchMe(url, success, error) {

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {

            if(this.status === 200) {
                var responseObj = JSON.parse(this.responseText);
                success(responseObj);
            } else {
                error(function() {
                    return new Error("Try again");
                }());
            }

        };

        xhr.open("GET", url, true);
        xhr.send(null);

    }

    fetchMe(url, function(data) {

        console.log("Success");
        console.log(data);

    }, function(err) {

        console.log("Found error: " + err.message);
        console.log(err);

    });

})();


