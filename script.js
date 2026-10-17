function insert_Row() {
    //Write your code here
	let table =document.getElementById('sampleTable')
	let newRow=table.insertRow(0)
	let newcell1=newRow.insertCell(0)
	let newcell2=newRow.insertCell(1)
	newcell1.innerHTML='New Cell1'
	newcell2.innerHTML='New Cell2'
}
