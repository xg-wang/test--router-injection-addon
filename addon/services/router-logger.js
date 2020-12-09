import Service, { inject as service } from '@ember/service';

export default class RouterLoggerService extends Service {
  @service router;
  init() {
    super.init();
    this.router.on('routeDidChange', (transition) => this.log(transition));
  }
  log({ from, to }) {
    console.log(`🚗 ${from?.name} >> ${to?.name}`);
  }
}
