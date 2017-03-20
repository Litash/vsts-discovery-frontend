// Project: VSTS Discovery extension
// JavaScript functions for controlling main page behaviours
// Author: Yichen Lu
// Create Date: 31-Jan-2017
// Update Date: 01-Feb-2017

jQuery(document).ready(function() {
    // activate 100pt-status component when page loaded by default
    // load100PtStatus();
    // loadSetting();
    // loadCodetrackerStatus();
    VSS.init();
    VSS.ready(function(){
        load100PtStatus();
    });
    VSS.notifyLoadSucceeded();

});


function bindTopNavClickEvents() {
    $('#navbar a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
}

// component menu items controls
$('#100pt-status').click(function(event) {
    event.preventDefault();
    $("#100-points-menu li").removeClass('active');
    $(this).addClass('active');
    load100PtStatus();
});


$('#100pt-assign').click(function(event) {
    event.preventDefault();
    $("#100-points-menu li").removeClass('active');
    $(this).addClass('active');
    load100PtAssign();
});

$('#tab_code_tracker').click(function(event) {
    // event.preventDefault();
    // $("#codetracker-menu li").removeClass('active');
    // $(this).addClass('active');
    loadCodetrackerStatus();
});


$('#tab_setting').click(function(event) {
    // event.preventDefault();
    // $("#codetracker-menu li").removeClass('active');
    // $(this).addClass('active');
    loadSetting();
});



// Global variables retrieved from VSS SDK
var webContext = VSS.getWebContext();
console.log(webContext);

var currentAccount = webContext.account;
console.log(currentAccount);
var currentAccountName = currentAccount.name
console.log(currentAccountName)
var currentUser = webContext.user;
console.log(currentUser);

var currentInstanceName = currentAccount.name
console.log("Current Account Name: "+currentInstanceName)
var currentInstanceID = currentAccount.id;
console.log("Current Account ID: "+currentInstanceID);
var currentUserName = currentUser.name;
console.log("Current User's Name: "+currentUserName);
var currentUserEmail = currentUser.email;
console.log("Current User's Email: "+currentUserEmail);
var currentProject = webContext.project.name
console.log("Current Project Name: "+currentProject)




// function createMember() {
//     $.ajax({
//         url: 'http://discovery-100p.azurewebsites.net/v1/members/',
//         type: 'POST',
//         dataType: 'json',
//         data: {
//             name: currentUserName,
//             email: currentUserEmail,
//             instance_id: currentInstanceID
//         }
//     })
//     .done(function(data) {
//         console.log("Create member success");
//         console.log(data)
//     })
//     .fail(function(obj, textStatus, errorThrown) {
//         console.log("Create member error. "+errorThrown);
//     })
//     .always(function() {
//         console.log("complete");
//     });
// }
