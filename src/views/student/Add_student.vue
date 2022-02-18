<template>
  <v-col cols="12">
      <v-card>
            <v-card-title>
        Add new student</v-card-title>

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
          v-model="student.firstName"
          label="First Name"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="student.lastName"
          label="Last name"
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
          v-model="student.birthDate"
          label="Birth year"
          outlined
          dense
          placeholder="Birth year"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="student.adress"
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
          v-model="student.level"
          label="Level"
          outlined
          dense
          placeholder="Level"
          hide-details
        ></v-text-field>
      </v-col>

     

      <v-col cols="12">
        <v-btn color="primary" @click="submit">
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
import Student from '@/models/student';

export default {
   data() {
    return {
      student: new Student('', '', '', '', '',''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  methods: {
       async submit(){
          
    try{
      const res = await axios.post("http://localhost:3000/students",student);
      this.$router.push('/students'); 
    } catch(err){
      console.log(err);
    }
      },
        
    },
  setup() {

    return {
     
    }
  },
}
</script>
