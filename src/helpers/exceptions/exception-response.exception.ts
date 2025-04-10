import { ApiProperty } from '@nestjs/swagger';

export class ExceptionResponse {
  @ApiProperty({ example: 404, description: 'HTTP status code' })
  status: number;

  @ApiProperty({ example: 'NOT_FOUND', description: 'Error code' })
  code: string;

  @ApiProperty({ example: 'Not Found', description: 'Error message' })
  exception: string;

  @ApiProperty({
    example: 'The requested resource was not found.',
    description: 'Detailed error message',
  })
  message: string;
}
