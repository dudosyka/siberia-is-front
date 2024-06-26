<template>
  <div>
    <Button
      type="button"
      class="icon-bg d-flex justify-content-center align-items-center"
      icon="pi pi-image"
      label="Image"
      @click="toggle"
    >
      <IconBellFilled color="#B8B8B8" :size="24" stroke-width="1" />
    </Button>
    <OverlayPanel
      class="notification-body"
      @update:visible="handleOverlayUpdate"
      ref="op"
    >
      <MDBContainer class="noti-container overflow-y-scroll">
        <NotificationMessageComponent
          :op="op"
          @close="handleNotificationClose"
          :messages="notificationMessages"
        />
      </MDBContainer>
      <MDBRow class="footer-row">
        <MDBBtn
          @click="clearAllMessages"
          class="btn-black"
          :disabled="notificationMessages.length === 0"
        >
          {{ localize("clearAllNotifications") }}
        </MDBBtn>
      </MDBRow>
    </OverlayPanel>
  </div>
</template>

<script lang="ts">
import { IconBell, IconBellFilled, IconRoute } from "@tabler/icons-vue";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBRow,
} from "mdb-vue-ui-kit";
import OverlayPanel from "primevue/overlaypanel";
import Button from "primevue/button";
import Toast from "primevue/toast";
import NotificationMessageComponent from "@/components/Elements/Notification/NotificationMessageComponent.vue";
import PrintUtil from "@/utils/localization/print.util";

export default {
  name: "NotificationsComponent",
  components: {
    NotificationMessageComponent,
    IconRoute,
    IconBell,
    IconBellFilled,
    MDBRow,
    MDBContainer,
    MDBBtn,
    OverlayPanel,
    Button,
    Toast,
  },
  data() {
    return {
      op: null,
      notificationMessages: [
        {
          severity: "success",
          summary: this.localize("successNotiHeading", "components"),
          text: this.localize("successNotiText", "components"),
          date: "2022-01-01",
        },
        {
          severity: "info",
          summary: this.localize("infoNotiHeading", "components"),
          text: this.localize("infoNotiHeading", "components"),
          date: "2022-01-01",
        },
        {
          severity: "error",
          summary: this.localize("errorNotiHeading", "components"),
          text: this.localize("errorNotiText", "components"),
          date: "2022-01-01",
        },
        {
          severity: "error",
          summary: this.localize("errorNotiHeading", "components"),
          text: this.localize("errorNotiText", "components"),
          date: "2022-01-01",
        },
        {
          severity: "error",
          summary: this.localize("errorNotiHeading", "components"),
          text: this.localize("errorNotiText", "components"),
          date: "2022-01-01",
        },
        {
          severity: "error",
          summary: this.localize("errorNotiHeading", "components"),
          text: this.localize("errorNotiText", "components"),
          date: "2022-01-01",
        },
      ],
    };
  },
  watch: {
    notificationMessages: {
      handler(newMessages) {
        if (newMessages.length === 0) {
          this.clearAllMessages();
        }
      },
      deep: true, // следим за изменениями внутри массива
      immediate: true,
    },
  },
  methods: {
    localize(key, module = "components") {
      return PrintUtil.localize(key, module);
    },
    handleNotificationClose(closedMessage) {
      // Удалить закрытое уведомление из массива
      this.notificationMessages = this.notificationMessages.filter(
        (message) => message !== closedMessage,
      );

      // Проверить, есть ли еще открытые уведомления
      if (this.notificationMessages.length === 0) {
        this.clearAllMessages();
      }
    },
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    handleOverlayUpdate(visible) {
      if (!visible && this.$refs.op.$el) {
        const opWidth = this.$refs.op.$el.offsetWidth;
        if (opWidth < 300) {
          this.clearAllMessages();
        }
      }
    },
    showNotification() {
      this.$refs.toast.add({
        severity: "info",
        summary: "Cleared Notifications",
        detail: "All notifications have been cleared.",
        life: 3000,
      });
    },
    clearAllMessages() {
      if (this.notificationMessages.length > 0) {
        this.notificationMessages = [];
        this.$refs.op.hide();
        this.showNotification();
      }
    },
  },
};
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.dropdown-bg {
  background-color: white;
  width: max-content;
  padding: 1rem;
  height: 100%;
  min-height: 30rem;
}
.notification-body {
  border-radius: 0.5rem;
  padding: 1rem;
}
.notification-text {
  margin-bottom: 0;
}
.dropdown-main {
  height: 100%;
  min-height: 80vh;
}
.icon-bg {
  width: 50px;
  height: 50px;
  border: 2px solid #eeeeee;
  border-radius: 50%;
  padding: 0;
  box-shadow: none;
  background-color: white;
}
.utility-btn {
  height: auto;
  width: 100%;
  min-width: 4rem;
  max-width: 4.5rem;
  font-weight: 800;
  max-height: 2rem;
  padding-left: 2px;
  padding-right: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 7px;
}
.noti-container {
  max-height: 30rem;
}
.notification-body {
  width: 100%;
  min-width: 30rem;
}
:deep(.p-overlaypanel) {
  width: 100%;
  min-width: 30rem !important;
}
</style>
