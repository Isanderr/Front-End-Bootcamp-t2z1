(function() {

    function createData(obj) {

        var data = obj;

        data.get = function(name) {
            return data[name];
        };

        data.set = function(k, v) {

            if(typeof k !== "string" || k !== "name" || typeof v !== "string") {
                console.log("Please provide correct details");
            } else {
                data[k] = v;
            }
        };

        return data;
    }

    var data = createData({});

    data.set("name", "Janek");

    console.log( data.get("name") );

})();