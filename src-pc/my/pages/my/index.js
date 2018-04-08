import draggable from 'vuedraggable';

export default {

    data() {
        return {
            topnavData: [
                "前端开发导航",
                "后端开发导航",
                "c++开发导航",
                "fsdfsdf",
                "fsdf",
            ],
            topnavIsedit: false,
            sidenavData: [
                "开发工具开发工",
                "css组件库",
                "js组件库"
            ],
            sidenavIseidt: false,
            cardData: [
                {
                    title: "111vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "222react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "333vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "444react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "555vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "666react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "222react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "333vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "444react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "555vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "666react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "222react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "333vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "444react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
                {
                    title: "555vue.js官网",
                    content: "目前最流行的框架之一，深受广大前端开发者的喜爱"
                },
                {
                    title: "666react.js官网",
                    content: "目前最流行的框架之一，前端开发者的不二选择"
                },
            ]
        }
    },

    computed: {
        editText() {
            return this.topnavIsedit ? "取消" : "编辑";
        },
        editSlideText() {
            return this.sidenavIseidt ? "取消" : "编辑";
        }
    },

    methods: {
        onMove() {
            console.log(arguments)
        },
        onUpdate() {
            console.log(this.topnavData)
        }
    },

    components: {
        draggable,
    }

}