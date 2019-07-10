import angular from 'angular';

import aboutComponent from "../components/about/about";
import appComponent from "./app.component";

import errorMessage from '../components/errorMessage/errorMessage';
import Navbar from '../components/navbar/navbar';
import userForm from '../components/userForm/userForm';
import userlist from '../components/userList/userlist';
import userManager from '../components/userManger/userManager';

const module =  angular.module('myApp', []);
module.component('app', appComponent);
module.component('about', aboutComponent);
module.component('navBar', Navbar);
module.component('errorMessage', errorMessage);
module.component('userForm', userForm);
module.component('userList', userlist);
module.component('userManager', userManager);
export default module;

