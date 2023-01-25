<template>
    <div class="controls">
        <h2 class="controls__title">{{ title }}</h2>
        <div class="controls__actions">
            <input class="controls__actions--search" type="text" name="filter" id="search" placeholder="Search..." v-model="searchField" @keyup="search">
            <button class="controls__actions--create" @click="openModal">
                <span class="plus_head">Create</span>
                <svg-icon class="plus_icon" name = "plus"></svg-icon>
            </button>
        </div>
    </div>
</template>
<script>
import SvgIcon from './SvgIcon.vue'
export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            searchField: ""
        }
    },
    props:[
        "title",
        "path"
    ],
    emits: [
        "searchFilter"
    ],
    methods: {
        search() {
            this.$emit('searchFilter', this.searchField)
        },
        openModal(){
            this.$router.push(`${this.path}/new`)
        }
    }
}
</script>
<style scoped>
    .controls {
        width: 100%;
        border-bottom: 2px solid black;
        display: flex;
        justify-content: space-between;
    }
    .controls__title {
        margin: 0.5rem;
    }
    .controls__actions {
        margin: 0.5rem;
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
    .controls__actions--search {
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
    }
    .controls__actions--create {
        cursor: pointer;
        padding: 0.3rem 0.5rem;
        margin-left: 0.5rem;
        border-radius: 5px;
        background: var(--color-success);
        color: white;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .plus_icon {
        width: 1rem;
        height: 1rem;
        fill: white;
        display: none;
    }
@media only screen and (max-width: 768px) {
    .controls__title {
        margin: 0.5rem 0;
    }
    .controls__actions {
        margin: 0.5rem;
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
    .controls__actions--search {
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
    }
    .controls__actions--create {
        cursor: pointer;
        padding: 0.3rem 0.5rem;
        margin-left: 0.5rem;
        border-radius: 5px;
        background: var(--color-success);
        color: white;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .plus_head {
        display: none;
    }
    .plus_icon {
        display: block;
    }
}
</style>>