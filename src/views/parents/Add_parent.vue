<template>
  <v-col cols="12">
      <v-card>
            <v-card-title>
        Add new Parent</v-card-title>

<v-card-text>
  <v-form class="multi-col-validation">
    <v-row>
  <v-avatar
        rounded
        size="120"
        class="me-6"
      >
        <v-img :src="accountDataLocale.avatarImg"></v-img>
      </v-avatar>

      <!-- upload photo -->
      <div>
        <v-btn
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <v-icon class="d-sm-none">
            {{ icons.mdiCloudUploadOutline }}
          </v-icon>
          <span class="d-none d-sm-block">Upload new photo</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="true"
        />

        <v-btn
          color="error"
          outlined
          class="mt-5"
        >
          Reset
        </v-btn>
        <p class="text-sm mt-5">
          Allowed JPG, GIF or PNG. Max size of 800K
        </p>
      </div>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="parent.firstname"
          label="First Name"
          outlined
          dense
          placeholder="First name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="parent.lastName"
          label="Last Name"
          outlined
          dense
          placeholder="Last Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="parent.adress"
          label="Adress"
          outlined
          dense
          placeholder="Adress"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="parent.phone"
          label="phone"
          outlined
          dense
          placeholder="Phone"
          hide-details
        ></v-text-field>
      </v-col>

      

      <v-col cols="12">
        <v-btn color="primary">
      Submit
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
        >
          Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</v-card-text>
      </v-card>
  </v-col>
</template>

<script>
import { ref } from '@vue/composition-api'
import Parents from '@/models/parent';

export default {
     data() {
    return {
      parent: new Parents('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  methods: {
        submit(){
            axios.post('https://api.com/v1/user', this.parent)
                .then(function( response ){
                    // Handle success
                    this.message = response.data.message;
                    this.successful = true;
                }.bind(this));
        }
    },
  setup() {

    return {
     
    }
  },
}
</script>
