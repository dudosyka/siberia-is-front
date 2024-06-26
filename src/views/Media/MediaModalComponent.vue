<template>
  <Dialog
    v-model:visible="mediaModalStore.imageOpen"
    modal
    :style="{ width: 'max-content' }"
    :header="localize('imageDetails')"
  >
    <div class="d-flex flex-row gap-5">
      <div class="flex flex-column col-auto w-50 photo-col">
        <div class="container image-cont">
          <img
            :src="getUrl(image.url)"
            :alt="image.name"
            class="media-image-full"
          />
        </div>
      </div>
      <div class="d-flex flex-column justify-center items-center mt-3">
        <div class="d-flex flex-row justify-content-start pl-3">
          <div class="d-flex flex-col flex-grow-1 text-col">
            <h5 class="m-0 heading-list">{{ image.name }}</h5>
            <!--            <p class="text-muted m-0">{{ image.url }}</p>-->
            <InputText
              v-model="image.name"
              v-if="editMode"
              :placeholder="localize('mediaNamePlaceholder')"
            />
            <!--div class="d-flex flex-column justify-center">
            <h5 class="heading-list m-0">USED FOR</h5>
            <p class="text-muted m-0">Product #1</p>
          </div>
          <div class="d-flex flex-column justify-center">
            <h5 class="heading-list m-0">DATE</h5>
            <p class="text-muted m-0">24/24/24</p>
          </div-->
          </div>
        </div>
        <h5 class="heading-list m-0">{{ localize("description") }}</h5>
        <p v-if="!editMode" class="text-muted m-0">
          {{ image.description || "-" }}
        </p>
        <Textarea
          v-if="editMode"
          class="text-area"
          :placeholder="localize('descriptionPlaceholder')"
          v-model="image.description"
        ></Textarea>
        <div
          v-if="!editMode"
          class="d-flex flex-row justify-content-start gap-2 mt-3"
        >
          <Button
            @click="startEdit"
            class="btn btn-outline-black utility-btn"
            >{{ localize("edit") }}</Button
          >
          <Button @click="removeImage" class="btn btn-danger utility-btn">{{
            localize("delete")
          }}</Button>
        </div>
        <div
          v-if="editMode"
          class="d-flex flex-row justify-content-start gap-2 mt-3"
        >
          <Button
            @click="cancelEdit"
            class="btn btn-outline-black utility-btn"
            >{{ localize("cancelCapslock") }}</Button
          >
          <Button @click="saveEdit" class="btn btn-success utility-btn">{{
            localize("save")
          }}</Button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { useMediaModalStore } from "@/stores/media-modal.store";
import FilesResolverUtil from "@/utils/files-resolver.util";
import { useMediaStore } from "@/stores/media.store";
import ValidatorUtil from "@/utils/validator/validator.util";
import ValidateRule from "@/utils/validator/validate-rule";
import GalleryUpdateDto from "@/api/modules/gallery/dto/gallery-update.dto";
import PrintUtil from "@/utils/localization/print.util";
import LoggerUtil from "@/utils/logger/logger.util";

export default {
  name: "MediaModalComponent",
  components: {
    Dialog,
    InputText,
    Textarea,
    Button,
  },
  data: () => ({
    editMode: false,
    validator: new ValidatorUtil(),
    imageCopy: {},
  }),
  setup() {
    const mediaModalStore = useMediaModalStore();
    const mediaStore = useMediaStore();

    return {
      mediaModalStore,
      mediaStore,
    };
  },
  created() {
    const nameValidateRule = new ValidateRule().required();
    const descriptionValidateRule = new ValidateRule().skipIfNull().required();
    const validator = this.validator
      .addRule("name", nameValidateRule)
      .addRule("description", descriptionValidateRule);
  },
  methods: {
    localize(key: string, module: string = "media") {
      return PrintUtil.localize(key, module);
    },
    startEdit() {
      this.editMode = true;
      this.imageCopy = { ...this.image };
    },
    async removeImage() {
      const removeRes = await this.mediaStore.removeImage(this.image.id);

      if (removeRes.success) {
        this.$toast.add({
          severity: "info",
          summary: PrintUtil.localize("success", "operations"),
          detail: `${PrintUtil.localize("file", "media")} '${this.image.name}' ${PrintUtil.localize("removedOne", "media")}`,
          life: 3000,
        });
        this.editMode = false;
        this.mediaModalStore.imageOpen = false;
      } else removeRes.toastIfError(this.$toast, this.$nextTick);
    },
    cancelEdit() {
      this.editMode = false;
      this.mediaModalStore.selectedImage = { ...this.imageCopy };
    },
    async saveEdit() {
      const updateImageDto = new GalleryUpdateDto(
        this.image.name,
        this.image.description,
      );

      const validateRes = this.validator.validate(updateImageDto);
      if (validateRes !== true) {
        this.validate = validateRes;
        this.validator.showErrorToast(this.$toast);
        return;
      }

      const updateRes = await this.mediaStore.updateImage(
        this.image.id,
        updateImageDto,
      );

      if (updateRes.success) {
        this.$toast.add({
          severity: "info",
          summary: PrintUtil.localize("success", "operations"),
          detail: `${PrintUtil.localize("file", "media")} '${this.image.name}' ${PrintUtil.localize("updated", "media")}`,
          life: 3000,
        });
        this.editMode = false;
        this.imageCopy = { ...this.image };
      } else updateRes.toastIfError(this.$toast, this.$nextTick);
    },
    getUrl() {
      return FilesResolverUtil.getStreamUrl(this.image.url);
    },
  },
  computed: {
    image() {
      return this.mediaModalStore.selectedImage;
    },
  },
};
</script>

<style scoped>
.media-image-full {
  width: 100%;
}
.image-cont {
  padding: 0;
  margin: 0;
  border: 10px solid black;
  position: relative;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-col {
  display: flex;
  justify-content: center;
}
.text-col {
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: start !important;
}
.p-dialog {
}
.text-area {
  min-height: 5rem;
}
</style>
