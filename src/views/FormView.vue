<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="aadSampleAppUser"
  >
  <input type="hidden" name="_token" value="ojVdwe8Zla81IPg09SFnH7YDySlzrrVBsCWOxm1A">
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      @input="$v.name.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      @input="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      required
    ></v-text-field>

    <v-text-field
      v-model="password_confirmation"
      label="password confirm"
      required
    ></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[(v: string) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
 -->
    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[(v: string) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
 -->
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      class="mr-4"
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>

    <v-btn
      color="send"
      type="submit"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import UserApiService from '../services/UserApiService';
import ResponseData from "../responseData";

export interface VForm {
  validate: () => boolean;
  reset: () => void;
  resetValidation: () => void;
}

export default defineComponent({
  name: 'FormView',
  setup() {
    return { $v: useVuelidate() }
  },
  data(): {
    valid: boolean,
    name: string,
    nameRules: any,
    email: string,
    emailRules: any,
    password: string,
    passwordRules: any,
    // select: null,
    // items: string[],
    // checkbox: boolean,
    sampleAppUser: {
      id: number | null;
      name: string;
      email: string;
      password: string,
      password_confirmation: string,
      created_at: Date | null;
      updated_at: Date | null;
    },
    submitted: boolean,
  } {
    return {
      valid: true,
      name: '',
      nameRules: [
        (v: string) => !!v || 'Name is required',
        (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        (v: string) => !!v || 'Password is required',
        (v: string) => /.+@.+\..+/.test(v) || 'Password must be valid',
      ],
      // select: null,
      // items: [
      //   'Item 1',
      //   'Item 2',
      //   'Item 3',
      //   'Item 4',
      // ],
      // checkbox: false,
      sampleAppUser: {
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        created_at: null,
        updated_at: null
      },
      submitted: false,
    }
  },
  computed: {
    form(): VForm {
      return this.$refs.form as VForm
    }
  },
  methods: {
    validate() {
      this.form.validate()
    },
    reset() {
      this.form.reset()
    },
    resetValidation() {
      this.form.resetValidation()
    },
    aadSampleAppUser() {
      let data = {
        id: this.sampleAppUser.id,
        name: this.sampleAppUser.name,
        email: this.sampleAppUser.email,
        password: this.sampleAppUser.password,
        password_confirmation: this.sampleAppUser.password_confirmation,
        created_at: this.sampleAppUser.created_at,
        updated_at: this.sampleAppUser.updated_at
      };

      UserApiService.create(data)
        .then((response: ResponseData) => {
          this.sampleAppUser.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
      },
  },
  validations() {
    return {
      name: { required },
      email: { required },
      password: { required }
    }
  },
});
</script>
