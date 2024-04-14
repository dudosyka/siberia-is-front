<template>
  <div class="tabs-row d-flex flex-row">
    <template v-for="tab in getTabs">
      <div
        class="tab-item"
        :class="{ active: isActive(tab.id) }"
        @click="tabClicked(tab)"
      >
        {{ tab.label }}
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNavTabsStore } from "@/stores/nav-tabs.store";
import NavTabDto from "@/router/dto/nav-tab.dto";
import { useRouter } from "vue-router";

export default {
  name: "TabsNavComponent",
  setup() {
    const navTabsStore = useNavTabsStore();
    const router = useRouter();

    return {
      navTabsStore,
      router,
    };
  },
  methods: {
    isActive(id: number) {
      return this.navTabsStore.getActive.id === id;
    },
    tabClicked(tab: NavTabDto) {
      if (tab.callback) {
        tab.callback();
      } else if (tab.route) {
        this.router.push({ ...tab.route.toVueRoute() });
      }
    },
  },
  computed: {
    getTabs() {
      return this.navTabsStore.tabsList;
    },
  },
};
</script>

<style scoped>
.tabs-row {
  width: 100%;
  border-bottom: 1px solid #dedede;
  transition: all 0.3s ease-in-out;
}
.tab-item {
  padding: 1rem;
  font-weight: 600;
  border-bottom: 1px solid #dedede;
  transition: all 0.3s ease-in-out;
}
.tab-item:hover {
  color: black;
  border-bottom: 1px solid black;
  transition:
    all 0.3s ease-in-out,
    border-color 1s ease;
  cursor: pointer;
}
.active {
  border-bottom: 1px solid black;
  color: black;
  background-color: #f6f6f6;
  transition: all 0.3s ease-in-out;
}
</style>