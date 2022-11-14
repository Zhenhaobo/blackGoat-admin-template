import type {App} from 'vue';
import YJConfigProvider from './ConfigProvider.vue';
import {create, NButton, NGradientText} from 'naive-ui';


export { YJConfigProvider }

const naive = create({
  components:[ NButton, NGradientText ]
})
export function setupNaiveModule(app: App){
  app.use(naive)
}
