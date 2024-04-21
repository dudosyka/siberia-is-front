import { defineStore } from "pinia";
import UserModel from "@/api/modules/user/models/user.model";
import UpdateUserDto from "@/api/modules/user/dto/update-user.dto";
import ApiResponseDto from "@/api/dto/api-response.dto";
import UserDto from "@/api/modules/user/dto/user.dto";
import LinkedRuleInputDto from "@/api/modules/rbac/dto/rules/linked-rule-input.dto";
import TokenUtil from "@/utils/token.util";
import ApiModelUtil from "@/utils/api-model.util";
import UserSearchFilterDto from "@/api/modules/user/dto/user-search-filter.dto";
import CreateUserDto from "@/api/modules/user/dto/create-user.dto";
import PrintUtil from "@/utils/localization/print.util";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    searchTerm: "",
    usersRows: [],
    usersColumns: [
      { field: "name", header: PrintUtil.localize("loginCapslock", "user") },
    ],
    selectedUser: {},
    userOnCreate: {},
  }),
  getters: {
    getSelectedUser: (state) => state.selectedUser,
    getUserList: (state) => state.usersRows,
    getSearchTerm: (state) => state.searchTerm,
  },
  actions: {
    async loadSelectedUser(id: number) {
      const userModel = new UserModel();
      const getUser = await userModel.getOne(id);
      if (getUser.success) {
        const userData = { ...getUser.getData() };
        const rules = await userModel.getUserRules(id);
        const roles = await userModel.getUserRoles(id);
        if (rules.success && roles.success) {
          this.selectedUser = {
            ...userData,
            roles: roles.getData(),
            rules: rules.getData(),
          };
        }
      }
      return getUser;
    },
    async loadUsersList(
      filters: UserSearchFilterDto = new UserSearchFilterDto(),
    ) {
      const userModel = new UserModel();
      const getUsers = await userModel.getAll(filters);
      if (getUsers.success) {
        this.usersRows = getUsers.getData();
      } else {
        this.usersRows = [];
      }
      return getUsers;
    },
    async updateUser(
      userId: number,
      userUpdateDto: UpdateUserDto,
    ): ApiResponseDto<UserDto> {
      const userModel = new UserModel();
      if (userUpdateDto.name != null)
        this.usersRows = this.usersRows.map((el) => {
          if (el.id == userId) el.name = userUpdateDto.name;

          return el;
        });
      const saveResult = await userModel.update(userId, userUpdateDto);
      if (saveResult.success) {
        this.selectedUser = Object.assign(
          this.selectedUser,
          saveResult.getData(),
        );
      }
      return saveResult;
    },
    async remove(userId: number) {
      const userModel = new UserModel();
      return await userModel.remove(userId);
    },
    async create(createUserDto: CreateUserDto) {
      const userModel = new UserModel();
      return await userModel.create(createUserDto);
    },
    async updateIfCurrent(userId: number) {
      if (userId == TokenUtil.getAuthorizedId()) {
        await ApiModelUtil.refreshInterface();
      }
    },
    async appendRule(userId: number, rules: LinkedRuleInputDto[]) {
      const userModel = new UserModel();
      const res = await userModel.appendRules(userId, rules);
      await this.updateIfCurrent(userId);
      return res;
    },
    async removeRule(userId: number, rules: LinkedRuleInputDto[]) {
      const userModel = new UserModel();
      const res = await userModel.removeRulesFromUser(userId, rules);
      await this.updateIfCurrent(userId);
      return res;
    },
    async removeRoles(userId: number, roles: number[]) {
      const userModel = new UserModel();
      const res = await userModel.removeRolesFromUser(userId, roles);
      await this.updateIfCurrent(userId);
      return res;
    },
    async appendRoles(userId: number, roles: number[]) {
      const userModel = new UserModel();
      const res = await userModel.appendRoles(userId, roles);
      await this.updateIfCurrent(userId);
      return res;
    },
  },
});
