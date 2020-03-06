new Vue({
    el: '#exercise',
    data: {
        name: 'Rifqi Ahmad Fauzi',
        age: 20,
        image: 'https://www.cats.org.uk/media/3236/choosing-a-cat.jpg',
    },
    methods: {
        randomNum: function(){
            return Math.random();
        }
    }
});