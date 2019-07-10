import template from './userForm.html';

export default {
  template,
  bindings: { onAddUser: '&' },
  controller: userFormController
};

function userFormController() {
  var ctrl = this;

  ctrl.getFieldInfo = function(name) {
    var touched = ctrl.form[name].$touched;
    var errors = '';

    return ctrl.form[name];
  };
  ctrl.addUser = function() {
    var newUser = Object.assign({}, ctrl.user);
    ctrl.onAddUser({ user: newUser });
  };
}
