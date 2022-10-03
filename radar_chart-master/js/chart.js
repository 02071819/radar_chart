var ctx = document.getElementById("marksChart");
var marksChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["Question 1", "Question 2", "Question 3"],
    datasets: [
      {
        label: "Dimension 1",
        data: [1, 3, 2],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dimension 2",
        data: [2, 3, 1],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scale: {
      max: 3,
      min: 1,
    },
  },
});

function fn1(){
  var rd1_1_1 = document.getElementById("question1_1_1");
  var rd1_1_2 = document.getElementById("question1_1_2");
  var rd1_1_3 = document.getElementById("question1_1_3");

  var rd1_2_1 = document.getElementById("question1_2_1");
  var rd1_2_2 = document.getElementById("question1_2_2");
  var rd1_2_3 = document.getElementById("question1_2_3");

  var rd1_3_1 = document.getElementById("question1_3_1");
  var rd1_3_2 = document.getElementById("question1_3_2");
  var rd1_3_3 = document.getElementById("question1_3_3");

  if(rd1_1_1.checked==true){
    alert("The answer is:"+rd1_1_1.value);
  }else if(rd1_1_2.checked==true){
    alert("The answer is:"+rd1_1_2.value);
  }else if(rd1_1_3.checked==true){
    alert("The answer is:"+rd1_1_3.value);
  }else{
    alert("no value");
  } 
  
  
}