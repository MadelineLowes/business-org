function viewAll() {
  // unhide the question page header & card
  $("#dept-table").removeClass("hide");
  $("#role-table").removeClass("hide");
  $("#emp-table").removeClass("hide");
}

function viewDept() {
  // hide the homepage header & buttons
  $("#role-table").addClass("hide");
  $("#emp-table").addClass("hide");
  // unhide the question page header & card
  $("#dept-table").removeClass("hide");
}

function viewRole() {
  // hide the homepage header & buttons
  $("#dept-table").addClass("hide");
  $("#emp-table").addClass("hide");
  // unhide the question page header & card
  $("#role-table").removeClass("hide");
}

function viewEmp() {
  // hide the homepage header & buttons
  $("#dept-table").addClass("hide");
  $("#role-table").addClass("hide");
  // unhide the question page header & card
  $("#emp-table").removeClass("hide");
}

$("#view-all").click(viewAll);
$("#view-dept").click(viewDept);
$("#view-role").click(viewRole);
$("#view-emp").click(viewEmp);