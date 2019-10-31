var app = new Vue({
    el: '#app',
    data: {
        mesage: 'khairul kahfie!',
        int1: 2,
        int2: 4,
        result: null,
        kilometers: 0,
        meters: 0,
    },
    computed: {
        sum: function () {
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumproses: function () {
            return this.result = this.int1 + this.int2;
        },
        // jumlah: function (int4) {
        //     return this.result = this.int1 + this.int2 + int4;
        // }
    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000;

        },
        meters: function (val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }

})