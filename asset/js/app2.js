var app = new Vue({
    el: '#app',
    data: {
        mesage: 'menghitung',
        int1: 12,
        int2: 13,
    },
    // menghitung data
    computed: {
        sum: function () {
            return this.int1 + this.int2;
        }
    }
})