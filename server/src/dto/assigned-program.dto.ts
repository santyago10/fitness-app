import { IsString, IsNumber } from 'class-validator';
 
class CreateAssignedProgramDto {
 
    @IsNumber()
    public athlete_;

    @IsNumber()
    public program_;
}
 
export default CreateAssignedProgramDto;