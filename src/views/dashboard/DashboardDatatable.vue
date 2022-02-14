<template>
   <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Liste des éléves en retard </span>
     
    </v-card-title>

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
   methods : {
    goToForm(){
   this.$router.push('/add-student'); 
      }
      },
  
  setup() { 
  

  
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'image', value: 'status' },
        { text: 'Nom Complet', value: 'full_name' },
        { text: 'Niveau scolaire', value: 'age' },
        { text: 'heure de retard', value: 'age' },
        { text: 'Date de naissance', value: 'start_date' },
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
