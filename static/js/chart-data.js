var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};


$(document).ready(function(){
 	var config = {
    apiKey: "AIzaSyDkrThcZue7o9NIsNkV8XVHt3qZEPfkJNU",
    authDomain: "quizdata-b6c64.firebaseapp.com",
    databaseURL: "https://quizdata-b6c64.firebaseio.com",
    storageBucket: "quizdata-b6c64.appspot.com",
    messagingSenderId: "662788470433"
  };	
  var defaultApp = firebase.initializeApp(config);
defaultDatabase = firebase.database().ref();
var age=[]
var name=[]
var score=[]
var region=[]
var gender=[]

var subject=[]
var Literacy=[]
var aptitude=[]
var maths=[]
var english=[]
defaultDatabase.on('child_added',function(snap) {
	age.push(snap.val().Age);
	name.push(snap.val().Name);
	score.push(snap.val().Score);
	subject.push(snap.val().Subject);
	gender.push(snap.val().gender);
	region.push(snap.val().Region);
	aptitude.push(snap.val().Aptitude);
	maths.push(snap.val().Maths);
	english.push(snap.val().english);





	
	$("#tables").append("<tr><td>"+snap.val().Name+"</td><td>"+snap.val().Age+"</td><td>"+snap.val().gender+"</td><td>"+region[region.length-1]+"</td><td>"+snap.val().Score+"</td></tr>");
	Literacy=findavg(region,score)
});

});

var MyApp = {}
var male=[]
var female=[]
for (i in region){
	for(j in gender){
		if(gender=="male"){
			male.push(j);
		else:
			female.push(j)
		}
	}
}
function findavg(region){


var Region = [];
$.each(region, function(i, el){
    if($.inArray(el, Region) === -1) Region.push(el);

});
var count=[0,0,0,0];

for (i in Region)
	{for (j in region)
{if(Region[i]==region[j])
{count[i]=count[i]+1;
window.average[i]=window.average[i]+score[j];}
}

	}
for (i in count)
{

	window.average[i]=window.average[i]/count[i];
}

MyApp.b=average[1]
MyApp.c=average[2]
MyApp.d=average[3]
console.log(average);
$("#tables1").append("<tr><td>"+average+"</td></tr>");
};
function findunique(column,score){
	var data.column = [];
$.each(data, function(i, el){
    if($.inArray(el, column) === -1) column.push(el);

});
}

	var lineChartData = {
		labels : findunique(region)
			datasets : [
				
				

				{
					label: "My third dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data: findavg(region)
			]

		}
	
	var barChartData = {
		labels:findunique(region)
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : findavg(aptitude)

				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : findavg(maths)
				},
			
				{
					fillColor : "rgba(0,0,0,0.5)",
					strokeColor : "rgba(333,444,555,0.8)",
					highlightFill: "rgba(333,444,555,0.75)",
					highlightStroke: "rgba(333,444,555,1)",
					data: findavg(english)
				}
			]
	
		}

	var pieData = [
		for (i in region):
		{
				{
					value: findavg(female),
					color:color.get(new),
					label: i
				},
			}
				
					
			];
			
	var doughnutData = [
					for (i in region):
		{
				{
					value: findavg(female),
					color:color.get(new),
					label: i
				},
			}
	
				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};
