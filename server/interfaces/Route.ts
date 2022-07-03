export default interface Route {
  path: string;
  get?, post?, patch?, delete?, put?, all?: Function;
}