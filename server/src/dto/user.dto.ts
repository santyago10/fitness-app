import { IsString, IsNumber } from 'class-validator';
 
class CreateUserDto {
  @IsString()
  public name: string;
 
  @IsString()
  public lastname: string;

  @IsString()
  public email: string;
 
  @IsString()
  public password: string;
}
 
export default CreateUserDto;