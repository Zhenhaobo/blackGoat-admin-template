<template>
  <n-config-provider
    :theme="theme"
    class="wh-full"
  >
    <YJ-config-provider>

    </YJ-config-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NConfigProvider} from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { YJConfigProvider }  from '@/components/common'
const theme = ref<GlobalTheme | null>(null)
</script>
<style scoped>
</style>
