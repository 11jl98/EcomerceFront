<template>
    <div class="d-flex home">
        <MenuHome/>
        <Dashaboard/>
    </div>
</template>

<script>
import MenuHome from '../../components/Navigation/MenuHome.vue'
import Dashaboard from '../../components/Dashboard/Index-Dashboard.vue'
export default{
    components:{
        MenuHome,
        Dashaboard
    },
    data(){
        return{

        }
    }
}

</script>
<style scoped>
/* .home{
    width: 80%;
 
} */
</style>