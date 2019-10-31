var app = new Vue({
    el: '#app',
    data: {
        message: 'khairul kahfi',
        int1: 2,
        int2: 3,
        // result = akan mengembalikan nilai menjadi null
        result: null,
    },
    computed: {
        sum: function () {
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumproses: function (int3) {
            // int3 adalah parameter yang kita berikan
            return this.result = this.int1 + this.int2 + int3;
        }
    }
})