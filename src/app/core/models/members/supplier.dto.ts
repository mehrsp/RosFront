import { MemberDto } from './member.dto';
import { Common } from '../../common/enums';
import { ProvinceDto } from '../Info/Address/province.dto';
import { CityDto } from '../Info/Address/city.dto';

export class SupplierDto extends MemberDto{
      constructor(
            public Name?: string,
            public NationalID?: string,
            public EconomicCode?: string,
            public PostalCode?: string,
            public Fax?: number,
            public Website?: string,
            public PaymentMethod?: string,
            public Logo?: string,
            public Latitude?: number,
            public Longitude?: number,            
            public CompanyType?: Common.CompanyType
          ){
             super();
             this.CompanyType = 5;
       }             

 }