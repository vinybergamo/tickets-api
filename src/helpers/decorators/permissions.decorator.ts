import { SetMetadata } from '@nestjs/common';

export const permissionsMetaKey = 'PERMISSIONS';

export const Permissions = (permissions: string[]) =>
  SetMetadata(permissionsMetaKey, permissions);
