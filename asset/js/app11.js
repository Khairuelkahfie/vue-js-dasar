var app = new Vue({
    el: '#app',
    data: {
        mesage: '',
    },
    methods: {
        tombolesc: function () {
            this.mesage = 'yang kamu tekan dalah tombol ESC'
        },
        tombolspasi: function () {
            this.mesage = 'yang kamu tekan adalah tombol Spasi'
        },
        tombolatas: function () {
            this.mesage = 'yang kamu tekan adalah tombol atas'
        },
        tombolbawah: function () {
            this.mesage = 'yang kamu tekan adalah tombol bawah'
        },
        tombolA: function () {
            this.mesage = 'yang kamu tekan adalah tombol A';
        }
    }

})