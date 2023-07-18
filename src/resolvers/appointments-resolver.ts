import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointments'
import { Appointment } from '../dtos/models/appointment-model'
import { Customer } from '../dtos/models/customer-model'

@Resolver(() => Appointment)
export class AppointementsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startAt: new Date(),
        endsAt: new Date()
      }
    ]
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data')data: CreateAppointmentInput) {
    const appointment = {
      startAt: data.startAt,
      endsAt: data.endAr
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async Customer(@Root() appointment: Appointment){
    console.log(appointment)

    return {
      name: 'John Doe'
    }
  }
}