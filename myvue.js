new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        link: 'http://google.com',
        finishedLink: '<a href="google.com">Google</a>',
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        name: 'Rifqi',
        isClicked: false,
        color: 'green',
        width: 10
    },
    computed: {
        output: function(){
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        },
        divClasses: function(){
            return{
                red: this.isClicked,
                blue: !this.isClicked
            }
        },
        myStyle: function(){
            return{
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000)
        }
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        },
        sayHello: function(){
            this.title = 'Hello';
            return this.title;
        },
        refreshData: function(event){
            return this.title = event.target.value;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert('Alert!');
        },
        result(){
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    }
});