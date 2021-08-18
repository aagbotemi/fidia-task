<template lang="html">
    <div>
        <ul class='tabs__header d-flex'>
            <li 
                v-for='(tab, index) in tabs' 
                :key='tab.title' 
                @click='selectTab(index)'
                :class='{"tabs__selected": (index == selectedIndex)}'>
                    {{ tab.title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
        selectedIndex: 0, // the index of the selected tab,
        tabs: [],        // all of the tabs
        }
    },
    created () {
        this.tabs = this.$children
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
        this.selectedIndex = i
        
        // loop over all the tabs
        this.tabs.forEach((tab, index) => {
            tab.isActive = (index === i)
        })
        }
    }
}
</script>

<style lang="scss">
.tabs__header {
    list-style: none;
    padding-left: 0;
    border-bottom: 1px solid #E3E8EE;
}

ul > .tabs__selected {
    color: #5469D4;;
    border-bottom: 2px solid #5469D4;;
}

ul li {
    font-family: SF Pro Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    margin-right: 26px;
    cursor: pointer;
}
</style>