/**
 * @author: zhu.wenjian
 * @date: 3/4/19
 * @description:
 */
import {Injectable} from '@angular/core';

// 保存全局的配置服务
@Injectable()
export class AppConfigService {
  // 服务的基础路径
  public apiUrl: string ;
  //
  public LOGIN_URL = '/auth/verifyToken';

  public GET_USER_URL　=　'/auth/getUser';

  public HAS_ROLE = '/auth/hasRole';

  constructor() {
    const appConfig = window['appConfig'] || {};
    this.apiUrl = appConfig.apiUrl || (location.protocol + '//' + location.host);
  }
}
