let taskList = [{
	id: "task-0.646464646464787",
	title: "Do your best",
	text: "Today is best day in my life, and i'm doing everything perfectly"
},
{
	id: "task-0.646464646464788",
	title: "Do your best Alexander",
	text: "Alexander the Great, Today is best day in my life, and i'm doing everything perfectly"
}];

formMain.addEventListener('submit', function(e){
	e.preventDefault();
	if (formTitle.value == '' || formText.value == '')
	{
		alert("Please fill Title and Text input");
		return ;
	}
		
	let arr = [];
	arr.push(formTitle.value);
	arr.push(formText.value);
	formTitle.value = "";
	formText.value = "";


	distplayList(arr);

});

