function insert_Row() {
    //Write your code here
	let table =document.getElementById('sampleTable')
	let newRow=table.insert(0)
	let newcell1=newRow.insert(0)
	let newcell2=newRow.insert(1)
	newcell1.innerHTML='New Cell1'
	newcell2.innerHTML='New Cell2'
}
