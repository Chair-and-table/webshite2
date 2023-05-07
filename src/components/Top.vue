<template>
    <div class="flex justify-end mx-8">
        <ul class="flex justify-center space-x-2 text-white">
            <li v-bind:class="{ 'active': clicked }" @click="clicked = !clicked">
                <div class="inline-block px-4 py-2">
                    <router-link to="/">LeaderBoard</router-link>
                </div>
            </li>
            <li>
                <div @click="activeTabTwo"
                    class="inline-block px-4 py-2 border-solid bg-sky-400 border-2 border-blue-700  ">
                    <router-link to="/Thanks">Thank You Page</router-link>
                </div>
            </li>
            <li>
                <button @click="activeTabThree" class="inline-block px-4 py-2 bg-sky-400 border-2 border-blue-700 ">
                    Login
                </button>
            </li>
        </ul>
    </div>

    <div class="flex">
        <img class="logo mx-10" src="../assets/BlueNeon.png" alt="Super RAD Logo" />
        <h1 class="font-bold text-white text-5xl mx-2 my-5">Super RAD Website</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tab: 1,
            purple: "purple-500",
            clicked: false,
            ParentClass: "inactive",

        };
    },
    methods: {
        updateParentClass(classChange) {
            this.ParentClass = classChange;
        },
        activeTabTwo() {
            this.tab = 2;
        },
        activeTabThree() {
            this.tab = 3;
        },
    },
}
</script>