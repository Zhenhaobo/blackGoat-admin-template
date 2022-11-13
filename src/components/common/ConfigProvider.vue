<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot />
          <naive-provider-content />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang='ts' setup>
import { defineComponent, h } from 'vue'
import {useLoadingBar, useDialog, useNotification, useMessage,NLoadingBarProvider,NDialogProvider,NMessageProvider,NNotificationProvider } from 'naive-ui'

function configProviderInject(){
  window.$loadingBar = useLoadingBar()
  window.$useDialog = useDialog()
  window.$useNotification = useNotification()
  window.$useMessage = useMessage()
}

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',/*  */
  setup() {
    configProviderInject();
  },
  render(){
    return  h('div')
  }
});
</script>
<style scoped>

</style>
