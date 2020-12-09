export function initialize(application) {
  application.inject('route:application', '__logger', 'service:router-logger');
}

export default {
  initialize
};
