<template>
  <MDBContainer class="d-flex flex-column align-items-center sidebar-bg">
    <img alt="logo" class="logo" src="../../assets/logo.svg" />
    <MDBCol
      class="sidebar-item-group d-flex justify-content-center align-items-center flex-column"
    >
      <router-link
        v-for="(item, index) in sidebarItems"
        :key="index"
        :to="{ name: item.route }"
        class="sidebar-item"
        :class="{
          active: isRouteActive(item),
          inactive: !isRouteActive(item),
          disabled: item.disabled,
        }"
      >
        <div
          class="item-icon"
          :class="{
            active: isRouteActive(item),
            inactive: !isRouteActive(item),
            disabled: item.disabled,
          }"
        >
          <component
            :is="item.icon"
            :color="item.iconColor"
            :size="item.iconSize"
            :stroke-width="item.strokeWidth"
          />
        </div>
        <span
          :class="{
            'item-name': true,
            active: isRouteActive(item),
            inactive: !isRouteActive(item),
            disabled: item.disabled,
          }"
          >{{ item.name }}</span
        >
      </router-link>
    </MDBCol>
  </MDBContainer>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdb-vue-ui-kit";
import {
  IconDashboard,
  IconPackages,
  IconLock,
  IconBuildingWarehouse,
  IconUsersGroup,
  IconLogout2,
  IconUser,
  IconPhoto,
} from "@tabler/icons-vue";
import TokenUtil from "@/utils/token.util";
import LangSelectComponent from "@/components/Elements/Profile/LangSelectComponent.vue";
import NotificationSocketModel from "@/api/modules/notification/models/notification-socket.model";

export default {
  name: "SidebarComponent",
  components: {
    LangSelectComponent,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    IconPackages,
    IconLock,
    IconBuildingWarehouse,
    IconUsersGroup,
    IconLogout2,
    IconUser,
    IconDashboard,
    IconPhoto,
  },
  props: {
    sidebarItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    return {
      route,
      router,
    };
  },
  methods: {
    isRouteActiveRecursive(currentRoute, item) {
      if (item.match.includes(currentRoute.name)) {
        return true;
      }

      if (
        currentRoute.matched &&
        currentRoute.matched.some((record) => item.match.includes(record.name))
      ) {
        return true;
      }

      return (
        currentRoute.matched &&
        currentRoute.matched.some((record) =>
          this.isRouteActiveRecursive(record, item),
        )
      );
    },
    isRouteActive(item) {
      return this.isRouteActiveRecursive(this.route, item);
    },
    logout() {
      TokenUtil.logout();
      NotificationSocketModel.close();
      this.router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  transition: all 0.3s ease-in-out;
}
.sidebar-bg {
  background-color: #fcfcfc;
  border-right: 2px solid #eeeeee;
  height: 100vh;
  position: fixed;
  left: 0;
  width: 100%;
  max-width: 10vw;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.logo {
  width: 100%;
  max-width: 70px;
}
.item-icon {
  border-radius: 50%;
  border: 2px solid #b8b8b8;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-icon.disabled {
  border-color: #e5e5e5;
}
.item-icon.active {
  background-color: black;
}
.item-name.active {
  color: black;
}
.disabled {
  color: #e5e5e5;
}
.inactive {
  color: #b8b8b8;
}
.sidebar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.sidebar-item:hover {
  cursor: pointer;
}
.sidebar-item-group {
  gap: 1rem;
}
.logout {
  color: black;
}
</style>
