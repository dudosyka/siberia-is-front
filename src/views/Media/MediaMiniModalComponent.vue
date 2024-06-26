<template>
  <Dialog
    v-model:visible="mediaModalStore.miniGalleryVisible"
    modal
    :header="localize('mediaGallery')"
    :style="{ width: '80vw' }"
  >
    <ScrollPanel
      style="width: 75vw"
      class="main-area animate__animated animate__fadeIn"
    >
      <div class="card">
        <DataView :paginator="true" :rows="12" :value="items" :layout="layout">
          <template #header>
            <div
              class="d-flex justify-content-between align-items-center position-sticky header"
            >
              <div
                class="d-flex flex-row justify-center align-content-center align-self-center align-items-center gap-2"
              >
                <Checkbox
                  v-model="checked"
                  @change="toggleAll"
                  :binary="true"
                />
                <Button
                  disabled
                  @click="setSelected"
                  class="btn btn-outlined btn-black utility-btn"
                  >{{ localize("upload") }}</Button
                >
                <SearchComponent
                  class="search"
                  v-model="mediaStore.searchTerm"
                />
              </div>
              <div class="d-flex flex-column justify-center"></div>
              <DataViewLayoutOptions v-model="layout" />
            </div>
          </template>

          <template #list="slotProps">
            <div class="row animate__animated animate__fadeIn">
              <div
                v-for="(image, index) in slotProps.items"
                :key="index"
                class="col-12"
              >
                <div
                  class="d-flex flex-column list-row flex-sm-row align-items-center p-4 gap-3"
                >
                  <Checkbox v-model="image.selected" :binary="true" />
                  <div @click="selectByOverlay(image)" class="image-container">
                    <img
                      class="media-image-list mx-auto d-block"
                      :src="getUrl(image.url)"
                      :alt="image.name"
                    />
                    <div class="overlay">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye"
                      >
                        <path
                          d="M5.5 12.5L10.167 17L19.5 8"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="d-flex flex-row flex-grow-1 gap-4">
                    <div class="d-flex flex-column justify-center col-4">
                      <h5 class="m-0 heading-list">
                        {{ localize("fileName") }}
                      </h5>
                      <p class="text-muted m-0">{{ image.name }}</p>
                    </div>
                    <!--div class="d-flex flex-column col-2 justify-center">
                      <h5 class="heading-list m-0">USED FOR</h5>
                      <p class="text-muted m-0">Product #1</p>
                    </div-->
                    <div class="d-flex flex-column col-2 justify-center">
                      <Button
                        @click="removeImage(image)"
                        class="btn btn-success utility-btn"
                        >{{ localize("select") }}</Button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="row animate__animated animate__fadeIn">
              <div
                v-for="(image, index) in slotProps.items"
                :key="index"
                class="col-12 col-sm-6 col-md-4 col-xl-3 p-2"
              >
                <div class="p-4 border rounded d-flex flex-column image-col">
                  <div @click="selectByOverlay(image)" class="image-container">
                    <img
                      class="img-fluid media-image"
                      :src="getUrl(image.url)"
                      :alt="image.name"
                    />
                    <div class="overlay">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye"
                      >
                        <path
                          d="M5.5 12.5L10.167 17L19.5 8"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="pt-4">
                    <div class="d-flex flex-row mt-1 align-items-center gap-2">
                      <Checkbox
                        @change="setSelected"
                        v-model="image.selected"
                        :binary="true"
                      />
                      <h5 class="m-0 heading-list">{{ image.name }}</h5>
                      <!--                        <p class="text-muted m-0">{{ image.url }}</p>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </ScrollPanel>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataView from "primevue/dataview";
import Image from "primevue/image";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Button from "primevue/button";
import Tag from "primevue/tag";
import Dialog from "primevue/dialog";
import ScrollPanel from "primevue/scrollpanel";
import SearchComponent from "@/components/Inputs/SearchComponent.vue";
import SelectComponent from "@/components/Elements/Selectors/SelectComponent.vue";
import Checkbox from "primevue/checkbox";
import FileUploadModalComponent from "@/components/Inputs/FileUploadModalComponent.vue";
import MediaModalComponent from "@/views/Media/MediaModalComponent.vue";
import { useMediaStore } from "@/stores/media.store.ts";
import LoggerUtil from "@/utils/logger/logger.util.ts";
import FilesResolverUtil from "@/utils/files-resolver.util.ts";
import { useProductsStore } from "@/stores/products.store";
import { useMediaModalStore } from "@/stores/media-modal.store";
import PrintUtil from "@/utils/localization/print.util";

export default defineComponent({
  name: "MediaMiniModalComponent",
  components: {
    SearchComponent,
    Button,
    Dialog,
    ScrollPanel,
    DataView,
    Image,
    DataViewLayoutOptions,
    Tag,
    SelectComponent,
    Checkbox,
    FileUploadModalComponent,
    MediaModalComponent,
    LoggerUtil,
    FilesResolverUtil,
  },
  data() {
    return {
      checked: false,
      uploadVisible: false,
      sortOrder: null,
      filters: null,
      layout: "grid",
      showUpload: false,
    };
  },
  emits: ["selected"],
  async setup() {
    const mediaStore = useMediaStore();
    const mediaModalStore = useMediaModalStore();

    return {
      mediaStore,
      mediaModalStore,
      loadRes: await mediaStore.loadGallery(),
    };
  },
  async created() {
    this.mediaModalStore.$onAction((action) => {
      if (action.name == "showGallery") {
        this.refreshSelected();
        LoggerUtil.debug(
          "REFRESH",
          this.mediaModalStore.miniGallerySelected,
          this.items,
        );
      }
    });
    this.refreshSelected();
    this.loadRes.toastIfError(this.$toast, this.$nextTick);
  },
  methods: {
    localize(key: string, module: string = "media") {
      return PrintUtil.localize(key, module);
    },
    refreshSelected() {
      this.mediaStore.galleryItems = this.mediaStore.galleryItems.map((el) => {
        if (this.mediaModalStore.miniGallerySelected.includes(el.id))
          return {
            ...el,
            selected: true,
          };
        else return { ...el, selected: false };
      });
    },
    getUrl(image) {
      return FilesResolverUtil.getStreamUrl(image);
    },
    selectByOverlay(image) {
      image.selected = !image.selected;
      this.setSelected();
    },
    async removeImage(image) {
      const removeRes = await this.mediaStore.removeImage(image.id);

      if (removeRes.success) {
        this.$toast.add({
          severity: "info",
          summary: PrintUtil.localize("Success", "assortment"),
          detail: `${PrintUtil.localize("file", "media")} '${image.name}' ${PrintUtil.localize("media", "removedOne")}`,
          life: 3000,
        });
      } else removeRes.toastIfError(this.$toast, this.$nextTick);
    },
    async setSelected() {
      this.mediaModalStore.miniGallerySelected = this.items
        .filter((el) => el.selected)
        .map((el) => ({
          id: el.id,
          url: el.url,
        }));
      // this.mediaModalStore.miniGalleryVisible = false;
      this.$emit("selected");
    },
    toggleAll() {
      this.mediaStore.toggleAll(this.checked);
    },
  },
  computed: {
    items() {
      if (this.mediaStore.searchTerm != "")
        return this.mediaStore.galleryItems.filter((el) => {
          LoggerUtil.debug(el);
          return Object.values(el).some((value) => {
            LoggerUtil.debug(
              String(value)
                .toLowerCase()
                .includes(this.mediaStore.searchTerm.toLowerCase()),
            );
            return String(value)
              .toLowerCase()
              .includes(this.mediaStore.searchTerm.toLowerCase());
          });
        });
      else return this.mediaStore.galleryItems;
    },
  },
});
</script>

<style scoped>
.product-list-item,
.product-grid-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-list-item img,
.product-grid-item img {
  width: 100px;
  margin-right: 20px;
}
.media-image {
  //width: 300px;
  //border-radius: 8px;
  max-width: 100%; /* Максимальная ширина изображения */
  max-height: 100%; /* Максимальная высота изображения */
  object-fit: cover; /* Обеспечивает покрытие всей области контейнера, сохраняя пропорции */
  object-position: center; /* Центрирует изображение в контейнере */
}
.media-image-list {
  border-radius: 8px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}
.main-area {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: min(10vw, 16rem);
  height: min(10vw, 16rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.media-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition:
    all 0.3s ease-in-out,
    visibility 0s ease-in-out,
    opacity 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container:hover .overlay {
  visibility: visible;
  opacity: 1;
  cursor: pointer;
}

.image-container:hover .media-image {
  transform: scale(1.1);
}

/* SVG стили */
.feather-eye {
  stroke: white;
  transition:
    all 0.3s ease-in-out,
    visibility 0s ease-in-out,
    opacity 0.5s ease-in-out;
}
.list-row {
  border-bottom: 1px solid #efefef;
}
.p-dataview-header {
  position: sticky !important;
  top: 0 !important;
  z-index: 999999999 !important;
}
.heading-list {
  font-size: 0.8rem;
  font-weight: 800;
  width: 100%;
}
.search {
  width: 50vw;
  margin-bottom: 0 !important;
}
.p-inputtext {
  width: 100% !important;
}
.utility-btn {
  box-shadow: none !important;
}
.main-area {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.p-dataview .p-dataview-content {
  width: 83vw !important;
}
.p-selectbutton .p-button.p-highlight {
  background: #000000 !important;
  border-color: #000000 !important;
  color: #ffffff;
}
.p-button:focus {
  box-shadow:
    0 0 0 2px #ffffff,
    0 0 0 4px #000000,
    0 1px 2px 0 black !important;
}
.image-col {
  width: 15rem; /* фиксированная ширина колонки */
  height: 16rem; /* фиксированная высота колонки */
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border: 1px solid #bbbbbb;
}
.checkbox-inline {
}
</style>
