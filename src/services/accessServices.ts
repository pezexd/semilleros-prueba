export default {
  getAccess() {
    return api.get(`/${apiPath}/get-access`);
  },
  userHaveAccess(payload: { permission: string }) {
    return api.post(`/${apiPath}/have-access`, payload);
  },
  getPermissions() {
    return api.get(`/${apiPath}/get-permissions`);
  },
  getButtonBooleanCreates() {
    return api.get(`/${apiPath}/get-button-boolean-creates`);
  }
}
