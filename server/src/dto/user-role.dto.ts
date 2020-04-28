import { IsString, IsNumber } from 'class-validator';
 
class CreateUserRoleDto {
 
    @IsNumber()
    public user_;

    @IsNumber()
    public role_;
}
 
export default CreateUserRoleDto;