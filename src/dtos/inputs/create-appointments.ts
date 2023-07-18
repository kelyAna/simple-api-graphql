import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  custumer_id: string
  
  @Field()
  startAt: Date

  @Field()
  endAr: Date
}