interface IModalInfo {
  header: string;
  text: string;
}
export class ModalInfo implements IModalInfo {
  constructor(
    public header: string = '',
    public text: string = ''
  ) {}
}
