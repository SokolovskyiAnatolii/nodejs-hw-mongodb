import path from 'node:path';

// parseSortParams
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

// createSession/auth
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

// validation
export const EMAIL_REGEXP =
  /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// sendEmail
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

// resetPassword
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

//multer
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// cloudinary
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};

// swagger
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
