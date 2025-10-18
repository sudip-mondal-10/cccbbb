document.addEventListener("DOMContentLoaded",()=>{
	const loginForm=document.getElementById("loginForm");
	if(loginForm){
		loginForm.addEventListener("submit",function(e){
			e.preventDefault();
			const name=document.getElementById("studentName").value;
			const id=document.getElementById("studentID").value;
			const teacher=document.getElementById("teacherName").value;
			const password=document.getElementById("examPassword").value;
			if(password==="exam123"){
				sessionStorage.setItem("studentName",name);
				window.location.href="exam.html";
			} else {
				alert("Invalid Exam Password!");
			}
		});
	}
	const examForm=document.getElementById("examForm");
	if(examForm){
		examForm.addEventListener("submit",function(e){
			e.preventDefault();
			let score=0;
			if(document.querySelector('input[name="q1"]:checked')?.value==="paris")score++;
			if(document.querySelector('input[name="q2"]:checked')?.value==="JavaScript")score++;
			window.location.href='result.html?score=${score}';
		});
	}
});

			
