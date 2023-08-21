// function check()
// {
//     let input = document.getElementById('b7').value;
//     let a = document.getElementById('display')
//     a.value = input
//     // a.value = input;
//     // console.log(input);
// }

// function check()
// {
//     let data = document.getElementById('display').value;
//     console.log(typeof data);

//     let display = document.getElementById('display');
//     display.value = eval(data);

// }

// function rem()
// {
//     let a = document.getElementById('display').value;
//     // console.log(a);
//     // let b = a.substring(0,a.length-1);
//     let b = a.slice(0,a.length-1);
//     console.log(b);
// }

function fun(val)
{
    let display = document.getElementById('display');
    console.log(val);
    let a = display.value.includes(val)
    if(a==false)
    {
        display.value += val; 
    }
}