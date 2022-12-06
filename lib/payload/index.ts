import express from 'express';
import path from 'path';
import globalPayload, { Payload } from 'payload';
import { mediaManagement } from 'payload-cloudinary-plugin';
import validate from 'payload/dist/config/validate';
import Logger from 'payload/dist/utilities/logger';
import payloadConfig from './payload.config';

// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var payload: Payload | undefined;
}
export const payload = global.payload || initPayload();

function initPayload() {
  console.log('Initializing payload.');
  // Build config

  // Path to config to be used in webpack in development environment
  const configPath =
    process.env.NODE_ENV !== 'production'
      ? path.resolve(process.env.INIT_CWD!, `lib/payload/payload.config.ts`)
      : path.resolve(__dirname, './payload.config.ts');
  const validatedConfig = validate(payloadConfig, Logger());
  const finalConfig = {
    ...validatedConfig,
    paths: {
      ...(validatedConfig.paths || {}),
      configDir: path.dirname(configPath),
      config: configPath,
    },
  };

  // Setup express app
  const expressApp = express();
  expressApp.use(mediaManagement());

  // Initialize Payload
  globalPayload.init({
    secret: process.env.PAYLOAD_SECRET!,
    mongoURL: process.env.MONGODB_URI!,
    express: expressApp,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    validatedConfig: finalConfig,
    onInit: () => {
      globalPayload.logger.info(
        `Payload Admin URL: ${globalPayload.getAdminURL()}`
      );
    },
  });

  return globalPayload;
}

if (process.env.NODE_ENV !== 'production') global.payload = payload;
