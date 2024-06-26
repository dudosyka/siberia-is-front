<template>
  <MDBContainer class="storehouse-info d-flex flex-column gap-3">
    <MDBRow>
      <MDBCol class="d-flex flex-column col-4 gap-2">
        <h4 class="storehouse-heading">{{ localize("roleName", "role") }}</h4>
        <InputText
          :placeholder="namePlaceholder"
          class="input-wrapper animate__animated animate__fadeIn username-input"
          :class="{ 'p-invalid': !validate.name }"
          type="text"
          v-model="name"
        />
      </MDBCol> </MDBRow
    ><MDBRow>
      <MDBCol class="d-flex flex-column col-4 gap-2">
        <h4 class="storehouse-heading">
          {{ localize("roleDescription", "role") }}
        </h4>
        <Textarea
          :placeholder="descriptionPlaceholder"
          class="input-wrapper animate__animated animate__fadeIn username-input"
          :class="{ 'p-invalid': !validate.description }"
          type="text"
          v-model="description"
        />
      </MDBCol>
    </MDBRow>
    <MDBCol class="d-flex justify-content-start gap-2">
      <MDBBtn @click="cancelCreation" class="utility-btn" outline="black">{{
        localize("cancelCapslock")
      }}</MDBBtn>
      <MDBBtn @click="saveCreation" class="utility-btn btn-black">{{
        localize("createRoleCapslock", "role")
      }}</MDBBtn>
    </MDBCol>
    <MDBContainer>
      <Panel :header="localize('rolePermissions', 'role')">
        <TabsComponent :creation-mode="true" :roles="[roles]" />
      </Panel>
    </MDBContainer>
  </MDBContainer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-vue-ui-kit";
import TabsComponent from "@/components/Inputs/TabsComponent.vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/inputtext";
import { useUsersStore } from "@/stores/user.store";
import { useRolesStore } from "@/stores/roles.store";
import { useRoute, useRouter } from "vue-router";
import UserFullDto from "@/api/modules/user/dto/user-full.dto";
import PrintUtil from "@/utils/localization/print.util";
import ValidatorUtil from "@/utils/validator/validator.util";
import ValidateRule from "@/utils/validator/validate-rule";
import Panel from "primevue/panel";
import { create } from "axios";

export default defineComponent({
  name: "CreateRole",
  components: {
    MDBCol,
    TabsComponent,
    MDBRow,
    MDBContainer,
    MDBBtn,
    InputText,
    Textarea,
    Panel,
  },
  data() {
    return {
      name: "",
      description: "",
      namePlaceholder: this.localize("enterARoleName", "role"),
      descriptionPlaceholder: this.localize("enterARoleDescription", "role"),
      roles: {
        id: 1,
        name: this.localize("rules", "role"),
        relatedUsersCount: 0,
        description: this.localize("rulesForNewRole", "role"),
        rules: [],
        canChange: true,
      },
      //true => no errors
      validate: {
        name: true,
        description: true,
      },
      validator: new ValidatorUtil(),
    };
  },
  async setup() {
    const rolesStore = useRolesStore();
    const router = useRouter();

    return {
      rolesStore,
      router,
    };
  },
  created() {
    const nameValidateRule = new ValidateRule().required();
    const descriptionValidateRule = new ValidateRule().required();
    this.validator = this.validator
      .addRule("name", nameValidateRule)
      .addRule("description", descriptionValidateRule);
  },
  methods: {
    clearValidationErrors() {
      this.validate = {
        name: true,
        description: true,
      };
    },
    showSuccessToast() {
      this.$toast.add({
        severity: "success",
        summary: this.localize("success", "storehouses"),
        detail: this.localize("roleIsCreated", "role"),
        life: 3000,
      });
    },
    localize(key, module = "default") {
      return PrintUtil.localize(key, module);
    },
    async saveCreation() {
      this.clearValidationErrors();
      const data = {
        name: this.name,
        description: this.description,
      };
      const validateRes = this.validator.validate(data);
      if (validateRes !== true) {
        this.validator.showErrorToast(this.$toast);
        this.validate = validateRes;
        return;
      }
      const created = await this.rolesStore.create(this.name, this.description);
      if (created.success) {
        this.showSuccessToast();
        this.router.push({
          name: "Role",
          params: { id: created.getData().id.toString() },
        });
      } else {
        created.toastIfError(this.$toast, this.$nextTick);
      }
    },
    cancelCreation() {
      this.clearValidationErrors();
      this.router.push({ name: "roles" });
    },
  },
});
</script>
<style scoped>
.utility-btn {
  max-width: 10.5rem;
}
:deep(.p-panel-content) {
  padding: 0;
}
.span {
  color: #6c6c6c;
  margin-right: 1rem;
}
</style>
