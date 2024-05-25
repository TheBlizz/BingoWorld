$(document).ready(function(){
    function bNumbers()
                {
                    var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
                    var gen_nums = [];

                    function in_array(array, el) {
                    for(var i = 0 ; i < array.length; i++) 
                    if(array[i] === el) return true;
                    return false;
                    }

                    function get_rand(array) {
                    var rand = array[Math.floor(Math.random()*array.length)];
                    if(!in_array(gen_nums, rand)) {
                    gen_nums.push(rand); 
                    return rand;
                    }
                    return get_rand(array);
                    }

                    for(var i = 0; i < 5; i++) {
                    document.getElementById("b1").innerHTML = get_rand(nums);
                    document.getElementById("b2").innerHTML = get_rand(nums);
                    document.getElementById("b3").innerHTML = get_rand(nums);
                    document.getElementById("b4").innerHTML = get_rand(nums);
                    document.getElementById("b5").innerHTML = get_rand(nums);
                    }
                }
});




