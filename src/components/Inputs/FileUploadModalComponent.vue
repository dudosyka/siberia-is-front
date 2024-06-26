<template>
  <FileUpload
    name="demo[]"
    customUpload
    @uploader="uploader"
    :multiple="true"
    :accept="accept"
    :maxFileSize="100000000"
  >
    <template #empty>
      <p>{{ localize("dragAndDrop") }}</p>
    </template>
  </FileUpload>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileUpload from "primevue/fileupload";
import LoggerUtil from "@/utils/logger/logger.util";
import { useMediaStore } from "@/stores/media.store";
import { useMediaModalStore } from "@/stores/media-modal.store";
import { useProductsStore } from "@/stores/products.store";
import PrintUtil from "@/utils/localization/print.util";
import { usePrimeVue } from "primevue/config";
import ProductInputDto from "@/api/modules/product/dto/product-input.dto";
import ApiResponseDto from "@/api/dto/api-response.dto";

export default defineComponent({
  name: "FileUploadModalComponent",
  components: { FileUpload },
  props: {
    products: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    accept: "image/*",
  }),
  setup() {
    const primeVue = usePrimeVue();
    primeVue.config.locale.cancel = PrintUtil.localize("cancel", "media");
    primeVue.config.locale.choose = PrintUtil.localize("choose", "media");
    primeVue.config.locale.upload = PrintUtil.localize("upload", "media");
  },
  created() {
    if (this.products) this.accept = "text/csv, .xlsx";
  },
  methods: {
    localize(key: string, module: string = "media") {
      return PrintUtil.localize(key, module);
    },
    uploader(event) {
      if (this.products) this.productUploader(event);
      else this.photoUploader(event);
    },
    isCsv(file: File) {
      const fileName = file.name;
      const ext = fileName.split(".")[fileName.split(".").length - 1];
      return ext == "csv";
    },
    productUploader: async function (event) {
      await Promise.all(
        event.files.map(async (file: File) => {
          const productsStore = useProductsStore();
          await new Promise(async (resolve) => {
            if (this.isCsv(file)) {
              resolve(await productsStore.uploadCsv(file));
            } else {
              resolve(await productsStore.uploadXls(file));
            }
          })
            .then(() => {
              this.$toast.add({
                severity: "info",
                summary: PrintUtil.localize("success", "operations"),
                detail: `${PrintUtil.localize("file", "media")} '${file.name}' ${PrintUtil.localize("uploaded", "media")}`,
                life: 3000,
              });
            })
            .catch(() => {
              this.$toast.add({
                severity: "error",
                summary: PrintUtil.localize("failed", "operations"),
                detail: `${PrintUtil.localize("badTemplate", "media")}`,
                life: 3000,
              });
            });
        }),
      );
    },
    async photoUploader(event) {
      await Promise.all(
        event.files.map(async (file) => {
          const reader = new FileReader();
          let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

          const base64Encoded = await new Promise<string>((resolve) => {
            reader.readAsDataURL(blob);

            reader.onloadend = function () {
              resolve(reader.result);
            };
          });

          const mediaStore = useMediaStore();
          const upload = await mediaStore.uploadFile(
            file,
            base64Encoded.split(",")[1],
          );

          if (upload.success) {
            LoggerUtil.debug(event);
            this.$toast.add({
              severity: "info",
              summary: PrintUtil.localize("success", "operations"),
              detail: `${PrintUtil.localize("file", "media")} '${file.name}' ${PrintUtil.localize("uploaded", "media")}`,
              life: 3000,
            });
          } else upload.toastIfError(this.$toast, this.$nextTick);
        }),
      );

      const modalStore = useMediaModalStore();
      modalStore.uploadOpen = false;
    },
  },
});
</script>

<style scoped>
:deep(.p-button) {
  background: transparent !important;
  border: 2px solid black !important;
  border-radius: 8px !important;
  color: black !important;
  height: 2rem !important;
}
</style>
