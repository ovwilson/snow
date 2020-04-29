export const NOWNamespace = () => (window as any).NOW ? (window as any).NOW : {};
export const NOWUserName = () => (window as any).NOW ? (window as any).NOW.user.name : 'admin';
export const NOWToken = () => (window as any).g_ck || '';