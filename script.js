function viewAll() {
  // unhide the question page header & card
  $("#dept-table").removeClass("hide");
  $("#role-table").removeClass("hide");
  $("#emp-table").removeClass("hide");
  // highlight the selected button
  $("#view-all").addClass("selected")
  // remove highlight from other buttons
  $("#view-dept").removeClass("selected")
  $("#view-role").removeClass("selected")
  $("#view-emp").removeClass("selected")

}

function viewDept() {
  // hide the homepage header & buttons
  $("#role-table").addClass("hide");
  $("#emp-table").addClass("hide");
  // unhide the question page header & card
  $("#dept-table").removeClass("hide");
  // highlight the selected button
  $("#view-dept").addClass("selected")
  // remove highlight from other buttons
  $("#view-all").removeClass("selected")
  $("#view-role").removeClass("selected")
  $("#view-emp").removeClass("selected")

}

function viewRole() {
  // hide the homepage header & buttons
  $("#dept-table").addClass("hide");
  $("#emp-table").addClass("hide");
  // unhide the question page header & card
  $("#role-table").removeClass("hide");
  // highlight the selected button
  $("#view-role").addClass("selected")
  // remove highlight from other buttons
  $("#view-all").removeClass("selected")
  $("#view-dept").removeClass("selected")
  $("#view-emp").removeClass("selected")
}

function viewEmp() {
  // hide the homepage header & buttons
  $("#dept-table").addClass("hide");
  $("#role-table").addClass("hide");
  // unhide the question page header & card
  $("#emp-table").removeClass("hide");
  // highlight the selected button
  $("#view-emp").addClass("selected")
  // remove highlight from other buttons
  $("#view-all").removeClass("selected")
  $("#view-dept").removeClass("selected")
  $("#view-role").removeClass("selected")
}

$("#view-all").click(viewAll);
$("#view-dept").click(viewDept);
$("#view-role").click(viewRole);
$("#view-emp").click(viewEmp);