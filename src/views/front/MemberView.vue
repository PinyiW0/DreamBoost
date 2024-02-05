<template>
    <div class="container">
      <h1>member</h1>
      <v-form v-slot="{ errors }">
        {{ errors }}
        <div class="col-md-4">
          <label for="name" class="form-label">First name</label>
          <v-field type="text" class="form-control" id="name"
          :class="{'is-invalid': errors.name}" name="name" rules="required"></v-field>
          <error-message class="invalid-feedback" name="name"></error-message>
        </div>
      </v-form>
    </div>
</template>
<script>
import MixinVeeValidate from '../../js/mixins/mixinVeeValidate';

export default {
  date() {
    return {

    };
  },
  mixins: [MixinVeeValidate],
};
</script>
<!--  vee-validate example -->
<!--
  <template>
    <div class="container">
      <h1>member</h1>
      <v-form v-slot="{ errors }">
        {{ errors }}
        <div class="col-md-4">
          <label for="name" class="form-label">First name</label>
          <v-field type="text" class="form-control" id="name"
          :class="{'is-invalid': errors.name}" name="name" rules="required"></v-field>
          <error-message class="invalid-feedback" name="name"></error-message>
        </div>
      </v-form>
    </div>
</template>
<script>
import MixinVeeValidate from '../../js/mixins/mixinVeeValidate';

export default {
  date() {
    return {

    };
  },
  mixins: [MixinVeeValidate],
};
</script>
 -->
