<template>

   <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Parents list </span>
     
    </v-card-title>

     <v-col cols="12">
        <v-btn color="info"
        @click="goToForm()">
        Add new parent
        </v-btn>
     </v-col>
    <v-data-table
      :headers="headers"
      :items="parent"
      :items-per-page="10" 
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <!-- <template #[`item.full_name`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template> -->
<!--     
     <template #[`item.actions`]="{item}">
       <v-btn icon @click="delete(item.id)">
      <v-icon large > mdiDeleteOutline </v-icon>
       </v-btn>
      </template>  -->
    
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical, mdiDeleteOutline} from '@mdi/js'
import axios from 'axios'
import Parents from '@/models/parent';

 
export default {
  data() {
    return {
      parent: new Parents('', '', '','','',''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
   methods : 
   {
    goToForm(){
   this.$router.push('/add-parent'); 
      },
      delete(id){

      }
      },  

 async created(){
    try{
      const res = await axios.get("http://localhost:3000/parents");
      this.parent = res.data;
      console.log("data",res.data);
      console.log("parent", this.parent);
    } catch(err)
    {
      console.log(err);
    }
      },
  
  setup() { 
    return {
       
      headers: [
        // { text: 'image', value: 'status' },
        { text: 'First name', value: 'firstname' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Adress', value: 'adress' },
        { text: 'Phone', value: 'phone' },
        { text: 'Actions', value: 'actions' },
        
      ],

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
        mdiDeleteOutline,
      },
    }
  },
}
</script>
