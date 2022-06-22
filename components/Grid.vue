<template>
  <div
    :class="['grid']"
    :style="[cols, rows, outer_left_right_margins, direction]"
  >
    <div
      class="w-full"
      v-for="(item, index) in content"
      :key="index"
      :style="[inner_left_right_spacing, inner_top_bottom_spacing]"
    >
      <img class="rounded" :src="item.image" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    content: {
      type: Array,
      require: true,
    },
    properties: {
      type: Object,
      require: true,
    },
  },
  computed: {
    cols() {
      return {
        'grid-template-columns':
          'repeat(' + this.properties.cols + ', minmax(0, 1fr))',
      };
    },
    rows() {
      return {
        'grid-template-rows':
          'repeat(' + this.properties.row + ', minmax(0, 1fr))',
      };
    },
    outer_left_right_margins() {
      return {
        'margin-left': +this.properties.outer_left_right_margins / 2 + 'px',
        'margin-right': this.properties.outer_left_right_margins / 2 + 'px',
      };
    },
    outer_top_bottom_margins() {
      return {
        'margin-top': this.properties.outer_top_bottom_margins / 2 + 'px',
        'margin-bottom': this.properties.outer_top_bottom_margins / 2 + 'px',
      };
    },
    inner_left_right_spacing() {
      return {
        'padding-left': this.properties.inner_left_right_spacing / 2 + 'px',
        'padding-right': this.properties.inner_left_right_spacing / 2 + 'px',
      };
    },
    inner_top_bottom_spacing() {
      return {
        'padding-top': this.properties.inner_top_bottom_spacing / 2 + 'px',
        'padding-bottom': this.properties.inner_top_bottom_spacing / 2 + 'px',
      };
    },
    direction() {
      return {
        'flex-direction':
          this.properties.direction == 'vertical' ? 'row' : 'column',
      };
    },
  },
};
</script>
