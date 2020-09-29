<template>
  <button
    class="gwi-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'gwi-button--' + type : '',
      buttonSize ? 'gwi-button--' + buttonSize : '',
      {
        'disabled': buttonDisabled,
        'loading': loading,
        'plain': plain,
        'round': round,
        'circle': circle
      }
    ]"
  >
    <!-- <i class="el-icon-loading" v-if="loading"></i> -->
    <i class="iconfont" :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'GwiButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean,
      loadingText: String
    },

    computed: {
      buttonSize() {
        return this.size
      },
      buttonDisabled() {
        return this.disabled
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style scoped lang="scss">
@import '../../style/common/var.scss';

.gwi-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: $button-default-height;
  margin: 0;
  padding: 0;
  font-size: $button-default-font-size;
  line-height: $button-default-line-height;
  text-align: center;
  border-radius: $button-border-radius;
  cursor: pointer;
  transition: opacity $animation-duration-fast;
  -webkit-appearance: none;
  outline-width: 0;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: $black;
    border: inherit;
    border-color: $black;
    border-radius: inherit; /* inherit parent's border radius */
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }

  &:active::before {
    opacity: 0.1;
  }

  &--loading,
  &--disabled {
    &::before {
      display: none;
    }
  }

  &--default {
    color: $button-default-color;
    background-color: $button-default-background-color;
    border: $button-border-width solid $button-default-border-color;
  }

  &--primary {
    color: $button-primary-color;
    background-color: $button-primary-background-color;
    border: $button-border-width solid $button-primary-border-color;
  }

  &--info {
    color: $button-info-color;
    background-color: $button-info-background-color;
    border: $button-border-width solid $button-info-border-color;
  }

  &--danger {
    color: $button-danger-color;
    background-color: $button-danger-background-color;
    border: $button-border-width solid $button-danger-border-color;
  }

  &--warning {
    color: $button-warning-color;
    background-color: $button-warning-background-color;
    border: $button-border-width solid $button-warning-border-color;
  }

  &--plain {
    background-color: $button-plain-background-color;

    &.gwi-button--primary {
      color: $button-primary-background-color;
    }

    &.gwi-button--info {
      color: $button-info-background-color;
    }

    &.gwi-button--danger {
      color: $button-danger-background-color;
    }

    &.gwi-button--warning {
      color: $button-warning-background-color;
    }
  }

  &--large {
    width: 100%;
    height: $button-large-height;
  }

  &--normal {
    padding: 0 15px;
    font-size: $button-normal-font-size;
  }

  &--small {
    min-width: $button-small-min-width;
    height: $button-small-height;
    padding: 0 $padding-xs;
    font-size: $button-small-font-size;
  }

  &__loading {
    color: inherit;
    font-size: inherit;
  }

  &--mini {
    min-width: $button-mini-min-width;
    height: $button-mini-height;
    font-size: $button-mini-font-size;

    & + .gwi-button--mini {
      margin-left: $padding-base;
    }
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: $button-disabled-opacity;
  }

  &--loading {
    cursor: default;
  }

  &--round {
    border-radius: $button-round-border-radius;
  }

  &--square {
    border-radius: 0;
  }

  // align-items are ignored when flex container is a button in legacy safari
  // see: https://bugs.webkit.org/show_bug.cgi?id=169700
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__icon {
    min-width: 1em;
    font-size: 1.2em;
    line-height: inherit;
  }

  &__icon + &__text,
  &__loading + &__text {
    margin-left: 5px;
  }

  &--hairline {
    border-width: 0;

    &::after {
      border-color: inherit;
      border-radius: $button-border-radius * 2;
    }

    &.gwi-button--round::after {
      border-radius: $button-round-border-radius;
    }

    &.gwi-button--square::after {
      border-radius: 0;
    }
  }
}
</style>