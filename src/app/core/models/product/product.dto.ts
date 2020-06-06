import { TagDto } from './../tags/tag.dto';
import { SupplierDto } from './../members/supplier.dto';
import { List } from "lodash";

import { BaseDto } from "../generic/base.dto";

import { ProductCategoryDto } from "./product-category.dto";
import { ProductCatalogDto } from "./product-catalog.dto";
import { CommentDto } from "./comment.dto";
import { ProductRelatedDto } from "./product-related.dto";
import { BrandDto } from "../brands/brand.dto";
import { UserDto } from '../authentication/user.dto';
import { ProductImageDto } from './product-image.dto';
import { OfferDto } from './offer.dto';

export class ProductDto extends BaseDto {

	constructor(
		public Id?: number,
	    public Name?: string,
		public LatestPriceModified?: Date,
		public Price?: number,
		public Discontinued?: boolean,
		public Quantity?: number,
		public Description?: string,
		public Specifications?: string,
		public Brand?: BrandDto,
		public BrandId?: number,
		public Supplier?: SupplierDto,
		public SupplierId?: number,
		public CreatedDate?: Date,
		public CreatedBy?: UserDto,
		public CreatedById?: number,
		public ProductCategory?: ProductCategoryDto,
		public ProductCategoryId?: number,
		public Ranking?: number,
		public SoldCount?: number,
		public LikeCount?: number,
		public FavoritCount?: number,
		public IsRemoved?: boolean,
		public Discount?: number,
		public Orderable?: boolean,
		public Time?: number,
		public Picture?: string,
		public Parent?: ProductDto,
		public ParentId?: number,
		public Offer?: OfferDto,
		public Catalogs?: List<ProductCatalogDto>,
		public Tags?: List<TagDto>,
		public Comments?: List<CommentDto>,
		public Images?: List<ProductImageDto>,
		public Children?: List<ProductDto>,
		public IsQuantity?: boolean,
		public Categories?: List<ProductCategoryDto>
	) {
		super();
		this.Catalogs = new Array<ProductCatalogDto>();
		this.Comments = new Array<CommentDto>();
		this.Children = new Array<ProductDto>();
		this.Tags = new Array<TagDto>();
		this.Quantity = 0;
		this.IsQuantity = false;
		this.Categories = new Array<ProductCategoryDto>();
	}
}