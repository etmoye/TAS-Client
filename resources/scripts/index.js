function getFeedback(){
    const getFeedbackApiUrl = "https://localhost:5001/api/feedback";

    fetch(getFeedbackApiUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<table style=\"width:100%\">";
        html+= "<tr><th>Employee Reviewing</th><th>Employee Reviewing</th>"+
        "<th> l1 </th> <th> l2 </th> <th> l3 </th> <th> l4 </th><th> l5 </th></tr>";  
        json.forEach((survey)=>{
            console.log(survey);   
            html += "<tr key= " + survey.surveyID + "><td>" + survey.employee_Reviewing + "</td><td>" + survey.employee_Feedback + "</td>" +
            "<td>" + survey.l1 + "</td><td>" + survey.l2 + "</td><td>" + survey.l3 + "</td>" +
            "<td>" + survey.l4 + "</td><td>" + survey.l5 + "</td><td>" + survey.c1 + "</td>" +
            "<td>" + survey.c2 + "</td><td>" + survey.c3 + "</td><td>" + survey.c4 + "</td>" +
            "<td>" + survey.c5 + "</td><td>" + survey.t1 + "</td><td>" + survey.t2 + "</td>" +
            "<td>" + survey.t3 + "</td><td>" + survey.t4 + "</td><td>" + survey.t5 + "</td></tr>"; 
        })
        html += "</table>";
        document.getElementById("survey").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

// getting the new survey results 
function postSurvey(){
    const postFeedbackApiUrl = "https://localhost:5001/api/feedback";

    const employeeReviewData = document.getElementById("id-empname").value;
    const employeeFeedbackData = document.getElementById("id-empfeedback").value;
    
    console.log(employeeReviewData); 
    console.log(employeeFeedbackData);

    var l1data;
    var l2data;
    var l3data;
    var l4data;
    var l5data;
    var c1data;
    var c2data;
    var c3data;
    var c4data;
    var c5data;
    var t1data;
    var t2data;
    var t3data;
    var t4data;
    var t5data;

    document.getElementsByName("question1").forEach(radio => {
        if (radio.checked) {
            l1data = parseInt(radio.value)
            //console.log("inside if : " + l1data)
        }
    }); 

    document.getElementsByName("question2").forEach(radio => {
        if (radio.checked) {
            l2data = parseInt(radio.value)
            //console.log(radio.value)
        }
    }); 
    document.getElementsByName("question3").forEach(radio => {
        if (radio.checked) {
            l3data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question4").forEach(radio => {
        if (radio.checked) {
            l4data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question5").forEach(radio => {
        if (radio.checked) {
            l5data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question6").forEach(radio => {
        if (radio.checked) {
            c1data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question7").forEach(radio => {
        if (radio.checked) {
            c2data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question8").forEach(radio => {
        if (radio.checked) {
            c3data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question9").forEach(radio => {
        if (radio.checked) {
            c4data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question10").forEach(radio => {
        if (radio.checked) {
            c5data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 

    document.getElementsByName("question11").forEach(radio => {
        if (radio.checked) {
            t1data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question12").forEach(radio => {
        if (radio.checked) {
            t2data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question13").forEach(radio => {
        if (radio.checked) {
            t3data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question14").forEach(radio => {
        if (radio.checked) {
            t4data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 
    document.getElementsByName("question15").forEach(radio => {
        if (radio.checked) {
            t5data = parseInt(radio.value)
            console.log(radio.value)
        }
    }); 

    var leadTotaldata = (l1data)+(l2data)+(l3data)+(l4data)+(l5data); 
    console.log(leadTotaldata); 

    var commTotaldata = (c1data)+(c2data)+(c3data)+(c4data)+(c5data); 
    console.log(leadTotaldata); 

    var techTotaldata = (t1data)+(t2data)+(t3data)+(t4data)+(t5data); 
    console.log(leadTotaldata); 

    var totalOverall = (l1data)+(l2data)+(l3data)+(l4data)+(l5data)+(c1data)+(c2data)+(c3data)+(c4data)+(c5data)+(t1data)+(t2data)+(t3data)+(t4data)+(t5data); 
    console.log(totalOverall); 


    //console.log("before value : " + l1data)

    fetch(postFeedbackApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            employee_Reviewing : employeeReviewData,
            employee_Feedback : employeeFeedbackData,

            lead1 : l1data, 
            lead2 : l2data, 
            lead3: l3data,
            lead4: l4data, 
            lead5: l5data,
            comm1 : c1data, 
            comm2 : c2data, 
            comm3 : c3data, 
            comm4 : c4data,
            comm5 : c5data, 
            tech1 : t1data, 
            tech2 : t2data,
            tech3 : t3data, 
            tech4 : t4data,
            tech5 : t5data,
            leadTotal : leadTotaldata,
            commTotal : commTotaldata,
            techTotal : techTotaldata,
            overallScore : totalOverall
        
        })
    })
    .then((response)=>{
        console.log(response);
        //getFeedback(); 
    })
}


function feedbackTable(){
    const feedbackTableApiUrl = "https://localhost:5001/api/feedback";

    fetch(feedbackTableApiUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<table style=\"width:70%\">";
        json.forEach((survey)=>{
        console.log(survey);   
            html += "<tr><th>Employee Reviewing</th><td>" + survey.employee_Reviewing + "</td></tr>"+
            "<tr><th>Employee Feedback</th><td>" + survey.employee_Feedback + "</td></tr>"+
            "<tr><th>Leadership - 1</th><td>" + survey.lead1 + "</td></tr><th>Leadership - 2</th><td>"+ survey.lead2 +"</td></tr><tr><th>Leadership - 3</th><td>"+ survey.lead3+"</td></tr><tr><th>Leadership - 4</th><td>"+ survey.lead4+"</td></tr><tr><th>Leadership - 5</th><td>"+ survey.lead5+"</td></tr>"+
            "<tr><th>Communication - 1</th><td>"+ survey.comm1+"</td></tr><th>Communication - 2</th><td>"+ survey.comm2+"</td></tr></tr><tr><th>Communication - 3</th><td>"+ survey.comm3+"</td></tr><tr><th>Communication - 4</th><td>"+ survey.comm4+"</td></tr><tr><th>Communication - 5</th><td>"+ survey.comm5+"</td></tr>"+
            "<tr><th>Technical - 1</th><td>"+ survey.tech1+"</td></tr><th>Technical - 2</th><td>"+ survey.tech2+"</td></tr><tr><th>Technical - 3</th><td>"+ survey.tech3+"</td></tr><tr><th>Technical - 4</th><td>"+ survey.tech4+"</td></tr><tr><th>Technical - 5</th><td>"+ survey.tech5+"</td></tr>"; 
 
        })
        html += "</table>";
        document.getElementById("survey").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}



//html+= "<tr><th>Employee Reviewing</th><td>" + survey.lead1 + "</td></tr><th>Employee Feedback</th></tr>"+

// function getPosts(){
//     const allPostsApiUrl = "https://localhost:5001/api/feedback";

//     fetch(allPostsApiUrl).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(json){
//         let html = "<table style=\"width:100%\">";
//         html += "<tr><th>Post</th><th>Delete</th><th>Edit</th></tr>"
//         json.forEach((survey)=>{
//             html += "<tr key = " + survey.surveyid + "><td>" + survey.employee_Reviewing + 
//             "</td></tr>";
//         })
//         html += "</table>";
//         document.getElementById("survey").innerHTML = html;
//     }).catch(function(error){
//         console.log(error);
//     });
// }


// temp = 0; 
// while (temp !=0 ) {
// var l1data = document.getElementsByName("question1").forEach(radio => {
//     if (radio.checked) {
//         // l1data = radio.value
//         console.log(radio.value)
//         // console.log("test")
//         console.log("l1data : " + l1data)
//         document.getElementById(radio).value
//         temp = 1; 
        
        
//     }

//     else{
//         l1data = "1"; 
//     }
// }); 
// }


 // l1data : question1, 
            // question2 : l2data, 
            // question3 : l3data,
            // question4 : l4data, 
            // question5 : l5data,
            // question6 : c1data, 
            // question7 : c2data, 
            // question8 : c3data, 
            // question9 : c4data,
            // question10 : c5data, 
            // question11 : t1data, 
            // question12 : t2data,
            // question13 : t3data, 
            // question14 : t4data,
            // question15 : t5data

            // question1 : l1data, 
            // question2 : l2data, 
            // question3 : l3data,
            // question4 : l4data, 
            // question5 : l5data,
            // question6 : c1data, 
            // question7 : c2data, 
            // question8 : c3data, 
            // question9 : c4data,
            // question10 : c5data, 
            // question11 : t1data, 
            // question12 : t2data,
            // question13 : t3data, 
            // question14 : t4data,
            // question15 : t5data

             // l1data : lead1, 
            // l2data : lead2, 
            // l3data : lead3,
            // l4data : lead4, 
            // l5data : lead5,
            // c1data : comm1, 
            // c2data : comm2, 
            // c3data : comm3, 
            // c4data : comm4,
            // c5data : comm5, 
            // t1data : tech1, 
            // t2data : tech2,
            // t3data : tech3, 
            // t4data : tech4,
            // t5data : tech5

