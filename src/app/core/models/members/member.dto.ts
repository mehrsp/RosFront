import { BaseDto } from '../generic/base.dto';
import { CountryDto } from "../Info/Address/country.dto";
import { ProvinceDto } from "../Info/Address/province.dto";
import { CityDto } from "../Info/Address/city.dto";
import { UserDto } from '../authentication/user.dto';
import { Common } from '../../common/enums';

export class MemberDto extends BaseDto{
      constructor(
       public Id?: number ,
       public User?: UserDto ,
       public FirstName?: string ,
       public LastName?: string ,
       public BirthDate?:string,
       public Gender?: Common.GenderType,
       public MemberType?: Common.MemberType,
       public Email?: string ,
       public NationalCode?: string,
       public Description?: string,
       public Phone?: string ,
       public Country?: CountryDto ,
       public CountryId?: number ,
       public Province?: ProvinceDto ,
       public ProvinceId?: number,
       public City?: CityDto,
       public CityId?: number,
       public Address?: string,
       public StudentNumber?: number,
       public MedicalNumber?: number,
       public job?: Common.DentistType,
       public IsProfessor?: boolean,
       public IsSendSms?: boolean
      ){
             super();
             this.Country = new CountryDto();
             this.Province = new ProvinceDto();
             this.City = new CityDto();
             this.Gender = 1;
             this.MemberType = 1;
             this.BirthDate = '1300/00/00';
             this.MemberType = 4;
             this.job = 1;
             this.IsSendSms = false;
            //  this.User = new UserDto();
             this.IsProfessor = false;
       }             

 }