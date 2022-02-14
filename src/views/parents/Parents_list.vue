<template>
  <v-card>
     <v-card-title class="align-start">
      <span class="font-weight-semibold">Parents list </span>
     
    </v-card-title>

     <v-col cols="12">
        <v-btn color="info"
        @click="goToForm()">
        Add new Parent
        </v-btn>
     </v-col>
    <v-data-table
      :headers="headers"
      :items="usreList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <template #[`item.full_name`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
     
      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          class="font-weight-medium"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from './datatable-data'

export default {
methods: {
     goToForm(){
   this.$router.push('/add-parent'); 
      },
    loadUsers(){
        axios.get('https://api.com/v1/users')
            .then(function( response ){
                this.users = response.data;
            }.bind(this));
    }
},
  setup() {
   //const infos = loadUsers
    return {
      headers: [
        { text: 'Image', value: 'status' },
        { text: 'NAME', value: 'Name' },
        { text: 'Adress', value: 'email' },
        { text: 'PHONE', value: 'start_date' },
      ],
      usreList: data,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
