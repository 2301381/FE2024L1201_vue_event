// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1,
            number: 0,
        };
    },
    methods: {
        increment() {
            this.count = this.count * 2;
        },
        decrement() {
            this.count = this.count / 2;
        },
        reset() {
            this.count = 1;
        },
        tasu() {
            this.count = this.count + this.number;
        },
        hiku() {
            this.count = this.count - this.number;
        }

    }
});
