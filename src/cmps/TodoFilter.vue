<template>
    <section class="todo-filter">
        <input @input="onChangeFilterBy()" v-model="filterBy.title" type="text" name="" id="" placeholder="Title">
        <input @input="onChangeFilterBy()" v-model="filterBy.severity" type="number" placeholder="Severity">
    </section>
</template>
<script>
export default {
    name: 'Todo Filter',
    data() {
        return {
            filterBy: {
                title: '',
                severity: 0
            }
        }
    },
    methods: {
        onChangeFilterBy() {
            this.$store.commit({ type: 'setFilter', filterBy: this.filterBy })
        }
    },
}
</script>
