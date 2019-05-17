console.log("testirinoino")
console.log(Date());

let allDocs;

const leaderboardDiv = document.querySelector("#leaderboard");
const leaderboardDivOl = document.querySelector("#leaderboard ol");


db.collection("users").orderBy("total_score").get().then((docs) => {
	allDocs = docs;
	/*
	docs.forEach((doc) => {
		db.collection("users").doc(doc.id).update({
			total_score: Number(doc.data().kills+doc.data().survived)
		})
	})
	*/
	renderLeaderboard();

	//addthing();
	/*
	docs.forEach((doc) => {
		console.log(doc.data());
	})
	*/
})


//leaderbourd code
function renderLeaderboard(){
	allDocs.forEach((doc) => {
		db.collection("users").doc(doc.id).update({
			total_score: Number(doc.data().kills+doc.data().survived)
		})
		let nli = document.createElement("li");
		nli.innerHTML = "<span class='bold'>"+doc.data().name+":</span> "+doc.data().total_score+"pts";
		leaderboardDivOl.insertBefore(nli, leaderboardDivOl.childNodes[0]);
	})
}



//Data deletion tool
/*
function deletee(){
	allDocs.forEach((doc) => {
		db.collection("users").doc(doc.id).delete();
		
		if (doc.data().name === nombre){
			db.collection("users").doc(doc.id).delete();
			console.log(doc.id+" deleted");
		
	})
}
*/


function addthing(){
	allDocs.forEach((doc) => {
		db.collection("users").doc(doc.id).update({
			total_score: doc.data().kills+doc.data().survived
		})
	})
}

