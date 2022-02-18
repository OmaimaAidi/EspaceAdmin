<template>

   <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Students list </span>
     
    </v-card-title>

     <v-col cols="12">
        <v-btn color="info"
        @click="goToForm()">
        Add new student
        </v-btn>
     </v-col>
    <v-data-table
      :headers="headers"
      :items="student"
      :items-per-page="10" 
      items-key="student.id"
      class="table-rounded"
      hide-default-footer
      disable-sort >

        <template #[`item.actions`]="{item}">
       <v-btn color="red" icon @click="delete(item.id)">
         Delete
      <v-icon large > mdiDeleteOutline </v-icon>
       </v-btn>
      </template>
    </v-data-table> 
      <!-- <v-data-table
    :headers="headers"
    :items="student"
    class="table-rounded"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table> -->


  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical, mdiDeleteOutline} from '@mdi/js'
import axios from 'axios'

 
export default {
  data() {
    return {
    headers: [
        // { text: 'image', value: 'status' },
        { text: 'First name', value: 'firstName' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Adress', value: 'adress' },
        { text: 'Birth year', value: 'birthDate' },
        { text: 'Level', value: 'level' },
        { text: 'Actions', value: 'actions' },
      ],
      student : [new Students('', '', '','','','')].map((item, key) => ({...item, key})),
      kid:[],
      submitted: false,
      successful: false,
      message: ''
    };
  },
   methods : {
    goToForm(){
   this.$router.push('/add-student'); 
      },
   delete(id){
  axios.delete(`http://localhost:3000/studenrs/${id}`);
      },

  async update(id) {
    try {
        await axios.patch(`${`http://localhost:3000/students`}/${id}`, {
            update: true
        });
        this.items = this.items.map(item => {
            if (item.id === id) {
                item.boughtItem = true;
            }
            return item;
        });
    } catch (error) {
        console.error(error);
    }
}
      },  

     
    async created(){
    try{
      const res = await axios.get("http://localhost:3000/students");
      this.kid = res.data;
      console.log("data",res.data);
      console.log("student", this.kid);
    } catch(err){
      console.log(err);
    }
      },
  
  setup() { 
  
    return {
       
   

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
