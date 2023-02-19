export const Config = {
    API_URL: 'https://sandbox.101digital.io',
    // API_URL: 'https://jsonplaceholder.typicode.com/',
    CLIENT_ID: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
    CLIENT_SECRET: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
    GRANT_TYPE: 'password',
    SCOPE: 'openid',
    USERNAME : 'dung+octopus4@101digital.io',
    PASSWORD: 'Abc@123456',
    TENANT_DOMAIN : 'carbon.super',
}
  
export enum BUILD_ENV {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    STAGE = 'staging',
    QA='qa',
    DETOX='detox',
}

export const BUILD_ENV_AWS: Record<string, string> = {
    [BUILD_ENV.DEVELOPMENT]: 'dev',
    [BUILD_ENV.STAGE]: 'stage',
    [BUILD_ENV.PRODUCTION]: 'prod',
    [BUILD_ENV.DETOX]: 'detox',
};
  