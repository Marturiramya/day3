// console.log(10);
// console.log(20);
// setTimerout(()=>{
//     console.log(30);
// }, 5000)

// console.log(40);
// console.log(50);
// setInterval(()=>{
//     document.writeLin("Mru")
// },1500)


//! Promise
// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{


// resolve("Success");
// });
// console.log(p2);
// p2.then((response) =>
// {
//     console.log(response);
// })
// p2.catch((error)=>{
//     console.log(error);

// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve ,reject)=>{
//     reject("Failure");
// });
// console.log(p3);
// p3.then((data)=>console.log(error));

function fetchUsers(){
	let x=fetch("https://jsonplaceholder.typicode.com/users");
	x.then((response)=>{
		return response.json().then(data=>{
			console.log(data);
			let store=document.getElementById("store");
			data.map((user)=>{
				store.innerHTML += `
				<tr>
				<td>${user.id}</td>
				<td>${user.name}</td>
				<td>${user.email}</td>
				<td>${user.company.name}</td>
				`
				
				
			})
		})
	})
	.catch(err=>console.log(err))
}
fetchUsers();