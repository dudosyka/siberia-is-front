<script lang="ts">
import { RouterView } from "vue-router";
import TokenUtil from "@/utils/token.util";
import Toast from "primevue/toast"
import ApiModelUtil from "@/utils/api-model.util";

export default {
  components: { RouterView, Toast },
  created() {
    if (TokenUtil.isAuthorized()) new ApiModelUtil("").initSockets(this.$toast);
  },
};
</script>

<template>
  <Toast ref="toast" />
  <RouterView />
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-button {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  background: #9B9A9A;
  border: 0px solid #FFFFFF;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9B9A9A;
}

::-webkit-scrollbar-thumb:active {
  background: #9B9A9A;
}

::-webkit-scrollbar-track {
  background: #DFE9EB;
  border: 0px solid #FFFFFF;
  border-radius: 5px;
}

::-webkit-scrollbar-track:hover {
  background: #B8C0C2;
}

::-webkit-scrollbar-track:active {
  background: #B8C0C2;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
.p-dropdown-panel {
  width: 30rem;
}

#app {
  width: 100vw !important;
  overflow: hidden;
  height: 100vh;
  padding: 0 !important;
  display: flex;
}
ul {
  margin-bottom: 0;
  padding-left: 0;
}
.p-inputtext {
  padding-top: 0.2rem !important;
  padding-bottom: 0.2rem !important;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.17);
  transition: all 0.3s ease-in-out;
}
.p-inputtext:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-multiselect:hover {
  border-bottom: 1px solid black;
}
.p-highlight {
  background-color: #ececec;
  color: black;
}
.p-checkbox .p-checkbox-box {
  border-color: #d0d0d0;
  background: #ffffff;
}
.p-checkbox-icon {
  color: black;
}
:deep(#product-name-input) {
  width: 100%;
  max-width: 50vw !important;
}
:deep(.p-dropdown-label) {
  padding-right: 0.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  width: 100%;
  max-width: fit-content;
}
:deep(.p-dropdown) {
  width: 100%;
  max-width: fit-content;
}
:deep(.p-dropdown-filter) {
  padding-right: 0.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.p-treeselect-label {
  padding: 0.2rem;
}
.utility-btn {
  height: 2rem;
  width: 100%;
  min-width: 4rem;
  max-width: max-content;
  font-weight: 800;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 7px;
}
.p-component-overlay {
  background-color: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px);
}
.p-dialog {
  border-radius: 29px !important;
  border: 2px solid #eee !important;
  background: #fff !important;
  width: 100%;
  max-width: 80vw !important;
  box-shadow: 0px 4px 28.3px 4px rgba(0, 0, 0, 0.06) !important;
}
.p-dialog-header {
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
}
.p-dialog-content {
  border-bottom-left-radius: 29px;
  border-bottom-right-radius: 29px;
}
.zalupa {
  width: 100%;
  max-width: 5rem;
}
.table-header {
  width: max-content !important;
  max-width: 10rem;
  display: flex;
}
.p-tabview-title {
  color: black;
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  border-color: black;
  background-color: #f6f6f6;
}
.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
  color: #121212;
}
.p-treeselect:not(.p-disabled):hover {
  border-color: #9a9a9a;
}
.p-treeselect {
  border: 0;
  border-radius: 8px;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0;
  background-color: #f9fafb;
  border-bottom: 1px solid rgba(55, 65, 81, 0.17);
}
.p-treeselect:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid black;
}
.p-multiselect {
  border: 0;
  border-radius: 8px;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0;
  background-color: #f9fafb;
  border-bottom: 1px solid rgba(55, 65, 81, 0.17);
}
.p-multiselect:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-multiselect:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-multiselect:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-multiselect-label {
  color: black;
  padding: 0.2rem;
}

.p-dropdown {
  border: 0;
  border-radius: 0;
  background-color: #f8f8f8;
  border-bottom: 1px solid #cecece;
}
.p-dropdown:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-dropdown:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-dropdown:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}

.text-area {
  border: 0;
  border-radius: 0;
  background-color: #f8f8f8;
  border-bottom: 1px solid #cecece;
  transition: all 0.3s ease-in-out;
}
.text-area:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.text-area:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.text-area:focus-within {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}

.p-dropdown-label {
  color: black;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #f9f9f9;
  border-color: white;
  background-color: black;
  transition: all 0.6s ease-in-out;
}
.accordion.accordion-borderless {
  padding-left: 0;
}
.accordion-borderless .accordion-item .accordion-button {
  padding: 0.6rem;
}
.accordion-button::after {
  margin: 0;
}
.accordion-button {
  width: 100%;
  transition: all 1s ease-in-out;
  max-width: max-content;
}
.p-scrollpanel .p-scrollpanel-bar {
  background: #dcdcdc;
}
.nav-link {
  text-align: left;
}
.accordion-item {
  width: 100% !important;
  border-bottom: 1px solid rgba(227, 227, 227, 0.49) !important;
}
.p-invalid {
  border-color: #e24c4c !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.p-inputgroup-addon {
  border: 0;
  background-color: #f8f8f8;
  border-bottom: 1px solid #cecece;
}
.p-tree
  .p-tree-container
  .p-treenode
  .p-treenode-content.p-highlight
  .p-tree-toggler,
.p-tree
  .p-tree-container
  .p-treenode
  .p-treenode-content.p-highlight
  .p-treenode-icon {
  color: #121221;
}
.p-treeselect:focus {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0) !important;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-treeselect:focus-visible {
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0) !important;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
}
.p-treeselect-label {
  color: black;
}
.p-toast,
.p-toast-top-right {
  top: 85px !important;
}
.p-treeselect-label {
  background-color: #f8f8f8;
  border-radius: 0;
  border: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: fit-content;
}
.p-dropdown {
  min-width: 15vw;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
}
.p-dropdown-label {
  border-bottom: 0!important;
}
</style>

<style scoped></style>
