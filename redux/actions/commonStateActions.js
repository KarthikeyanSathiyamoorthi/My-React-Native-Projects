import {UPDATE_TENANT_TOKEN,TENANT_INFO} from './types';

export const updateTenant = (updateTenantData) => ({
  type: TENANT_INFO,
  data: updateTenantData,
});

export const updateTenantToken = (updateTenantToken) => ({
  type: UPDATE_TENANT_TOKEN,
  data: updateTenantToken,
});


