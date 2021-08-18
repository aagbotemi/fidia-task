<template>
    <li :class="listItemClass">
        <router-link :to='linkUrl'>
            <img :src="require(`../../assets/image/${imageUrl}`)" 
                :width="width" :class="imageClass" :alt="alt" 
            /> 
            <span>{{linkText}}</span> 
        </router-link>
    </li>
</template>

<script>
export default {
    props: [ 'imageUrl', 'width', 'alt', 'linkText', 'imageClass', 'listItemClass', 'linkUrl']
}
</script>