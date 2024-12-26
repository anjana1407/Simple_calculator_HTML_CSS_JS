function insert(num)
{
    document.formm.box1.value = document.formm.box1.value + num;
}
function equal()
{
    var a = document.formm.box1.value;
    if(a)
    {
        document.formm.box1.value = eval(a);
    }
}
function backspace()
{
    var a = document.formm.box1.value;
    document.formm.box1.value = a.substring(0,a.length-1);
}