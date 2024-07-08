<template>
<PageHeader/>
     <div class="container mx-auto mt-4">
      <h1>Welcome to the Home Page</h1>
      <!-- Your other home page content -->
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader.vue'
export default {
    name : 'Home',
    components:{
        PageHeader
    }
    
}
</script>