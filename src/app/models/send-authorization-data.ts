export interface ISendAuthorizationData {
  password: string;
  email: string;
}
export class SendAuthorizationData implements ISendAuthorizationData {
  constructor(
    public password: string = '',
    public email: string = '',
  ) {}
}

