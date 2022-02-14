<template>

  <v-row>
  <v-col
      cols="12"
    >
    Tableau de board
  </v-col>
    <v-col
      cols="12"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>


  
   
  
    <v-col cols="12">
      <dashboard-datatable></dashboard-datatable>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'

// demos
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardDatatable from './DashboardDatatable.vue'

export default {
  components: {
    DashboardStatisticsCard,
    DashboardDatatable,
  },
}
</script>
