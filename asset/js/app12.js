var app = new Vue({
    el: '#app',
    data: {
        content: '',
        barang: ['kopi', 'beras', 'jagung']
    },
    methods: {
        tambahbarang: function () {
            this.barang.push(this.content);
            this.content = '';
        },
        hapusbarang: function (index) {
            this.barang.splice(index, 1);
        }
    }
})