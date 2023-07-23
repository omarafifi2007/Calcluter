let OperType = '';
let Values = {prev: null, new: null, total: null}
function GetNumber(Num)
{
    document.getElementById("Result").value = Num;
    if(Values.prev)
    {
        Values.new = Num;
    }
    else
    {
        Values.prev = Num;
    }
}
function GetOperation(Oper)
{
    OperType = Oper;
}
function Calculate()
{
    if(!Values.new)
    {
        return 0;
    }
    if(Values.new && Values.prev && OperType)
    {
        if(OperType === '+')
        {
            let NewValue = Values.prev + Values.new;
            document.getElementById("Result").value = NewValue;
            Values.prev = NewValue;
        }
        if(OperType === '-')
        {
            let NewValue = Values.prev - Values.new;
            document.getElementById("Result").value = NewValue;
            Values.prev = NewValue;
        }
        if(OperType === '*')
        {
            let NewValue = Values.prev * Values.new;
            document.getElementById("Result").value = NewValue;
            Values.prev = NewValue;
        }
        if(OperType === '/')
        {
            let NewValue = Values.prev / Values.new;
            document.getElementById("Result").value = NewValue;
            Values.prev = NewValue;
        }
    }

}
document.getElementById("Reset").onclick = function ()
{
    location.reload();
}
