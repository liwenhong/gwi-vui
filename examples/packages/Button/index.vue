<template>
  <div>
    <h4>按钮部分</h4>
    <gwi-button type="danger" size="normal" :icon="'iconleft-kong'">danger</gwi-button>
    <gwi-button type="default" size="normal">default</gwi-button>
    <gwi-button type="primary" size="normal">primary</gwi-button>
    <gwi-button type="info" size="normal">info</gwi-button>
    <gwi-button type="warning" size="normal">warning</gwi-button>
    <gwi-button type="hairline" size="normal">hairline</gwi-button>
    
    <h4>图标</h4>
    <gwi-icon name="empty-wifi" size="28" color="#888"></gwi-icon>

    <h4>加载</h4>
    <div style="display: flex;">
      <gwi-loading color="red" mode="'flower'"></gwi-loading>
      <gwi-loading color="red" size="28"></gwi-loading>
      <gwi-loading color="red" mode="'flower'" :showText="true" loadingText="加载中..."></gwi-loading>
      <gwi-loading color="red" size="28" :showText="true" textSize="10"></gwi-loading>
    </div>
    
    <h4>tabs</h4>
    <gwi-tabs :barWidth="30" :isScroll="false" :current="3" :barHeight="2" :name="'cname'" :list="[{cname: 'tab1'},{cname: 'tab2'},{cname: 'tab3'},{cname: 'tab4'},{cname: 'tab5'},{cname: 'tab4'},{cname: 'tab5'}]"></gwi-tabs>
    
    <h4>Toast</h4>
    <gwi-toast ref="gwiToast"></gwi-toast>

    <h4>Mask</h4>
    <gwi-mask :show="false"></gwi-mask>

    <h4>Popup</h4>
    <gwi-popup v-model="showPopup" :closeable="true">
      <div style="height: 200px;">恰似一江春水向东流</div>
    </gwi-popup>

    <h4>Modal</h4>
    <gwi-modal v-model="showModal" :content="'天下大势，合久必分'" :showCancelButton="true" :cancelText="'放弃'"></gwi-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPopup: false,
      showModal: true
    }
  },
  mounted() {
    this.$refs.gwiToast.show({
      title: '登录成功',
      type: 'success',
      position: 'bottom'
    })
  }
}
</script>