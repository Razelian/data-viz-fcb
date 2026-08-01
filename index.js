// console.log, logs the string or value in our console.
// console.log("Hello world!");

// It will contain the element with id "date" to the constant variable dateElement
const dateElement = document.getElementById('date');

console.log(dateElement);

// it will create an instance of the current date
let currentDate = new Date();
console.log(currentDate);

// dateElement.innerHTML = currentDate;

let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
// toLocaleDateString method will allow us to change the format to US time using the opstions provided in dateOptions
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '39267ca22amsh8f740e73186c2b4p1741c1jsna21c07288b43',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: 23424934})
};

// fetch method is used to send a request to given url or API.
	// this gives us response object
	//we need to use the json method so that we can convert the response object to a the data being sent by our server.
fetch(url, options).then(res => res.json()).then(data => {
	console.log(data.trends);

	let graphData = data.trends.slice(0,10);

	let topics = graphData.map(data => data.name);
	console.log(topics);

	let volumes = [1000133, 900781, 102839, 78902, 1232189, 892133,123871,213122, 1289312, 123901];
	console.log(volumes);

	const myChart = document.getElementById('myChart');

	let barchart = new Chart(myChart, {
		type: 'line',
		data: {
			labels: topics,
			datasets: [{
				label: '# of xeets',
				data: volumes,
				borderWidth: 2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],
				hoverBackgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				]
			}]
		},
		options: {
			indexAxis: 'x',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

} )

// Dummy data to be used for the demonstration:
/*let myPost = {
	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
};

console.log(myPost);
// dot notation:
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);*/
// Index
// console.log(graphData);
// console.log(graphData[0]);
// console.log(graphData[1]);


// console.log(graphData[0].name);
// console.log(graphData[0].queryUrl);
// console.log(graphData[0].volume);

// console.log(graphData[1].name);
// console.log(graphData[1].queryUrl);
// console.log(graphData[1].volume);
// This is an example of array of objects:

