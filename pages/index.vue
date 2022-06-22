<template>
  <div class="container mx-auto">
    <Page>
      <Grid :content="content" :properties="properties" />
    </Page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export type DataType = {
  value1: string;
};

export default Vue.extend({
  computed: {
    ...mapGetters({
      content: 'grid/content',
      properties: 'grid/properties',
    }),
  },
  async fetch() {
    this.getItems();
  },
  methods: {
    ...mapActions({
      getItems: 'grid/getItems',
    }),
  },
});
</script>
