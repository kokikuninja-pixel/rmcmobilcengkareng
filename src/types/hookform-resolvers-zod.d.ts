declare module '@hookform/resolvers/zod' {
  import { ZodSchema } from 'zod';
  import { FieldValues, Resolver } from 'react-hook-form';
  
  export function zodResolver<T extends FieldValues>(
    schema: ZodSchema<T>
  ): Resolver<T>;
}