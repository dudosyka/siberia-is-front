import {defineStore} from "pinia";
import ProductModel from "@/api/modules/product/models/product.model";
import ProductSearchFilterDto from "@/api/modules/product/dto/product-search-filter.dto";
import ProductUpdateDto from "@/api/modules/product/dto/product-update.dto";
import ApiResponseDto from "@/api/dto/api-response.dto";
import ProductDto from "@/api/modules/product/dto/product.dto";
import ProductInputDto from "@/api/modules/product/dto/product-input.dto";


export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    searchTerm: '',
    productRows: [],
    productColumns: [
      { field: 'name', header: 'NAME' },
      { field: 'vendorCode', header: 'SKU' },
      //Price field = Default price (commonPrice on backend)
      { field: 'price', header: 'PRICE' },
    ],
    selectedProduct: {}
  }),
  getters: {
    getSearchTerm: (state) => state.searchTerm,
    getProductList: (state) => state.productRows,
    getSelectedProduct: (state) => state.selectedProduct
  },
  actions: {
    async loadProductList() {
      const productModel = new ProductModel()
      const getProducts = await productModel.getList(new ProductSearchFilterDto())
      if (getProducts.success) {
        this.productRows = getProducts.getData()
      }
    },
    async loadSelectedProduct(productId: number) {
      const productModel = new ProductModel()
      const product = await productModel.getOne(productId)
      if (product.success) {
        this.selectedProduct = product.getData()
      }
    },
    async updateProduct(productId: number, productUpdateDto: any): ApiResponseDto<ProductDto> {
      const productModel = new ProductModel()
      const saveResult = await productModel.update(productId, productUpdateDto)
      if (saveResult.success) {
        const updatedProduct = saveResult.getData()
        this.productRows = this.productRows.map(el => {
          if (el.id == productId) {
            el.vendorCode = updatedProduct.vendorCode
            el.name = updatedProduct.name
            el.price = updatedProduct.commonPrice
          }
          return el
        })
        this.selectedProduct = Object.assign(this.selectedProduct, saveResult.getData())
      }
      return saveResult
    },
    async create(productCreateDto: ProductInputDto) {
      const productModel = new ProductModel()
      return await productModel.create(productCreateDto)
    }
  },
});

