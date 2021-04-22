var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

// ---------For Faculty Record-------

var selectedRow = null
function onFormSubmit(){
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
        insertNewRecord(formData);
        else updateRecord(formData);
        resetForm(); }
    }

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["contactNo"] = document.getElementById("contactNo").value;
    return formData; }

function insertNewRecord(data) {
    var table = document.getElementById("facultyList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.contactNo;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)" id="edit">Edit</a>
    <a onClick="onDelete(this)" id="delete">Delete</a>`; }

function resetForm() {
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("password").value = ""; 
    document.getElementById("gender").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("contactNo").value = "";
    selectedRow = null; }

function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("fullName").value = selectedRow.cells[0].innerHTML; 
        document.getElementById("email").value = selectedRow.cells[1].innerHTML; 
        document.getElementById("password").value = selectedRow.cells[2].innerHTML; 
        document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
        document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
        document.getElementById("contactNo").value = selectedRow.cells[5].innerHTML;}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.dob;
    selectedRow.cells[5].innerHTML = formData.contactNo; }

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement; 
        document.getElementById("facultyList").deleteRow(row.rowIndex);
        resetForm(); }
    }

function validate() {
    if (document.getElementById("fullName").value.trim() == "") {
        isValid = false; 
        document.getElementById("fullNameValidationError").classList.remove("hide");}
    else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
    }

function deleterecord(){
    if(confirm("Are you sure you want to Delete All Record?"))
    {
        var rowcount = facultyList.rows.length;
        for (var i = rowcount-1;i>0;i--){
                 facultyList.deleteRow(i);
        }
    }
}


// -----------For Student Record-----------
var selectedRow = null
function onFormSubmit2(){
    if (validate2()) {
        var formData = readFormData2();
        if (selectedRow == null)
        insertNewRecord2(formData);
        else updateRecord2(formData);
        resetForm2(); }
    }

function readFormData2() {
    var formData = {};
    formData["studentFullName"] = document.getElementById("studentFullName").value;
    formData["registrationNo"] = document.getElementById("registrationNo").value;
    formData["studentContactNo"] = document.getElementById("studentContactNo").value;
    formData["studentCourse"] = document.getElementById("studentCourse").value;
    formData["studentSem"] = document.getElementById("studentSem").value;
    formData["studentEmail"] = document.getElementById("studentEmail").value;
    formData["studentDOB"] = document.getElementById("studentDOB").value;
    formData["fatherContactNo"] = document.getElementById("fatherContactNo").value;
    formData["studentAddress"] = document.getElementById("studentAddress").value;
    formData["studentGender"] = document.getElementById("studentGender").value;
    formData["studentPassword"] = document.getElementById("studentPassword").value;
    return formData; }

function insertNewRecord2(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentFullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.registrationNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.studentContactNo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.studentCourse;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.studentSem;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.studentEmail;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.studentDOB;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.fatherContactNo;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.studentAddress;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.studentGender;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.studentPassword;
    cell11 = newRow.insertCell(11);
    cell11.innerHTML = `<a onClick="onEdit2(this)" id="edit">Edit</a><a onClick="onDelete2(this)" id="delete">Delete</a>`; }

function resetForm2() {
    document.getElementById("studentFullName").value = ""; 
    document.getElementById("registrationNo").value = ""; 
    document.getElementById("studentContactNo").value = "";
    document.getElementById("studentCourse").value = ""; 
    document.getElementById("studentSem").value = ""; 
    document.getElementById("studentEmail").value = ""; 
    document.getElementById("studentDOB").value = "";
    document.getElementById("fatherContactNo").value = ""; 
    document.getElementById("studentAddress").value = ""; 
    document.getElementById("studentGender").value = ""; 
    document.getElementById("studentPassword").value = "";
    selectedRow = null;
}

function onEdit2(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("studentFullName").value = selectedRow.cells[0].innerHTML; 
        document.getElementById("registrationNo").value = selectedRow.cells[1].innerHTML; 
        document.getElementById("studentContactNo").value = selectedRow.cells[2].innerHTML; 
        document.getElementById("studentCourse").value = selectedRow.cells[3].innerHTML; 
        document.getElementById("studentSem").value = selectedRow.cells[4].innerHTML;
        document.getElementById("studentEmail").value = selectedRow.cells[5].innerHTML;
        document.getElementById("studentDOB").value = selectedRow.cells[6].innerHTML;
        document.getElementById("fatherContactNo").value = selectedRow.cells[7].innerHTML;
        document.getElementById("studentAddress").value = selectedRow.cells[8].innerHTML;
        document.getElementById("studentGender").value = selectedRow.cells[9].innerHTML;
        document.getElementById("studentPassword").value = selectedRow.cells[10].innerHTML;
    }

function updateRecord2(formData) {
    selectedRow.cells[0].innerHTML = formData.studentFullName;
    selectedRow.cells[1].innerHTML = formData.registrationNo;
    selectedRow.cells[2].innerHTML = formData.studentContactNo;
    selectedRow.cells[3].innerHTML = formData.studentCourse;
    selectedRow.cells[4].innerHTML = formData.studentSem;
    selectedRow.cells[5].innerHTML = formData.studentEmail; 
    selectedRow.cells[6].innerHTML = formData.studentDOB;
    selectedRow.cells[7].innerHTML = formData.fatherContactNo;
    selectedRow.cells[8].innerHTML = formData.studentAddress;
    selectedRow.cells[9].innerHTML = formData.studentGender;
    selectedRow.cells[10].innerHTML = formData.studentPassword;
}

function onDelete2(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement; 
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm2(); }
    }

function validate2() {
    if (document.getElementById("studentFullName").value.trim() == "") {
        isValid = false; 
        document.getElementById("studentNameValidationError").classList.remove("hide");}
    else {
        isValid = true;
        if (!document.getElementById("studentNameValidationError").classList.contains("hide")) document.getElementById("studentNameValidationError").classList.add("hide");
    }
    return isValid;
    }

function deleterecord2(){
    if(confirm("Are you sure you want to Delete All Record?"))
    {
        var rowcount = studentList.rows.length;
        for (var i = rowcount-1; i>0 ;i--){
            studentList.deleteRow(i);
        }
    }
}

// --------------------Scripting for Searching in Student's Record-------------------------------------!

function filterTable2(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("table.List tbody").rows;
    for (var i = 0; i < rows.length; i++){
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirdCol = rows[i].cells[2].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();
        var fifthCol = rows[i].cells[4].textContent.toUpperCase();
        var sixthCol = rows[i].cells[5].textContent.toUpperCase();
        var seventhCol = rows[i].cells[6].textContent.toUpperCase();
        var eigthCol = rows[i].cells[7].textContent.toUpperCase();
        var ninthCol = rows[i].cells[8].textContent.toUpperCase();
        var tenththCol = rows[i].cells[9].textContent.toUpperCase();
        var eleventhCol = rows[i].cells[10].textContent.toUpperCase();
        if ( firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1 || seventhCol.indexOf(filter) > -1 || eigthCol.indexOf(filter) > -1 || ninthCol.indexOf(filter) > -1 || tenththCol.indexOf(filter) > -1 || eleventhCol.indexOf(filter) > -1 ) {
            rows[i].style.display = "";}
            else{
                rows[i].style.display = "none";}
        }

    }

// --------------------Scripting for Searching in Faculty Record-------------------------------------!

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#facultyList tbody").rows;
    for (var i = 0; i < rows.length; i++){
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirdCol = rows[i].cells[2].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();
        var fifthCol = rows[i].cells[4].textContent.toUpperCase();
        var sixthCol = rows[i].cells[5].textContent.toUpperCase();
        if ( firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1 ) {
            rows[i].style.display = "";}
            else{
                rows[i].style.display = "none";}
        }

    }



// -----------For Subject Record-----------
var selectedRow = null
function onFormSubmit3(){
    if (validate3()) {
        var formData = readFormData3();
        if (selectedRow == null)
        insertNewRecord3(formData);
        else updateRecord3(formData);
        resetForm3(); }
    }

function readFormData3() {
    var formData = {};
    formData["subjectName"] = document.getElementById("subjectName").value;
    formData["subjectCode"] = document.getElementById("subjectCode").value;
    formData["validSemesters"] = document.getElementById("validSemesters").value;
    formData["courseName"] = document.getElementById("courseName").value;
    return formData; }

function insertNewRecord3(data) {
        var table = document.getElementById("subjectList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.subjectName;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.subjectCode;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.validSemesters;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.courseName;
        cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<a onClick="onEdit3(this)" id="edit">Edit</a><a onClick="onDelete3(this)" id="delete">Delete</a>`;
    }


function resetForm3() {
    document.getElementById("subjectName").value = ""; 
    document.getElementById("subjectCode").value = ""; 
    document.getElementById("validSemesters").value = "";
    document.getElementById("courseName").value = "";
    selectedRow = null;
}

function onEdit3(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("subjectName").value = selectedRow.cells[0].innerHTML; 
    document.getElementById("subjectCode").value = selectedRow.cells[1].innerHTML; 
    document.getElementById("validSemesters").value = selectedRow.cells[2].innerHTML; 
    document.getElementById("courseName").value = selectedRow.cells[3].innerHTML;
}

function updateRecord3(formData) {
    selectedRow.cells[0].innerHTML = formData.subjectName;
    selectedRow.cells[1].innerHTML = formData.subjectCode;
    selectedRow.cells[2].innerHTML = formData.validSemesters;
    selectedRow.cells[3].innerHTML = formData.courseName;
}

function onDelete3(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement; 
        document.getElementById("subjectList").deleteRow(row.rowIndex);
        resetForm3(); }
    }

function validate3() {
    if (document.getElementById("subjectName").value.trim() == "") {
        isValid = false; 
        document.getElementById("subjectNameValidationError").classList.remove("hide");}
    else {
        isValid = true;
        if (!document.getElementById("subjectNameValidationError").classList.contains("hide")) document.getElementById("subjectNameValidationError").classList.add("hide");
    }
    return isValid;
    }

function deleterecord3(){
    if(confirm("Are you sure you want to Delete All Record?"))
    {
        var rowcount = subjectList.rows.length;
        for (var i = rowcount-1; i>0 ;i--){
            subjectList.deleteRow(i);
        }
    }
}

// ----------------Scripting for Searching in Subject Record---------------------

function filterTable3(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#subjectList tbody").rows;
    for (var i = 0; i < rows.length; i++){
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirdCol = rows[i].cells[2].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();
        if ( firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 )
        {
            rows[i].style.display = "";}
            else{
                rows[i].style.display = "none";}
        }

    }


// --------- Assign Subjects to Faculty -------------------!!

var selectedRow = null
function onFormSubmit4(){
    if (validate4()) {
        var formData = readFormData4();
        if (selectedRow == null)
        insertNewRecord4(formData);
        else updateRecord4(formData);
        resetForm4(); }
    }

function readFormData4() {
    var formData = {};
    formData["assignCourse"] = document.getElementById("assignCourse").value;
    formData["assignSemester"] = document.getElementById("assignSemester").value;
    formData["assignFaculty"] = document.getElementById("assignFaculty").value;
    formData["assignSubjectName"] = document.getElementById("assignSubjectName").value;
    formData["assignSubjectCode"] = document.getElementById("assignSubjectCode").value;
    formData["assignClasses"] = document.getElementById("assignClasses").value;
    return formData; }
    
    
function insertNewRecord4(data) {
    var table = document.getElementById("assignFacultyList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.assignCourse;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.assignSemester;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.assignFaculty;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.assignSubjectName;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.assignSubjectCode;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.assignClasses;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit4(this)" id="edit">Edit</a>
    <a onClick="onDelete4(this)" id="delete">Delete</a>`; }


function resetForm4() {
    document.getElementById("assignCourse").value = ""; 
    document.getElementById("assignSemester").value = ""; 
    document.getElementById("assignFaculty").value = ""; 
    document.getElementById("assignSubjectName").value = "";
    document.getElementById("assignSubjectCode").value = "";
    document.getElementById("assignClasses").value = "";
    selectedRow = null; }

function onEdit4(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("assignCourse").value = selectedRow.cells[0].innerHTML; 
        document.getElementById("assignSemester").value = selectedRow.cells[1].innerHTML; 
        document.getElementById("assignFaculty").value = selectedRow.cells[2].innerHTML; 
        document.getElementById("assignSubjectName").value = selectedRow.cells[3].innerHTML;
        document.getElementById("assignSubjectCode").value = selectedRow.cells[4].innerHTML;
        document.getElementById("assignClasses").value = selectedRow.cells[5].innerHTML;}

function updateRecord4(formData) {
    selectedRow.cells[0].innerHTML = formData.assignCourse;
    selectedRow.cells[1].innerHTML = formData.assignSemester;
    selectedRow.cells[2].innerHTML = formData.assignFaculty;
    selectedRow.cells[3].innerHTML = formData.assignSubjectName;
    selectedRow.cells[4].innerHTML = formData.assignSubjectCode;
    selectedRow.cells[5].innerHTML = formData.assignClasses; }

function onDelete4(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement; 
        document.getElementById("assignFacultyList").deleteRow(row.rowIndex);
        resetForm(); }
    }

function validate4() {
    if (document.getElementById("assignFaculty").value.trim() == "") {
        isValid = false; 
        document.getElementById("assignFacultyValidationError").classList.remove("hide");}
    else {
        isValid = true;
        if (!document.getElementById("assignFacultyValidationError").classList.contains("hide"))
        document.getElementById("assignFacultyValidationError").classList.add("hide");
    }
    return isValid;
    }

function deleterecord4(){
    if(confirm("Are you sure you want to Delete All Record?"))
    {
        var rowcount = assignFacultyList.rows.length;
        for (var i = rowcount-1;i>0;i--){
            assignFacultyList.deleteRow(i);
        }
    }
}
    

// --------------------Scripting for Searching in Assigned Faculty Record-------------------------------------!

function filterTable4(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#assignFacultyList tbody").rows;
    for (var i = 0; i < rows.length; i++){
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirdCol = rows[i].cells[2].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();
        var fifthCol = rows[i].cells[4].textContent.toUpperCase();
        var sixthCol = rows[i].cells[5].textContent.toUpperCase();
        if ( firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1 ) {
            rows[i].style.display = "";}
            else{
                rows[i].style.display = "none";}
        }

    }