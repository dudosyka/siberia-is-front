<template>
  <div class="container-fluid" style="padding: 0">
    <template v-if="!isIdProvided">
      <MDBContainer class="d-flex container-content">
        <!--        <MDBCol class="col-auto">-->
        <!--          <FiltersSidebarComponent @start-search="handleFiltersSearch" />-->
        <!--        </MDBCol>-->
        <MDBCol class="col-auto">
          <SearchComponent class="search" @search="handleSearch" />
          <TableComponent
            :infoMessage="noDataMessage"
            :rows="filteredUsers"
            :columns="usersStore.usersColumns"
            :searchTerm="usersStore.searchTerm"
            @rowClick="handleRowClick"
          />
        </MDBCol>
      </MDBContainer>
    </template>
  </div>
  <Suspense>
    <router-view v-if="isIdProvided" :id="routeIdParam" />
  </Suspense>
</template>

<script lang="ts">
import TableComponent from "@/components/Elements/Tables/TableComponent.vue";
import SearchComponent from "@/components/Inputs/SearchComponent.vue";
import { useRoute, useRouter } from "vue-router";
import { useUsersStore } from "@/stores/user.store";
import { MDBCol, MDBContainer } from "mdb-vue-ui-kit";
import FiltersSidebarComponent from "@/components/Elements/Filter sidebar/FiltersSidebarComponent.vue";
import { FilterType } from "@/api/conf/app.conf";
import { useToast } from "primevue/usetoast";
import loggerUtil from "@/utils/logger/logger.util";
import PrintUtil from "@/utils/localization/print.util";
import { useFiltersStore } from "@/stores/filters.store";

export default {
  name: "UsersView",
  components: {
    MDBCol,
    FiltersSidebarComponent,
    MDBContainer,
    SearchComponent,
    TableComponent,
  },
  data() {
    return {
      noDataMessage: {
        icon: "IconSearchOff",
        title: this.localize("nothingWasFound"),
        text: this.localize("pleaseClarifyYourSearchQuery", "role"),
      },
    };
  },
  async setup() {
    const usersStore = useUsersStore();
    const filtersStore = useFiltersStore();
    const route = useRoute();
    const router = useRouter();

    const loaders = await Promise.all([usersStore.loadUsersList()]);
    return {
      filtersStore,
      usersStore,
      router,
      route,
      loaders,
    };
  },
  mounted() {
    this.loaders.forEach((el) => el.toastIfError(this.$toast, this.$nextTick));
    this.filtersStore.setFilters({
      name: {
        title: this.localize("name"),
        type: FilterType.TEXT,
        value: null,
      },
      login: {
        title: this.localize("login"),
        type: FilterType.TEXT,
        value: null,
      },
    });
  },
  computed: {
    filtersInput() {
      return this.filtersStore.getFilters;
    },
    filteredUsers() {
      const searchTerm = this.usersStore.getSearchTerm;
      if (searchTerm.trim() === "") {
        return this.usersStore.getUserList;
      } else {
        return this.usersStore.getUserList.filter((row) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        );
      }
    },
    routeIdParam() {
      return parseInt(this.route.params.id.toString());
    },
    isIdProvided() {
      return !!this.route.params.id;
    },
  },
  methods: {
    localize(key, module = "user") {
      return PrintUtil.localize(key, module);
    },
    handleSearch(searchTerm) {
      this.usersStore.searchTerm = searchTerm;
    },
    async handleFiltersSearch(filter) {
      const res = await this.usersStore.loadUsersList(filter);
      res.toastIfError(this.$toast, this.$nextTick);
    },
    handleRowClick(row) {
      this.router.push({ name: "User", params: { id: row.id.toString() } });
    },
  },
};
</script>

<style scoped>
.search {
  width: 84vw;
}
</style>
