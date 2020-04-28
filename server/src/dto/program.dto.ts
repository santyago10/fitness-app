import { IsString, IsNumber } from 'class-validator';
import { isNumber } from 'util';
 
class CreateProgramDto {
  @IsString()
  public name: string;
 
  @IsNumber()
  public duration: number;

  @IsNumber()
  public coach_;
}
 
export default CreateProgramDto;