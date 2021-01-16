import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ObjectID, ObjectIdColumn } from 'typeorm';
import { generateHash } from '../../utils/hash';


@Entity()
class Label {
    @ObjectIdColumn({ type: "string", generated: true })
    _id: string;
    @Column()
    name: string;
    @Column({ type: 'array', default: [] })
    aliases: string[];
    @Column({ type: 'timestamp' })
    addedOn: number
    @Column({ type: 'string', nullable: true })
    thumbnail: string | null;
    @Column({ nullable: true })
    color?: string | null;
}




export default Label;

