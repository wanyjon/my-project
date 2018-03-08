<template>
    <Page :total="50" show-total @on-change="change"></Page>
</template>
<script>
    export default {
    	data(){
    		return {
    		}
    	},
    	methods: {
    		change (page) {
            console.log(page)
        }
    	}

        
    }
</script>