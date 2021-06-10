function repeat(array , repeat = 3){
    let array2 = [];
    for(var i = 1; i <= repeat; i++){  // 3 can be replaced by array.length also
        let array1 = array.values();
        for (let value of array1) {
            array2.push(value);
        }
    }
    document.getElementById('repeat').innerHTML = array2;
    document.getElementById('repeat').value = array2;
    return array2;
}

function reformat(value){
    var newValue = value.replace(/[aeiou]/gi, '');
    lower = newValue.toLowerCase();
    var finalString = newValue.charAt(0).toUpperCase() + lower.slice(1);
    document.getElementById('reformat').innerHTML = finalString;
    return finalString;
}

function next_binary_number(array){
    for (var i = array.length -1; i >= 0; i--){
        if(array[i] == 0){
            array[i] = 1;
            break;
        }else{
            array[i] = 0;
        }

        // If all values from requested array contains only 1 they got replaced to 0 in above else then just push 1
        if(i == 0){
            array[array.length] = 1;
            array = array.reverse(); /// if all values are 1 in requested array then just reverse the array
        }

    }
    document.getElementById('next_binary_number').innerHTML = array;
    return array;
}