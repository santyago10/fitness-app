import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserRole from './user-role.entity';



@Entity()
class Role {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany( () => UserRole, (role: UserRole) => role.role_)
    public userRoles: UserRole;
}

export default Role;