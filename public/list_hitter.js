var options = {
    valueNames: [ 'player', 'team', 'position','rk_ov','status','age','salary','cbs_rank', 'simple_rank','advanced_rank','fantrax_rank', 'years_left' ],
};


// TODO: Make the two selectors work together. Figure out how to do a filter function that if/elses through both selectors. 
var status_selector = document.getElementById("status_selector");
status_selector.addEventListener('change', function handleChange(event) {
    console.log(data)
    filter_function();
});

var position_selector = document.getElementById("position_selector");
position_selector.addEventListener('change', function handleChange(event) {
    filter_function();
});

var years_left_selector = document.getElementById("years_left_selector");
years_left_selector.addEventListener('change', function handleChange(event) {
    filter_function();
});


function filter_function() {

        var filter_values = {
        position: position_selector.value,
        status: status_selector.value
        };

        hackerList.filter(function(item) {
            for (var key in filter_values) {
                    console.log(filter_values[key] + " : " + item.values()[key]);
                if (item.values()[key] != filter_values[key] && filter_values[key] != '')
                    return false;
                }
            return true;
        });

}

var hackerList = new List('players', options);