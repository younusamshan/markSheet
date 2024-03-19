


// marksheet



var name = prompt('Enter Your Name', 'khan');
var rollNo = +prompt('Enter Your Roll No', '776895');

var english = +prompt('Enter Your English Marks');
var math = +prompt('Enter Your math Marks');
var urdu = +prompt('Enter Your Urdu Marks');
var islamait = +prompt('Enter Your Islamait Marks');
var pysices = +prompt('Enter Your Pysices Marks');


var totalMarks = english + math + urdu + islamait + pysices;

var persentage = totalMarks / 500 * 100

if (totalMarks <= "500" && totalMarks >= '460') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} A+</td></tr>
</table>
                                                      `)
}


else if (totalMarks < "460" && totalMarks >= '410') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} A</td></tr>
</table>
`)
}




else if (totalMarks < "410" && totalMarks >= '380') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} B</td></tr>
</table>
`)
}



else if (totalMarks < "380" && totalMarks >= '350') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} C </td></tr>
</table>
`)
}



else if (totalMarks < "350" && totalMarks >= '310') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} D</td></tr>
</table>
`)
}



else if (totalMarks < "310" && totalMarks >= '290') {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} E</td></tr>
</table>
`)
}





else if (totalMarks < "290") {
    document.write(`
<table border="1" align='center'>

<tr>
<th colspan='2'> Name  : ${name} // Roll No  : ${rollNo} </th>
</tr>

<tr><td> English </td><td>${english}</td></tr>

<tr><td> Math </td><td>${math}</td></tr>

<tr><td> Urdu </td><td>${urdu}</td></tr>

<tr><td> Islamait </td><td>${islamait}</td></tr>

<tr><td> Pysicses </td><td>${pysices}</td></tr>
<tr><td>Total Marks</td> <td>  ${totalMarks} /   % ${persentage} Fail </td></tr>
</table>
`)
}
else {

}