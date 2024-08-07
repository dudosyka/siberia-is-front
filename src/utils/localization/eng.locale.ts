export default {
  modules: {
    default: {
      userName: "User name",
      login: "Login",
      password: "Password",
      something_wrong: "Something went wrong. Please, contact administrator.",
      confirmDeletion: "Confirm deletion",
      errorMessageCopiedToClipboard: "Error message copied to clipboard",
      errorOccurred: "Error occurred",
      somethingWrong:
        "Something went wrong, provide this error code to administrator.",

      cancelCapslock: "CANCEL",
      editCapslock: "EDIT",
      deleteCapslock: "DELETE",
      createCapslock: "CREATE",
      saveCapslock: "SAVE",
      nameCapslock: "NAME",
      nothingFound: "Nothing was found",
      nothingFoundClarifyQuery: "Please clarify your search query.",
      rulesUpdatedToast: "Rules updated",
      rulesUpdatedToastDetails: "Your rules were updated by administrator",
      sessionExpired: "Session expired",
      sessionExpiredDetails: "Try to re-login",
      notSet: "Not set",
    },
    router: {
      panelName: "Siberia Panel",
      dashboard: "dashboard",
      assortments: "assortments",

      products: "products",
      NewProduct: "New Product",
      Product: "Product details",

      storehouses: "storehouses",
      NewStorehouse: "New Storehouse",
      Storehouse: "Storehouse",

      users: "users",
      NewUser: "New user",
      User: "User",

      roles: "roles",
      NewRole: "New role",
      Role: "Role",

      History: "History",
      SingleHistory: "Single history",

      Operations: "Operations",
      SingleOperation: "Single operation",

      Groups: "Groups",
      "Group details": "Group details",
      "Apply changes": "Apply changes",

      Media: "Media",

      "+ ADD": "+ ADD",
      UPLOAD: "UPLOAD",
    },
    sidebar: {
      //auth-check.store
      Dashboard: "Dashboard",
      Products: "Products",
      Assortments: "Assortments",
      Storehouses: "Storehouses",
      Users: "Users",
      Roles: "Roles",
      Media: "Media",
    },

    //HeaderComponent
    header: {
      History: "History",
      Operations: "Operations",
      OperationsCapslock: "OPERATIONS",
      Notifications: "Notifications",
      Profile: "Profile",
      AddBtnLabel: "+ Add",
    },
    auth: {
      bad_credentials:
        "This combination of login/password doesn’t exist. Please, check info provided or contact with your administrator.",
      error_empty_fields: "Login and password must not be blank.",
    },
    user: {
      //CreateUser.vue
      namePlaceholder: "Enter a real user's name",
      loginPlaceholder: "Create user login",
      passwordPlaceholder: "Create password",
      createUserCapslock: "CREATE USER",
      userIsCreated: "User is created",

      //SingleUserView.vue
      deleteWarn: "Are you sure you want to delete user",
      deleteDisclaimer:
        "This action cannot be undone, this user data will be lost",
      personalRules: "Personal rules",
      personalRulesDescription: "Rules which are related only to this user",
      userRolesCapslock: "USER ROLES",
      userNameCapslock: "USERNAME",
      userNameCapslockSpaced: "USER NAME",
      passwordCapslock: "PASSWORD",
      roleCapslock: "ROLE",
      userIsUpdated: "User is updated",
      deletionFailed: "Deletion failed",
      userNotFound: "User not found",
      editUserRoles: "Edit user roles",
      currentUser: "Current User",

      //UsersView.vue
      name: "Name",
      login: "Login",
      loginCapslock: "LOGIN",
      nothingWasFound: "Nothing was found",

      //ProfileComponent
      profileHeader: "Profile",
      logout: "Log out",
      removeUserManagingRule: "Are you sure you want to remove this rule?",
    },
    role: {
      //RolesView.vue
      nothingWasFound: "Nothing was found",
      pleaseClarifyYourSearchQuery: "Please clarify your search query",

      //roles.store
      roleNameCapslock: "ROLE NAME",
      relatedUsersCountCapslock: "USERS PER ROLE",

      //CreateRole.vue
      roleName: "Role name",
      roleDescription: "Role description",
      createRoleCapslock: "CREATE ROLE",
      enterARoleName: "Enter a role name",
      enterARoleDescription: "Enter a role description",
      rules: "Rules",
      rulesForNewRole: "Rules for new role",
      roleIsCreated: "Role is created",

      //SingleRoleView.vue
      relatedUsersCapslock: "RELATED USERS",
      deleteDisclaimer:
        "This action cannot be undone, this role data will be lost",
      deleteWarn: "Are you sure you want to delete role",
      roleDescriptionCapslock: "ROLE DESCRIPTION",
      editRelatedUsers: "Edit related users",
      rolePermissions: "Role permissions",
      roleIsUpdated: "Role is updated",
      roleIsRemoved: "Role is removed",
      deletionFailed: "Deletion failed",
      roleNotFound: "Role not found",

      //RolesComponent.vue
      tabSelectPlaceholder: "Select storehouse",
      mainGroup: "Main group",

      "User managing": "Users managing",
      "Rbac managing": "Roles managing",
      "Check logs": "Check logs",
      "Brand managing": "Brands managing",
      "Collection managing": "Collections managing",
      "Category managing": "Categories managing",
      "Products managing": "Products managing",
      "Create products": "Products creation",
      "Stock managing": "Storehouses managing",
      "Create stocks": "Stocks creation",
      "Arrival managing": "Arrival managing",
      "Create arrivals": "Create arrivals",
      "Approve and cancel arrivals": "Approve and cancel arrivals",
      "Sales managing": "Sales managing",
      "Create sales": "Create sales",
      "Approve and cancel sales": "Approve and cancel sales",
      "Requests managing": "Requests managing",
      "Create requests": "Create requests",
      "Approve and cancel requests": "Approve and cancel requests",
      "Get request in process": "Get request in process",
      "Approve request delivery": "Approve request delivery",
      "Concrete stock managing": "Concrete stock managing",
      "Concrete stock view": "Concrete stock view",
      "Stock data managing": "Stock data managing",
      "Update stock data": "Update stock data",
      "View stock data": "View stock data",
      "View products list": "View products",
      "Write-off managing": "Write-off managing",
      "Create write-off": "Create write-off",
      "Approve and cancel write-offs": "Approve and cancel write-offs",
    },
    products: {
      availableColumns: [
        {
          id: 1,
          name: "Name",
          key: "name",
        },
        {
          id: 2,
          name: "Description",
          key: "description",
          hideFromTable: true,
        },
        {
          id: 3,
          name: "Vendor Code",
          key: "vendorCode",
        },
        {
          id: 4,
          name: "EAN Code",
          key: "eanCode",
        },
        {
          id: 5,
          name: "Link",
          key: "link",
        },
        {
          id: 6,
          name: "Brand",
          key: "brand",
        },
        {
          id: 7,
          name: "Category",
          key: "category",
        },
        {
          id: 8,
          name: "Collection",
          key: "collection",
        },
        {
          id: 9,
          name: "Amount in box",
          key: "amountInBox",
        },
        {
          id: 10,
          name: "Professional price",
          key: "professionalPrice",
        },
        {
          id: 11,
          name: "Distribution price",
          key: "distributorPrice",
        },
        {
          id: 12,
          name: "Offerta price",
          key: "offertaPrice",
        },
        {
          id: 13,
          name: "Default price",
          key: "commonPrice",
        },
        {
          id: 14,
          name: "Days to expire",
          key: "expirationDate",
        },
      ],
      uploadTableColumns: [
        { field: "vendorCode", header: "SKU" },
        { field: "eanCode", header: "EAN" },
        { field: "barcode", header: "BARCODE" },
        { field: "brand", header: "BRAND" },
        { field: "name", header: "NAME" },
        { field: "distributorPercent", header: "DISTRIBUTOR PERCENT" },
        { field: "professionalPercent", header: "PROFESSIONAL PERCENT" },
        { field: "commonPrice", header: "PRICE" },
        { field: "category", header: "CATEGORY" },
        { field: "collection", header: "COLLECTION" },
        { field: "color", header: "COLOR" },
        { field: "amountInBox", header: "AMOUNT IN BOX" },
        { field: "expirationDate", header: "EXPIRATION DATE" },
        { field: "link", header: "LINK" },
      ],
      templateDownloadText:
        "Template with actual assembly data can be downloaded",
      templateDownloadLink: "here",
      productsUploaded: "Products uploaded",
      LOAD: "LOAD",
      CLEAR: "CLEAR",
      uploadTemplateLocalization: {
        brandSheetTitle: "Brands",
        collectionSheetTitle: "Collections",
        categorySheetTitle: "Categories",
        productSheetTitle: "Products",
      },
      //DatePicker.vue
      datePickerPlaceholder: "Date",
      //CreateProduct.vue
      productNameCapslock: "PRODUCT NAME",
      skuCapslock: "SKU",
      linkCapslock: "LINK",
      colorCapslock: "COLOR",
      quantityPerPackageCapslock: "QUANTITY PER PACKAGE",
      distributionPriceCapslock: "DISTRIBUTION PRICE",
      extraChargeCapslock: "EXTRA CHARGE",
      professionalPriceCapslock: "PROFESSIONAL PRICE",
      offertaPriceCapslock: "OFFERTA PRICE",
      distributionPercentCapslock: "DISTRIBUTION PERCENT",
      professionalPercentCapslock: "PROFESSIONAL PERCENT",
      defaultPriceCapslock: "DEFAULT PRICE",
      selectACategory: "Select a category",
      selectABrand: "Select a brand",
      selectACollection: "Select a collection",
      createACategory: "Create a category",
      selectParentCategory: "Select parent category",
      categoryName: "Category name",
      createABrand: "Create a brand",
      brandName: "Brand name",
      barcode: "BARCODE",
      createACollection: "Create a collection",
      collectionName: "Collection name",
      placeholderDescription: "Add new description...",
      placeholderProductName: "Add new product name...",
      placeholderVendorCode: "Add new SKU...",
      placeholderLink: "Add new link...",
      placeholderExpirationDate: "Enter expiration date...",
      placeholderColor: "Add new color...",
      placeholderNumber: "Number...",
      failedUpload: "Failed upload",
      photoUploadingFailed: "Photo uploading failed",
      creationFailed: "Creation failed",
      notFound: "not found",
      productSuccessfullyCreated: "Product successfully created",

      //products.store.ts
      priceCapslock: "PRICE",

      //ProductsView.vue
      vendorCode: "Vendor Code",
      name: "Name",
      description: "Description",
      color: "Color",
      purchasePrice: "Purchase Price",
      distributorPrice: "Distributor Price",
      professionalPrice: "Professional Price",
      commonPrice: "Common Price",
      amountInBox: "Amount in box",
      brand: "Brand",
      collection: "Collection",
      category: "Category",
      updateFailed: "Update Failed",
      priceCantBeEmpty: "Price cant be empty",
      badPriceProvided: "Bad price provided",

      //SingleProductView.vue
      brandCapslock: "BRAND",
      openInNewWindowCapslock: "OPEN IN NEW WINDOW",
      quantityCapslock: "QUANTITY",
      lastTimeOrderedCapslock: "LAST TIME ORDERED",
      costPriceCapslock: "COST PRICE",
      newColorNameCapslock: "NEW COLOR NAME",
      expirationDateCapslock: "EXPIRATION DATE",
      areYouSureYouWantToDeleteProduct:
        "Are you sure you want to delete product",
      noBrand: "No brand",
      noInformation: "No information",
      noCategory: "No category",
      noCollection: "No collection",
      thisActionCannotBeUndoneThisProductDataWillBeLost:
        "This action cannot be undone, this product data will be lost",
      productDescription: "Product description",
      categoryIsCreated: "Category is created",
      categoryCreationFailed: "Category creation failed",
      brandIsCreated: "Brand is created",
      brandCreationFailed: "Brand creation failed",
      collectionIsCreated: "Collection is created",
      collectionCreationFailed: "Collection creation failed",
      productIsRemoved: "Product is removed",
      productSuccessfullyUpdated: "Product successfully updated",
      exportToFile: "Export to file",
      columnsForExport: "Columns for export",
      export: "Export",
      creationName: "CREATED",
    },
    groups: {
      editGroup: "EDIT GROUP",
      applyChanges: "APPLY CHANGES",
      productsList: "Products list",
      apply: "APPLY",
      groupName: "Group name",
      groupNamePlaceholder: "Group name",
      clickOnRowsToSelect: "Click on rows to select",

      editGroupDialog: "Edit group",
      createGroupDialog: "Create group",

      "+ Create": "+ Create",
      Save: "Save",

      //Toasts
      success: "Success",
      failed: "Failed",
      group: "Group",
      createSuccess: "created",
      updateSuccess: "updated",
      updateFailure: "Group updating failed",
      removed: "removed",
      successfully: "successfully",

      massiveUpdate: "Massive update",
      applyChangesSuccessMessage: "Products in group were successfully updated",
      uploadFromFile: "Upload products from a file",
      areYouSure: "Are you sure you want to delete group named",
    },
    storehouses: {
      //CreateStorehouse.vue
      storehouseName: "Storehouse name",
      storehouseAddress: "Storehouse address",
      enterStorehouseName: "Enter storehouse name",
      enterStorehouseAddress: "Enter storehouse address",
      storehouseCreationSuccess: "Storehouse creation success",

      //SingleStorehouseView.vue
      editStorehouse: "Edit storehouse",
      deleteStorehouseCapslock: "DELETE STOREHOUSE",
      newArrivalCapslock: "+ NEW ARRIVAL",
      newSaleCapslock: "- NEW SALE",
      uploadSale: "NEW SALE",
      sasha: "ORDERS",
      newRequestCapslock: "+ NEW REQUEST",
      newWriteOffCapslock: "- NEW WRITE OFF",
      newArrivalRegistration: "New Arrival Registration",
      newSaleRegistration: "New Sale Registration",
      newRequestRegistration: "New Request Registration",
      newWriteOffRegistration: "New Write-off Registration",
      confirmDeletion: "Confirm deletion",
      deleteWarn:
        "This action cannot be undone, this storehouse data will be lost",
      messageForUser: "Are you sure you want to delete storehouse named",
      changesWereSaved: "Changes were saved",
      success: "Success",
      operation: "Operation",
      created: "created",
      autoApproved: "auto-approved",
      failed: "Failed",
      notEnoughProducts: "Not enough products for sale",
      storehouseIsRemoved: "Storehouse is removed",
      storehouseNotFound: "Storehouse not found",
      noStorehouseAvailable: "No storehouse available",
      tryToEditStorehouse:
        "Try to edit available storehouses in users managing tab, or report to your administrator",
      productsInStock: "Products in stock",
      youMustSetArrivalDate: "You must set arrival date",
      isPaid: "Is paid",
      isPaidYes: "Yes",
      isPaidNo: "No",
      //storehouse.store.ts
      addressCapslock: "ADDRESS",

      //StorehouseOperation.vue
      selectAProduct: "Select a product",
      quantity: "Quantity",
      price: "Price",
      quantityAndProductMustBeSelected: "Quantity and Product must be selected",
      priceMustBeSelected: "Price must be selected",
      notEnoughProductsStorehouses: "Not enough products",
      noProductInList: "No product yet in the list",
      pleaseAddOneFirst: "Please add one first",
      productAlreadyInList: "Product already in list.",
    },
    filters: {
      //FiltersSidebarComponent.vue
      search: "Search",
      clear: "Clear",

      //MinMaxDateFilter.vue
      min: "min",
      max: "max",

      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      chooseYear: "Choose Year",
      chooseMonth: "Choose Month",
      chooseDate: "Choose Date",
    },
    components: {
      //SearchComponent.vue
      search: "Search",

      //TreeDropdownComponent.vue
      createNameForACollection: "Create name for a collection",

      //DialogComponent.vue
      message:
        "Would you like to remove the category along with its child subcategories, or relocate them to another parent group?",
      validateError: "Validate error",
      checkDataProvided: "Check data provided",

      //TabsComponent
      rules: "Rules",
      removed: "removed",
      added: "added",

      //LangSelectComponent
      langChangeHeading: "Language changed",
      langChangeDetail: "The page will be reloaded automatically",

      //FileUploadComponent.vue
      releaseToDropFileHere: "Release to drop file here.",
      dropFileHereOr: "Drop file here or",
      clickHere: "click here",
      toUpload: "to upload.",

      //NotificationComponent.vue
      clearAllNotifications: "CLEAR ALL",
      successNotiHeading: "Success",
      successNotiText: "Initial Success Message",
      infoNotiHeading: "Info",
      infoNotiText: "Initial Info Message",
      errorNotiHeading: "Error",
      errorNotiText: "Error message",

      //NavTabsComponent
      singleProducts: "Single products",
      groupedProducts: "Grouped products",
    },
    utils: {
      //api-model.util.ts
      rulesUpdated: "Rules updated",
      yourRulesWereUpdated: "Your rules were updated by administrator",
    },
    storehousesSave: {
      token_is_dead: "Expired token. Please, relogin",
      wrong_data_type: "Wrong data type. Please, check data provided",
    },
    assortment: {
      //AssortmentView.vue
      createPlusCapslock: "CREATE +",
      tableNameHeader: "NAME",
      brand: "Brand",
      collection: "Collection",
      category: "Category",
      confirmModalTitle: "Confirm deletion",
      confirmModalText: "Are you sure you want to delete",
      confirmModalDisclaimer: "This action cannot be undone, this",
      dataWillBeLostText: "data will be lost",
      Success: "Success",

      modalHeaderCreateCategory: "Create a category",
      selectName: "Parent category",
      inputNameCategory: "Category name",
      editCategoryHeader: "Edit category",
      removeCategoryHeader: "Remove category",
      toastSuccessCreationCategory: "Category is created",
      toastSuccessUpdateCategory: "Category is updated",
      toastSuccessRemoveCategory: "Category is removed",
      toastErrorCreationCategory: "Category creation failed",
      toastErrorUpdateCategory: "Category updating failed",
      toastErrorRemoveCategory: "Category removing failed",
      removeChildrenTitle: "Remove children",
      moveChildrenToAnotherParent: "Move children to new parent",

      modalHeaderCreateBrand: "Create a brand",
      inputNameBrand: "Brand name",
      toastSuccessCreationBrand: "Brand is created",
      toastErrorCreationBrand: "Brand creation failed",
      brandRemoveSuccessToast: "Brand is removed",
      brandUpdatedSuccessToast: "Brand is updated",

      modalHeaderCreateCollection: "Create a collection",
      inputNameCollection: "Collection name",
      toastSuccessCreationCollection: "Collection is created",
      toastErrorCreationCollection: "Collection creation failed",
      collectionRemoveSuccessToast: "Collection is removed",
      collectionUpdatedSuccessToast: "Collection is updated",

      failedBadParent: "Select different category for new parent",
      checkBoxParentValueRemove: "Remove children",
      checkBoxParentValueMoveToNew: "Move children to new parent",

      //auth-check.store
      Brands: "Brands",
      Collections: "Collections",
      Categories: "Categories",
    },
    history: {
      Operation: "Operation",
      Author: "Author",
      DateRange: "Date range",
      EventType: "Event type",
      EventObjectType: "Event object type",

      //history.store + SingleHistoryView.vue
      targetCapslock: "TARGET",
      targetNameCapslock: "TARGET NAME",
      typeCapslock: "TYPE",
      authorCapslock: "AUTHOR",
      dateCapslock: "DATE",

      Create: "Create",
      Update: "Update",
      Remove: "Remove",

      "Stock event": "Stock Event",
      "User event": "User Event",
      "Role event": "Role Event",
      "Product event": "Product Event",
      "Brand event": "Brand Event",
      "Collection event": "Collection Event",
      "Category event": "Category Event",
      "Transaction event": "Operation event",
      "Product group event": "Product group update",
      "Product massive update event": "Group applied",
      "Product bulk create": "Products upload",
      "User rights update": "User rights update",

      discardChanges: "DISCARD CHANGES",

      updatedRules: "Updated rules",
      relatedRules: "Related rules",
      categoryTableRemovedChildrenTitle: "Removed children",
      eventDiscarded: "Event successfully discarded",
      eventDiscardedFailedModelRemoved:
        "Event discarding failed, target was removed",
    },
    operations: {
      disclaimerText:
        "If the number of any items differs from what was declared, change it in the list.",
      Arrival: "Arrival",
      Sale: "Sale",
      Request: "Request",
      "Write-off": "Write off",
      1: "Arrival",
      2: "Sale",
      3: "Request",
      4: "Write off",

      created: "CREATED",
      arrivalDate: "ARRIVAL DATE",
      isPaid: "IS PAID",
      isPaidYes: "Yes",
      isPaidNo: "No",
      showClosedOperations: "Show closed operations",
      operationType: "Operation type",
      operationStatus: "Operation status",
      storehouseTo: "Storehouse TO",
      storehouseFrom: "Storehouse FROM",

      Open: "Open",
      Created: "Created",
      "Creation cancelled": "Creation cancelled",
      "In progress": "In progress",
      "Processing cancelled": "Processing cancelled",
      Delivered: "Delivered",
      "Not delivered": "Not delivered",
      Failed: "Failed",
      Processed: "Processed",
      "Delivery cancelled": "Delivery cancelled",

      updateStatusError: "Update status error",
      storehouseIsRequired: "Storehouse is required",
      selectDifferentStorehouse: "Select different storehouse",
      storehouseAndStatusRequiredError: "Storehouse and status are required",
      notEnoughProductsInStore: "Not enough products in storehouse",
      statusRequired: "Status is required",

      storehouseCapslock: "STOREHOUSE",
      statusCapslock: "STATUS",
      nameCapslock: "NAME",
      skuCapslock: "SKU",
      quantityCapslock: "QUANTITY",
      actualQuantity: "RECEIVED",
      priceCapslock: "PRICE",
      success: "Success",
      statusUpdated: "Status is updated",
      partiallyReceived: "Partial receiving complete",

      selectStorehousePlaceholder: "Select storehouse",
      save: "Save",
      productsIn: "Products in",
      from: "from",
      to: "to",
      "Change status": "Change status",
      Cancel: "Cancel",

      operationCapslock: "OPERATION",
      fromCapslock: "FROM",
      toCapslock: "TO",
    },
    dashboard: {
      //DashboardView.vue
      lastDay: "Last day",
      week: "Week",
      month: "Month",
      quarter: "Quarter",
      sales: "Sales",
      website: "Website",
      store: "Store",
      lastSaleDateCapslock: "LAST SALE DATE",
      totalQuantityCapslock: "TOTAL QUANTITY",
      totalValueCapslock: "TOTAL VALUE",
      leastBestsellingItems: "Least Bestselling Items",
      soldFrom: "800K sold from 1M",
    },
    media: {
      uploadMedia: "Upload media content",
      deleteSelected: "DELETE SELECTED",
      fileName: "FILE NAME",
      file: "File",
      files: "Files",
      removedOne: "removed",
      removedSelected: "removed",
      updated: "updated",
      uploaded: "uploaded",
      userFor: "USER FOR",
      delete: "DELETE",
      badTemplate: "Bad template. Download new from link above and try again.",

      imageDetails: "Image Details",
      mediaNamePlaceholder: "Media name...",
      description: "DESCRIPTION",
      descriptionPlaceholder: "Description...",
      edit: "EDIT",
      cancelCapslock: "CANCEL",
      save: "SAVE",

      mediaGallery: "Media gallery",
      select: "SELECT",

      dragAndDrop: "Drag and drop files to here to upload.",
      choose: "Choose",
      upload: "Upload",
      cancel: "Cancel",

      chooseFilesFromGallery: "Choose files from gallery",
    },
    //SliderUpload
    sliderUpload: {
      update: "Click to update",
    },
    beforeAfter: {
      name: "Name",
      parent: "Parent",
      description: "Description",
      photo: "Photo",
      vendorCode: "SKU",
      eanCode: "EAN",
      barcode: "Barcode",
      brand: "Brand",
      commonPrice: "Price",
      category: "Category",
      collection: "Collection",
      amountInBox: "Amount in box",
      expirationDate: "Expiration date",
      link: "Link",
      distributorPercent: "Distributor percent",
      professionalPercent: "Professional percent",
      distributorPrice: "Distributor percent",
      professionalPrice: "Professional percent",
      offertaPrice: "Offerta price",
      products: "Products",
      address: "Address",
      login: "Login",
      password: "Password",
      hash: "Password",
      relatedUsersCount: "Users with role",
      color: "Color",
    },
    //DatePicker.vue
    datePickerComponent: {
      datePickerPlaceholder: "Date",
    },
  },
};
