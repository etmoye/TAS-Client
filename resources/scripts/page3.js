//  --- EMPLOYEE ONE ----

function getEmpOne(){
    console.log("test"); 
    const empOneApiUrl = "https://localhost:5001/api/feedback";

    fetch(empOneApiUrl).then(function(response){
        console.log(response); 
        console.log(empOneApiUrl); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne'){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></spann></p>" +
                "<p>" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Leadership Score ... " + survey.leadTotal + "</p>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‎<button class = \"btn btn-primary \" onclick = \"getOneLeadDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Communication Score ... " + survey.commTotal + "</p>" + 
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‏‏‎ ‎ <button class = \"btn btn-primary \" onclick = \"getOneCommDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Technology Score ... " + survey.techTotal + "</p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ <button class = \"btn btn-primary \" onclick = \"getOneTechDeets()\">Details</button></p>";
            }
            if (survey.overallScore > 14 && survey.overallScore < 26){
                 "<p><div class=\"os-img-red\"></div></p>"; 
            }
            if(survey.overallScore > 25 && survey.overallScore < 41){
                + "<p><div class =\"os-img-orange\"></div></p>";
            }

        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - LEAD DETAILS 
function getOneLeadDeets(){
    console.log("test"); 
    const oneLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne'){

                html+= "<p>" + survey.employee_Feedback + "</p>" +
                "<p>Subtopic Score: " + survey.lead1 + "</p>" +  
                "<p>Subtopic Score: " + survey.lead2 + "</p>" +
                "<p>Subtopic Score:" + survey.lead3 + "</p>" +
                "<p>Subtopic Score:" + survey.lead4 + "</p>" +
                "<p>Subtopic Score:" + survey.lead5 + "</p> </spann>"; 
            }
            console.log(survey.lead1); 

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - COMM DETAILS 
function getOneCommDeets(){
    console.log("test"); 
    const oneCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne'){

                html+= "<p>" + survey.employee_Feedback + "</p>" +
                "<p>Subtopic Score: " + survey.comm1 + "</p>" +  
                "<p>Subtopic Score: " + survey.comm2 + "</p>" +
                "<p>Subtopic Score:" + survey.comm3 + "</p>" +
                "<p>Subtopic Score:" + survey.comm4 + "</p>" +
                "<p>Subtopic Score:" + survey.comm5 + "</p> </spann>"; 
            }
            console.log(survey.comm1); 

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - TECH DETAILS 
function getOneTechDeets(){
    console.log("test"); 
    const oneTechDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneTechDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.tech1 + "</li>" +  
                "<li>" + survey.tech2 + "</li>" +
                "<li>" + survey.tech3 + "</li>" +
                "<li>" + survey.tech4 + "</li>" +
                "<li>" + survey.tech5 + "</li> </spann>"; 
            }
            console.log(survey.tech1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}




//     ** -- EMPLOYEE TWO -- ** 

function getEmpTwo(){
    console.log("test"); 
    const empTwoApiUrl = "https://localhost:5001/api/feedback";

    fetch(empTwoApiUrl).then(function(response){
        console.log(response); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo'){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></spann></p>" +
                "<p>" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Leadership Score ... " + survey.leadTotal + "</p>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‎<button class = \"btn btn-primary \" onclick = \"getTwoLeadDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Communication Score ... " + survey.commTotal + "</p>" + 
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‏‏‎ ‎ <button class = \"btn btn-primary \" onclick = \"getTwoCommDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Technology Score ... " + survey.techTotal + "</p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ <button class = \"btn btn-primary \" onclick = \"getTwoTechDeets()\">Details</button></p>";
            }

        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO -- LEAD DEETS 
function getTwoLeadDeets(){
    console.log("test"); 
    const twoLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.lead1 + "</li>" +  
                "<li>" + survey.lead2 + "</li>" +
                "<li>" + survey.lead3 + "</li>" +
                "<li>" + survey.lead4 + "</li>" +
                "<li>" + survey.lead5 + "</li> </spann>"; 
            }
            console.log(survey.lead1); 

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO - COMM DETAILS 
function getTwoCommDeets(){
    console.log("test"); 
    const twoCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.comm1 + "</li>" +  
                "<li>" + survey.comm2 + "</li>" +
                "<li>" + survey.comm3 + "</li>" +
                "<li>" + survey.comm4 + "</li>" +
                "<li>" + survey.comm5 + "</li> </spann>"; 
            }
            console.log(survey.comm1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - TECH DETAILS 
function getTwoTechDeets(){
    console.log("test"); 
    const twoTechDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoTechDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.tech1 + "</li>" +  
                "<li>" + survey.tech2 + "</li>" +
                "<li>" + survey.tech3 + "</li>" +
                "<li>" + survey.tech4 + "</li>" +
                "<li>" + survey.tech5 + "</li> </spann>"; 
            }
            console.log(survey.tech1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//     ** -- EMPLOYEE THREE -- ** 

function getEmpThree(){
    console.log("test"); 
    const empThreeApiUrl = "https://localhost:5001/api/feedback";

    fetch(empThreeApiUrl).then(function(response){
        console.log(response); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree'){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></spann></p>" +
                "<p>" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Leadership Score ... " + survey.leadTotal + "</p>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‎<button class = \"btn btn-primary \" onclick = \"getThreeLeadDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Communication Score ... " + survey.commTotal + "</p>" + 
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‏‏‎ ‎ <button class = \"btn btn-primary \" onclick = \"getThreeCommDeets()\">Details</button></p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Technology Score ... " + survey.techTotal + "</p>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ <button class = \"btn btn-primary \" onclick = \"getThreeTechDeets()\">Details</button></p>";
            }

        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO -- LEAD DEETS 
function getThreeLeadDeets(){
    console.log("test"); 
    const threeLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(threeLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.lead1 + "</li>" +  
                "<li>" + survey.lead2 + "</li>" +
                "<li>" + survey.lead3 + "</li>" +
                "<li>" + survey.lead4 + "</li>" +
                "<li>" + survey.lead5 + "</li> </spann>"; 
            }
            console.log(survey.lead1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO - COMM DETAILS 
function getThreeCommDeets(){
    console.log("test"); 
    const threeCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(threeCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.comm1 + "</li>" +  
                "<li>" + survey.comm2 + "</li>" +
                "<li>" + survey.comm3 + "</li>" +
                "<li>" + survey.comm4 + "</li>" +
                "<li>" + survey.comm5 + "</li> </spann>"; 
            }
            console.log(survey.comm1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - TECH DETAILS 
function getThreeTechDeets(){
    console.log("test"); 
    const twoThreeDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoThreeDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree'){

                html+= "<li><spann>" + survey.employee_Feedback + "</li>" +
                "<li>" + survey.tech1 + "</li>" +  
                "<li>" + survey.tech2 + "</li>" +
                "<li>" + survey.tech3 + "</li>" +
                "<li>" + survey.tech4 + "</li>" +
                "<li>" + survey.tech5 + "</li> </spann>"; 
            }
            console.log(survey.tech1); 

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}





