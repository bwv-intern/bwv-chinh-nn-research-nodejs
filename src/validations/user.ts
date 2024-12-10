import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Gender } from '../constants/enums';
import { User } from '../models/user';
import { ValidatedOptions } from '../utils/helper';
import { ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'duplicatedEmail', async: false })
export class IsDuplicatedEmail implements ValidatorConstraintInterface {
  async validate(value: string, args: ValidationArguments) {
    if (!value) {
      return;
    }

    const existedUser = await User.findOne({ where: { email: value } });
    if (existedUser) {
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email is already exist.';
  }
}

const validatedOptions = new ValidatedOptions();
export class UserValidator {
  @IsNotEmpty(validatedOptions.shouldNotEmpty('name'))
  @IsString(validatedOptions.shouldBeString('name'))
  @MaxLength(255, validatedOptions.shouldLessThan256('name'))
  name: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('phone number'))
  @IsString(validatedOptions.shouldBeString('phone number'))
  @MinLength(10, validatedOptions.shouldGreaterThan10('phone number'))
  @MaxLength(255, validatedOptions.shouldLessThan256('phone number'))
  phoneNumber: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('email'))
  @IsString(validatedOptions.shouldBeString('email'))
  @IsEmail()
  @MaxLength(255, validatedOptions.shouldLessThan256('email'))
  @Validate(IsDuplicatedEmail)
  email: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('age'))
  @Min(1, validatedOptions.shouldGreaterThanZero('age'))
  @IsNumber()
  age: number;

  @IsString(validatedOptions.shouldBeString('address'))
  @MaxLength(255, validatedOptions.shouldLessThan256('address'))
  address: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('gender'))
  @IsString(validatedOptions.shouldBeString('gender'))
  @IsEnum(Gender, validatedOptions.shouldValidGender())
  gender: Gender;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('office'))
  @IsString(validatedOptions.shouldBeString('office'))
  @MaxLength(255, validatedOptions.shouldLessThan256('office'))
  office: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('position'))
  @IsString(validatedOptions.shouldBeString('position'))
  @MaxLength(255, validatedOptions.shouldLessThan256('position'))
  position: string;

  @IsNotEmpty(validatedOptions.shouldNotEmpty('start date'))
  @MaxLength(10)
  @IsDateString()
  startDate: Date;
}
