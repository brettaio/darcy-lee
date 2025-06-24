import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const email = 'etc@bretta.io';

    const existing = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!existing) {
      await this.prisma.user.create({
        data: {
          id: 'a0a0a0',
          email: 'etc@bretta.io',
          password: 'hashed-dummy',
          firstName: 'Brett',
          lastName: 'Connell',
          phone: '5195214260',

          // Physical address
          addressNumber: '123',
          streetName: 'Wallaby',
          streetType: 'Way',
          city: 'Sydney',
          regionOrState: 'NSW',
          postalCode: '2000',
          country: 'Australia',

          // Billing address
          billingAddressNumber: '456',
          billingStreetName: 'Kangaroo',
          billingStreetType: 'Rd',
          billingCity: 'Melbourne',
          billingRegionOrState: 'VIC',
          billingPostalCode: '3000',
          billingCountry: 'Australia',
        },
      });
      console.log('✅ Seeded: etc@bretta.io');
    } else {
      console.log('ℹ️ User already exists:', email);
    }
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
