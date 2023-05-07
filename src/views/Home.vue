<template >
    <Top />
    <Tables class="p-10" />
</template>
<script>
import Tables from './Tables.vue'
import Top from '../components/Top.vue'
export default {
    name: 'App',
    components: {
        Tables,
        Top
    },
}
</script>