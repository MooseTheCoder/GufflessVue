import Vue from 'vue';

// Components
import Application from './components/Application';

var App = new Vue({
    el:'#VueApplication',
    components:{
        'application':Application
    },
    template:'<div><application /></div>'
});