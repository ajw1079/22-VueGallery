<template>
    <div>
        <v-container class="py-8 mt-8 mb-10">
            <v-content>
                <h3 class="text-center py-3">Portfolio</h3>
                <v-row class="justify-center">
                    <v-col v-for="list in portItem" :key="list.id" class="col-lg-3 col-md-4 col-6">
                        <img :src="'./img/'+list" alt="" width="100%">
                    </v-col>
                </v-row>
            </v-content> 
        </v-container>   
    </div>
</template>
<script>
export default {
    data() {
        return {
            portItem : [
                "type1.jpg", "type2.jpg", "type3.jpg", "type4.jpg", "type5.jpg", "type6.jpg", "type7.jpg", "type8.jpg", "type9.jpg", "type10.jpg", "type11.jpg", "type12.jpg"  
            ]
        }
    }
}
</script>


