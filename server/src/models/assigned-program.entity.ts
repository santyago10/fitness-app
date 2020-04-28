import { Entity,PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Program from "./program.entity";
import User from "./user.entity"
 
@Entity()
class AssignedPrograms {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne( () => User,(user:User) => user.assignedPrograms)
    public athlete_: User;

    @ManyToOne( () => Program, (program: Program) => program.assignedPrograms)
    public program_: Program;
}
 
export default AssignedPrograms;