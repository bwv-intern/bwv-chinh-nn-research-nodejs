import { ValidationOptions } from 'class-validator';

export class ValidatedOptions {
  private upFirstChar = (char: string): string => {
    return char.slice(0, 1).toLocaleUpperCase() + char.slice(1);
  };

  public shouldNotEmpty = (name: string): ValidationOptions => {
    return {
      message: `${this.upFirstChar(name)} should not be empty.`,
    };
  };

  public shouldBeString = (name: string): ValidationOptions => {
    return {
      message: `${this.upFirstChar(name)} should be string.`,
    };
  };

  public shouldLessThan256 = (name: string): ValidationOptions => {
    return {
      message: `${this.upFirstChar(name)} should be less than 256 characters.`,
    };
  };

  public shouldGreaterThan10 = (name: string): ValidationOptions => {
    return {
      message: `${this.upFirstChar(
        name,
      )} should be greater than 10 characters.`,
    };
  };

  public shouldGreaterThanZero = (name: string): ValidationOptions => {
    return {
      message: `${this.upFirstChar(name)} should be greater than 0.`,
    };
  };

  public shouldValidGender = (): ValidationOptions => {
    return {
      message: `Gender should be MALE or FEMALE.`,
    };
  };
}
