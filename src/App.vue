<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    class="wh-full"
  >
    <YJ-config-provider />
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider} from 'naive-ui'
import { YJConfigProvider }  from '@/components/common'
import { useThemeStore } from '@/store'
const theme = useThemeStore()
console.log('theme: ', theme.naiveTheme);
</script>
<style scoped>
</style>
